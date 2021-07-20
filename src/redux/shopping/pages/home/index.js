import React, { useEffect } from 'react';
import * as actions from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLoadingProduct, getMessgaeNotFoundProduct } from './reselect';
import LayoutShopping from '../../components/Layout';
import { Row, Col, Skeleton } from 'antd';
import { helper } from '../../helpers/common';
import FeaturedComponent from './components/Featured';
import LatestComponent from './components/Latest';
import TopSellingComponent from './components/TopSelling';

const HomeShopping = () => {
  const dispatch = useDispatch();
  const { loading, mess } = useSelector(createStructuredSelector({
    loading: getLoadingProduct,
    mess: getMessgaeNotFoundProduct
  }));
  useEffect(() => {
    dispatch(actions.getDataProducts());
  }, [dispatch]);

  const ShowComponents = () => {
    if(loading){
      return (<Skeleton active />)
    }

    if(!helper.isEmptyObject(mess)) {
      return (
        <h3> {mess.message} </h3>
      )
    }
    
    return (
      <>
        <FeaturedComponent />
        <LatestComponent/>
        <TopSellingComponent/>
      </>
    )
  }
  
  return (
    <LayoutShopping
      sub_1="Home"
      sub_2="List"
      sub_3="App"
    >
      <Row>
        <Col span={24}>
          <ShowComponents/>
        </Col>
      </Row>
    </LayoutShopping>
  )
}
export default React.memo(HomeShopping); 
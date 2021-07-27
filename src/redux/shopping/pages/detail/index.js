import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LayoutShopping from '../../components/Layout';
import { Row, Col, Skeleton, Image, Button, message } from 'antd';
import * as actions from './actions';
import { createStructuredSelector } from 'reselect';
import {
  getLoadingDetail,
  getDataDetailProduct,
  getMessNotFoundProduct
} from './reselect';
import { getErrorAddCart } from '../cart/reselect';
import { helper } from '../../helpers/common';
import { addToCart } from '../cart/actions';


const DetailShopping = () => {
  const { slug, id } = useParams();
  const dispatch = useDispatch();

  const { loading, detailData, messageError, messCart } = useSelector(createStructuredSelector({
    loading: getLoadingDetail,
    detailData: getDataDetailProduct,
    messageError: getMessNotFoundProduct,
    messCart: getErrorAddCart
  }));

  useEffect(() => {
    dispatch(actions.getDataProductById(id));
  },[id, dispatch]);

  const addProductToCart = (data) => {
    dispatch(addToCart(data));

    if(!helper.isEmptyObject(messCart)){
      message.error('Add cart failed',3);
    } else {
      message.success('Add cart successfully',3);
    }
  }

  if(loading){
    return (
      <LayoutShopping
      sub_1="Detail"
      sub_2="Product"
      sub_3={slug}
      >
        <Row>
          <Col span={24}>
            <Skeleton active />
          </Col>
        </Row>
      </LayoutShopping>
    )
  }

  if(!helper.isEmptyObject(messageError)){
    return (
      <LayoutShopping
      sub_1="Detail"
      sub_2="Product"
      sub_3={slug}
      >
        <Row>
          <Col span={24}>
            <h3> {messageError.mess} </h3>
          </Col>
        </Row>
      </LayoutShopping>
    )
  }


  return (
    <LayoutShopping
      sub_1="Detail"
      sub_2="Product"
      sub_3={slug}
    >
      <Row>
        <Col span={24}>
          <Row>
            <Col span={8}>
              <Image src={detailData.image} />
            </Col>
            <Col span={16}>
              <h1>{detailData.name}</h1>
              <p>{detailData.price}</p>
              <Button
                type="primary"
                onClick={() => addProductToCart(detailData)}
              > Add to cart</Button>
              <br/><br/>
              <Button type="primary"> Buy Now</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </LayoutShopping>
  )
}
export default React.memo(DetailShopping); 
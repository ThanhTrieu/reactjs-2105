import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LayoutShopping from '../../components/Layout';
import { Row, Col } from 'antd';
import * as actions from './actions';

const DetailShopping = () => {
  const { slug, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDataProductById(id));
  },[id, dispatch])

  return (
    <LayoutShopping
      sub_1="Detail"
      sub_2="Product"
      sub_3={slug}
    >
      <Row>
        <Col span={24}>
          <h3> this is detail page !</h3>
        </Col>
      </Row>
    </LayoutShopping>
  )
}
export default React.memo(DetailShopping); 
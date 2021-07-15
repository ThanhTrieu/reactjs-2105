import React from 'react';
import LayoutShopping from '../../components/Layout';
import { Row, Col } from 'antd';

const DetailShopping = () => {
  return (
    <LayoutShopping
      sub_1="Detail"
      sub_2="Product"
      sub_3="Iphone X"
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
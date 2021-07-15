import React from 'react';
import LayoutShopping from '../../components/Layout';
import { Row, Col } from 'antd';

const HomeShopping = () => {
  return (
    <LayoutShopping
      sub_1="Home"
      sub_2="List"
      sub_3="App"
    >
      <Row>
        <Col span={24}>
          <h3> this is home page !</h3>
        </Col>
      </Row>
    </LayoutShopping>
  )
}
export default React.memo(HomeShopping); 
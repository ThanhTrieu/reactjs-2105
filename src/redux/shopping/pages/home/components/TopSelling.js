import React from 'react';
import { createStructuredSelector } from 'reselect';
import { getDataProductTopSelling } from '../reselect';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import CardProduct from './Card';
import { helper } from '../../../helpers/common';

const TopSellingComponent = () => {
  const { topSelling } = useSelector(createStructuredSelector({
    topSelling: getDataProductTopSelling
  }));

  if(helper.isEmptyObject(topSelling)) {
    return (<Skeleton active />)
  }

  return (
    <Row style={{margin: '30px 0px'}}>
      <Col span={24}>
        <h3> Top Selling </h3>
        <Row>
          {topSelling.map((item,key) => (
            <Col span={6} key={key}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
export default React.memo(TopSellingComponent);
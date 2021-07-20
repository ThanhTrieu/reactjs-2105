import React from 'react';
import { createStructuredSelector } from 'reselect';
import { getDataProductLatest } from '../reselect';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import CardProduct from './Card';
import { helper } from '../../../helpers/common';

const LatestComponent = () => {
  const { latest } = useSelector(createStructuredSelector({
    latest: getDataProductLatest
  }));

  if(helper.isEmptyObject(latest)) {
    return (<Skeleton active />)
  }

  return (
    <Row style={{margin: '30px 0px'}}>
      <Col span={24}>
        <h3> Latest </h3>
        <Row>
          {latest.map((item,key) => (
            <Col span={6} key={key}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
export default React.memo(LatestComponent);
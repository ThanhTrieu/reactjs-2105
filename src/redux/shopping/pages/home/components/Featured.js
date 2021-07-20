import React from 'react';
import { createStructuredSelector } from 'reselect';
import { getDataProductFeatured } from '../reselect';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import CardProduct from './Card';
import { helper } from '../../../helpers/common';

const FeaturedComponent = () => {
  const { featured } = useSelector(createStructuredSelector({
    featured: getDataProductFeatured
  }));

  if(helper.isEmptyObject(featured)) {
    return (<Skeleton active />)
  }

  return (
    <Row style={{margin: '30px 0px'}}>
      <Col span={24}>
        <h3> Featured </h3>
        <Row>
          {featured.map((item,key) => (
            <Col span={6} key={key}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
export default React.memo(FeaturedComponent);
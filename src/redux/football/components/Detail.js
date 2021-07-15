import React from 'react';
import { useSelector } from 'react-redux';
import {
  getStateLoadingDetail,
  getFixtureDetail,
  isEmptyDetailFootball
} from '../reselect/detail';
import { createStructuredSelector } from 'reselect';
import { Skeleton } from 'antd';
import { helper } from '../helpers/common';

const DetailResultFootball = () => {
  const { loading, fixtureDetail, isEmpty } = useSelector(createStructuredSelector({
    loading: getStateLoadingDetail,
    fixtureDetail: getFixtureDetail,
    isEmpty: isEmptyDetailFootball
  }));

  if(loading) {
    return (<Skeleton active />)
  }

  if(!helper.isEmptyObject(isEmpty)) {
    return (
      <h1> { isEmpty.mess }</h1>
    )
  }

  return (
    <>
      <h1> Chi tiet tran dau</h1>
      <p> { JSON.stringify(fixtureDetail) }</p>
    </>
  )
}
export default React.memo(DetailResultFootball);
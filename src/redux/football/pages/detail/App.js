import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { requestGetDetailData } from '../../actions/detail';
import LayoutFootball from '../../components/layout';
import BreadcrumbFootball from '../../components/breadcrumb';
import DetailResult from '../../components/Detail';

const DetailFootball = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetDetailData(id));
  },[id, dispatch]);

  return (
    <LayoutFootball>
      <BreadcrumbFootball
        item_lv1="Trang chu"
        item_lv2="Tran dau"
        item_lv3="Chi tiet"
      />
      <div className="site-layout-content">
        <DetailResult/>
      </div>
    </LayoutFootball>
  )
}
export default React.memo(DetailFootball);
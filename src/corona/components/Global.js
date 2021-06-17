import React from 'react';
import { helper } from '../helpers/common';

const GlobalCorona = ({ error, data }) => {

  if(!helper.isEmptyObject(error) || helper.isEmptyObject(data)){
    // co loi
    return (
      <h1 style={{ color: 'red' }}> {error.mess} </h1>
    )
  }

  return (
    <section className="global__corona">
      <div className="global__item">
        <p> - Moi nhiem : {data.Global.NewConfirmed}</p>
        <p> - Tong ca nhiem : {data.Global.TotalConfirmed}</p>
      </div>
      <div className="global__item">
        <p> - Moi tu vong:  {data.Global.NewDeaths}</p>
        <p> - Tong ca tu vong:  {data.Global.TotalDeaths}</p>
      </div>
      <div className="global__item">
        <p> - Moi khoi benh:  {data.Global.NewRecovered}</p>
        <p> - Tong ca khoi benh:  {data.Global.TotalRecovered}</p>
      </div>
    </section>
  )
}
export default React.memo(GlobalCorona);
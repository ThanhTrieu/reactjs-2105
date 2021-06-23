import React from 'react';
import { Skeleton } from 'antd';
import { helper } from '../helpers/common';
import CoronaContext from '../context/index';

const GlobalCorona = () => {

  return (
    <CoronaContext.Consumer>
      {context => {
        if(context.loading || helper.isEmptyObject(context.virus)){
          return <Skeleton active />
        } else {
          return(
            <section className="global__corona">
              <div className="global__item">
                <p> - Moi nhiem : {context.virus.Global.NewConfirmed}</p>
                <p> - Tong ca nhiem : {context.virus.Global.TotalConfirmed}</p>
              </div>
              <div className="global__item">
                <p> - Moi tu vong:  {context.virus.Global.NewDeaths}</p>
                <p> - Tong ca tu vong:  {context.virus.Global.TotalDeaths}</p>
              </div>
              <div className="global__item">
                <p> - Moi khoi benh:  {context.virus.Global.NewRecovered}</p>
                <p> - Tong ca khoi benh:  {context.virus.Global.TotalRecovered}</p>
              </div>
            </section>
          )
        }
      }}
    </CoronaContext.Consumer>
    
  )
}
export default React.memo(GlobalCorona);
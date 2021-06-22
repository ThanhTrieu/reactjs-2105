import React from 'react';
import { helper } from '../helpers/common';
import CoronaContext from '../context/index';

const GlobalCorona = () => {

  return (
    <section className="global__corona">
      <div className="global__item">
        <p> - Moi nhiem : 12122</p>
        <p> - Tong ca nhiem : 121212</p>
      </div>
      <div className="global__item">
        <p> - Moi tu vong:  21212</p>
        <p> - Tong ca tu vong:  232323</p>
      </div>
      <div className="global__item">
        <p> - Moi khoi benh:  232323</p>
        <p> - Tong ca khoi benh:  21212</p>
      </div>
    </section>
  )
}
export default React.memo(GlobalCorona);
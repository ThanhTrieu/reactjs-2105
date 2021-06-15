import React from 'react';

class ParentComponent extends React.Component {
  // 1- giai doan mounting : component dc tao ra
  constructor(props) {
    // phuong thuc se chay dau tien trong class
    super(props); // su dung lai toan bo props cua React.Component
    // vi extends React.Component : dc su dung luon this.props
    // noi day se la cho de mh khai bao state
    this.state = {
      count: 0
    }
    console.log(`constructor cua ParentComponent da chay`);
  }
}

export default ParentComponent;
import React from 'react';
import { api } from './services/api';

class FootBall extends React.PureComponent {

  async componentDidMount() {
    const data = await api.getDataFootball();
    console.log(data);
  }

  render() {
    return(
      <h1>FootBall</h1>
    )
  }
}
export default FootBall;
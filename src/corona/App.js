import React from 'react';
import LayoutCorona from './components/layout';
import GlobalCorona from './components/Global';
import CountriesCorona from './components/Countries';
import { api } from './services/api';
import { helper } from './helpers/common';
import './components/style.css';

class AppCorona extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // tao hieu ung loading call data - bao nguoi dung cho 
      virus: {}, // luu thong tin data tu api 
      error: {} // thong bao loi
    }
  }

  async componentDidMount() {
    // set state loading : true
    // immutable state
    this.setState({...this.state, loading: true});
    // call api
    const data = await api.getDataVirusCorona();
    // kiem tra xem object data co rong ko ?
    if(!helper.isEmptyObject(data)){
      // thuc su api co tra ve du lieu
      this.setState({
        ...this.state,
        error: {},
        virus: data
      })
    } else {
      // api ko co du lieu tra ve
      this.setState({
        ...this.state,
        error: {cod: 404, mess: `Not found data`},
        virus: {}
      })
    }
    // moi viec da xu ly xong!
    this.setState({...this.state, loading: false});
  }

  render() {
    //console.log(this.state.virus, this.state.loading);
    if(this.state.loading){
      return (
        <LayoutCorona>
          <h1 style={{ textAlign: 'center' }}> Loading data ... </h1>
        </LayoutCorona>
      )
    }

    return(
      <LayoutCorona>
        <h1 style={{ textAlign: 'center' }}> Virus corona </h1>
        <GlobalCorona
          error={this.state.error}
          data={this.state.virus}
        />
        <CountriesCorona
          error={this.state.error}
          data={this.state.virus}
        />
      </LayoutCorona>
    )
  }
}

export default AppCorona;
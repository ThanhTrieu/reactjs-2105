import React from 'react';
import LayoutCorona from './components/layout';
import GlobalCorona from './components/Global';
import CountriesCorona from './components/Countries';
import './components/style.css';
import CoronaProvider from './context/CoronaProvider';

class AppCorona extends React.PureComponent {
  render() {
    return(
      <CoronaProvider>
        <LayoutCorona>
          <h1 style={{ textAlign: 'center' }}> Virus corona </h1>
          <GlobalCorona/>
          <CountriesCorona/>
        </LayoutCorona>
      </CoronaProvider>
    )
  }
}

export default AppCorona;
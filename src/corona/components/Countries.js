import React from 'react';
import { Table, Skeleton } from 'antd';
import { helper } from '../helpers/common';
import CoronaContext from '../context/index';

const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country',
  },
  {
    title: 'Country Code',
    dataIndex: 'CountryCode',
    key: 'CountryCode',
  },
  {
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
    key: 'NewConfirmed',
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    key: 'TotalConfirmed',
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    key: 'NewDeaths',
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    key: 'TotalDeaths',
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    key: 'NewRecovered',
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    key: 'TotalRecovered',
  }
];

const CountriesCorona = () => {

  return (
    <CoronaContext.Consumer>
      {context => {
        if(context.loading || helper.isEmptyObject(context.virus)){
          return <Skeleton active />
        } else {
          return (
            <Table rowKey="CountryCode" style={{ marginTop: '20px' }} dataSource={context.virus.Countries} columns={columns} />
        )}
      }}
    </CoronaContext.Consumer>
    
  )
}
export default React.memo(CountriesCorona);
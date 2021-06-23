import React from 'react';
import { helper } from '../helpers/common';
import CoronaContext from '../context/index';

const CountriesCorona = () => {

  return (
    <CoronaContext.Consumer>
      {context => {
        if(context.loading || helper.isEmptyObject(context.virus)){
          return <h1> Loading data countries...</h1>
        } else {
          return (
          <table width="100%" border="1" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th>Country</th>
                <th>Country Code</th>
                <th>New Confirmed</th>
                <th>Total Confirmed</th>
                <th>New Deaths</th>
                <th>Total Deaths</th>
                <th>New Recovered</th>
                <th>Total Recovered</th>
              </tr>
            </thead>
            <tbody>
              {context.virus.Countries.map(item => (
                <tr key={item.ID}>
                  <td>{item.Country}</td>
                  <td>{item.CountryCode}</td>
                  <td>{item.NewConfirmed}</td>
                  <td>{item.TotalConfirmed}</td>
                  <td>{item.NewDeaths}</td>
                  <td>{item.TotalDeaths}</td>
                  <td>{item.NewRecovered}</td>
                  <td>{item.TotalRecovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      }}
    </CoronaContext.Consumer>
    
  )
}
export default React.memo(CountriesCorona);
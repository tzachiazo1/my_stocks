/**
 * Created by tzachia on 13/08/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './Stock';
import Stock from './Stock';


export default class StockTabls extends React.Component {

  render() {
    const stockList = this.props.stockList;
    return (
      <table>
        <thead>
          <th>Symbol</th>
          <th>Name</th>
          <th>Pricing</th>
          <th>Change</th>
        </thead>
        <tbody>
          {stockList.map(stock => <Stock key={stock.symbol} symbol={stock.symbol} name={stock.name} pricing={stock.price} change={stock.change}/>)}
        </tbody>
      </table>
    );
  }
}

StockTabls.propTypes = {
  stockList: PropTypes.Array,
};

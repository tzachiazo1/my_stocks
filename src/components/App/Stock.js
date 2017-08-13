/**
 * Created by tzachia on 13/08/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class Stock extends React.Component {

  render() {

    return (<tr>
      <td>{this.props.symbol}</td>
      <td>{this.props.name}</td>
      <td>{this.props.pricing}</td>
      <td>{this.props.change}</td>
    </tr>);
  }


}


Stock.propTypes = {
  symbol: PropTypes.string,
  name: PropTypes.string,
  pricing: PropTypes.number,
  change: PropTypes.number,
};

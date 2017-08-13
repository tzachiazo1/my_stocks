import React from 'react';
import ReactDOM from 'react-dom';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';
import './SearchInput';
import s from './App.scss';
import {SearchInput} from './SearchInput';
import StockTabls from './StockTable';

import {createStore} from 'redux';
const ADD = 'add';

const uri = 'https://kickstart-stocks-server.now.sh';
const searchUri = keyword => `${uri}/stocks/search/${keyword}`;

const addStocks = stockList => ({type: ADD, stockList});

const defaultState = {stockList: [{symbol: 'wix', name: 'wixName', pricing: 222, change: 50}]};
const reducer = (state = defaultState, action) => {
  if (action.type === ADD) {
    return {stockList: action.stockList};
  }
};

const store = createStore(reducer);

function onSearch(searchTerm) {
  fetch(searchUri(searchTerm)).then(data => data.json()).then(sList => {
    store.dispatch(addStocks(sList));
  });

}

export class App extends React.Component {

  constructor() {
    super();

    store.subscribe(() => {
      const state = store.getState();
      ReactDOM.render(<App stockList={state.stockList}/>, document.getElementById('root'));
      console.log(state);
    });
  }

  render() {
    return (
      <div>
        <h1>Kickstart Stocks</h1>
        <SearchInput onSearch={onSearch}/>
        <StockTabls stockList={this.props.stockList}/>
      </div>
    );
  }
}

App.propTypes = {
  stockList: PropTypes.array,
};

export default translate(null, {wait: true})(App);

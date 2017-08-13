/**
 * Created by tzachia on 13/08/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';


export class SearchInput extends React.Component {

  render() {
    return (
      <div>
        <input ref={input => this.input = input}/>
        <button
          onClick={() => {
            this.props.onSearch(this.input.value);
          }}
          >Search</button>
      </div>);
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func,
};


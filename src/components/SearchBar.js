import React from 'react';
import { connect } from 'react-redux';
import { changeTerm } from '../actions';

class SearchBar extends React.Component {
  render() {
    const { term, changeTerm } = this.props;
    return (
        <div className='search-bar ui segment'>
          <form className='ui form'>
            <div className='field'>
              <label>Music Search</label>
              <input type='text' value={term} onChange={(e) => { changeTerm(e.target.value) }} />
            </div>
          </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.term
  }
};

export default connect(mapStateToProps, { changeTerm })(SearchBar);
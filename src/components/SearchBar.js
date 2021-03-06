import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTerm, submitSearchForm } from '../actions';

class SearchBar extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submitSearchForm();
  };

  render() {
    const { term, changeTerm } = this.props;
    return (
        <div className='search-bar ui segment'>
          <form className='ui form' onSubmit={this.onFormSubmit}>
            <div className='field'>
              <label>Music Search</label>
              <input type='text' value={term} onChange={(e) => { changeTerm(e.target.value) }} />
            </div>
          </form>
        </div>
    )
  }
}

SearchBar.propTypes = {
  term: PropTypes.string,
  changeTerm: PropTypes.func.isRequired,
  submitSearchForm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    term: state.term
  }
};

export default connect(mapStateToProps, { changeTerm, submitSearchForm })(SearchBar);

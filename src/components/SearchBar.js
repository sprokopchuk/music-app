import React from 'react';
import { connect } from 'react-redux';
import { changeTerm, submitForm } from '../actions';

class SearchBar extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submitForm(this.props.term);
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

const mapStateToProps = (state) => {
  return {
    term: state.term
  }
};

export default connect(mapStateToProps, { changeTerm, submitForm })(SearchBar);
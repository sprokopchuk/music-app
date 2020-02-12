import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' };

   onChangeTerm = (event) => {
     event.target.preventDefault();
     this.setState( { term: event.target.value });
   };

  render() {
    return (
        <div className='search-bar ui segment'>
          <form className='ui form'>
            <div className='field'>
              <label>Music Search</label>
              <input type='text' value={this.state.term} onChange={this.onChangeTerm} />
            </div>
          </form>
        </div>
    )
  }
}

export default SearchBar;
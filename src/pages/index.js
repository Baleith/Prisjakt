import React, { Component } from 'react'
import { SearchBar } from '../components/search/searchBar';
import '../styles/app.css';
import { Items } from './../components/content/items';
import { Filter } from './../components/filter/filter';

class IndexPage extends Component {
  state = {
    items: null
  }

  updateItems = (items) => {
    this.setState({
      items: items,
    });
  }
  render() {
    const { items } = this.state;
    return (
      <div id="app">
        <SearchBar updateItems={this.updateItems} />
        <Filter />
        <Items items={items} />
      </div>
    )
  };
}
  


export default IndexPage

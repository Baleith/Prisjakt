import React, { Component } from 'react';
import axios from 'axios';
import styles from './searchBar.module.css';
import { Input } from './input';
import { Button } from './button';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });


    const url = 'https://search-pj-campaigns-dykc3wbnqz22xvoiwp2ta5bk3m.eu-west-1.es.amazonaws.com/campaign-*-4-deals/_search';
    
    let data = {
      "query": {
        "match": {
          "product.name": "samsung"
        }
      }
    }
    axios.post(url, {
      query: data.query
    })
    .then((response) => {
      this.props.updateItems(response.data.hits.hits);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.searchValue);
    event.preventDefault();
  }

  render() {
    const { searchValue, items, error } = this.state;
    return (
      <div id="search" className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Prisjakt</h1>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <Input value={searchValue} handleChange={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}


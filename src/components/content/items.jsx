import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './items.module.css';

export class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <div id="content" className={styles.container}>
        { items ? (
            items.map(({ _source }) => {
              return <div 
                key={_source.id}
                className={styles.item}
                >
                <a href={_source.store.external_uri} target="_blank" className={styles.store}>{_source.store.name}</a>
                { _source.product.media.product_images ? (
                    <img 
                      src={_source.product.media.product_images.first[800]} 
                      className={styles.img}
                    /> 
                  ) : (
                    null
                  )
                }
                <div className={styles.body}>
                  <ul>
                    <li className={styles.name}>{_source.product.name}</li>
                    <li className={styles.price}>{_source.price.offer} kr</li>
                  </ul>
                </div>
              </div>
          })
          ) : (
            <h1>no results</h1>
          )
        }
        
      </div>
    )
  }
}

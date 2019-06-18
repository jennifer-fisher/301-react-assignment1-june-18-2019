import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {

  return <div className={`${styles.card} `}>
  <img src={props.cardImage} width="300" height="300" alt={props.altTag}></img>
  <div>
  <p className={`${styles.cardName} `}>{props.cardName}</p> 
  <p className={`${styles.cardTitle} `}>{props.cardTitle}</p> 
  </div>
  </div>

};

Card.propTypes = {
    cardName: PropTypes.string,
    altTag: PropTypes.string,
    cardTitle: PropTypes.string,
    cardImage: PropTypes.string,
}
export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

const Select = (props) => {

  return <select 
  className={`${styles.select} `}
  name={props.selectName}
  id={props.selectId}
  onChange={props.onChange}

 >
   <option option1={props.option1}>{props.display1}</option>
   <option option2={props.option2}>{props.display2}</option>
   <option option3={props.option3}>{props.display3}</option>
   <option option4={props.option4}>{props.display4}</option>
   <option option5={props.option5}>{props.display5}</option>
   </select>;
};

Select.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
}

export default Select;
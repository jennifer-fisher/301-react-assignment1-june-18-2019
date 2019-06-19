import React, {useState} from 'react';
import './App.css';
import flowerImage from './images/flowers.png';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';
import Select from './components/Select/Select';
import Card from './components/Card/Card';

function App() {

  return (

  <div className="content">
   <Card>
        <h2>Welcome to my first App!</h2>
        <p>Hello World!</p>
    </Card>
    </div>
  );
}

export default App;

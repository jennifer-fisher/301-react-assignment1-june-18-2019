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
  const title = '301 - React - Assignment1';
  const buttonName = "New Name";
  const buttonName2 = "Button 2";

  const [age, setAge] = useState(21);

  const inputName = "FirstName";
  const [inputChange, countUp] = useState(50);

  const rows = '5';
  const cols = '50';

  const option1 = "camero";
  const display1 = "Camero";

  const option2 = "tesla";
  const display2 = "Tesla";

  const option3 = "charger";
  const display3 = "Charger";

  const option4 = "Ecno";
  const display4 = "Ecno Car";

  const option5 = "mustang";
  const display5 = "Mustang";

  const cardName = "Jennifer"
  const cardTitle = "React Student";

  // const cardImage = "/images/flowers.png";
  const altTag = "beautiful orange flowers in a meadow"

  return (
    <div className="App">
      <Title title={title} />
      <Button  buttonName={buttonName} onClick={()=>setAge(age+1)} />
      <Button color="blue" buttonName={buttonName} onClick={()=>setAge(age+1)} />
      <Button color="pink" buttonName={buttonName2} onMouseOver={() => setAge(age+1)} />
      <p>New Age: {age}</p>

      <Input  inputName={inputName} onChange={()=> countUp(inputChange + 2)}/>
      <p>New Input: {inputChange}</p>

      <Textarea rows={rows} cols={cols} />
      <hr></hr>

      <Select option1={option1} display1={display1} option2={option2} display2={display2} option3={option3} display3={display3} option4={option4} display4={display4} option5={option5} display5={display5}>Pick your favourite car</Select>

     <hr></hr>


      <Card cardImage={flowerImage} cardName={cardName} cardTitle={cardTitle} altTag={altTag}/>

    </div>
  );
}

export default App;

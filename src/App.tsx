import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Message from './components/Message';
import NameList from './components/NameList';
import Oscar from './components/Oscar';

const nameList = [{
    first: 'Karry',
    second: 'Grant'
  },
  {
    first: 'Princess',
    second: 'Diana'
  },
  {
    first: 'Bruce',
    second: 'Wayne'
  }]

function App() {

  const [inputValue, setInputValue] = useState('')
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>
    setInputValue(event.target.value)

  return (
    <div className="App">
      <Greet name="Valeriya"/>
      <Message count={10} name="Valeriya" isLoggedIn={true}/>
      <Message name="Valeriya" isLoggedIn={true}/>
      <NameList names={nameList}/>
      <Heading>Some heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo D`Caprio!</Heading>
      </Oscar>
      <Button handleClick={(e) => console.log('clicked', e)}/>
      <Input value={inputValue}
        handleChange={handleChange}/>
    </div>
  );
}

export default App;

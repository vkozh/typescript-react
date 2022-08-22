import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import LoggedIn from './components/state/LoggedIn';
import Message from './components/Message';
import NameList from './components/NameList';
import Oscar from './components/Oscar';
import Person from './components/Person';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvide } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import CounterClass from './components/class/Counter';

const nameList = [{
    first: 'Karry',
    last: 'Grant'
  },
  {
    first: 'Princess',
    last: 'Diana'
  },
  {
    first: 'Bruce',
    last: 'Wayne'
  }]

function App() {

  const [inputValue, setInputValue] = useState('')
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>
    setInputValue(event.target.value)

  return (
    <div className="App">
      <Greet name="Valeriya"/>
      <Person name={nameList[0]}/>
      <Message count={10} name="Valeriya" isLoggedIn={true}/>
      <Message name="Valeriya" isLoggedIn={true}/>
      <NameList names={nameList}/>
      <Heading>Some heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo D`Caprio!</Heading>
      </Oscar>
      <Button handleClick={(e) => console.log('clicked', e)}/>
      <Input value={inputValue} handleChange={handleChange}/>
      <Container styles={{border: '1px solid gray', padding: '1em'}}/>
      <LoggedIn/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvide>
        <User/>
      </UserContextProvide>
      <DomRef/>
      <MutableRef/>
      <CounterClass message='The counter value '/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './global.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { List } from './components/List';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NewTask />
    </>
  )
}

export default App

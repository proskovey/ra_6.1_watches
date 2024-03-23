import './App.css';
import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Form from './components/Form';
import Clock from './components/Clock';

function App() {
  const [clocks, setClock] = useState([]);

  const handleAddClock = (value) => {
    setClock((prev) => [...prev, {...value, id: nanoid()}]);
  }

  const handleDeleteClock = (id) => {
    setClock((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="main-page">
      <Form addClock={handleAddClock}/>
      <div className="clocks-list">
        {clocks.map((item) => <Clock key={item.id} clock={item} delClock={handleDeleteClock}/>)}
      </div>
    </div>
  );
}

export default App;

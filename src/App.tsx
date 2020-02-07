import React from 'react';
import './App.css';
import { TodayBoard } from './components/TodayBoard';

const App = () => {

  const today = new Date();
  const month: string = today.getMonth() + 1 < 10 ? "0" + String(today.getMonth() + 1) : String(today.getMonth() + 1);
  const date: string = today.getDate() < 10 ?  "0" + String(today.getDate()) : String(today.getDate());

  return (
    <div className="App">
      <TodayBoard month={month} date={date} />
    </div>
  );
}

export default App;

import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Timer from './components/Timer'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>TOMATIMER</h1>
      </div>
      <hr/>
      <ToastContainer />
      <Timer title="Pomodoro" duration="45"/>
      <Timer title="Courte Pause" duration="5"/>
      <Timer title="Longue Pause" duration="20"/>
    </div>
  );
}

export default App;

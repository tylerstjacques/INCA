import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <h1>INCA</h1>
      </header>
      <p>
          This is the homepage of the INCA react app.
      </p>
      <div className="horizontal-layout">
          <button className = "custom-button"
            style={{
              width: '100px',
              padding: '20px 10px',
              fontSize: '16px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => alert('This Button Will Be Used to Come Back To Your Feed!')}
          >
          FEED
          </button>
          <button className = "custom-button"
            style={{
              width: '100px',
              padding: '20px 10px',
              fontSize: '16px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => alert('This Button Will Be Used to Explore the Community!')}
          >
          EXPLORE
          </button>
          <button className = "custom-button"
            style={{
              width: '100px',
              padding: '20px 10px',
              fontSize: '16px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => alert('This Button Will Be Used to Record An Activity!')}
          >
          RECORD
          </button>
          <button className = "custom-button"
            style={{
              width: '100px',
              padding: '20px 10px',
              fontSize: '16px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => alert('This Button Will Be Used to Go To Your Profile!')}
          >
          PROFILE
          </button>
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'; // Import your CSS
import LoadBalancerControl from './LoadBalancerControl'; // Import the new component

function App() {
  return (
    <div className="App">
      <LoadBalancerControl /> {/* Use the new component */}
    </div>
  );
}

export default App;

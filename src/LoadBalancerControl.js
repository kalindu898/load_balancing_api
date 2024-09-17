import React, { useState } from 'react';
import axios from 'axios';

const RadioForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let endpoint = '';
    switch (selectedOption) {
      case 'pid':
        endpoint = '/loadbalance/pid';
        break;
      case 'roundrobin':
        endpoint = '/loadbalance/roundrobin';
        break;
      case 'weightedroundrobin':
        endpoint = '/loadbalance/weightedroundrobin';
        break;
      default:
        alert('Please select a valid load balancing option');
        return;
    }

    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`);
      console.log(response.data);
      alert(response.data.status);  // Display status message
    } catch (error) {
      console.error("There was an error sending the request!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="pid"
            checked={selectedOption === 'pid'}
            onChange={handleOptionChange}
          />
          PID Controller
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="roundrobin"
            checked={selectedOption === 'roundrobin'}
            onChange={handleOptionChange}
          />
          Round-Robin
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="weightedroundrobin"
            checked={selectedOption === 'weightedroundrobin'}
            onChange={handleOptionChange}
          />
          Weighted Round-Robin (30/70)
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RadioForm;

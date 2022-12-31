import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [averageInterestingNumber, setAverageInterestingNumber] = useState(0);

  const fetchDeals = async () => {
    const response = await axios.get(
      'https://costin.pipedrive.com/v1/deals?api_token=8679a6c6b4e2704cf123599b46ec21c78664992d',
    );

    const deals = response.data.data;
    let sum = 0;
    let count = 0;

    deals.forEach((deal) => {
      sum += deal['INTERESTING NUMBER'];
      count++;
    });

    setAverageInterestingNumber(sum / count);
  };

  return (
    <div>
      <button onClick={fetchDeals}>Press Me</button>
      <div>Average INTERESTING NUMBER: {averageInterestingNumber}</div>
    </div>
  );
}

export default App;

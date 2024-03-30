import React, { useState, useEffect } from 'react';

function WorkLoadView() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.jsonkeeper.com/b/COFQ', { mode: 'no-cors' });
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render your data
  return (
    <div>
      <h2>Data from JSONKeeper</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default WorkLoadView;

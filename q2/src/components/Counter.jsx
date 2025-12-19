import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }

  }, [count]);

  return (
    <div style={styles.container}>
      <h2>Counter Application</h2>
      <div style={styles.display}>{count}</div>
      
      <button 
        style={styles.button} 
        onClick={() => setCount(prev => prev + 1)}
      >
        Increase Count
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', padding: '20px', fontFamily: 'Arial' },
  display: { fontSize: '48px', margin: '20px 0', fontWeight: 'bold' },
  button: { padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }
};

export default Counter;
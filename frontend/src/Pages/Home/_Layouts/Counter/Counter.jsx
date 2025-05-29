import { useState, useEffect } from 'react';
import './Counter.css'
const Counter = () => {
  const countersData = [
    { label: 'Books Circulated', target: 4000 },
    { label: 'Funded Students', target: 300 },
  ];

  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const intervals = countersData.map((data, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < data.target) {
            newCounts[index] += 1;
          } else {
            clearInterval(intervals[index]); // stop this interval once target is hit
          }
          return newCounts;
        });
      }, 1);
    });
  
    return () => intervals.forEach(clearInterval);
  }, []);
  

  return (
    <div className="counter">
      <div className="counter__container">
        {countersData.map((count, i) => (
          <div className="count__content" key={i}>
            <p>{counts[i].toLocaleString()}+</p>
            <h2>{count.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;

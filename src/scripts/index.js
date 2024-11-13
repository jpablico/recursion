import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { fibs, fibsRec, mergeSort } from './recursion';

const App = () => {
  useEffect(() => {
    console.log(fibs(8));
    console.log(fibsRec(8));
    console.log(fibs(10));
    console.log(fibsRec(10));
    console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
    console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
    console.log(mergeSort([105, 79, 100, 110])); 

  }, []);

  return <h1>Hello, World! Test</h1>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

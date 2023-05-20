// src/index.js

//-------------------------------------
// const newH2Element = document.createElement('h2');
// newH2Element.innerHTML = 'This heading is added via code';
// document.body.append(newH2Element);

//-------------------------------------
// Using ES6 Array.fill not supported in IE without it being transpiled.

// const sayHelloXTimes = (times) => new Array(times).fill(1).map((a,i)=>`Hello : ${i}`)
// const newH2Element = document.createElement('h2');
// newH2Element.innerHTML = sayHelloXTimes(10).join(`<br/>`);
// document.body.append(newH2Element);

//--------------------------------------
// Using React

import { React } from 'react';
import { createRoot } from 'react-dom/client';
import Welcome from './Welcome';

const root = document.getElementById('root')
createRoot(root).render(<Welcome/>)
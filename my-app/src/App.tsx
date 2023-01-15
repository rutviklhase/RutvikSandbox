import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PinnedProjs } from './components/PinnedProjs/PinnedProjs';

function App() {
  // const [response, setResponse] = useState([]);

  // useEffect(() => {
  //   fetch('https://gh-pinned-repos.egoist.dev/?username=rutviklhase')
  //   .then((res) => res.json())
  //   .then((data)=>{console.log(data);})
  //   .catch((err)=>{console.log(err.message);})
  // },[])


  return (
    <div className="App">
      <PinnedProjs/>
      {/* <img src='https://raw.githubusercontent.com/rutviklhase/RutvikSandbox/main/my-app/src/assets/exampleimage.jpg'/> */}
    </div>
  );
}

export default App;

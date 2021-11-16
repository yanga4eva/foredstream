import { useState } from 'react';
import './App.css';
import request from './components/request';
import Header from './Routes/header'
import Nav from './Routes/nav'
import Result from './Routes/result';

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending)

  return (
    <div className="app">
    <Header />
    <Nav setSelectedOption={setSelectedOption} />
    <Result selectedOptions={selectedOption} />
    </div>
  );
}

export default App;

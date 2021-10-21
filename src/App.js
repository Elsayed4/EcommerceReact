import './App.css';
import React,{useState} from 'react';
import Counter from './Component/Counter/Counter.jsx';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Component/Shop/Shop';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [count,setcount] = useState(1);
  const [fun,setfun] = useState('');
  const [data,setdata] = useState(true);

  function decrement(){
    setcount(count - 1) 
  }
  function increment(){
    setcount(count + 1) 
  }
  
const [color,setColor] = useState('red');

  return (
    <Router>
    <section className="App">
      <Navbar></Navbar>
      <Switch>
      
        <Route component={Home} path="/" exact></Route>
          <Route component={Counter} path="/counter"
           count={count} 
           decrement={decrement}
           increment={increment}
           color={color}
           fun={fun}
           data={data}
           ></Route>

          <Route component={Shop} path="/shop"></Route>
     </Switch>
           </section>
</Router>
           );
}

export default App;

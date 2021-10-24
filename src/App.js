import "./App.css";
import React, { useState } from "react";
import Counter from "./Component/Counter/Counter.jsx";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Component/Shop/Shop";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Component/Product/Product.jsx";
import Login from "./Component/login/Login.jsx";
import Register from "./Component/register/Register.jsx"
const App = () => {
    const [color, setColor] = useState("red");
    const [count, setcount] = useState(1);
    const [fun, setfun] = useState("");
    const [data, setdata] = useState(true);
    function decrement() {
        setcount(count - 1);
    }
    function increment() {
        setcount(count + 1);
    }
    return (
        <Router>
            <section className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route
                        component={Counter}
                        path="/counter"
                        count={count}
                        decrement={decrement}
                        increment={increment}
                        color={color}
                        fun={fun}
                        data={data}
                    />

                    <Route component={Shop} path="/shop" exact />
                    <Route component={Product} path="/shop/:id" />
                    <Route component={Login} path="/login" />
                    <Route component={Register} path="/register" />
                </Switch>
            </section>
        </Router>
    );
};

export default App;

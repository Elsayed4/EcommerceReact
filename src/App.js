import "./App.css";
import Counter from "./Component/Counter/Counter.jsx";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Component/Shop/Shop";
import Home from "./Component/Home/Home";
import { Switch, Route } from "react-router-dom";
import Product from "./Component/Product/Product.jsx";
import Login from "./Component/login/Login.jsx";
import Register from "./Component/register/Register.jsx"
import Todo from "./Component/todo/Todo.jsx"
const App = () => {

    return (
            <section className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route
                        component={Counter}
                        path="/counter"
                    />

                    <Route component={Shop} path="/shop" exact />
                    <Route component={Product} path="/shop/:id" />
                    <Route component={Login} path="/login" />
                    <Route component={Todo} path="/todo" />
                    <Route component={Register} path="/register" />
                </Switch>
            </section>
    );
};

export default App;

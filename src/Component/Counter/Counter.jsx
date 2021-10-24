import "./../../App.css";
import Countnumber from "./Countnumber";
import React, { useState } from "react";
const Counter = (props) => {

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
        <section className="Counter">
            <Countnumber
                action={increment}
                data={data}
            ></Countnumber>

            <span className={props.count >= 0 ? "white" : "red"}>
                {count}
            </span>

            <Countnumber
                action={decrement}
                data={!data}
            ></Countnumber>

            <p className="txtStatus">
                {count >= 0 ? "positive Number" : "Negative Number"}
            </p>
        </section>
    );
};

export default Counter;

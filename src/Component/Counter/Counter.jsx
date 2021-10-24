import "./../../App.css";
import Countnumber from "./Countnumber";

const Counter = (props) => {
    return (
        <section className="Counter">
            <Countnumber
                action={props.increment}
                data={props.data}
            ></Countnumber>

            <span className={props.count >= 0 ? "white" : "red"}>
                {props.count}
            </span>

            <Countnumber
                action={props.decrement}
                data={!props.data}
            ></Countnumber>

            <p className="txtStatus">
                {props.count >= 0 ? "positive Number" : "Negative Number"}
            </p>
        </section>
    );
};

export default Counter;

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {decWithCheckAct, increment } from "../../../app/features/Counter/action";

const Counter = () => {
    let count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>learn react</h3>
            <button onClick={() => dispatch(decWithCheckAct(1))}>-</button>
            {' '} <span>{count.count}</span> {' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;
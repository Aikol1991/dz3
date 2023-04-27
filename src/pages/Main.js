import {useSelector, useDispatch} from "react-redux";
function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const Decrease = () => {
        dispatch({type: 'DECREASE'});
    }
    const Increase = () => {
        dispatch({type: 'INCREASE'})
    }
    const Reset = () => {
        dispatch({type: 'RESET'})
    }
    return(
        <div style={{textAlign: "center", marginTop: "200px"}}>
            <h1>Counter</h1>
            <span style={{display: "block", fontSize: "30px", marginBottom: "20px"}}>{counter}</span>
            <button onClick={Decrease} style={{width:"100px", borderRadius: "50px", marginRight: "10px"}}>Decrease</button>
            <button onClick={Reset} style={{width:"100px", borderRadius: "50px", marginRight: "10px"}}>Reset</button>
            <button onClick={Increase} style={{width:"100px", borderRadius: "50px", marginRight: "10px"}}>Increase</button>
        </div>
    )
}

export default Counter;
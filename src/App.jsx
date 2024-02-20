import { increment,decrement } from "./Redux/Actions";
import { useDispatch,useSelector } from "react-redux";


function App() {

  const count=useSelector(state=>state.count)
  const dispatch=useDispatch();

  return (
    <div className="App">
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
       {count}
       <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  );
}

export default App;

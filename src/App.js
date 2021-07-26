import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './redux/actions/index';
function App() {
  const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
  Hello, current count isss {counter}
  <button onClick={()=> dispatch(increment())}>+</button>
  <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

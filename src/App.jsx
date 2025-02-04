import {} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { increment,decrement, reset } from './features/counter/counterSlice.js';

import './App.css';

function App() {
  const count = useSelector(state => state.mycounter.value);
  const dispatch = useDispatch();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="counter-box d-flex align-items-center gap-4 p-4 bg-white shadow rounded">
        <button className="btn btn-danger px-4 py-2" onClick={() => dispatch(decrement())}>-</button>
        <p className="display-4 m-0 fw-bold text-primary">{count}</p>
        <button className="btn btn-success px-4 py-2" onClick={() => dispatch(increment())}>+</button>
      </div>
      <button className="btn btn-warning mt-4 px-5 py-2" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;

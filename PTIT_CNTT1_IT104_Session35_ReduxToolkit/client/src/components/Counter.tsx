import { useDispatch } from "react-redux";
import { decrease, increase, reset } from "../redux/slices/counter.slice";
import { useAppSelector } from "../hooks/useRedux";

export default function Counter() {

  // Sử dụng distractoring lấy 
  const {value} = useAppSelector((store) => store.counter)
  // const result = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(decrease());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={handleIncrease}> Increase</button>
      <button onClick={handleDecrease}> Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

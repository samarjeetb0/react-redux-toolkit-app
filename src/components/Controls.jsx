import { useRef } from "react";
import { counterActions , privacyActions} from "../store/Index";
import { useDispatch } from "react-redux";

export const Controls = () => {
  const numberInput = useRef("");
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddition = () => {
    dispatch(counterActions.add({
      num: numberInput.current.value
    }));
    numberInput.current.value = "";
  };

  const handleSubstract = () => {
    dispatch(counterActions.subtract({
      num: numberInput.current.value
    }));
    numberInput.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle())
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Enter number"
            ref={numberInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handlePrivacy}
          >
            Privacy Toggle
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-info button-operator"
            onClick={handleAddition}
          >
            Add
          </button>

          <button
            type="button"
            className="btn btn-danger button-operator"
            onClick={handleSubstract}
          >
            Sub
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary button-operator"
            onClick={handleIncrement}
          >
            +1
          </button>

          <button
            type="button"
            className="btn btn-success button-operator"
            onClick={handleDecrement}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

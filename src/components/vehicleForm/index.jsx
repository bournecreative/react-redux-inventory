import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addVehicle } from "../../store/index";

export const VehicleForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => state.form);

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVehicle({ name: name, cost: cost }));
    dispatch(changeName(""));
    dispatch(changeCost(""));
  };

  return (
    <>
      <div className="car-form panel">
        <h4 className="subtitle is-3">Add Vehicle</h4>
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <div className="field">
              <label className="label">Vehicle Name</label>
              <input
                className="input is-expanded"
                value={name}
                onChange={handleNameChange}
              />
              <label className="label">Vehicle Cost</label>
              <input
                className="input is-expanded"
                value={cost || ""}
                onChange={handleCostChange}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

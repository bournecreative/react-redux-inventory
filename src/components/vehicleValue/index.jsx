import { useSelector } from "react-redux";

export const VehicleValue = () => {
  const total = useSelector(({ vehicles: { list, searchTerm } }) => {
    let carTotal = 0;
    list.filter((v) => {
      if (v.name.toLowerCase().match(searchTerm.toLowerCase())) {
        carTotal = carTotal + v.cost;
      }
    });
    return carTotal;
  });
  return <div className="car-value">${total}</div>;
};

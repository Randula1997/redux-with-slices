import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className="car-calue">Total Cost: ${totalCost}</div>;
}

export default CarValue;

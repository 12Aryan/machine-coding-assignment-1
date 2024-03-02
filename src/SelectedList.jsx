import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SelectedList = () => {
  const selectedItems = useSelector((state) => state.ItemSlice.selectedItems);
  const [values, setValues] = useState({
    rate: 0,
    quantity: 0,
  });
  const [amount, setAmount] = useState(0);
  const handleChange = async (e) => {
    await setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setAmount(values.rate * values.quantity);
  }, [values]);
  console.log(values, amount);

  return (
    <>
      <div>ItemsTable</div>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price </th>
            <th>Quantity </th>
            <th>Amount </th>
          </tr>
        </thead>
        <tbody>
          {selectedItems && selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.itemName}</td>
                <td>{item.itemType}</td>
                <td>
                  <input name="rate" onChange={handleChange} />
                </td>
                <td>
                  <input name="quantity" onChange={handleChange} />{" "}
                </td>
                <td>{amount}</td>
              </tr>
            ))
          ) : (
            <tr>No Data</tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default SelectedList;

import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "./Redux/ItemSlice";

const ItemsTable = () => {
    const data = useSelector((state)=>(state.ItemSlice.data))
    const dispatch = useDispatch()
    console.log(data);
    const handleItemClick=async(item, index)=>{
       await dispatch(addItems({item, index}))
       await dispatch(removeItems( index))
    }
  return (
    <>
      <div>ItemsTable</div>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index)=>(
            <tr key={index} onClick={()=>handleItemClick(item, index)} style={{cursor: 'pointer'}}>
                <td>{item.id}</td>
                <td>{item.itemName}</td>
                <td>{item.itemType}</td>
            </tr>
        ))}
            
        </tbody>
      </table>
    </>
  );
};

export default ItemsTable;

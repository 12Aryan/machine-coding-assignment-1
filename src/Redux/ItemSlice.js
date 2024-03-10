import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice = createSlice({
  name: "itemSlice",
  initialState: {
    selectedItems: [],
    data: [
      { id: 1, itemName: "item 1", itemType: "normal", price : 0, quantity: 0 , amount: 0},
      { id: 2, itemName: "item 2", itemType: "taxable",  price : 0, quantity: 0, amount: 0 },
      { id: 3, itemName: "item 3", itemType: "discountable",  price : 0, quantity: 0, amount: 0},
      { id: 4, itemName: "item 1", itemType: "taxable & discountable",  price : 0, quantity: 0, amount: 0 },
    ],
  },
  reducers: {
    addItems: (state, action) => {
      state.selectedItems = [...state.selectedItems, action.payload.item];
      //   state.selectedItems.push(action.payload.item)
      console.log(
        "new selected",
        JSON.parse(JSON.stringify(state.selectedItems))
      );
      //   const copyData = state.data
      //    copyData.splice(action.payload.index, 1);
      //   state.data(copyData);
      //   console.log('new data',JSON.parse(JSON.stringify(state.data)));
    },
    removeItems: (state, action) => {
      
      const newData = [...state.data];
      newData.splice(action.payload, 1);
      state.data = newData;
    },
  },
});

export default ItemSlice.reducer;
export const { addItems, removeItems } = ItemSlice.actions;

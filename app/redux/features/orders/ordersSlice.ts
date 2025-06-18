import { createSlice } from '@reduxjs/toolkit';
import { Order } from '@/utils/db';
import { orders } from '@/utils/db';

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: orders,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
  },
  }
);

export default ordersSlice.reducer;
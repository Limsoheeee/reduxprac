import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from '../slice/CounterSlice';
import appSliceReducer from '../slice/AppSlice';


export default configureStore({
  reducer: {
    counter: counterSliceReducer,
    app:appSliceReducer,
  },
});
import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
      },

      reducers:{  //리듀서는 객체형태고 함수를 담고있다. 
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        // },
        // incrementByAmount:()=>{},  //값(어마운트)을 외부에 받아서
      },
}
});
export const { increment, decrement} = CounterSlice.actions //구현함수들만 보낸다.
export default CounterSlice.reducer //디폴트 통째로 묶어 보낸다.
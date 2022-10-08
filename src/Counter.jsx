import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './slice/CounterSlice'
import CounterSlice from './slice/CounterSlice'
import AppSlice from './slice/AppSlice'


function Counter() {
  const count = useSelector(state => state.counter.value) //스토어에서 가지고온 값
  console.log(count)
//   const app = useSelector(state => state.app.value)
//   console.log(app)
  const dispatch = useDispatch() // 보내는 값. 리턴한값들을  디스패치에 담는다.  디스패치쓸때 설정임 


  return (
   <>
    <div>{count}</div> 
    <button
    onClick={()=>dispatch(increment())}
    >⭕️</button>
    <button
    onClick={()=>dispatch(decrement())}
    >❌</button>
   </>
  )
};

export default Counter;
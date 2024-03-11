import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {actions} from '../src/actions/Actions.jsx'
import './App.css'

function App() {
  const result =useSelector(state=>state);
   const dispatch =useDispatch();
   useEffect(()=>{
   dispatch(actions())
   },[]);

  return (
    <>
   <p style={{color:'red'}}> {JSON.stringify(result)}</p>
    </>
  )
}

export default App

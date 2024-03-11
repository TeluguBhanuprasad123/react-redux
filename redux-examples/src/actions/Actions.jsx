import {
  HIT_SERVER,
  HIT_SERVER_SUCCESS,
  HIT_SERVER_FAIL
} from "../constants/Constants";
import axios from "axios";
export const actions=()=>{
  return async (dispatch)=>{
      dispatch({
          type:HIT_SERVER,
          result:{},
          error:"",
          loading:false
      })
      try{
          const res=await axios.get(`https://www.w3schools.com/angular/customers.php`);
          dispatch({
              type:HIT_SERVER_SUCCESS,
              result:res,
              loading:true,
              error:""
          })
      }catch(err){
          dispatch({
              type:HIT_SERVER_FAIL,
              result:{},
              loading:true,
              error:err.message
          })
      }
  }
}
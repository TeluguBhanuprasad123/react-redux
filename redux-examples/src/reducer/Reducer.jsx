import {HIT_SERVER,HIT_SERVER_SUCCESS,HIT_SERVER_FAIL} from '../constants/Constants';

const initialState={
    loading :false,
    result:{},
    error:""
}

export const reducer =(state=initialState,action)=>{
     switch (action.type) {
        case HIT_SERVER:
            case HIT_SERVER_SUCCESS:
                case HIT_SERVER_FAIL:
                    return{
                        ...state,
                        result:action.result,
                        error :action.error,
                        loading:action.loading
                    }
           
        default:
            return state;
     }

}
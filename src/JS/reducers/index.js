import authReducer from "./authReducer";
import {combineReducers} from 'redux'
import carReducer from "./carReducer";


const rootReducer = combineReducers({authReducer, carReducer})


export default rootReducer;
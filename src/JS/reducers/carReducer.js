import { GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_ONE_CAR_FAIL, GET_ONE_CAR_LOAD, GET_ONE_CAR_SUCCESS } from "../actionTypes/carActionTypes";


const initialState = {
    load: false,
    success: null,
    errors: null,
    cars: [],
    car: {},
}


const carReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_CARS_LOAD:
            return { ...state, load: true };
    
        case GET_CARS_SUCCESS:
            return {...state,
            load: false,
            success: payload.success,
            cars: payload.cars,
        }

        case GET_CARS_FAIL:
            return {
                ...state,
                load: false,
                errors: payload.errors,
            }
        case GET_ONE_CAR_LOAD:
            return {
                ...state,
                load: true,
            }
        
        case GET_ONE_CAR_SUCCESS:
            return {
                ...state,
                load: false,
                success: payload.success,
                car: payload.car,
            }
        
        case GET_ONE_CAR_FAIL:
            return {
                ...state,
                load: false,
                errors: payload.errors,
            }



        default:
           return state
    }
}


export default carReducer;
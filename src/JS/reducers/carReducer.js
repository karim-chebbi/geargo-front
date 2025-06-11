import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, CLEAR_ERRORS_CAR, CLEAR_SUCCESS_CAR, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_ONE_CAR_FAIL, GET_ONE_CAR_LOAD, GET_ONE_CAR_SUCCESS } from "../actionTypes/carActionTypes";


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
        return {
          ...state,
          load: false,
          cars: payload.cars,
        };

      case GET_CARS_FAIL:
        return {
          ...state,
          load: false,
          errors: payload.errors,
        };
      case GET_ONE_CAR_LOAD:
        return {
          ...state,
          load: true,
        };

      case GET_ONE_CAR_SUCCESS:
        return {
          ...state,
          load: false,
          success: payload.success,
          car: payload.car,
        };

      case GET_ONE_CAR_FAIL:
        return {
          ...state,
          load: false,
          errors: payload.errors,
        };

      case ADD_CAR_LOAD:
        return { ...state, load: true };

      case ADD_CAR_SUCCESS:
        return {
          ...state,
          load: false,
          success: payload.success,
        };

      case ADD_CAR_FAIL:
        return {
          ...state,
          load: false,
          errors: payload.errors,
        };

      case CLEAR_SUCCESS_CAR:
        return { ...state, success: null };

      case CLEAR_ERRORS_CAR:
        return { ...state, errors: null };


      case DELETE_CAR_LOAD:
        return {...state, load: true };

    
      case DELETE_CAR_SUCCESS:
        return {
            ...state, 
            load: false,
            success: payload.success,
        }

      case DELETE_CAR_FAIL:
        return {
            ...state,
            load: false,
            errors: payload.errors,
        }


      case EDIT_CAR_LOAD:
        return { ...state, load: true };

      case EDIT_CAR_SUCCESS:
        return {
          ...state,
          load: false,
          success: payload.success,
          car: payload.car,
        }

        case EDIT_CAR_FAIL:
          return {
            ...state,
            load: false,
            errors: payload.errors,
          }



      default:
        return state;
    }
}


export default carReducer;
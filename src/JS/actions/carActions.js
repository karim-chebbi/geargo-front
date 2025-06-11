import axios from "axios";
import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, CLEAR_ERRORS_CAR, CLEAR_SUCCESS_CAR, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_ONE_CAR_FAIL, GET_ONE_CAR_LOAD, GET_ONE_CAR_SUCCESS } from "../actionTypes/carActionTypes"

export const getCars = () => async (dispatch) => {
    dispatch({type: GET_CARS_LOAD});
    try {
        const result = await axios.get("/api/cars/getAllCars");
        dispatch({type: GET_CARS_SUCCESS, payload: result.data});
    } catch (error) {
        dispatch({type: GET_CARS_FAIL, payload: error.response.data});
    }
}

export const getCarById = (id) => async (dispatch) => {
    dispatch({type: GET_ONE_CAR_LOAD})
    try {
        const result = await axios.get(`/api/cars/getCarById/${id}`);
        dispatch({type: GET_ONE_CAR_SUCCESS, payload: result.data})
    } catch (error) {
        dispatch({type: GET_ONE_CAR_FAIL, payload: error.response.data})
    }
}


export const addCar = (newCar) => async (dispatch) => {
    dispatch({type: ADD_CAR_LOAD});
    try {
        const result = await axios.post('/api/cars/addCar', newCar)
        dispatch({type: ADD_CAR_SUCCESS, payload: result.data})
        dispatch(getCars())
    } catch (error) {
        dispatch({type: ADD_CAR_FAIL, payload: error.response.data})
    }
}


export const clearSuccessCar = () => {
  return {
    type: CLEAR_SUCCESS_CAR,
  };
};

export const clearErrorsCar = () => {
  return {
    type: CLEAR_ERRORS_CAR,
  };
};



export const deleteCar = (id, navigate) => async (dispatch) => {
  dispatch({ type: DELETE_CAR_LOAD });
  try {
    const result = await axios.delete(`/api/cars/deleteCar/${id}`);
    dispatch({ type: DELETE_CAR_SUCCESS, payload: result.data });
    navigate("/showroom")
  } catch (error) {
    dispatch({ type: DELETE_CAR_FAIL, payload: error.response.data });
  }
};



export const editCar = (id, updatedCar) => async (dispatch) => {
  dispatch({ type: EDIT_CAR_LOAD });
  try {
    const result = await axios.put(`/api/cars/updateCar/${id}`, updatedCar);
    dispatch({ type: EDIT_CAR_SUCCESS, payload: result.data });
    
  } catch (error) {
    dispatch({ type: EDIT_CAR_FAIL, payload: error.response.data });
  }
};
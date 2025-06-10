import axios from "axios";
import { GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_ONE_CAR_FAIL, GET_ONE_CAR_LOAD, GET_ONE_CAR_SUCCESS } from "../actionTypes/carActionTypes"

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
import axios from 'axios';
import {defaultAPI} from '../../API/API';

export const GET_ACCOUNT_DETAIL_PENDING="GET_ACCOUNT_DETAIL_PENDING";

export const GET_ACCOUNT_DETAIL_SUCCESS="GET_ACCOUNT_DETAIL_SUCCESS";

export const getAccountDetail = (dispatch,id) => {

    const API = `${defaultAPI}/${id}`;
    dispatch({
        type:GET_ACCOUNT_DETAIL_PENDING,
    });
    axios.get(API)
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type:GET_ACCOUNT_DETAIL_SUCCESS,
                    response:response
                })
            }
        })

}
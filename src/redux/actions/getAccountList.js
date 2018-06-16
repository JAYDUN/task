import axios from 'axios';
import {defaultAPI} from '../../API/API';
export const GET_ACCOUNT_LIST_PENDING="GET_ACCOUNT_LIST_PENDING";

export const GET_ACCOUNT_LIST_SUCCESS="GET_ACCOUNT_LIST_SUCCESS";

export const getAccountList = (dispatch) => {

    dispatch({
        type:GET_ACCOUNT_LIST_PENDING,
    });
    axios.get(defaultAPI)
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type:GET_ACCOUNT_LIST_SUCCESS,
                    response:response
                })
            }
        })

}
import {GET_ACCOUNT_LIST_SUCCESS} from '../actions/getAccountList';

const initState={
    list:[]
}
export default function AccountList(state=initState,action) {

    switch (action.type){
        case GET_ACCOUNT_LIST_SUCCESS:
                return{
                    ...state,
                    list:action.response.data
                };
        default :
            return state;
    }

}
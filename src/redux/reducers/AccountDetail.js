import {GET_ACCOUNT_DETAIL_SUCCESS} from '../actions/getAccountDetail';

const initState={
    id:null,
    nameLast:'',
    nameFirst:'',
    email:'',
    gender:'',
    ip:'',
}
export default function AccountDetail(state=initState,action) {
    switch (action.type){
        case GET_ACCOUNT_DETAIL_SUCCESS:
            const data = action.response.data;
            return{
                ...state,
                id:data.id,
                nameLast:data.nameLast,
                nameFirst:data.nameFirst,
                email:data.email,
                gender:data.gender,
                ip:data.ip,
            };
        default :
            return state;
    }

}
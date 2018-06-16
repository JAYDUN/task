import React,{Component} from 'react';
import './AccountDetail.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAccountDetail} from '../../redux/actions/getAccountDetail';

class AccountDetail extends Component {



    componentDidMount = () => {
        const id = this.props.match.params.id;
        this.props.getAccountDetail(id);
    };

    deleteHandler = () => {
        const id = this.props.match.params.id;
        const api = `https://dev.presscentric.com/test/accounts/${id}`;
        axios.delete(api)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                alert('Account deleted succefully')
            })
        this.props.history.push('/')
    }


    render(){

        const {id,nameLast,nameFirst,email,gender,ip} = this.props;

        return(
            <div className="container">
                <p>Id: {id}</p>
                <p>LastName: {nameLast}</p>
                <p>FirstName: {nameFirst}</p>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Ip: {ip}</p>
                <button
                    className="btn"
                    onClick={this.deleteHandler}
                >Delete</button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    const detail = state.AccountDetail;
    return{
        id : detail.id,
        nameLast:detail.nameLast,
        nameFirst:detail.nameFirst,
        email:detail.email,
        ip:detail.ip,
        gender:detail.gender,

    }
};

const mapDispatchToProps = dispatch => {
    return{
        getAccountDetail:(id) => getAccountDetail(dispatch,id)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountDetail);

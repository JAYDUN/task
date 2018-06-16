import React,{Component} from 'react';
import {connect} from 'react-redux';
import './AccountList.css';
import {Link} from 'react-router-dom';
import {getAccountList} from '../../redux/actions/getAccountList';

class AccountList extends Component {



    componentDidMount = () => {
        this.props.getAccountList();
    }

    render(){
        const {accountList} = this.props;
        const List = () => {
            return(
                <ul className="list">
                    {
                        accountList.map(item => {
                            return(
                                <li key={item.id} className="item">
                                    <Link to={`/detail/${item.id}`}>
                                        <span className="id">{item.id}</span>
                                        <span>{item.name}</span>
                                    </Link>

                                </li>
                            )
                        })
                    }
                </ul>
            )
        }

        return(
            <div className="container">
                <p className="header">Account List</p>
                <List/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        accountList:state.AccountList.list
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getAccountList:() => getAccountList(dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountList);
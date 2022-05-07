import { connect } from 'react-redux';
import Login from './Login';
import { logIn } from '../../.store/api/profile-api';

function mapStateToProps(state) {
    return {
        userLoginStatus: state.profile.isAuthData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(logIn({username:username, password:password}));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
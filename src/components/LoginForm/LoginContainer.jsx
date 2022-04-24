import { connect } from 'react-redux';
import Login from './Login';
import { loginUsers } from '../../.store/actionCreators/ProfileForm/ProfileActionCreators'

function mapStateToProps(state) {
    return {
        userLoginStatus: state.profile.isAuthData
    };
}
function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(loginUsers(username, password));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
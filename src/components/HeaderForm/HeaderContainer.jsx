import { connect } from 'react-redux';
import HeaderLine from './HeaderForm';


function mapStateToProps(state) {
    return {
        authData: state.profile.isAuthData.isAuth,
    };
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLine);
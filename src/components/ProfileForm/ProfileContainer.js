import { connect } from 'react-redux';
import Profile from './Profile';

function mapStateToProps(state) {
    return {
        profileInfo: state.profile.profileList,
        profileEdit: state.profile.newProfileData,
        authData:state.profile.isAuthData.isAuth,
        curUser:state.profile.isAuthData.currentUser,
       
    };
}
function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    getProfileInfo
} from '../../.store/api/profile-api'

function mapStateToProps(state) {
    return {
        profileInfo: state.profile.profileInfo,
        profileEdit: state.profile.newProfileData,
        authData: state.profile.isAuthData.isAuth,
        isLoadedCheck: state.profile.isLoaded,
        token: state.profile.isAuthData.access,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loadData:(token) =>{
            dispatch(getProfileInfo(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
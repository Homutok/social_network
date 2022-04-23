import { combineReducers } from 'redux'
import blogReducer from './BlogForm/BlogReducers'
import ProfileReducers from './ProfileForm/ProfileReducers'

export default combineReducers({
    blog: blogReducer,
    profile:ProfileReducers
})
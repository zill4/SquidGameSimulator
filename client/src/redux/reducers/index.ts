import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import feedbacks from './feedbackReducer'
export default combineReducers({
  auth,
  feedbacks,
  alert
})
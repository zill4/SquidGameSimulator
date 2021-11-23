import {
    GET_FEEDBACK,
    IGetFeedback
  } from '../types/feedbackType'
  import { IFeedback } from '../../utils/TypeScript'

  
  const feedbackReducer = (
    state: IFeedback[] = [],
    action: IGetFeedback
  ): IFeedback[] => {
    switch (action.type){
      case GET_FEEDBACK:
        return action.payload
  
      default:
        return state
    }
  }
  
  
  export default feedbackReducer
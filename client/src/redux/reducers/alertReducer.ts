import { ALERT, IAlertType } from '../types/alertType'
import { IAlert } from '../../utils/TypeScript'


const alertReducer = (state: IAlert = {}, action: IAlertType): IAlert => {
    console.log("firing alert reducer", action)
  switch (action.type){
    case ALERT:
      return action.payload
    default:
      return state
  }
}

export default alertReducer;
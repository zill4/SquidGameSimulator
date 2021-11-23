import { Dispatch } from 'redux'
import { IFeedback } from '../../utils/TypeScript'
import { postAPI, getAPI } from '../../utils/FetchData'

import { ALERT, IAlertType } from '../types/alertType'
import { validFeedback } from '../../utils/Valid'

import {
  GET_FEEDBACK,
  IGetFeedback
} from '../types/feedbackType'


export const getFeedback = () =>
  async (dispatch: Dispatch<IAlertType | IGetFeedback>) => {

    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await getAPI('feedback')

      dispatch({
        type: GET_FEEDBACK,
        payload: res.data
      })

      dispatch({ type: ALERT, payload: { loading: false } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
    }
  }

export const sendFeedback = (feedback: IFeedback) =>
  async (dispatch: Dispatch<IAlertType>) => {
    const check = validFeedback(feedback)

    if (check.errLength > 0)
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } })

    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await postAPI('feedback', feedback)

      dispatch({ type: ALERT, payload: { success: res.data.msg } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
    }
  }
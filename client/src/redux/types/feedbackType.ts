import { IFeedback } from '../../utils/TypeScript'

export const GET_FEEDBACK = "GET_FEEDBACK"

export interface IFeedbacks {
  feedbacks: IFeedback
}

export interface IGetFeedback {
    type: typeof GET_FEEDBACK,
    payload: IFeedback[]
  }
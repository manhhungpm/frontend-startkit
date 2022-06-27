import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import * as test from '../../app/modules/test-redux'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  test:  test.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}

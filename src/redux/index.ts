import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from "./reducer"

export const store = createStore(reducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
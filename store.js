'use strict';

import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';


const initState = {
  shows: data
}

export const actionTypes = {
  'LOAD': 'LOAD'
}

export const rootReducer = () => {

}

export const serverRenderHome = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.LOAD})
}

export const initStore = (initialState = initState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

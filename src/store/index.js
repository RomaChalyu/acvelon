/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { filter } from 'minimatch'

const ADD_INVOICE = 'ADD_INVOICE'
const EDIT_INVOICE = 'EDIT_INVOICE'
const LOAD_INVOICES = 'LOAD_INVOICES'
const LOAD_INVOICES_SUCCESS = 'LOAD_INVOICES_SUCCESS'
const CHANGE_ACTION = 'CHANGE_ACTION'
const DELETE_INVOICE = 'DELETE_INVOICE'
const initialState = {
  invoices: [],
  loading: false,
  action: null,
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE: {
      return { ...state, invoices: [...state.invoices, action.invoice], action: null }
    }

    case EDIT_INVOICE: {
      const id = action.invoice._id
      const newInvoices = state.invoices.map(invoice => (invoice._id === id ? action.invoice : invoice))
      return { ...state, invoices: [...newInvoices], action: null }
    }

    case LOAD_INVOICES: {
      return { ...state, loading: true }
    }

    case LOAD_INVOICES_SUCCESS: {
      return { ...state, invoices: action.invoices, loading: false }
    }

    case CHANGE_ACTION: {
      return { ...state, action: action.action }
    }

    case DELETE_INVOICE: {
      const { id } = action
      const newInvoices = state.invoices.filter(invoices => invoices._id !== id)
      return { ...state, invoices: newInvoices }
    }

    default:
      return state
  }
}

export const addInvoice = invoice => ({ type: ADD_INVOICE, invoice })
export const editInvoice = invoice => ({ type: EDIT_INVOICE, invoice })
export const getInvoices = async dispatch => {
  dispatch({ type: LOAD_INVOICES })
  const response = await fetch('http://localhost:3000/invoices')
  const invoices = await response.json()
  return dispatch({ type: LOAD_INVOICES_SUCCESS, invoices })
}
export const deleteInvoice = id => ({ type: DELETE_INVOICE, id })
export const changeAction = action => ({ type: CHANGE_ACTION, action })

const store = createStore(reduser, applyMiddleware(thunk))
export default store

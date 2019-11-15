/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const ADD_INVOICE = 'ADD_INVOICE'
const EDIT_INVOICE = 'EDIT_INVOICE'
const LOAD_INVOICES = 'LOAD_INVOICES'
const LOAD_INVOICES_SUCCESS = 'LOAD_INVOICES_SUCCESS'
const REMOVE_INVOICE = 'REMOVE_INVOICE'
const initialState = {
  invoices: [],
  loading: false,
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE: {
      return { ...state, invoices: [...state.invoices, action.invoice] }
    }

    case EDIT_INVOICE: {
      const id = action.invoice._id
      const newInvoices = state.invoices.map(invoice =>
        invoice._id === id ? action.invoice : invoice
      )
      return { ...state, invoices: [...newInvoices] }
    }

    case LOAD_INVOICES: {
      return { ...state, loading: true }
    }

    case LOAD_INVOICES_SUCCESS: {
      return { ...state, invoices: action.invoices, loading: false }
    }

    case REMOVE_INVOICE: {
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
export const removeInvoice = id => ({ type: REMOVE_INVOICE, id })

const store = createStore(reduser, applyMiddleware(thunk))
export default store

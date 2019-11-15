import React from 'react'
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from '../pages/Home'
import CreateInvoice from '../pages/CreateInvoice'
import EditInvoice from '../pages/EditInvoice'
import ErrorPage from '../pages/404'

export const customHistory = createBrowserHistory()
const Router = () => {
  return (
    <BrowserRouter history={customHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-invoice" component={CreateInvoice} />
        <Route exact path="/edit/:id" component={EditInvoice} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}
export default Router

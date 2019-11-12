import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainView from '../pages/MainView'
import CreateInvoiceView from '../pages/CreateInvoiceView'
import Edit from '../pages/Edit'

export const customHistory = createBrowserHistory()

export default () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/CreateInvoiceView" component={CreateInvoiceView} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route path="*" component={() => <div>Error 404</div>} exact />
      </Switch>
    </Router>
  )
}

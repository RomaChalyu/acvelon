import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/errorPage.scss'

const ErrorPage = () => {
  return (
    <div className="body error-wrap">
      <div className="error-block">
        <h1>Unknown path. Go to the home page</h1>
        <Link to="/">
          <button type="button" className="btn">
            home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage

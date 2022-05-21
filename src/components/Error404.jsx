import React from 'react'
import { Link } from 'react-router-dom'


function Error404() {
  return (
    <div className='error_container'>
      <div className="content_main">
        <div className="error_items">
          <h2>Ooops ! something went wrong </h2>
        </div>
        <div className="error_links">
            <li className='error_li'> <Link  to="/"> &#8592;go back to Homepage </Link> </li>
            <li> <Link  to="/contact">  Leave a feed back</Link> </li>
        </div>
      </div>
    </div>
  )
}

export default Error404
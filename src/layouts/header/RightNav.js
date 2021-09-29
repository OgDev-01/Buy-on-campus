import React from "react"
import { Link } from "react-router-dom"
export default function RightNav() {
  return (
    <>
      <div className='header-right'>
        <div className='dropdown cart-dropdown'>
          <Link to='#' className='dropdown-toggle'>
            <div className='icon'>
              <i className='icon-user'></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

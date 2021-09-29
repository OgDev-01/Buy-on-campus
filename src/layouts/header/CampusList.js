import React from "react"
import { Link } from "react-router-dom"
export default function CampusList() {
  return (
    <>
      <div className='header-left'>
        <div className='dropdown category-dropdown'>
          <Link
            to='#'
            className='dropdown-toggle'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            data-display='static'
            title='Browse Categories'>
            Browse Campus
          </Link>

          <div className='dropdown-menu'>
            <nav className='side-nav'>
              <ul className='menu-vertical sf-arrows'>
                <li className=''>
                  <Link to='#'>Ozoro </Link>
                </li>
                <li className=''>
                  <Link to='#'>Abraka</Link>
                </li>
                <li>
                  <Link to='#'>Fupre </Link>
                </li>
                <li>
                  <Link to='#'>Pti</Link>
                </li>
                <li>
                  <Link to='#'>Ekpoma </Link>
                </li>
                <li>
                  <Link to='#'>Uniben</Link>
                </li>
                <li>
                  <Link to='#'>Uniport</Link>
                </li>
                <li>
                  <Link to='#'>Unilag </Link>
                </li>
                <li>
                  <Link to='#'>Laspotech</Link>
                </li>
                <li>
                  <Link to='#'>Unilorin</Link>
                </li>
                <li>
                  <Link to='#'>Off Campus </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

import React from "react"
import { Link } from "react-router-dom"
export default function SearchBar() {
  return (
    <>
      <div
        className='
              header-search
              header-search-extended
              header-search-visible
              header-search-no-radius
              d-none d-lg-block
            '>
        <Link to='#' className='search-toggle' role='button'>
          <i className='icon-search'></i>
        </Link>
        <form action='#' method='get'>
          <div className='header-search-wrapper search-wrapper-wide'>
            <label for='q' className='sr-only'>
              Search
            </label>
            <input
              type='search'
              className='form-control'
              name='q'
              id='q'
              placeholder='Search product ...'
              required
            />
            <button className='btn btn-primary' type='submit'>
              <i className='icon-search'></i>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

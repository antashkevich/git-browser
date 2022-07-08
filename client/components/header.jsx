import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ accUserName, reposList }) => (
  <div className="absolute top-0 left-0 right-0 flex justify-between bg-indigo-600 py-5 px-4 text-sm font-medium text-white">
    <p id="repository-name">{accUserName}</p>
    <div className="flex gap-x-4">
      <Link to="/" id="go-back">
        Go back
      </Link>
      {reposList && (
        <Link to={`/${reposList}`} id="go-repository-list">
          Go to repositories
        </Link>
      )}
    </div>
  </div>
)

Header.propTypes = {}

export default Header

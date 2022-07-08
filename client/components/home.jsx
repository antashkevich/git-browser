import React, { useState } from 'react'
import Head from './head'
import { history } from '../redux'

const Home = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => setValue(e.target.value)

  const onClick = () => {
    history.push(`/${value}`)
  }
  return (
    <div>
      <Head title="Welcome" />
      <div className="flex justify-center items-center gap-x-2 h-screen">
        <input
          type="text"
          placeholder="Repository name"
          className="appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none"
          id="input-field"
          onChange={onChange}
          value={value}
        />
        <button
          type="button"
          id="#search-button"
          className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          onClick={onClick}
        >
          Find
        </button>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'
import Header from './header'

const Repo = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])
  const urlUser = `https://api.github.com/users/${userName}/repos`
  useEffect(() => {
    fetch(urlUser)
      .then((r) => r.json())
      .then((arr) => {
        if (Array.isArray(arr)) {
          setRepos(arr)
        } else {
          throw new Error(JSON.stringify(arr))
        }
      })
      .catch((e) => console.log(e))
  }, [urlUser])

  return (<>
      <Head title="Repositories" />
      <Header accUserName={userName} />
      <div className="flex justify-center items-center h-screen pt-20">
        <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {repos.map((rep) => (
            <li
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              key={rep.id}
            >
              <Link
                to={`/${userName}/${rep.name}`}
                className="block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                {rep.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

Repo.propTypes = {}

export default React.memo(Repo)

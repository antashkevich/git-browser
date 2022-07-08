import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Head from './head'
import Header from './header'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const [text, setText] = useState('')
  const urlReadme = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
  useEffect(() => {
    fetch(urlReadme)
      .then((r) => r.text())
      .then((str) => {
        setText(str)
      })
      .catch((e) => console.log(e))
  }, [urlReadme])

  return (
    <>
      <Head title="Readme" />
      <Header accUserName={userName} reposList={userName} />
      <div id="description" className="flex justify-start flex-col items-center h-screen pt-20">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)

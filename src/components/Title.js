import React from 'react'

function Title({title}) {
  return (
    <div className='App'>
       <h2>{title?title:"GoDaddy GitHub Repos"}</h2>
    </div>
  )
}

export default Title
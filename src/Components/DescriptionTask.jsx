import React from 'react'

function DescriptionTask({ text }) {
  return (
    <div className='descriptiontaskcontainer'>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default DescriptionTask
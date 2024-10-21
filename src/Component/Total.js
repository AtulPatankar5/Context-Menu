import React from 'react'

export default function Total(props) {
  return (
    <div className='customDiv'>
        <h3>Total Component</h3>
        <hr></hr>
        <h2>Total :{props.total}</h2>
    </div>
  )
}

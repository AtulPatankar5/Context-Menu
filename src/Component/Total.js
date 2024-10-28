import React, { useContext } from 'react'
import TotalContext from '../Global_Store/total-context';


export default function Total(props) {
  const total = useContext(TotalContext);
  return (
    <div className='customDiv'>
      <h3>Total Component</h3>
      <hr/>
      <h2>Total :{total}</h2>
    </div>

    // <TotalContext.Consumer>
    //   {(total) => {
    //     return (
    //       <div className='customDiv'>
    //         <h3>Total Component</h3>
    //         <hr></hr>
    //         <h2>Total :{total}</h2>
    //       </div>
    //     )
    //   }}
    // </TotalContext.Consumer>
  )
}

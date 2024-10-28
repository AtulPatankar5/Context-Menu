import React, { useContext } from "react";
import TotalContext from "../Global_Store/total-context";
import Total from "./Total";

export default function Cart(props) {
  const total = useContext(TotalContext);
  return (
    <div className="customDiv">
      <h3>Cart Component</h3>
      <hr />
      <ul>
        {props.cart.map((product, index) => {
          return <li key={index}>{product.pName}</li>;
        })}
      </ul>
      {total}
    </div>


    // </TotalContext.Consumer>
    // <TotalContext.Consumer>
    //   {(total) => {
    //     return (
    //       <div className="customDiv">
    //         <h3>Cart Component</h3>
    //         <hr />
    //         <ul>
    //           {props.cart.map((product, index) => {
    //             return <li key={index}>{product.pName}</li>;
    //           })}
    //         </ul>
    //         {total}
    //       </div>
    //     )
    //   }
    // }

    // </TotalContext.Consumer>
  );
}

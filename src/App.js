import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Cart from "./Component/Cart";
import Total from "./Component/Total";
import TotalContext from "./Global_Store/total-context";

//Context-API: Whenever there is a need to have some data pieces available to various/ multiple components,for the entire application, then you use the Context-API
//Create a new Context, create a Provider, and a consumer
function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const product = [
    {
      pName: "Apple",
      price: 20,
    },
    {
      pName: "Orange",
      price: 10,
    },
    {
      pName: "WaterMelon",
      price: 40,
    },
    {
      pName: "Grapes",
      price: 80,
    },
  ];

  let handleProdChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart = [...cart];
    let obj = { pName, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setCart(tCart);
    setTotal(tPrice);
  };

  return (
    <div className="App">
      <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr />
        <select onChange={handleProdChange}>
          {product.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.pName} - ${product.price}
              </option>
            );
          })}
        </select>
      </div>
      <TotalContext.Provider value={total}>
        <Cart cart={cart} />
        <Total />
      </TotalContext.Provider>
    </div>
  );
}

export default App;

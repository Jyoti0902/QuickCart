// Homepage.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Cart from './Cart';
import Shop from "./Shop";
import SearchBar from "./SearchBar";
import products from "../Data";

function Homepage() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (item) => {
    let isPresent = cart.some((product) => product.id === item.id);
    if (isPresent) {
      setWarning("Item is already added to your cart");
      setTimeout(() => {
        setWarning("");
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.findIndex((data) => data.id === item.id);
    const tempArr = [...cart];
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart(tempArr);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);

    const filteredData = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      <SearchBar setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {show ? (
        <Shop data={filteredData} handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && <div className="warning">{warning}</div>}
    </React.Fragment>
  );
}

export default Homepage;
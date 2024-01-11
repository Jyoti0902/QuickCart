import React from 'react'
import products from '../Data';
import '../CSScomponents/ShopCSS.css';
import Cards from '../MyComponents/Cards';

const Shop = ({handleClick}) => {
  return (
    <section>
        {
            products.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Shop
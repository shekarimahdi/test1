import React from 'react'

const ProductCard = ({product}) => {

  return (
    <div>
      <h1 className='product_name'>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  )
}

export default ProductCard
import React from 'react'


const Product = ({count}) => {
  console.log('re-render')
  return (
    <>
    <h1>Product {count}</h1>
    </>
  )
}

export {Product}
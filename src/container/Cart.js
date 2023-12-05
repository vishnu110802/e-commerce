import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const list = useSelector((state) => state.cart.list)
  return (
    <div>
      cart {list[0].title}
    </div>
  )
}

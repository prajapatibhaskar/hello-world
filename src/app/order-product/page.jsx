'use client'

import { useRouter } from "next/navigation";

const OrderProduct = () => {

    // for routing 'programatically'
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order');
        router.push('/home')
    }

  return (
    <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default OrderProduct
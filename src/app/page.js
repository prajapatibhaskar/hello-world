"use client"

import { useState } from "react"

export default function Home() {

  const [fruitName, setFruitName] = useState("Apple🍎")

  // regular function 
  const fruit = () => {
    setFruitName(fruitName === "Apple🍎" ? "Orange🍊" : "Apple🍎")
  }

  // a component
  const InnerComponent = () => {
    return <h1>This is an inner component...</h1>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Events, Functions and States.</h1>
      <h1>Fruit: {fruitName}</h1>
      <button onClick={fruit}>Click me</button>
      <InnerComponent />
    </main>
  )
}

// a component
const User = (props) => {
  return (
    <div>
      <h2>Username is {props.name}</h2>
    </div>
  )
}
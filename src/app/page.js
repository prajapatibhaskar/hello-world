"use client"

import { useState } from "react"

export default function Home() {

  const [fruitName, setFruitName] = useState("Apple🍎")

  // regular function 
  const fruit = () => {
    const fruits = ["Orange🍊", "Apple🍎", "Banana🍌", "Pear🍐", "Watermelon🍉", "Pineapple🍍"];
    let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    if (randomFruit == fruitName){
      randomFruit = fruits[(fruits.indexOf(randomFruit) + 1) % fruits.length];
    }
    setFruitName(randomFruit)
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

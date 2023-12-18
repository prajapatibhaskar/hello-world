export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <User name="Bhaskar"/>
      <User name="Kiran"/>
      <User name="Nitish"/>
      <User name="Sarvesh"/>
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
import Link from "next/link"

const NewHomePage = () => {
  return (
    <>
        <h1>Home Page!</h1>
        <Link href={'/login'}>Login</Link>
        <Link href={'products'}>Products</Link>
    </>
  )
}

export default NewHomePage
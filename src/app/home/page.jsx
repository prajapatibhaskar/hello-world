import Link from "next/link"

const NewHomePage = () => {
  return (
    <>
        <Link href={'/login'}>Login</Link>
        <Link href={'products'}>Products</Link>
    </>
  )
}

export default NewHomePage
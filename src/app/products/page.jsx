import Link from "next/link";

const Product = () => {
  const productId = 100;

  return (
    <div>
      <Link href={"/home"}>Home Page</Link>
      <h1>
        <strong>Products List</strong>
      </h1>
      <h1>
        <Link href={"products/1"}>Product 1</Link>
      </h1>
      <h1>
        <Link href={"products/2"}>Product 2</Link>
      </h1>
      <h1>
        <Link href={"products/3"} replace>
          Product 3
        </Link>
      </h1>
      <h1>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h1>
    </div>
  );
};

export default Product;

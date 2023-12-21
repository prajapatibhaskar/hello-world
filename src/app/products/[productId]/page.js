"use client"

const ProductId = ({params}) => {
    console.log(params);
    return(
        <div>
            <h1>Details about Product {params.productId}</h1>
        </div>
    )
}

export default ProductId; 
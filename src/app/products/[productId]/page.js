// to define a dynamic metadata
// export a generateMetadata function, that returns a metadata object from a layout.js or page.js file
export const generateMetadata = ({params}) => {
    let title = `Samsung ${params.productId}`
    return {
        title: title
    }
}

const ProductId = ({params}) => {
    return(
        <div>
            <h1>Details about Product {params.productId}</h1>
        </div>
    )
}

export default ProductId; 
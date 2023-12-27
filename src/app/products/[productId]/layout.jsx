const ProductDetailsLayout = ({children}) => {

    const getRandomInt = (count) => {
        return Math.floor(Math.random() * count)
    }
    
    // Random number to simulate a runtime error
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error Loading Product...")
    }
    
    return(
        <div>
            {children}
            <h1>Featured Products...</h1>
        </div>
    )
}

export default ProductDetailsLayout;
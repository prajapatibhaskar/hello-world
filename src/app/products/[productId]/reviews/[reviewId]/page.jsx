"use client"

import { notFound } from "next/navigation";

// returns random integer between 0 and count (0 inclusive)
const getRandomInt = (count) => {
    return Math.floor(Math.random() * count)
}

const ReviewDetail = ({params}) => {
    
    // Random number to simulate a runtime error
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error...")
    }

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return(
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    )
}

export default ReviewDetail; 
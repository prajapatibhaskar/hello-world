"use client"

import { notFound } from "next/navigation";

const ReviewDetail = ({params}) => {
    console.log(params);
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
"use client"

const ReviewDetail = ({params}) => {
    console.log(params);
    return(
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    )
}

export default ReviewDetail; 
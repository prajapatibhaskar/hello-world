"use client"

export default function Lecture({params}){

    console.log(params);

    return(
        <div>
            <h1>Day of college: {params.lectures[0]}</h1>
            <h1>Lecture: {params.lectures[1]}</h1>
        </div>
    )
}
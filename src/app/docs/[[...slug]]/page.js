
export const generateMetadata = ({params}) => {
  let title = `Docs`;
  if (params.slug?.length === 2) {
    title = `${params.slug[0]}/${params.slug[1]}` 
  } else if (params.slug?.length === 1){
    title = `${params.slug[0]}` 
  }
  return{
    title: title
  }
}


const Docs = ({ params }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature: {params.slug[0]} and concept: {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1){
    return (
      <h1>
        Viewing docs for feature: {params.slug[0]}
      </h1>
    );
  }
  return <h1>Viewing Docs Home Page</h1>
};

export default Docs;

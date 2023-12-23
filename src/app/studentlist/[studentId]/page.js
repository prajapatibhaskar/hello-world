export const generateMetadata = ({ params }) => {
  let title = `Student/${params.studentId}`;
  return {
    title: title,
  };
};

const Student = ({ params }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Student Details</h1>
      <h1>ID: {params.studentId}</h1>
    </div>
  );
};

export default Student;

import Link from "next/link";
import "./studentlist.css";

const StudentList = () => {
  const students = [
    { name: "Bhaskar", id: 1 },
    { name: "Nitish", id: 2 },
    { name: "Sarvesh", id: 3 },
    { name: "Kiran", id: 4 },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/studentlist/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

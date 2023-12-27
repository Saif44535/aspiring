import ListItem from "./ListItem";

const StudentList = (props) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto my-20 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Registerations
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {props.students.map((student) => (
            <ListItem
              id={student.id}
              key={student.id}
              name={student.firstName}
              mail={student.email}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;

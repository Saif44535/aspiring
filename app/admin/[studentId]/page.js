const { default: DetailsPage } = require("@/components/Admin/DetailsPage");

const studentDetails = ({ params }) => {
  return <DetailsPage id={params.studentId} />;
};

export default studentDetails;

import JobForm from "../../components/recruiter/JobForm";

import {
  createJob,
} from "../../api/recruiterJobApi";

const CreateJob = () => {

  const handleSubmit =
    async (data) => {

      await createJob(
        data
      );

      alert(
        "Job Created"
      );
    };

  return (
    <>
      <h2>
        Create Job
      </h2>

      <JobForm
        onSubmit={
          handleSubmit
        }
      />
    </>
  );
};

export default CreateJob;
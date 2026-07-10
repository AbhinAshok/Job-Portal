import CompanyForm from "../../components/recruiter/CompanyForm";

import {
  createCompany,
} from "../../api/companyApi";

const CreateCompany = () => {

  const handleSubmit =
    async (data) => {

      await createCompany(
        data
      );

      alert(
        "Company Created"
      );
    };

  return (
    <>
      <h2>
        Create Company
      </h2>

      <CompanyForm
        onSubmit={
          handleSubmit
        }
      />
    </>
  );
};

export default CreateCompany;
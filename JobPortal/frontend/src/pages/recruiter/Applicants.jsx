import {
  useEffect,
  useState,
} from "react";

import ApplicantCard from "../../components/recruiter/applicants/ApplicantCard";
import ApplicantDrawer from "../../components/recruiter/applicants/ApplicantDrawer";
import ApplicantFilters from "../../components/recruiter/applicants/ApplicantFilters";

import {
  getApplicants,
  updateApplicationStatus,
} from "../../api/applicantApi";

const Applicants = () => {

  const [applicants,
    setApplicants] =
    useState([]);

  const [selectedApplicant,
    setSelectedApplicant] =
    useState(null);

  const [drawerOpen,
    setDrawerOpen] =
    useState(false);

  const [filters,
    setFilters] =
    useState({
      search: "",
      status: "",
    });

  const loadApplicants =
    async () => {

      const data =
        await getApplicants(
          filters
        );

      setApplicants(
        data.results ||
          data
      );
    };

  useEffect(() => {
    loadApplicants();
  }, [filters]);

  const handleView =
    (applicant) => {

      setSelectedApplicant(
        applicant
      );

      setDrawerOpen(
        true
      );
    };

  const handleStatusUpdate =
    async (
      id,
      status
    ) => {

      await updateApplicationStatus(
        id,
        {
          status,
        }
      );

      loadApplicants();
    };

  return (
    <div>

      <h2>
        Applicants
      </h2>

      <ApplicantFilters
        filters={filters}
        setFilters={
          setFilters
        }
      />

      {applicants.map(
        (applicant) => (

          <ApplicantCard
            key={
              applicant.id
            }
            applicant={
              applicant
            }
            onView={
              handleView
            }
          />

        )
      )}

      <ApplicantDrawer
        open={
          drawerOpen
        }
        applicant={
          selectedApplicant
        }
        onClose={() =>
          setDrawerOpen(
            false
          )
        }
        onStatusUpdate={
          handleStatusUpdate
        }
      />

    </div>
  );
};

export default Applicants;
import {
  useEffect,
  useState,
} from "react";

import {
  getCompanies,
} from "../../api/companyApi";

const Companies = () => {

  const [companies,
    setCompanies] =
    useState([]);

  useEffect(() => {

    getCompanies().then(
      setCompanies
    );

  }, []);

  return (
    <div>

      <h2>
        My Companies
      </h2>

      {companies.map(
        (company) => (

          <div
            key={
              company.id
            }
          >
            <h3>
              {company.name}
            </h3>

            <p>
              {
                company.location
              }
            </p>

          </div>

        )
      )}

    </div>
  );
};

export default Companies;
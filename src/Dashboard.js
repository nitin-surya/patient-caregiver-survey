import React, { useState } from "react";
import Select from "react-select";
import "./Dashboard.css";

const providers = [
  { value: "Venessa Payne APRN", label: "Venessa Payne APRN" },
  {
    value: "Gabrielle Jiminez-Murphy DNP, APRN, FNP-C",
    label: "Gabrielle Jiminez-Murphy DNP, APRN, FNP-C",
  },
  { value: "Dr. Muhammad Sanaullah", label: "Dr. Muhammad Sanaullah" },
];

const generateRandomData = () => {
  const data = {};
  providers.forEach((provider) => {
    data[provider.value] = {
      experience: {
        yes: Math.floor(Math.random() * 1001),
        uncertain: Math.floor(
          Math.random() * (1000 - Math.floor(Math.random() * 1001))
        ),
        no:
          1000 -
          (Math.floor(Math.random() * 1001) +
            Math.floor(
              Math.random() * (1000 - Math.floor(Math.random() * 1001))
            )),
      },
      visit: Array.from({ length: 10 }, () => Math.floor(Math.random() * 6)),
    };
  });
  return data;
};

const initialData = generateRandomData();

const Dashboard = () => {
  const [selectedProvider, setSelectedProvider] = useState(providers[0].value);
  const data = initialData[selectedProvider];

  const handleChange = (selectedOption) => {
    setSelectedProvider(selectedOption.value);
  };

  return (
    <div className="dashboard">
      <h1>Patient and Caregiver Survey</h1>

      <div className="select-container">
        <label htmlFor="provider-select">Provider name:</label>
        <Select
          id="provider-select"
          options={providers}
          onChange={handleChange}
          className="react-select"
          classNamePrefix="select"
          styles={{
            control: (provided) => ({
              ...provided,
              width: "300px", // Set width to a more reasonable size
              margin: "0 auto", // Center the dropdown
              borderColor: "#ccc",
              boxShadow: "none",
              "&:hover": {
                borderColor: "#4CAF50",
              },
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 9999, // Ensure the dropdown is above other elements
            }),
          }}
        />
      </div>

      <div className="table-container">
        <h2>Experience During Transitional Visit</h2>
        <table>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Yes</th>
              <th>Uncertain</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {selectedProvider} informed me about how to contact a provider
                during evenings, weekends, and holidays
              </td>
              <td>{data.experience.yes}</td>
              <td>{data.experience.uncertain}</td>
              <td>{data.experience.no}</td>
            </tr>
            <tr>
              <td>
                {selectedProvider} services have reduced my trips to the
                Emergency Room and/or hospital
              </td>
              <td>{data.experience.yes}</td>
              <td>{data.experience.uncertain}</td>
              <td>{data.experience.no}</td>
            </tr>
            <tr>
              <td>
                {selectedProvider} services have helped me achieve my goals
              </td>
              <td>{data.experience.yes}</td>
              <td>{data.experience.uncertain}</td>
              <td>{data.experience.no}</td>
            </tr>
            <tr>
              <td>
                Would you recommend {selectedProvider} to your family and
                friends?
              </td>
              <td>{data.experience.yes}</td>
              <td>{data.experience.uncertain}</td>
              <td>{data.experience.no}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>Data Based on Your Most Recent Visit</h2>
        <table>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Excellent</th>
              <th>Very Good</th>
              <th>Good</th>
              <th>Fair</th>
              <th>Poor</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Level of support provided to your family and/or caregiver",
              "Provider spending adequate time with you and not seem rushed",
              "Provider’s level of courtesy and friendliness",
              "Provider’s explanation of your medical condition and treatment",
              "Provider’s level of trustworthiness",
              "Provider’s level of compassion and caring",
              "Ability to obtain a timely house call for an urgent problem",
              "Staff’s level of courtesy and caring when the office is called",
              "Courtesy and friendliness of the nursing staff",
              "Overall quality of care provided by " + selectedProvider,
            ].map((question, index) => (
              <tr key={index}>
                <td>{question}</td>
                <td>{data.visit[index] === 5 ? 100 : 0}</td>
                <td>{data.visit[index] === 4 ? 100 : 0}</td>
                <td>{data.visit[index] === 3 ? 100 : 0}</td>
                <td>{data.visit[index] === 2 ? 100 : 0}</td>
                <td>{data.visit[index] === 1 ? 100 : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

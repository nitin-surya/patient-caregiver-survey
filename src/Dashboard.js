import React, { useState } from "react";
import Select from "react-select";
import "./Dashboard.css";
import logo from "./logo.jpeg";
import { ProvidersList, SampleData, Title } from "./DashboardData";

const providers = ProvidersList;

// Sample static data for providers
const initialData = SampleData;
const Dashboard = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const data = selectedProvider ? initialData[selectedProvider] : null;

  const handleChange = (selectedOption) => {
    setSelectedProvider(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>{Title}</h1>
      </div>

      <div className="select-container">
        <label htmlFor="provider-select">Provider name:</label>
        <Select
          id="provider-select"
          options={providers}
          onChange={handleChange}
          className="react-select"
          classNamePrefix="select"
        />
      </div>

      <div className="content">
        <div className="column">
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
                {[
                  `${
                    selectedProvider || "-"
                  } informed me about how to contact a provider during evenings, weekends, and holidays`,
                  `${
                    selectedProvider || "-"
                  } services have reduced my trips to the Emergency Room and/or hospital`,
                  `${
                    selectedProvider || "-"
                  } services have helped me achieve my goals`,
                  `Would you recommend ${
                    selectedProvider || "-"
                  } to your family and friends?`,
                ].map((question, index) => (
                  <tr key={index}>
                    <td>{question}</td>
                    <td>{data ? data.experience.yes : "-"}</td>
                    <td>{data ? data.experience.uncertain : "-"}</td>
                    <td>{data ? data.experience.no : "-"}</td>
                  </tr>
                ))}
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
                  "Overall quality of care provided by " +
                    (selectedProvider || "-"),
                ].map((question, index) => (
                  <tr key={index}>
                    <td>{selectedProvider ? question : "-"}</td>
                    <td>{data ? data.visit[index][4] : "-"}</td>
                    <td>{data ? data.visit[index][3] : "-"}</td>
                    <td>{data ? data.visit[index][2] : "-"}</td>
                    <td>{data ? data.visit[index][1] : "-"}</td>
                    <td>{data ? data.visit[index][0] : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="column">
          {/* New Table for Scheduling and Recommendations */}
          <div className="table-container">
            <h2>Feedback</h2>
            <table>
              <thead>
                <tr>
                  <th>Questions</th>
                  <th>Highly Likely</th>
                  <th>Likely</th>
                  <th>Neutral</th>
                  <th>Unlikely</th>
                  <th>Highly Unlikely</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    How easy is it to schedule an appointment with the house
                    call team?
                  </td>
                  <td>{data ? data.feedback.scheduling.highlyLikely : "-"}</td>
                  <td>{data ? data.feedback.scheduling.likely : "-"}</td>
                  <td>{data ? data.feedback.scheduling.neutral : "-"}</td>
                  <td>{data ? data.feedback.scheduling.unlikely : "-"}</td>
                  <td>
                    {data ? data.feedback.scheduling.highlyUnlikely : "-"}
                  </td>
                </tr>
                <tr>
                  <td>
                    How likely are you to recommend this house call service to
                    your colleagues and friends?
                  </td>
                  <td>
                    {data ? data.feedback.recommendation.highlyLikely : "-"}
                  </td>
                  <td>{data ? data.feedback.recommendation.likely : "-"}</td>
                  <td>{data ? data.feedback.recommendation.neutral : "-"}</td>
                  <td>{data ? data.feedback.recommendation.unlikely : "-"}</td>
                  <td>
                    {data ? data.feedback.recommendation.highlyUnlikely : "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* New Table for "How Do You Hear About Us?" */}
          <div className="table-container">
            <h2>How Do You Hear About Us?</h2>
            <table>
              <thead>
                <tr>
                  <th>Response</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online Advertisement</td>
                  <td>
                    {data ? data.feedback.referral.onlineAdvertisement : "-"}
                  </td>
                </tr>
                <tr>
                  <td>Social Media</td>
                  <td>{data ? data.feedback.referral.socialMedia : "-"}</td>
                </tr>
                <tr>
                  <td>Referral from a Friend/Family</td>
                  <td>{data ? data.feedback.referral.referral : "-"}</td>
                </tr>
                <tr>
                  <td>Healthcare Provider Recommendation</td>
                  <td>
                    {data ? data.feedback.referral.healthcareProvider : "-"}
                  </td>
                </tr>
                <tr>
                  <td>Website Search</td>
                  <td>{data ? data.feedback.referral.websiteSearch : "-"}</td>
                </tr>
                <tr>
                  <td>Community Event</td>
                  <td>{data ? data.feedback.referral.communityEvent : "-"}</td>
                </tr>
                <tr>
                  <td>Print Advertisement (Flyers, Brochures)</td>
                  <td>
                    {data ? data.feedback.referral.printAdvertisement : "-"}
                  </td>
                </tr>
                <tr>
                  <td>Email Newsletter</td>
                  <td>{data ? data.feedback.referral.emailNewsletter : "-"}</td>
                </tr>
                <tr>
                  <td>Online Review or Testimonial</td>
                  <td>{data ? data.feedback.referral.onlineReview : "-"}</td>
                </tr>
                <tr>
                  <td>Television or Radio Advertisement</td>
                  <td>{data ? data.feedback.referral.television : "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

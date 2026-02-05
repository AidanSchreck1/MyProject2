import { useState } from "react";
import JobapplicationCard from "../components/JobApplicationCard";
import JobApplicationModal from "../components/JobApplicationModal";
import { type ApplicationStatus } from "../components/JobApplicationCard";

export interface Application {
  companyLogo?: string;
  companyName: string;
  jobTitle: string;
  jobId: string;
  jobLink: string;
  status: ApplicationStatus;
  appliedDate: string;
  notes?: string;
}

const MOCK_DATA: Application[] = [
  {
    companyLogo:
      "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small/amazon-logo-amazon-icon-transparent-free-png.png",
    companyName: "Amazon",
    jobTitle: "Software engineer intern",
    jobId: "XXX",
    jobLink: "string",
    status: "Pending",
    appliedDate: "Nov 20, 2023",
    notes: "Great opportunity!",
  },
  {
    companyLogo:
      "https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png",
    companyName: "Google",
    jobTitle: "Software engineer intern",
    jobId: "YYY",
    jobLink: "string",
    status: "Accepted",
    appliedDate: "Dec 28, 2023",
  },
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [applications, setApplications] = useState<Application[]>(MOCK_DATA);

  const handleOnCreateApplication = ({
    companyName,
    jobTitle,
    jobId,
    jobLink,
    status,
    appliedDate,
    notes,
  }: Application) => {
    const newApplicationRecord = {
      companyName,
      jobTitle,
      jobId,
      jobLink,
      status,
      appliedDate,
      notes,
    };
    setApplications([...applications, newApplicationRecord]);
  };

  return (
    <section className="mx-24 my-10">
      <div className="flex justify-between items-end">
        <p className="text-2xl font-semibold">Job Applications ({applications.length})</p>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Application
        </button>
      </div>

      {applications.length == 0 ? (
        <p>No applications yet</p>
      ) : (
        applications.map((application) => (
          <JobapplicationCard
            key={application.jobId}
            imgSrc={
              application.companyLogo
                ? application.companyLogo
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2NAjCcjjk7ac57mKCQvgWVTmP0ysxnzQnQ&s"
            }
            companyName={application.companyName}
            jobTitle={application.jobTitle}
            jobId={application.jobId}
            appliedDate={application.appliedDate}
            status={application.status}
          />
        ))
      )}

      <JobApplicationModal
        isModalOpen={isModalOpen}
        onCreate={handleOnCreateApplication}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};

export default HomePage;

export type ApplicationStatus =
  | "Accepted"
  | "Rejected"
  | "Ghosted"
  | "Interviewing"
  | "Pending";

interface JobapplicationCardProps {
  imgSrc: string;
  companyName: string;
  jobTitle: string;
  jobId: string;
  status: ApplicationStatus;
  appliedDate: string;
}

const JobapplicationCard = ({
  imgSrc,
  companyName,
  jobTitle,
  jobId,
  status,
  appliedDate,
}: JobapplicationCardProps) => {
  const statusColor = () => {
    if (status == "Accepted") {
      return "badge-success";
    } else if (status == "Rejected") {
      return "badge-error";
    } else if (status == "Interviewing") {
      return "badge-info";
    } else if (status == "Pending") {
      return "badge-warning";
    } else if (status == "Ghosted") {
      return "badge-neutral";
    }
  };
  return (
    <div className="rounded-lg border mt-4 p-2 flex justify-between">
      <div className="flex items-center">
        <img src={imgSrc} className="h-10 w-10" />
        <div className="ml-2">
          <p className="font-bold">{companyName}</p>
          <p className="font-extralight text-small">
            {jobTitle} - {jobId}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className={`badge ${statusColor()}`}>{status}</p>
        <p className="text-xs font-light mt-2">Applied on {appliedDate}</p>
      </div>
    </div>
  );
};

export default JobapplicationCard;

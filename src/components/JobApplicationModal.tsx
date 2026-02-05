import { useState } from "react";
import { type ApplicationStatus } from "./JobApplicationCard";
import { type Application } from '../pages/HomePage';

interface JobApplicationModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    onCreate: ({companyLogo, companyName, jobTitle, jobId, jobLink, status, appliedDate, notes}:
        Application) => void;
}

const JobApplicationModal = ({
    isModalOpen, 
    setIsModalOpen,
    onCreate,
}: JobApplicationModalProps) => {
    const [companyLogo, setCompanyLogo] =
    useState<string>('');
    const [companyName, setCompanyName] = 
    useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>
    ('');
    const [jobId, setJobId] = useState<string>('');
    const [jobLink, setJobLink] = useState<string>('');
    const [status, setStatus] = useState<ApplicationStatus>('Pending');
    const [appliedDate, setAppliedDate] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    if (!isModalOpen) return null;

    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                <p className="text-2xl font-bold">Add Job Application</p>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Add Company Logo</legend>
                    <input type="text" className="input w-full" placeholder="Type in company logo"
                        onChange={(e) => setCompanyLogo(e.target.value)}
                    />
                    <p className="label">Optional</p>

                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Company Name</legend>
                    <input type="text" className="input w-full" placeholder="Type in company name" 
                    onChange = {(e) => setCompanyName(e.target.value)}
                    />
                    
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job</legend>
                    <input type="text" className="input w-full" placeholder="Type in job name" 
                    onChange = {(e) => setJobTitle(e.target.value)}
                    />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job ID</legend>
                    <input type="text" className="input w-full" placeholder="Type in job id" 
                        onChange={(e) => setJobId(e.target.value)}
                    />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job Link</legend>
                    <input type="text" className="input w-full" placeholder="Type in job link" 
                        onChange={(e) => setJobLink(e.target.value)}
                    />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Status</legend>
                    <label className="select w-full">
                        <span className="label">Status</span>
                        <select onChange={(e) => setStatus(e.target.value as ApplicationStatus)}>
                            <option>Pending</option>
                            <option>Accepted</option>
                            <option>Rejected</option>
                            <option>Ghosted</option>
                            <option>Interviewing</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Applied Date</legend>
                    <input type="date" className="input w-full" 
                        onChange={(e) => setAppliedDate(e.target.value)}
                    />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Notes</legend>
                    <textarea className="textarea w-full" placeholder="Add in your notes"
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                    <p className="label">Optional</p>

                </fieldset>
                <div className="text-right">
                    <button className="btn btn-primary btn-sm"
                    onClick={() => {
                    onCreate({
                        companyLogo,
                        companyName, 
                        jobTitle, 
                        jobId, 
                        jobLink, 
                        status, 
                        appliedDate, 
                        notes,
                    
                        });

                            setIsModalOpen(false);
                        }}
                    >
                    Create
                    </button>
                </div>
                
                
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setIsModalOpen(false)}>close</button>
            </form>
        </dialog>
    )
}

export default JobApplicationModal;
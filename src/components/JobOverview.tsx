import { useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface JobDetailItemProps {
  label: string;
  value: string | number | undefined;
  editable?: boolean;
  onEdit?: () => void;
}

const JobDetailItem = ({ label, value, editable = false, onEdit }: JobDetailItemProps) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-gray-600">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-gray-900">{value || '—'}</span>
      {editable && (
        <button onClick={onEdit} className="text-gray-400 hover:text-gray-600">
          <PencilSquareIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  </div>
);

interface JobDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  status: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  tags: string[];
  jobReference: string;
  positionName: string;
  remote: boolean;
  officeAddress?: string;
  headcount: number;
  experienceLevel?: string;
  expectedCloseDate?: string;
  contractDetails: string;
  openDate: string;
  closeDate?: string;
  jobIndustry?: string;
}

const MOCK_JOB: JobDetail = {
  id: '1',
  title: 'Software Engineer',
  company: 'Eleven Dev',
  location: 'Australian Capital Territory, Australia',
  salary: {
    min: 2000,
    max: 5000,
    currency: 'USD'
  },
  status: 'Active',
  description: 'Software engineering position for experienced developers',
  responsibilities: [
    'Analyze requirements',
    'Create solutions',
    'Work with team',
    'Write code',
    'Maintain systems'
  ],
  requirements: [
    'CS Degree',
    'Programming skills',
    'Web technologies',
    'Analysis skills',
    'Database knowledge'
  ],
  tags: ['React', 'TypeScript', 'Node.js'],
  jobReference: 'L4W74357',
  positionName: 'Software Engineer',
  remote: true,
  headcount: 1,
  contractDetails: 'Full time',
  openDate: '2024-11-06',
};

export default function JobOverview() {
  const [job] = useState<JobDetail>(MOCK_JOB);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-600 mb-6">{job.description}</p>

          <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-3">Skills and Qualifications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Job Managers</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <PencilSquareIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <div className="space-y-2 divide-y">
            <JobDetailItem label="Job Reference" value={job.jobReference} />
            <JobDetailItem label="Position Name" value={job.positionName} />
            <JobDetailItem label="Job Location" value={job.location} />
            <JobDetailItem label="Remote" value={job.remote ? 'Yes' : 'No'} />
            <JobDetailItem label="Office Address" value={job.officeAddress} editable />
            <JobDetailItem label="Headcount" value={job.headcount} editable />
            <JobDetailItem label="Experience Level" value={job.experienceLevel} editable />
            <JobDetailItem label="Expected Close Date" value={job.expectedCloseDate} editable />
            <JobDetailItem 
              label="Salary Range" 
              value={`${job.salary.min.toLocaleString()} ${job.salary.currency} - ${job.salary.max.toLocaleString()} ${job.salary.currency}`} 
            />
            <JobDetailItem label="Contract Details" value={job.contractDetails} />
            <JobDetailItem label="Open Date" value={job.openDate} />
            <JobDetailItem label="Close Date" value={job.closeDate} editable />
            <JobDetailItem label="Job Industry" value={job.jobIndustry} editable />
          </div>
        </div>
      </div>
    </div>
  );
}
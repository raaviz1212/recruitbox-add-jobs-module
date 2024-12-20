import { useParams } from 'react-router-dom';
import {
  MapPinIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

export default function JobDetails() {
  const stats = [
    { name: 'Open Positions', stat: '12' },
    { name: 'Active Applications', stat: '45' },
    { name: 'Interviews Scheduled', stat: '8' },
    { name: 'Offers Extended', stat: '3' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Job Details</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <TagIcon className="h-6 w-6 text-white" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
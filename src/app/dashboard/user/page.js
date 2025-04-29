import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageName } from '../../../components/pageFeature/pageFeaturesServer';

const quickLinks = [
  { title: 'View Profile', href: '/profile', description: 'Check your profile details' },
  { title: 'Edit Settings', href: '/settings', description: 'Customize your preferences' },
  { title: 'Your Projects', href: '/projects', description: 'Manage your projects' },
];

const recentActivity = [
  { title: 'Project Updated', description: 'You updated "InnovateX" project', time: '2 hours ago' },
  { title: 'Profile Edited', description: 'You changed your bio', time: 'Yesterday' },
  { title: 'New Connection', description: 'You connected with Jane Doe', time: '2 days ago' },
];

const userStats = [
  { label: 'Projects', value: '12' },
  { label: 'Connections', value: '45' },
  { label: 'Contributions', value: '28' },
];

const QuickLinkCard = ({ title, href, description }) => (
  <Link href={href} className="bg-orange-50 rounded-xl p-4 shadow-sm transition-all hover:shadow-md hover:bg-orange-100">
    <h3 className="text-md font-semibold text-orange-900">{title}</h3>
    <p className="mt-1 text-sm text-orange-700">{description}</p>
  </Link>
);

const ActivityCard = ({ title, description, time }) => (
  <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
    <h3 className="text-md font-semibold text-orange-900">{title}</h3>
    <p className="mt-1 text-sm text-orange-700">{description}</p>
    <p className="mt-1 text-xs text-orange-600">{time}</p>
  </div>
);

const StatCard = ({ label, value }) => (
  <div className="bg-orange-50 rounded-xl p-4 shadow-sm text-center">
    <p className="text-lg font-bold text-orange-900">{value}</p>
    <p className="text-sm text-orange-700">{label}</p>
  </div>
);

const UserPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-orange-50 to-white py-8">
      <PageName pageName="DASHBOARD" />
      <p className="mt-4 text-gray-600 text-lg">Welcome back, User!</p>

      <div className="w-full max-w-md sm:max-w-lg mt-6 px-4">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/leonardo-da-vinci-quote-2.png"
            fill
            alt="User avatar"
            className="rounded-full object-cover shadow-lg"
            sizes="(max-width: 640px) 100vw, 128px"
            priority
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {userStats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-orange-900 border-b-2 border-orange-200 pb-2 mb-4">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <QuickLinkCard
                key={index}
                title={link.title}
                href={link.href}
                description={link.description}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold text-orange-900 border-b-2 border-orange-200 pb-2 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                description={activity.description}
                time={activity.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
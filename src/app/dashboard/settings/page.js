import React from 'react';
import { PageName } from '../../../components/pageFeature/pageFeaturesServer';

const settingsSections = [
  {
    title: 'ACCOUNT',
    description: 'Manage your account details, such as username, email, and password.',
    items: [
      { label: 'Username', value: 'Edit your username' },
      { label: 'Email', value: 'Update your email address' },
      { label: 'Password', value: 'Change your password' },
    ],
  },
  {
    title: 'NOTIFICATIONS',
    description: 'Customize your notification preferences.',
    items: [
      { label: 'Email Notifications', value: 'Enable or disable email alerts' },
      { label: 'Push Notifications', value: 'Manage push notification settings' },
    ],
  },
  {
    title: 'PRIVACY',
    description: 'Control your privacy settings and data sharing preferences.',
    items: [
      { label: 'Profile Visibility', value: 'Set who can view your profile' },
      { label: 'Data Sharing', value: 'Manage data sharing with third parties' },
    ],
  },
];

const SettingsCard = ({ title, description, items }) => (
  <div className="bg-blaze-orange-50 rounded-2xl p-4 mb-4 shadow-sm transition-all hover:shadow-md">
    <h2 className="text-lg font-semibold text-blaze-orange-900 border-b-2 border-blaze-orange-200 pb-2">
      {title}
    </h2>
    <p className="mt-2 text-blaze-orange-700">{description}</p>
    <div className="mt-4 space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-blaze-orange-800 font-medium">{item.label}</span>
          <button className="text-blaze-orange-600 hover:text-blaze-orange-800 transition-colors text-sm">
            {item.value}
          </button>
        </div>
      ))}
    </div>
  </div>
);

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blaze-orange-50 to-white py-8">
      <PageName pageName="SETTINGS" />
      <p className="mt-4 text-gray-600 text-lg">Customize your experience</p>

      <div className="w-full max-w-md sm:max-w-lg mt-6 px-4">
        {settingsSections.map((section, index) => (
          <SettingsCard
            key={index}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
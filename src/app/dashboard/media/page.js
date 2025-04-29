"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/button';
import { PageName } from '../../../components/pageFeature/pageFeaturesServer';

const sampleImages = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  src: '/leonardo-da-vinci-quote-2.png',
  alt: 'Sample image',
  name: `Image ${index + 1}`,
  caption: 'Sample caption for this image',
  uploaded: '2025-04-18',
}));

const imageDetails = [
  { tabName: 'Image Name', text: 'Sample Image' },
  { tabName: 'Alternate Text', text: 'Sample image description' },
  { tabName: 'Caption', text: 'This is a sample caption' },
  { tabName: 'Date Uploaded', text: '2025-04-18' },
];

const ImageBox = ({ src, alt, onClick }) => (
  <div
    className="relative bg-white rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="object-cover w-full h-full"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-orange-700 opacity-0 hover:opacity-20 transition-opacity"></div>
  </div>
);

const DetailTab = ({ tabName, text }) => (
  <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
    <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2">
      {tabName}
    </h3>
    <p className="mt-2 text-gray-700 text-sm">{text}</p>
  </div>
);

const MediaPage = () => {
  const [selectedImage, setSelectedImage] = React.useState(sampleImages[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <PageName pageName="MEDIA" />
      <p className="mt-4 text-gray-600 text-lg">Manage your images</p>

      <div className="w-full max-w-7xl mt-6 px-4">
        <div className="flex justify-end mb-4">
          <Button
            buttonText="Upload Image"
            className="bg-orange-700 text-white hover:bg-orange-800 transition-colors px-4 py-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section: Image Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
              {sampleImages.map((image) => (
                <ImageBox
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>

          {/* Right Section: Image Details */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                Image Details
              </h2>
              {imageDetails.map((detail, index) => (
                <DetailTab
                  key={index}
                  tabName={detail.tabName}
                  text={selectedImage ? selectedImage[detail.tabName.toLowerCase().replace(' ', '')] || detail.text : detail.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
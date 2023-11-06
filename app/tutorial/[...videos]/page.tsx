"use client"
import React from 'react';

interface VideosProps {
  params: {
    // Define the structure of the 'params' object
    // You can add specific properties with their data types
    // For example, you might have an 'id' property of type string.
    videos: string;
  };
}

const Videos: React.FC<VideosProps> = ({ params }) => {
  console.log(params);

  return (
    <div>
      <h1>Chemistry - {params.videos[0]}</h1>
      <h1>Teacher - {params.videos[1]}</h1>
    </div>
  );
};

export default Videos;

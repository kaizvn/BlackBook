import Gallery from 'react-grid-gallery';
import React from 'react';

import { evidences } from '../mockData';

const EvidentsComponent = ({ evidenceIds }) => {
  const images = [];
  for (let evidenceId of evidenceIds) {
    let evidence = evidences.find(evidence => evidenceId === evidence.id);

    if (evidence) {
      evidence.src = evidence.photo;
      evidence.thumbnail = evidence.photo;
      evidence.thumbnailWidth = 320;
      evidence.thumbnailHeight = 212;

      images.push(evidence);
    }
  }

  return (
    <Gallery
      images={images}
      enableImageSelection={false}
      backdropClosesModal={true}
      showLightboxThumbnails={true}
    />
  );
};

export default EvidentsComponent;

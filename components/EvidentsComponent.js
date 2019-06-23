import Gallery from 'react-grid-gallery';
import React from 'react';

const IMAGES = [
  {
    src: '/static/evidence/1.jpg',
    thumbnail:
      '/static/evidence/1.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: 'After Rain (Jeshu John - designerspics.com)'
  },
  {
    src: '/static/evidence/2.jpg',
    thumbnail:
      '/static/evidence/2.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: 'Boats (Jeshu John - designerspics.com)'
  },

  {
    src: '/static/evidence/3.jpg',
    thumbnail:
      '/static/evidence/3.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: '/static/evidence/4.jpg',
    thumbnail:
      '/static/evidence/4.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: '/static/evidence/5.jpg',
    thumbnail:
      '/static/evidence/5.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];
class EvidentsComponent extends React.Component {
  render() {
    return (
      <Gallery
        images={IMAGES}
        enableImageSelection={false}
        backdropClosesModal={true}
        showLightboxThumbnails={true}
      />
    );
  }
}

export default EvidentsComponent;

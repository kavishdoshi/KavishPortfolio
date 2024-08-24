// EmbedWebsite.js
import React from 'react';

const EmbedWebsite = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={url}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Embedded Website"
      />
    </div>
  );
};

export default EmbedWebsite;

import React from 'react';

const EmbeddedHomePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://takeuforward.org/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="TakeUForward Home"
      />
    </div>
  );
};

export default EmbeddedHomePage;

import React from 'react';
import Layout from '@theme/Layout';

export default function superduper() {
  return (
    <Layout description="superduper cool page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          margin: 'auto',
          padding: '1rem'
        }}>
        <img style={{borderRadius: "0.5rem"}} src='/img/picklerick.gif'></img>
      </div>
    </Layout>
  );
}
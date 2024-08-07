import type { NextPage } from 'next';
import Head from 'next/head';

const Frame: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discover Locally Sourced Treasures</title>
        <meta name="description" content="Explore the magic of locally sourced treasures. Discover unique products that are locally made and sourced." />
      </Head>
      <div style={{ width: '100%', position: 'relative', height: '47.125rem', overflow: 'hidden', fontFamily: 'Poppins, sans-serif', color: '#252525', textAlign: 'left', fontSize: '4.5rem' }}>
        <h1 style={{ margin: 0, position: 'absolute', top: '3.625rem', left: '4.563rem', fontWeight: 'bold', width: '28.313rem' }}>
          Discover the Magic of Locally Sourced Treasures!
        </h1>
        <div style={{ position: 'absolute', top: '38.938rem', left: 0, width: '20.813rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#fff0f0' }}>
          <div style={{ borderRadius: '36px', backgroundColor: '#1897dc', display: 'flex', alignItems: 'center', padding: '1.5rem 3rem' }}>
            <h3 style={{ margin: 0, fontWeight: 'bold', lineHeight: '1.125rem' }}>Explore</h3>
          </div>
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '82.625rem', height: '41rem' }}>
            <img style={{ position: 'absolute', top: '19.125rem', left: '24.188rem', borderRadius: '24px', width: '21.063rem', height: '21.875rem', objectFit: 'cover' }} alt="Product Home Plant" src="product image home plant 3.png" />
            <img style={{ position: 'absolute', top: '19.125rem', left: '0.563rem', borderRadius: '24px', width: '22.063rem', height: '21.875rem', objectFit: 'cover' }} alt="Product Home Flower" src="product home 2 flower.png" />
            <img style={{ position: 'absolute', top: 0, left: 0, borderRadius: '24px', width: '45.25rem', height: '16.188rem', objectFit: 'cover' }} alt="Product Home" src="product home 1.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame;

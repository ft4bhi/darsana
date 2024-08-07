import type { NextPage } from 'next';
import Head from 'next/head';

const OurEvents: NextPage = () => {
  const events = [
    {
      date: '25',
      month: 'apr',
      title: 'Seminar: Caring for children with autism',
      header: 'Event header.png',
      image: 'Arrow button.png',
    },
    {
      date: '13',
      month: 'apr',
      title: 'A day with our wonderful children',
      header: 'Event header.png',
      image: 'Arrow button.png',
    },
  ];

  return (
    <>
      <Head>
        <title>Our Events - Making a Difference</title>
        <meta name="description" content="Join us at our upcoming events and make a difference in the lives of children with autism." />
      </Head>
      <div style={{ width: '100%', position: 'relative', padding: '2rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem', borderBottom: '1px solid #e5e5e5', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#1d2130', margin: 0 }}>Our Events</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          {events.map((event, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1897dc',
                borderRadius: '0.75rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                maxWidth: '600px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '500', lineHeight: '1.2' }}>{event.date}</div>
                  <div style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '2px' }}>{event.month}</div>
                </div>
                <div style={{ maxWidth: '80%' }}>
                  <img src={event.header} alt="Event Header" style={{ width: '12.2rem', height: 'auto' }} />
                  <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#fff', margin: '1rem 0 0' }}>{event.title}</h2>
                </div>
                <img src={event.image} alt="Arrow Button" style={{ width: '3.594rem', height: '3.394rem' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurEvents;

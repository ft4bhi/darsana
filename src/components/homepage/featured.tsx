import { NextPage } from 'next';
import Head from 'next/head';

const images = [
  {
    id: 1,
    src: '@/public/why.jpg',
    alt: 'Frame Image 1',
    className: 'absolute top-[2.625rem] left-[1.063rem] w-[1.5rem] h-[6.563rem]',
  },
  {
    id: 2,
    src: '/path/to/Frame.png',
    alt: 'Frame Image 2',
    className: 'absolute top-[2.625rem] left-[84.375rem] w-[1.563rem] h-[6.563rem]',
  },
  {
    id: 3,
    src: '/path/to/OIP 1.png',
    alt: 'OIP Image 1',
    className: 'w-[13.019rem] h-[6.125rem]',
  },
  {
    id: 4,
    src: '/path/to/OIP 1.png',
    alt: 'OIP Image 2',
    className: 'w-[10.563rem] h-[6.125rem]',
  },
  {
    id: 5,
    src: '/path/to/times-now-noida-film-city-television-channel-logo-png-favpng-nDRzLhweR1SsjL4ThCpb2aEbc 1.png',
    alt: 'Logo Image',
    className: 'w-[13.438rem] h-[9.063rem]',
  },
  {
    id: 6,
    src: '/path/to/1113957 1.png',
    alt: '1113957 Image',
    className: 'w-[15.094rem] h-[9.063rem]',
  },
  {
    id: 7,
    src: '/path/to/div.field.png',
    alt: 'Field Image',
    className: 'w-[8.6rem] h-[7.125rem]',
  },
];

const Featured: NextPage = () => {
  return (
    <>
      <Head>
        <title>Featured On</title>
        <meta name="description" content="Check out where we've been featured." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Featured On" />
        <meta property="og:description" content="Check out where we've been featured." />
        <meta property="og:image" content="/path/to/your/image.png" />
        <meta property="og:url" content="https://www.yourwebsite.com/featured" />
        <link rel="canonical" href="https://www.yourwebsite.com/featured" />
      </Head>
      <div className="w-full relative h-auto text-center text-[2.5rem] font-roboto">
        <div
          className="absolute top-[-0.625rem] left-[45.063rem] w-[16.563rem] overflow-hidden flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/path/to/Frame.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}
        >
          <div className="self-stretch shadow-md rounded-sm bg-[#fff] h-[9.063rem] overflow-hidden shrink-0" />
        </div>

        {/* Map through the images array to render image elements */}
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}

        <div className="absolute top-[0rem] left-[5.722rem] w-[16.569rem] h-[9.188rem] overflow-hidden flex flex-col items-center justify-start">
          <div className="w-full h-[9.063rem] flex flex-row items-center justify-end">
            <img className="w-[13.019rem] h-[6.125rem] object-cover" alt="" src="/path/to/OIP 1.png" />
            <div className="self-stretch w-[16.569rem] shadow-md rounded-sm bg-[#fff] overflow-hidden flex flex-row items-center justify-center p-[1.25rem] box-border ml-[-9.063rem]">
              <div className="flex flex-col items-start justify-start">
                <img className="w-[10.563rem] h-[6.125rem] object-cover" alt="" src="/path/to/OIP 1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-0.937rem] left-[64.813rem] w-[16.569rem] h-[9.188rem] overflow-hidden flex flex-col items-center justify-start">
          <div className="w-full h-[9.063rem] flex flex-row items-center justify-end">
            <img className="w-[13.019rem] h-[6.125rem] object-cover" alt="" src="/path/to/OIP 1.png" />
            <div className="self-stretch w-[16.569rem] shadow-md rounded-sm bg-[#fff] overflow-hidden flex flex-row items-center justify-center p-[1.25rem] box-border ml-[-9.063rem]">
              <div className="flex flex-col items-start justify-start">
                <img className="w-[13.438rem] h-[9.063rem] object-cover" alt="" src="/path/to/times-now-noida-film-city-television-channel-logo-png-favpng-nDRzLhweR1SsjL4ThCpb2aEbc 1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0.125rem] left-[25.375rem] shadow-md rounded-sm bg-[#fff] w-[16.625rem] h-[9.063rem] overflow-hidden flex flex-row items-center justify-center p-[1.25rem] box-border">
          <img className="w-[8.6rem] h-[7.125rem] object-cover" alt="" src="/path/to/div.field.png" />
        </div>
        <div className="absolute top-[0rem] left-[45.041rem] w-[16.556rem] overflow-hidden flex flex-col items-center justify-center">
          <div className="w-full relative h-[9.188rem]">
            <div className="absolute top-[0.125rem] left-[45.041rem] shadow-md rounded-sm bg-[#fff] w-full h-[9.063rem] overflow-hidden" />
            <img className="absolute top-[0rem] left-[0.693rem] w-[15.094rem] h-[9.063rem] object-cover" alt="" src="/path/to/1113957 1.png" />
          </div>
        </div>
        <div className="absolute top-[-4.562rem] left-[34.5rem] w-[13.75rem] overflow-hidden flex flex-col items-end justify-center">
          <h1 className="m-0 w-[13.75rem] text-inherit leading-[2.4rem] font-extrabold flex items-center justify-center h-[2.438rem]">Featured On</h1>
        </div>
      </div>
    </>
  );
};

export default Featured;

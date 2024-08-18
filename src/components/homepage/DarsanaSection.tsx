import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface DarsanaSectionProps {
  programLogo: string | StaticImageData;
  galleryLogo: string | StaticImageData;
  conversationLogo: string | StaticImageData;
}

const DarsanaSection: React.FC<DarsanaSectionProps> = ({
  programLogo,
  galleryLogo,
  conversationLogo
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/conversations" passHref>
            <FeatureCard
              imageSrc={conversationLogo}
              title="Conversations"
              description="Engage in meaningful discussions"
            />
          </Link>
          <Link href="/gallery" passHref>
            <FeatureCard
              imageSrc={galleryLogo}
              title="Gallery"
              description="Explore our visual journey"
            />
          </Link>
          <Link href="/programs" passHref>
            <FeatureCard
              imageSrc={programLogo}
              title="Programs"
              description="Discover our impactful initiatives"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="text-center cursor-pointer">
      <div className="mb-4 flex justify-center">
        <Image src={imageSrc} alt={title} width={100} height={100} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DarsanaSection;

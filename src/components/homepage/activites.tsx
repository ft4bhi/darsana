import { NextPage } from 'next';
import { useCallback } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import image56 from '@/assets/home/image56.png'

const Activities: NextPage = () => {
    const onImageClick = useCallback(() => {
        // Add your code here for image click functionality
    }, []);

    return (
        <>
            <Head>
                <title>Activities | Your Website Name</title>
                <meta name="description" content="Explore our activities including conversations, gallery, and programs." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="w-full relative h-auto text-center text-6xl text-gray-800 font-poppins flex flex-col items-center">
                <h3 className="mt-10 mb-5 text-4xl font-bold">Activities</h3>
                <div className="relative w-full flex flex-wrap justify-center">
                    <div className="relative w-1/3 max-w-[319px] h-[118.1px] flex flex-col items-start justify-start py-0 pl-4 pr-0">
                        <h3 className="m-0 text-inherit leading-[33px] capitalize font-bold">Conversation</h3>
                    </div>
                    <div className="relative w-1/3 max-w-[445.3px] h-auto">
                        <h3 className="m-0 absolute top-[195px] left-1/2 transform -translate-x-1/2 text-inherit leading-[33px] capitalize font-bold">Gallery</h3>
                    </div>
                    <div className="relative w-1/3 max-w-[172.4px] h-auto">
                        <h3 className="m-0 absolute top-[198px] left-1/2 transform -translate-x-1/2 text-inherit leading-[33px] capitalize font-bold">Program</h3>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt-5">
                    <Link href="/path-to-conversation" passHref>
                        <div className="relative w-[149px] h-[149px] cursor-pointer" onClick={onImageClick}>
                            <Image src={image56.src} alt="Conversation" layout="fill" objectFit="cover" />
                        </div>
                    </Link>
                    <Link href="/path-to-gallery" passHref>
                        <div className="relative w-[196px] h-[189px] cursor-pointer" onClick={onImageClick}>
                            <Image src={image56.src} alt="Gallery" layout="fill" objectFit="cover" />
                        </div>
                    </Link>
                    <div className="relative w-[187px] h-[187px]">
                        <Image src={image56.src} alt="Program" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Activities;

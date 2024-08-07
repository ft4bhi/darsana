"use client"
import React from 'react';
import Slider from 'react-slick';
import Slide from './heroimage';

// Import images
import bijuschreiyanhomeheroimage from '@/assets/home/bijuschreiyanhomeheroimage.png';
import darsanaCommunityEventProgram from '@/assets/home/darsanaCommunityEvent Program.png';
import image17 from '@/assets/home/image17.png';

const ProductHero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };

    const slideData = [
        {
            id: 0,
            img: bijuschreiyanhomeheroimage.src,
            title: ""
        },
        {
            id: 1,
            img: darsanaCommunityEventProgram.src,
            title: ""
        },
        {
            id: 2,
            img: image17.src,
            title: ""
        }
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={item.title}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProductHero;

"use client"
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slides';


const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    }

    const slideData = [
        {
            id: 0,
            img: "/h1.jpg",
            title: " Trending item",
            mainTitle: "every body need it",
            price: '88'
        },
        {
            id: 1,
            img: "/h2.jpg",
            title: " Trending item",
            mainTitle: "low price", price: '22'
        },
        {
            id: 2,
            img: "/h3.jpg",
            title: " Trending item",
            mainTitle: "dont give up", price: '22'
        }
    ]

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>{slideData.map((item) => <Slide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                />)}</Slider >
            </div>
        </div>
    );
}

export default Hero;

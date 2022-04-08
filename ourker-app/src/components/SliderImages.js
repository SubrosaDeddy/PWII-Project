import React from 'react'
import Slider from 'react-slick'

const images = [
        {
          photo:
          "busqueda_filtros.jpg",
          label: "image1"
        },
        {
            photo:
            "cover.png",
            label: "image1"
          },
        {
          photo:
          'fondo1.jpg',
          label: "image2"
        }
      ];


export default function SliderImages() {
  var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slickNext: true,
        slickPrevious: true,
        swipe: true
      };
  
    return (
     <Slider {...settings}>
                {images.map((step) => (
                <div key={step.label}>
                    <img
                    src={step.photo}
                    alt={step.label}
                    style={{
                        height: "380px",
                        display: "block",
                        overflow: "hidden",
                        width: "100%"
                    }}
                    />
                </div>
                ))}
            </Slider>      
  )
}

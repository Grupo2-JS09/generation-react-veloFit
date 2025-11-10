import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  items: string[];
}

const MyCaroussel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Swiper
      // Instala os módulos que vamos usar
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="max-w-xl " // Exemplo de classe Tailwind
    >
      {items.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full  object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCaroussel;

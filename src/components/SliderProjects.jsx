import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const SliderProjects = ({ data }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="coverflow"
        modules={[Pagination, Autoplay, EffectCoverflow]}
        className="max-w-2xl w-full h-auto"
      >
        {data.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="Imagem do projeto" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderProjects;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="container mx-auto mt-8">
             <div>
            <Swiper
            pagination={{
                dynamicBullets: true,
              }}
              
                navigation={true}
                modules={[Navigation, Pagination]}
                loop={true}
                className='w-[500px] md:w-[768px] lg:w-[1024px] xl:w-[1280] 2xl:w-[1536px]  mySwipper'>
                <SwiperSlide>

                    <div
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                      className="hero min-h-screen "
                       style={{ backgroundImage: 'url(https://i.ibb.co/2YKNLsn/s1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className=' lg:max-w-2xl'>

                                <h1 className="mb-5 text-3xl sora-600 lg:text-5xl poppins-semibold">
                                
                                Unleash Your Creativity: Discover, Create, and Inspire with Craftopia</h1>
                                <p className="mb-5 poppins-medium">Discover the magic of creativity at Craftopia. Explore unique artworks, connect with fellow artisans, and unleash your artistic potential in a vibrant community of makers and creators.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#d4a37b] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"

                    className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/98ZVWKq/s2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            className="max-w-2xl">
                                <h1 className="mb-5 text-3xl sora-600 lg:text-5xl poppins-semibold">Crafting Dreams: Where Imagination Meets Artistry</h1>
                                <p className="mb-5 ">ash your imagination and bring your ideas to life with Craftopia. From stunning paintings to intricate crafts, find inspiration and tools to fuel your creativity every step of the way.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#d4a37b] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/ZGpTtBb/s3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            className="max-w-2xl">
                                <h1 className="mb-5 text-3xl sora-600 lg:text-5xl ">Craftopia: Where Artistry Meets Passion</h1>
                                <p className="mb-5 ">Join us at Craftopia and embark on a journey of artistic exploration. Dive into a world of colors, textures, and endless possibilities. Let your creativity soar and create masterpieces that captivate the soul.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#d4a37b] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default Banner;
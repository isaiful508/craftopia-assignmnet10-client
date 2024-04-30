
import { SlCalender } from "react-icons/sl";

const Events = () => {
    return (
        <div className="container lg:w-full md:w-full w-96 mx-auto mt-8 mb-8">
            <div className="text-center">
                <h2 className="text-4xl sora-600">Exhibition and Events</h2>
                <p className="sora-500 mt-2">Explore captivating exhibitions and vibrant events, showcasing diverse artistic talents and immersive <br />experiences, igniting creativity and cultural appreciation.</p>
            </div>

            <div className="bg-[#d4a37b] dark:bg-gray-100 text-black dark:text-gray-900 mt-8">

                <div className="container grid grid-cols-12 mx-auto">
                    <div className="flex flex-col justify-center col-span-12 align-middle bg-white dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto  background-position: center center; background-blend-mode: multiply; background-size: cover;"
                       
                    >

                        <div>
                        <img src="https://i.ibb.co/NK9fRfL/pexels-ekrulila-3246665.jpg" alt="" />
                        </div>

                    </div>

                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700 dark:divide-gray-300">
                        <div className="pt-6 pb-4 space-y-2">
                            <span className="text-[#d94426] sora-500 flex items-center gap-2"><SlCalender></SlCalender> 15 Feb - 14 Mar 25</span>
                            <h1 className="text-3xl sora-600">Summer Session 1</h1>
                            <p className="sora-500">A summer showcase of creativity, inspiration, culture, and community, igniting passion and imagination</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-[#d94426]">
                                <span className="text-[#d94426] sora-500">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span className="text-[#d94426] flex gap-2 items-center" > <SlCalender></SlCalender>04 Jan - 03 Feb 25</span>
                            <h1 className="text-3xl sora-600">Regular Session</h1>
                            <p className="sora-500">Explore diverse artworks at our ongoing exhibition, a celebration of creativity, culture, and artistic expression.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-[#d94426]">
                                <span className="sora-500 text-[#d94426]">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span className="text-[#d94426] flex gap-2"><SlCalender></SlCalender> 06 Dec - 07 Jan 25</span>
                            <h1 className="text-3xl sora-600">Encountering Pain</h1>
                            <p className="sora-500">Experience the raw emotions of life captured on canvas, a vivid journey through human emotions</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-[#d94426]">
                                <span className="text-[#d94426] sora-500">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
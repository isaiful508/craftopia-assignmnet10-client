

const NewsLetter = () => {
    return (
        <div
        className='lg:w-full md:w-full w-96 container mx-auto rounded-xl py-16 mb-10 text-black bg-[#d4a37b] px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl  text-2xl sora-500 py-2'>
                    Stay Updated with Our Arts And Crafts Insider Newsletter!
                    </h1>
                    <p className="sora-400">Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 flex w-full rounded-md text-black'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-gradient-to-r from-[#d4a37b] to-[#FFB400]  sora-400 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                           Subscribe
                        </button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our{' '}
                        <span className='text-[#FD650B]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
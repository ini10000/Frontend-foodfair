import React from 'react';

const HomePage = () => {
    return (
        <>
            {/* header container */}
            <header className=' py-10 shadow-md'>
                {/* header */}
                <div className='mx-auto px-10 container flex justify-between'>

                    {/* logo */}
                    <div>
                        <img src={require("../assert/logo.png")} alt="" />
                    </div>

                    {/* nav links */}
                    <div className='flex space-x-10 font-bold'>
                        <p className='hover:border-b-2 border-[#ff8a00]'>Why foodfair?</p>
                        <p className='hover:border-b-2 border-[#ff8a00]'>Become  a Vendor</p>
                        <p className='hover:border-b-2 border-[#ff8a00]'>FAQ</p>
                        <p className='hover:border-b-2 border-[#ff8a00]'>Privacy Policies</p>
                    </div>

                    {/* reg section
                     */}
                    <div>
                        <button className='py-2 px-6 font-bold border-2 border-black rounded-md mx-3 hover:bg-[#ff8a00] hover:text-white hover:border-white'>Log In</button>
                        <button className='py-2 px-6 font-bold text-white rounded-md bg-[#ff8a00] hover:bg-white hover:text-black hover:border-2 hover:border-black'>Sign Up</button>
                    </div>
                </div>
            </header>




            {/* main body */}
            <main className='mt-20 text-center'>

                {/* hero section */}
                <div>
                    <p className='font-bold text-4xl'>The meeting place for all </p>
                    <p className='font-bold text-5xl uppercase py-4 text-[#ff8a00]'>food vendors  <span className='text-black'>&</span> foodies</p>
                    <div className='w-full flex justify-center items-center text-center]'>
                        <p className='w-[55%]'> lorem jgvd scdschdsh cjkdshckd scjdscjhdschd djscbehnef rekeg ffere sbhgcdsc lorem jgvd scdschdsh cjkdshckd scjdscjhdschd djscbehnef cjkdshckd scjdscjhdschd  </p>
                    </div>
                </div>


                {/* search bar container */}
                <div className='  flex justify-center items-center my-4 space-x-2'>

                    <div className='w-[30%] border-2 border-gray-200 flex py-2 px-4 rounded-lg shadow-sm'>
                        {/* location image */}
                        <img src={require('../assert/location_icon.png')} alt="" />
                        {/* input box */}
                        <input type="search" className=' px-4 w-full outline-none' placeholder='Enter Location' />
                    </div>

                    {/* search button */}
                    <div>
                        <button className='py-2 px-6 font-bold text-white rounded-md bg-[#ff8a00]'>Search</button>
                    </div>
                </div>


                {/* site analysis image */}
                <div className='my-[10%] flex items-center justify-center'>
                    <img src={require('../assert/food.png')} alt="" className='w-[60%]' />
                </div>


                {/* seaction conatiner */}
                <div className="bg-[#fef6eb] py-10 my-[10%] ">
                    {/* section titlw */}
                    <p className='text-center py-6 text-3xl font-bold'>How it works</p>


                    <div className=' flex justify-evenly items-center'>

                        {/* step1 */}
                        <div className='flex flex-col justify-center items-center'>
                            <img src={require('../assert/search-favorite.png')} alt="" className='w-[80px]' />
                            <div className='text-center font-semibold'>
                                <p>Sign Up as a</p>
                                <p>Vendor or Customer</p>
                            </div>
                        </div>

                        {/* step2 */}
                        <div className='flex flex-col justify-center items-center'>
                            <img src={require('../assert/location.png')} alt="" className='w-[80px]' />
                            <div className='text-center font-semibold'>
                                <p>Set Your Location</p>
                                <p>for delivery or Pick-up</p>
                            </div>
                        </div>

                        {/* step3 */}
                        <div className='flex flex-col justify-center items-center'>
                            <img src={require('../assert/user-add.png')} alt="" className='w-[80px]' />
                            <div className='text-center font-semibold'>
                                <p>Find Customers or</p>
                                <p>Vendor near you</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* categories container */}
                <div className='my-[10%] container mx-auto  px-10'>

                    {/* section title */}
                    <div className='flex'>
                        <p className='font-semibold text-3xl text-[#f9580a]'>CATEGORIES</p>
                        <img src={require('../assert/arrow-right.png')} alt="" />
                    </div>


                    {/* dish 1 */}
                    <div className='flex space-x-10 justify-center mt-10 '>

                        <div className='shadow-md w-[300px] rounded-md '>
                            <img src={require('../assert/img1.png')} alt="" className='' />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" />
                                </div>
                            </div>
                        </div>


                        {/* dish 2 */}
                        <div className='shadow-md w-[300px] rounded-md '>
                            <img src={require('../assert/img2.png')} alt="" />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" />
                                </div>
                            </div>
                        </div>


                        {/* dish3 */}
                        <div className='shadow-md w-[300px] rounded-md '>
                            <img src={require('../assert/img3.png')} alt="" />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" />
                                </div>
                            </div>
                        </div>


                        {/* dish4 */}
                        <div className='shadow-md w-[300px] '>
                            <img src={require('../assert/img4.png')} alt="" />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* customer review section */}
                <div className='my-[10%] container mx-auto'>
                    <p className='text-center py-6 text-3xl font-bold text-[#f9580a]'>CUSTOMER REVIEW</p>

                    <div className='flex space-x-6 justify-center items-center space-y-4'>

                        <div>
                            <img src={require('../assert/profile.png')} className={'w-[250px]'} alt="" />
                        </div>

                        <div className='shadow-lg w-[40%] px-4 py-10 text-left '>
                            <p>MICHAEL</p>
                            <div className='flex'>
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[30px]' />
                            </div>
                            <p className='py-4'>lorem jgvd scdschdsh cjkdshckd scjdscjhdschd djscbehnef rekeg ffere sbhgcdsc lorem jgvd scdschdsh cjkdshckd scjdscjhdschd djscbehnef cjkdshckd scjdscjhdschd</p>
                        </div>

                    </div>


                </div>


            </main>
        </>
    );
}

export default HomePage;

import React, { useEffect, useState } from 'react';
import logo from '../assets/bannerimg.jpg'
import ChefCard from './aboutChef/ChefCard';
import { Carousel } from 'flowbite-react';

const Home = () => {
    const [chefs, setChefs] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(err => setError(err))
    }, []);

    return (
        <div>
            {/* banner part.......... */}
            <div
                // style={{ backgroundImage: `url(${logo})` }}
                className='lg:flex my-4  bg-rose-50 rounded-lg'>
                <div className=' h-2/4 lg:h-full lg:w-6/12 text-center p-2 '>
                    <h1 className='text-4xl italic text-blue-600 my-6 lg:my-10'>Meet the Top Chef in Eupors</h1>

                    <p className='my-2 lg:my-4 mx-4 text-left italic'>
                        {/* <span className='text-xl text-blue-600'></span> */}
                        Top Chef is a cooking show that uses a progressive elimination format. The beginning of each season starts with twelve to nineteen professional chefs selected through auditions. The chefs are brought to the season's host city or state, which typically inspires themes throughout the season.
                    </p>
                    <p className='text-left p-4'> You want to know about more about Chef,then scroll down.</p>
                </div>
                <div className='bg-red-300 h-2/4 lg:h-full  lg:w-6/12'>

                    <img src={logo} alt="" />
                </div>
            </div>
            {/* Card part............ */}
            <section className=' my-16'>
                <h1 className='text-2xl lg:text-4xl my-4 italic' > Top 6 Chef in this regiouns.</h1>
                <div className='flex justify-evenly flex-wrap my-4 gap-8'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </section>
            {/* Another two sectionnn */}
            <section>
                <h1 className='text-2xl lg:text-4xl my-4 italic' > Meet another Famous Chef in this twon.</h1>

                <div className="h-56 sm:h-64 xl:h-screen 2xl:h-96">
                    <Carousel>
                        <img
                            src={logo}
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import logo from '../assets/bannerimg.jpg'
import ChefCard from './aboutChef/ChefCard';
import { Accordion, Carousel } from 'flowbite-react';

const Home = () => {
    const [chefs, setChefs] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        fetch('https://server-taupe-three.vercel.app/') // https://server-taupe-three.vercel.app/
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(err => setError(err))
    }, []);

    return (
        <div>
            {/* banner part.......... */}
            <div
                // style={{ backgroundImage: `url(${logo})` }}
                className='lg:flex my-8  bg-rose-50 rounded-lg'>
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
                <div className='flex justify-evenly flex-wrap my-4 h-full gap-8'>
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
            {/* 2nd section */}
            <section className='my-8'>
                <h1 className='text-2xl italic mb-8'>Know most asking Question about chef and recipes</h1>
                <Accordion collapseAll={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is important in chef?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Passion: A great chef has to be passionate about food and cooking. They have to genuinely enjoy the whole process of procuring, preparing, cooking and serving food and have to be able to design menus too. Stamina: An essential quality of a true chef is stamina.

                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What are 3 things chefs do?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                FChefs and head cooks typically do the following:
                                Check the freshness of food and ingredients.
                                Supervise and coordinate activities of cooks and other food preparation workers.
                                Develop recipes and determine how to present dishes.
                                Plan menus and ensure the quality of meals.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What do chef wear?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                A traditional chef's uniform includes a tall, pleated, white hat known as a torque blanche, a double-breasted jacket made from a thick, white, cotton cloth, an apron, and pants - usually black and white in a houndstooth pattern.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </section>
        </div>
    );
};

export default Home;
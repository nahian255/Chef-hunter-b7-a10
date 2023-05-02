import React, { useEffect, useState } from 'react';
import logo from '../assets/bannerimg.jpg'
import ChefCard from './aboutChef/ChefCard';

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
            <h1>home</h1>
            <div
                // style={{ backgroundImage: `url(${logo})` }}
                className='lg:flex '>
                <div className=' h-2/4 lg:h-full lg:w-6/12 text-center'>
                    <h1 className='text-xl'>this is the text section..</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi porro odit itaque possimus dolor autem, fuga vero numquam iure est cupiditate. Alias illum, inventore dolore eius quos consequatur iure quaerat.</p>
                    <p>Another paragrare section that make it more pimpleee</p>

                </div>
                <div className='bg-red-300 h-2/4 lg:h-full  lg:w-6/12'>
                    <h1>this is img section a huge cute img on that</h1>
                    <img src={logo} alt="" />
                </div>
            </div>
            <section className='bg-yellow-100 my-16'>
                <h1>Chef Section</h1>
                <div className='flex justify-evenly flex-wrap gap-8'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;
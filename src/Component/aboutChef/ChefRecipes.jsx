import { Accordion, Button, Rating, Toast } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {
    const data = useLoaderData()
    console.log(data);
    const { name, id, img, body, Likes, recipes, experience, recipe1, recipe1Ingredients, recipe1Method, recipe2, recipe2Ingredients, recipe2Method, recipe3, recipe3Ingredients, recipe3Method } = data;

    const handelAddFav = (event) => {
        event.currentTarget.disabled = true;
        console.log('clicked');
        toast("Added your Favorite")

    };
    return (
        <>
            {/* chef information */}
            <div
                // style={{ backgroundImage: `url(${logo})` }}
                className='lg:flex my-4  bg-rose-100 rounded-lg'>
                <div className=' h-2/4 lg:h-full lg:w-6/12 text-center p-2 '>
                    <h1 className='text-6xl italic text-blue-600 my-6 lg:my-10'>{name}</h1>
                    <p className='italic text-red-700'>Top famous Chef in Euroupe. </p>
                    <p className='my-2 lg:my-4 mx-4 text-left'><span className='text-xl text-blue-600'>{name}</span>{body}</p>
                    <p className='text-left p-4'>Number of recipes : 15 item</p>
                    <p className='text-left p-4'>Likes: {Likes}</p>
                </div>
                <div className='bg-red-300 h-2/4 lg:h-full  lg:w-6/12'>

                    <img src={img} alt="" />
                </div>
            </div>
            {/* recipies item........... */}
            <div className='my-8'>
                <h1 className=' my-2 lg:my-8 text-2xl lg:text-5xl  text-black italic'>Time to show some Famous recepi of  <span className='text-blue-500'>{name}</span></h1>
                <div className='p-4'>
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Name of the Recipe <span className='text-2xl font-medium italic text-teal-500'>{recipe1}</span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Ingredients</span> : {recipe1Ingredients}.
                                </p>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Cooking Method</span> : {recipe1Method}.
                                </p>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                </Rating>
                                <div className='my-2'>
                                    <Button
                                        onClick={handelAddFav}
                                        color="purple">
                                        Add to Favorite
                                    </Button>
                                    <ToastContainer />
                                </div>


                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Name of the Recipe <span className='text-2xl font-medium italic text-teal-500'>{recipe2}</span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Ingredients</span> : {recipe2Ingredients}.
                                </p>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Cooking Method</span> : {recipe2Method}
                                </p>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                </Rating>
                                <div className='my-2'>
                                    <Button color="purple">
                                        Add to Favorite
                                    </Button>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Name of the Recipe <span className='text-2xl font-medium italic text-teal-500'>{recipe3}</span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Ingredients</span> : {recipe3Ingredients}.
                                </p>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Cooking Method</span> : {recipe3Method}
                                </p>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                </Rating>
                                <div className='my-2'>
                                    <Button

                                        color="purple">
                                        Add to Favorite
                                    </Button>
                                </div>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div >
        </>
    );
};

export default ChefRecipes;
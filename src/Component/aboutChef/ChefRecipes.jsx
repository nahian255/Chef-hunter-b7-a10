import { Accordion } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const data = useLoaderData()
    console.log(data);
    const { name, id, img, Likes, recipes, experience, recipe1, recipe1Ingredients, recipe1Method, recipe2, recipe2Ingredients, recipe2Method, recipe3, recipe3Ingredients, recipe3Method } = data;

    return (
        <>
            <div
                // style={{ backgroundImage: `url(${logo})` }}
                className='lg:flex my-4 p-4 '>
                <div className=' h-2/4 lg:h-full lg:w-6/12 text-center '>
                    <h1 className='text-4xl '>{name}</h1>
                    <p>someting that happen </p>
                    <p>that is about chef bio</p>

                </div>
                <div className='bg-red-300 h-2/4 lg:h-full  lg:w-6/12'>

                    <img src={img} alt="" />
                </div>
            </div>
            <div className='my-8'>
                <h1 className='text-4xl text-red-500'>Time to show some Famous recepi of <span className='text-blue-500'>{name}</span></h1>
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

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default ChefRecipes;
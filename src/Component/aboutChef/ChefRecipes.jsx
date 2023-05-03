
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import RecipeItem from './RecipeItem';

const ChefRecipes = () => {
    const data = useLoaderData()
    console.log(data);

    const { name, id, img, body, Likes, recipes, experience, recipe1, recipe1Ingredients, recipe1Method, recipe2, recipe2Ingredients, recipe2Method, recipe3, recipe3Ingredients, recipe3Method } = data;

    const recepiData = data.recipe
    console.log(recepiData);

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

            <h1 className=' my-2 lg:my-8 text-2xl lg:text-5xl  text-black italic'>Time to show some Famous recepi of  <span className='text-blue-500'>{name}</span></h1>

            <div>
                {
                    recepiData.map(singleRecipe => <RecipeItem
                        singleRecipe={singleRecipe}
                    ></RecipeItem>)
                }
            </div>

        </>
    );
};

export default ChefRecipes;

import { Accordion, Button, Rating, Toast } from 'flowbite-react';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeItem = ({ singleRecipe }) => {
    const { name, ingredients, method
    } = singleRecipe

    // btn disable state
    const [isDisable, setIsDisable] = useState(false)

    const handelAddFav = (event) => {
        setIsDisable(true)
        console.log('clicked');
        toast("Added your Favorite")

    };

    return (
        <div>
            <div className='my-8'>
                <div className='p-4'>
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Name of the Recipe <span className='text-2xl font-medium italic text-teal-500'>{name}</span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Ingredients</span> : {ingredients}.
                                </p>
                                <p
                                    className="mb-2 text-gray-500 dark:text-gray-400"
                                >
                                    <span className='text-lg text-blue-700'> Cooking Method</span> : {method}.
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
                                        disabled={isDisable ? true : false}
                                        color="purple">
                                        Add to Favorite
                                    </Button>
                                    <ToastContainer />
                                </div>


                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div >
        </div>
    );
};

export default RecipeItem;
import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { name, id, img, Likes, recipes, experience } = chef
    return (
        <div>

            <div className="max-w-sm ">
                <Card imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Chef name : {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Experience : {experience}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Number of recipes : {recipes}
                    </p>
                    <div className='flex justify-evenly'>
                        <h1>Likes = {Likes}</h1>
                        <div>
                            <Link to={`/chef/${id}`}><Button color="dark">
                                View Recipes
                            </Button></Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ChefCard;
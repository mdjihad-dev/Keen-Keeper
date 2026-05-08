import React from 'react';
import { useLoaderData } from 'react-router';
import FriendCard from './../FriendCard';

const FriendDetails = () => {
    const friendData = useLoaderData();
    console.log(friendData);

    return (
        <div>
            
        </div>
    );
};

export default FriendDetails;
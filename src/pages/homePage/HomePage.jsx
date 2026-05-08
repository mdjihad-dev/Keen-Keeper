import React from 'react';
import Hero from '../../component/home/Hero';
import Count from '../../component/home/Count';
import Friends from '../../component/home/Friends';

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Hero/>
            <Count/>
            <Friends/>
        </div>
    );
};

export default HomePage;
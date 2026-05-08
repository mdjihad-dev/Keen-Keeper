import React from 'react';
import Hero from '../../component/home/Hero';
import Count from '../../component/home/Count';

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Hero/>
            <Count/>
        </div>
    );
};

export default HomePage;
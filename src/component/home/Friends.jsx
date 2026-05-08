import React, { Suspense, use } from 'react';
import FriendCard from '../ui/FriendCard';

const friendData = fetch('/friend.json').then(res => res.json());

const Friends = () => {
     const useData = use(friendData);

    return (
      <div className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl font-bold">Your Friends</h2>

        <Suspense fallback={<p>Loading...</p>}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 my-12">
                {useData.map(data => <FriendCard key={data.id} data={data}></FriendCard>)}
            </div>
        </Suspense>
      </div>
    );
};

export default Friends;
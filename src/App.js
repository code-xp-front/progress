import React from 'react';
import Hero from "./components/Hero/Hero";
import FollowAlong from "./components/Follow-along/Follow-along";

export default () => (
  <div className="App">
    <Hero />
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
  </div>
);
import React from "react";
import StreamsPage from "scenes/StreamsPage";
import FollowedStreamsPage from "scenes/FollowedStreamsPage";

const routes = [
  { 
    id: 0,
    text: "Main",
    path: "/",
    exact: true,
    main: () => <StreamsPage />
  },
  {
    id: 1,
    text: "Subscriptions",
    path: "/subscriptions",
    main: () => <FollowedStreamsPage />
  },
  { 
    id: 2,
    text: "Follows",
    path: "/follows",
    main: () => <h1>Follows</h1>
  },
  { 
    id: 3,
    text: "third",
    path: "/404",
    main: () => <h1>third</h1>
  }
];

export default routes;

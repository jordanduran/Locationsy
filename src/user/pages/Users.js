import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jordan Duran',
      image:
        'https://duckduckgo.com/?q=image+pexels&atb=v224-1&iax=images&ia=images&iai=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1133505%2Fpexels-photo-1133505.jpeg%3Fcs%3Dsrgb%26dl%3Dasphalt-blue-clouds-1133505.jpg%26fm%3Djpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jordan Duran',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffirstsiteguide.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fwhat-is-gravatar-1-1-700x313-1.png&f=1&nofb=1',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

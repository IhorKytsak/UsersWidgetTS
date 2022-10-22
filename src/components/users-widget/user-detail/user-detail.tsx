import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { UserType } from '../../../types';
import { UserInformation } from '../user-information/user-information';

import './styles.css';

interface UserDetailProps {
  user: UserType;
  setUserDetail: (user: UserType | null) => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ user, setUserDetail }) => {
  return (
    <div className='userDetails'>
      <section>
        <img
          className='avatar'
          src={`./images/${user.photo}`}
          alt={user.name}
        />
        <p className='name'>{user.name}</p>
        <p className='position'>{user.position}</p>
      </section>
      <section className='userInformation'>
        <UserInformation title='Phone' info={user.phone} type='phone' />
        <UserInformation title='URL' info={'https://example.com'} type='link' />
        <UserInformation title='Email' info={user.email} type='email' />
      </section>
      <button className='closeButton' onClick={(): void => setUserDetail(null)}>
        <AiOutlineClose size={25} />
      </button>
      <button className='sendButton'>Send message</button>
    </div>
  );
};

export { UserDetail };

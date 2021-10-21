import React, { useState } from 'react';
import Auth from '../utils/auth';

import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';


export default function SignUp() {
    
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, {error}] = useMutation(ADD_USER);

    const handleFormChange = (event) => {
        const { name, value} = event.target;
        setFormState({...formState, [name]: value})
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        try {
          const { data } = await addUser({
            variables: {
              ...formState
            }
          });
          console.log('===========');
          console.log(data);
    
          if (error) {
            throw new Error('something went wrong!');
          }
    
        //   const { token, user } = await response.json();
        //   console.log(user);
          Auth.login(data.addUser.token);
        } catch (err) {
          console.error(err);
        //   setShowAlert(true);
        }
    
        setFormState({
          username: '',
          email: '',
          password: '',
        });
      };

    return (
        <div className='container'>
            <form>
            <input
             name='email'
             value={formState.email} 
             type='text'
             placeholder='email..'
             onChange={handleFormChange}
            >
            </input>
            <input
            name='username'
            value={formState.username}
            type='text'
            placeholder='username..'
            onChange={handleFormChange}
            >
            </input>
            <input
            name='password'
            value={formState.password}
            type='text'
            placeholder='password..'
            onChange={handleFormChange}
            >
            </input>
            </form>
            <button
            type= 'submit'
            onClick={handleFormSubmit}
            >
            Submit
            </button>
        </div>
    )
}



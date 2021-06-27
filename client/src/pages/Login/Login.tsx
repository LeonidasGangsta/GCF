import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { authUser } from '../../api/users';
import { useUserContext } from '../../context/UserContext';
import './Login.scss';

type FormData = {
  username: string,
  password: string,
}

type LoginResponseType = {
  id: number,
  firstname: string,
  lastname: string,
}

const Login: React.FC = () => {
  const history = useHistory();
  const { updateUserData, isLoggedIn } = useUserContext();
  const { register, handleSubmit } = useForm<FormData>({
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })

  const onSubmit: SubmitHandler<FormData> = ({ username, password }) => {
    authUser(username, password)
      .then(({ firstname, lastname, id }: LoginResponseType) => {
        updateUserData({
          id,
          firstName: firstname,
          lastName: lastname,
        })
      })
      .catch((error) => {
        console.error(error)
      });
  };

  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
      history.push('/');
      console.log('object')
    }
  }, [isLoggedIn]);

  return (
    <div className="login-page">
      <form className="login-page__login" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-page__login__title-section">
          <h1 className="login-page__login__title-section__title">
            GCF Login
          </h1>
          <span>
            Log in on the GCF page to see all our courses
          </span>
        </div>
        <hr className="login-page__separator"/>
        <input
          className="login-page__login__input"
          type="text"
          {...register('username')}
        />
        <input
          className="login-page__login__input"
          type="password"
          {...register('password')}
        />
        <button type="submit" className="login-page__login__submit">
          Log in
        </button>
      </form>
      <div className="login-page__extra-info">
        <span className="login-page__extra-info__title">
          This is a test
        </span>
      </div>
    </div>
  );
};

export default Login;

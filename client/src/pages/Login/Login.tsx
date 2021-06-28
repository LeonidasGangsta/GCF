import React, { useEffect, useState } from 'react';
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
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FormData> = ({ username, password }) => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

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
        <hr className="login-page__separator" />
        <input
          className="login-page__login__input"
          type="text"
          placeholder="username"
          {...register('username', {
            required: 'Please insert an username'
          })}
        />
        {errors.username && (
          <span className="login-page__login__error">
            {errors.username.message}
          </span>
        )}
        <input
          className="login-page__login__input"
          type="password"
          placeholder="password"
          {...register('password', {
            required: 'Please type in a valid password'
          })}
        />
        {errors.password && (
          <span className="login-page__login__error">
            {errors.password.message}
          </span>
        )}
        <button
          type="submit"
          className="login-page__login__submit"
          disabled={isLoading}
        >
          Log in
        </button>
      </form>
      <div className="login-page__extra-info">
        <h2 className="login-page__extra-info__title">
          Please log in
        </h2>
        <span className="login-page__extra-info__description">
          Log in on our website in order to check all our courses and learn from the hand of experts by $0 on <strong>DEMAND</strong>.
        </span>
      </div>
    </div>
  );
};

export default Login;

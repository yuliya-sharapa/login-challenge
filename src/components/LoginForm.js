import React from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import {UserLoginSchema} from '../validations/UserValidation'

export const LoginForm = () => {

  const {register, handleSubmit, errors} = useForm({
      resolver: yupResolver(UserLoginSchema)
  });
  

  const onSubmit = ({email, password}) => {
    alert(`email: ${email}, password: ${password}`);
  };

  return (
    <div className="container">
      <div className="mt-3">
      <h3>Log in</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Enter you email:</label>
                <input
                    className="form-control"
                    ref={register }
                    id="email"
                    name="email"
                    type="text"
                />
            {errors.email && <small class="form-text text-muted">{errors.email.message}</small>}
            </div>
            
            <div className="form-group">
            <label htmlFor="password">Enter your password: </label>
            <input
                className="form-control"
                ref={register}
                id="password"
                name="password"
                type="password"
            />
            {errors.password && <small class="form-text text-muted">{errors.password.message}</small>}
            </div>
            
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Log in</button>
            </div>
            </form>
        </div>
    </div>
  );
};
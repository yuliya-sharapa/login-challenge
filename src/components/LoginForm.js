import React, {useContext} from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import {UserLoginSchema} from '../validations/UserValidation';
import {useHistory} from 'react-router-dom';
import {loginRes} from '../api'
import UserContext from '../context/UserContext'

export const LoginForm = () => {

  const {register, handleSubmit, errors} = useForm({
      resolver: yupResolver(UserLoginSchema)
  });
  const history = useHistory();
  const {setUserData} = useContext(UserContext);
  

  const onSubmit = async ({email, password}) => {
    const loginUser = {email, password}
    await loginRes(loginUser).then((data)=>{
      setUserData({
        token: data.token,
        user:data.user
      });
      localStorage.setItem('auth-token', data.token)
      if(data.token){
        history.push('/users');
      } else {
        alert('Incorrect credentials')
      }
    })
  };

  return (
    <div className="container">
      
      <div className="mt-5 p-5 mx-auto bg-light rounded" style={{width: 400}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center mb-3">Log in</h2>       
            <div className="form-group">
              <input 
                  className="form-control"
                  ref={register }
                  name="email"
                  type="text"
                  placeholder="Email"
                  />
                {errors.email && <small className="form-text text-muted">{errors.email.message}</small>}
            </div>
            <div class="form-group">
                <input 
                  className="form-control"
                  ref={register}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <small className="form-text text-muted">{errors.password.message}</small>}
            </div>
            <div class="form-group">
                <button type="submit" className="btn btn-primary btn-block font-weight-bold">Log in</button>
            </div>    
        </form>
    </div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}
        
    </div>
  );
};
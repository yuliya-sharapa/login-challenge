import React from 'react';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import {UserSchema} from '../validations/UserValidation';

export const UserForm = ({user, onSubmit}) => {

    const {register, handleSubmit, errors} = useForm( {
        resolver: yupResolver(UserSchema),
        defaultValues: {
            name: user ? user.name : "",
            lastName: user ? user.lastName : "",
            email: user ? user.email : "",
            password: user ? user.password : "",
            dni: user ? user.dni : "",
            address: user ? user.address : "",
        },
    } );

    const submitHandler = handleSubmit((data)=>{
        onSubmit(data);
    });

    return (
        <form onSubmit={submitHandler}>

            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    className="form-control"
                    ref={register }
                    id="name"
                    name="name"
                    type="text"
                />
            {errors.name && <small class="form-text text-muted">{errors.name.message}</small>} 
            </div>
            
            <div className="form-group">
            <label htmlFor="lastName">Last name: </label>
            <input
                className="form-control"
                ref={register}
                id="lastName"
                name="lastName"
                type="text"
            />
            {errors.lastName && <small class="form-text text-muted">{errors.lastName.message}</small>}
            </div>

            <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
                className="form-control"
                ref={register}
                id="email"
                name="email"
                type="text"
            />
            {errors.email && <small class="form-text text-muted">{errors.email.message}</small>} 
            </div>

            <div className="form-group">
            <label htmlFor="password">Password: </label>
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
            <label htmlFor="dni">DNI: </label>
            <input
                className="form-control"
                ref={register}
                id="dni"
                name="dni"
                type="text"
            />
            {errors.dni && <small class="form-text text-muted">{errors.dni.message}</small>} 
            </div>


            <div className="form-group">
            <label htmlFor="address">Address: </label>
            <input
                className="form-control"
                ref={register}
                id="address"
                name="address"
                type="text"
            />
            {errors.address && <small class="form-text text-muted">{errors.address.message}</small>} 
            </div>
            
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
    )
}
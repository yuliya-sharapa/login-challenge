import React from 'react';
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom';
//import {yupResolver} from '@hookform/resolvers/yup';
//import {UserLoginSchema} from '../validations/UserValidation';

export const EditForm = ({user, onSubmit}) => {

    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            dni: user.dni,
            address: user.address,
        }
    });
    const history = useHistory();
  
    const submitHandler = handleSubmit((data)=>{
        onSubmit(data);
        history.push('/');
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
            {/* {errors.email && <small class="form-text text-muted">{errors.email.message}</small>} */}
            </div>
            
            <div className="form-group">
            <label htmlFor="last_name">Last name: </label>
            <input
                className="form-control"
                ref={register}
                id="last_name"
                name="last_name"
                type="text"
            />
            {/* {errors.password && <small class="form-text text-muted">{errors.password.message}</small>} */}
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
            {/* {errors.password && <small class="form-text text-muted">{errors.password.message}</small>} */}
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
            {/* {errors.password && <small class="form-text text-muted">{errors.password.message}</small>} */}
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
            {/* {errors.password && <small class="form-text text-muted">{errors.password.message}</small>} */}
            </div>
            
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Update</button>
            </div>
            </form>
    )
}
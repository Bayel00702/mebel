import React, {useState, useRef, useContext} from 'react';
import {Link, useLocation } from "react-router-dom";
import {AiOutlineMail, AiOutlineUser, AiOutlinePhone, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {useForm} from "react-hook-form"
import InputMask from 'react-input-mask';
import Login from '../../assets/login.png'
import {CustomContext} from "../../config/context/context";

const Form = () => {

    const [passwordView, setPasswordView] = useState(false);

    const {registerUser, loginUser} = useContext(CustomContext);

    const password = useRef();

    const location = useLocation();


    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch

    } = useForm({
        mode: "onBlur"
    });


    password.current = watch("password");



    const submitForm = (data) => {
        let {confirmPwd, ...user} = data;

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            registerUser(user)
        }

    };




    return (
        <div className="forms">
                <h2 className="forms__title" ref={password}>
                    Your Logo
                </h2>

                <div className="forms__row">
                    <div className="forms__left">
                        <form noValidate className="forms__form" onSubmit={handleSubmit(submitForm)}>
                            <h3 className="forms__form-title">
                                {
                                    location.pathname === '/login' ? 'Sign in' : 'Sign up'

                                }
                            </h3>

                            <p className="forms__form-text">
                                {
                                    location.pathname === '/login' ? 'If you don’t have an account register' : 'If you already have an account register'
                                }


                                <br/>



                                You can                     {
                                    location.pathname === '/login' ? <Link className='forms__form-link' to='/register'>Register here !</Link> : <Link className='forms__form-link' to='/login'>Login here !</Link>
                                }


                            </p>

                            <label className='forms__form-label'  htmlFor="">
                                <p className='forms__form-category'>Email</p>
                                <div className="forms__form-field">
                                <span className="forms__form-icon">
                                    <AiOutlineMail/>
                                </span>
                                    <input {...register('email', {
                                        required: {
                                            message: 'Email обязательно к заполнению',
                                            value: true
                                        },
                                        minLength: {
                                            message: 'Минимум 10 символа',
                                            value: 10
                                        },
                                        pattern: {
                                            message: 'Напишите правильно свой email',
                                            value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                        }
                                    })} placeholder='Enter your email address' type="email" className="forms__form-input"/>
                                </div>
                                <p className='forms__form-error'>
                                    {errors.email && errors.email?.message}
                                </p>
                            </label>

                            {
                                location.pathname === '/register' && <label className='forms__form-label'  htmlFor="">
                                    <p className='forms__form-category'>Username</p>
                                    <div className="forms__form-field">
                                <span className="forms__form-icon">
                                    <AiOutlineUser/>
                                </span>
                                        <input {...register('name', {
                                            required: {
                                                message: 'Имя обязательно к заполнению',
                                                value: true
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Минимум 3 символа"
                                            },

                                            pattern: {
                                                message: 'Напишите правильно свое имя',
                                                value: /^[а-я-ЯёЁa-zA-Z]+$/
                                            }
                                        })} placeholder='Enter your User name' type="text" className="forms__form-input"/>
                                    </div>
                                    <p className='forms__form-error'>
                                        {errors.name && errors.name?.message}
                                    </p>
                                </label>
                            }

                            {
                                location.pathname === '/register' && <label className='forms__form-label'  htmlFor="">
                                    <p className='forms__form-category'>Surname</p>
                                    <div className="forms__form-field">
                                <span className="forms__form-icon">
                                    <AiOutlineUser/>
                                </span>
                                        <input {...register('surname', {
                                            required: {
                                                message: 'Фамилия обязательно к заполнению',
                                                value: true
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Минимум 3 символа"
                                            },
                                            pattern: {
                                                message: 'Напишите правильно свою фамилию',
                                                value: /^[а-я-ЯёЁa-zA-Z]+$/
                                            }
                                        })} placeholder='Enter your Surname' type="text" className="forms__form-input"/>
                                    </div>
                                    <p className='forms__form-error'>
                                        {errors.surname && errors.surname?.message}
                                    </p>
                                </label>
                            }

                            {
                                location.pathname === '/register' &&   <label className='forms__form-label'  htmlFor="">
                                    <p className='forms__form-category'>Phone</p>
                                    <div className="forms__form-field">
                                <span className="forms__form-icon">
                                    <AiOutlinePhone/>
                                </span>
                                        <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Это поле обязательное'
                                            },
                                            pattern: {
                                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                                message: 'Заполните номер телефона'
                                            }
                                        })} className='forms__form-input' placeholder='Номер телефона' />
                                    </div>
                                    <p className='forms__form-error'>
                                        {errors.phone && errors.phone?.message}
                                    </p>
                                </label>
                            }


                            <label className='forms__form-label'  htmlFor="">
                                <p className='forms__form-category'>Password</p>
                                <div className="forms__form-field" >
                                <span className="forms__form-icon" onClick={() => setPasswordView(prev => !prev)}>
                                    {
                                        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                    }
                                </span>
                                    <input type={passwordView ? 'text' : 'password'}  {...register('password', {
                                        required: {
                                            message: "Пароль обязателен к заполнению",
                                            value: true
                                        },
                                        pattern: {
                                            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                            message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                        }
                                    })} className='forms__form-input'  placeholder='Enter your Password' />
                                </div>
                                <p className='forms__form-error'>
                                    {errors.password && errors.password?.message}
                                </p>
                            </label>
                            {
                                location.pathname === '/register' &&  <label className='forms__form-label'  htmlFor="">
                                    <p className='forms__form-category'>Confirm password</p>
                                    <div className="forms__form-field">
                                        {/*<span className="forms__form-icon" onClick={() => setPasswordView(prev => !prev)}>*/}
                                        {/*    {*/}
                                        {/*        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>*/}
                                        {/*    }*/}


                                        {/*</span>*/}
                                        <input type={passwordView ? 'text' : 'password'}  {...register('confirmPwd', {
                                            validate: value =>
                                                value === password.current || "The password don't match"
                                        })} className='forms__form-input'  placeholder='Confirm your Password' />
                                    </div>
                                    <p className='forms__form-error'>
                                        {errors.confirmPwd && errors.confirmPwd?.message}
                                    </p>
                                </label>
                            }

                            {
                                location.pathname === '/login' ? <button type='submit' className="forms__form-btn">Login</button> : <button type='submit' className="forms__form-btn">Register</button>
                            }


                        </form>
                    </div>

                    <div className="forms__right">
                        <img src={Login} alt="Login" className="forms__right-img"/>

                        <h3 className="forms__right-title">Sign in to name</h3>
                        <p className="forms__right-text">Lorem Ipsum is simply </p>
                    </div>
                </div>
        </div>
    );
};

export default Form;
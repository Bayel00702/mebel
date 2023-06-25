import React, {useContext, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";






const Checkout = () => {

    const {
        register,
        handleSubmit,
        formState :{
            errors
        }

    } = useForm();

    const {user, addOrder} = useContext(CustomContext);

    const [popup, setPopup] = useState(false);

    const [count, setCount] = useState(15);


    const submitForm = (data) => {
        let order = {
            ...data,
            order: user.carts,
            totalPrice: user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)
        };

        addOrder(order, setPopup, redirect)

    };

    const navigate = useNavigate();

    const redirect = () => {
      setInterval(() => {

          setCount(prev => {
              if (prev < 2){
                  navigate('/');
                  return 15
              }
              return  prev - 1
          })
      }, 1000)
    };

    return (
        <section className="checkout">
            <div className="container">
                <h3 className="checkout__title">Оформление заказа</h3>

                <form className="checkout__form" onSubmit={handleSubmit(submitForm)}>
                    <div className="checkout__form-row">
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Данные покупателя</h3>

                            <div className="checkout__form-fields">
                                <input {...register('name')} value={user.name} placeholder="Имя" type="text" className="checkout__form-fields__input"/>
                                <input {...register('email')} value={user.email} placeholder="E-mail" type="email" className="checkout__form-fields__input"/>
                                <input {...register('phone')} value={user.phone} placeholder="Телефон" type="tel" className="checkout__form-fields__input"/>
                            </div>
                        </div>
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Ваш заказ</h3>

                            <ul className="checkout__form-list">
                                <li className="checkout__form-item">Товар <span>Всего</span></li>

                                {
                                    user.carts?.map((item) => (
                                        <li key={item.id} className="checkout__form-item checkout__form-product"> {item.title} <span>{item.count}/{item.price} ₽</span></li>
                                    ))
                                }

                                <li className="checkout__form-item checkout__form-item_count">
                                    <p className="checkout__form-product">
                                        Количество бонусов:
                                    </p>
                                    <p className="checkout__form-price">
                                        {user.point}Б
                                    </p>
                                </li>

                                <li className="checkout__form-item checkout__form-total">Итого<span>{user.carts?.reduce((acc, rec) => acc + rec.price * rec.count , 0)} ₽</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="checkout__form-row checkout__form-row2">
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Адрес получателя</h3>

                            <div className="checkout__form-fields">
                                <input {...register('country')} placeholder="Страна" type="text" className="checkout__form-fields__input"/>
                                <input {...register('city')} placeholder="Город" type="text" className="checkout__form-fields__input"/>
                                <input {...register('street')} placeholder="Улица" type="text" className="checkout__form-fields__input"/>
                                <input {...register('home')} placeholder="Дом" type="text" className="checkout__form-fields__input"/>
                                <input {...register('flat')} placeholder="Квартира" type="text" className="checkout__form-fields__input"/>
                            </div>
                        </div>
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Ваш заказ</h3>

                            <label className="checkout__form-label" htmlFor="">
                                <input type="checkbox" className="checkout__form-checkbox"/>
                                <p>Оплата наличными</p>
                            </label>
                            <button className="checkout__form-btn" type="submit">Разместить заказ</button>
                        </div>
                    </div>
                    <h2 className="checkout__form-title">Комментарии</h2>
                    <input {...register('info')} placeholder="Комментарий" type="text" className="checkout__form-input"/>
                </form>
            </div>

            {
                popup ? <div className="checkout__popup">
                    <h2 className="checkout__popup-title">Ваш заказ прошел успешно!</h2>
                    <p className="checkout__popup-text">Через {count} секунд вас перекинет на главную страницу</p>
                    <button onClick={() => navigate('/')} className="checkout__popup-btn">Перейти прямо сейчас</button>
                    </div>
                    : ''
            }

        </section>
    );
};

export default Checkout;
import React, {useContext} from 'react';
import Product1 from  '../../assets/product/product1.png'
import {CustomContext} from "../../config/context/context";

const Cart = () => {

    const {user, addCartsCountPlus, addCartsCountMinus} = useContext(CustomContext);

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__top">
                    <h3 className="cart__top-title">Ваша корзина</h3>
                    <p className="cart__top-count">{
                        user.carts?.reduce((acc, rec) => acc + rec.count , 0)
                    } предмета</p>
                </div>
                <div className="cart__row">
                    {
                        user.carts?.map((item) => (
                            <div className="cart__card">
                                <img src={`/${item.image}`} alt={`${item.title}`}/>
                                <div className="cart__card-info">
                                    <div className="cart__sizes">

                                        <div className="cart__sizes-top">
                                            <h2 className="cart__sizes-top__title">{item.title}</h2>
                                            <p className="cart__sizes-top__price">
                                                {
                                                    item.price * item.count
                                                } ₽
                                            </p>
                                        </div>
                                        <div style={{width: '200px'}} className="card__size-count">
                                            <button type='button' onClick={() => addCartsCountMinus(item.id)}>-</button>
                                            <span>{
                                                user.carts.find(el => el.id === item.id).count
                                            }</span>
                                            <button type='button' onClick={() => addCartsCountPlus(item.id)}>+</button>
                                        </div>
                                        <div className="cart__sizes-info">
                                            <p className="cart__sizes-info__text">Количество: <span className="cart__sizes-info__subtitle">{item.count}</span></p>
                                            <p className="cart__sizes-info__text">Размер(Ш×Д×В): <span className="cart__sizes-info__subtitle">{item.width} x {item.deep} x {item.height}</span></p>
                                        </div>
                                    </div>

                                </div>
                                <button className="cart__card-btn" ><span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M3.84772 5.70711C4.23824 5.31658 4.23824 4.68342 3.84772 4.29289L1.22259 1.66776C1.09966 1.54483 1.09966 1.34552 1.22259 1.22259C1.34552 1.09966 1.54483 1.09966 1.66776 1.22259L4.29289 3.84772C4.68342 4.23824 5.31658 4.23824 5.70711 3.84772L8.33224 1.22259C8.45517 1.09966 8.65448 1.09966 8.77741 1.22259C8.90034 1.34552 8.90034 1.54483 8.77741 1.66776L6.15228 4.29289C5.76175 4.68342 5.76175 5.31658 6.15228 5.70711L8.77741 8.33224C8.90034 8.45517 8.90034 8.65448 8.77741 8.77741C8.65448 8.90034 8.45517 8.90034 8.33224 8.77741L5.70711 6.15228C5.31658 5.76175 4.68342 5.76175 4.29289 6.15228L1.66776 8.77741C1.54483 8.90034 1.34552 8.90034 1.22259 8.77741C1.09966 8.65448 1.09966 8.45517 1.22259 8.33224L3.84772 5.70711Z" fill="#C9C9C9" stroke="#C9C9C9"/>
</svg>
</span></button>
                            </div>
                        ))
                    }
                </div>

                <div className="cart__total">
                    <p className="cart__total-text">Итоговая стоимость: <span className="cart__total-price">{
                        user.carts?.reduce((acc, rec) => acc + rec.price * rec.count , 0)
                    } ₽</span></p>
                    <button className="cart__total-btn">Оформить заказ</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
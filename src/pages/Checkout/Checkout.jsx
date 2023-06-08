import React from 'react';

const Checkout = () => {
    return (
        <section className="checkout">
            <div className="container">
                <h3 className="checkout__title">Оформление заказа</h3>

                <form className="checkout__form">
                    <div className="checkout__form-row">
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Данные покупателя</h3>

                            <div className="checkout__form-fields">
                                <input placeholder="Имя" type="text" className="checkout__form-fields__input"/>
                                <input placeholder="E-mail" type="email" className="checkout__form-fields__input"/>
                                <input placeholder="Телефон" type="tel" className="checkout__form-fields__input"/>
                            </div>
                        </div>
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Ваш заказ</h3>

                            <ul className="checkout__form-list">
                                <li className="checkout__form-item">Товар <span>Всего</span></li>
                                <li className="checkout__form-item checkout__form-product">Футболка USA <span>$129</span></li>
                                <li className="checkout__form-item checkout__form-product">Подытог <span>$129</span></li>
                                <li className="checkout__form-item checkout__form-total">Итого<span>$129</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="checkout__form-row checkout__form-row2">
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Адрес получателя</h3>

                            <div className="checkout__form-fields">
                                <input placeholder="Страна" type="text" className="checkout__form-fields__input"/>
                                <input placeholder="Город" type="text" className="checkout__form-fields__input"/>
                                <input placeholder="Улица" type="text" className="checkout__form-fields__input"/>
                                <input placeholder="Дом" type="text" className="checkout__form-fields__input"/>
                                <input placeholder="Квартира" type="text" className="checkout__form-fields__input"/>
                            </div>
                        </div>
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">Ваш заказ</h3>

                            <label className="checkout__form-label" htmlFor="">
                                <input type="checkbox" className="checkout__form-checkbox"/>
                                <p>Оплата наличными</p>
                            </label>
                            <button className="checkout__form-btn">Разместить заказ</button>
                        </div>
                    </div>
                    <h2 className="checkout__form-title">Комментарии</h2>
                    <input placeholder="Страна" type="text" className="checkout__form-input"/>
                </form>
            </div>
        </section>
    );
};

export default Checkout;
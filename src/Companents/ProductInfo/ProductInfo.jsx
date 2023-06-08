import React, {useContext} from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {CustomContext} from "../../config/context/context";

const ProductInfo = ({product}) => {
    const {favorites, favHandler} = useContext(CustomContext);

    const colors = ['red', 'green', 'yellow'];
    return (
        <div className="product__info">
            <h2 className="product__info-title">{product.title}</h2>
            <p className="product__info-category">{product.category}</p>
            <div className="product__info-btns">
                <h3 className="product__info-btns__price">
                    {product.price}₽
                </h3>

                <button className="product__info-btns__buy">Купить</button>
                <button className="product__info-btns__fav" onClick={() => favHandler(product)}>
                    {
                        favorites.some(el => el.id === product.id) ? <AiFillHeart style={{color: 'red'}}/> : <AiOutlineHeart />
                    } Добавить в желаемое</button>
            </div>
            <div className="product__info-selects">
                <div className="product__info-selects__choice">
                    <h4 className="product__info-selects__title">Цвет</h4>
                    <ul className="product__info-colors">
                        {
                            colors.map((item, idx) => (
                                <li key={idx} style={{background: item}}>
                                    ss
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="product__info-selects__choice">
                    <h4 className="product__info-selects__title">Количество</h4>
                    <ul className="product__info-count">
                        <li>
                            1
                        </li>
                    </ul>
                </div>
                <div className="product__info-selects__choice">
                    <h4 className="product__info-selects__title">Размер (Д × Ш × В)</h4>
                    <ul className="product__info-sizes">
                        <li>
                            {product.width}
                            <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.608398 5.75098L2.86426 3.4541L0.62207 1.16406L1.43555 0.323242L3.68457 2.61328L5.93359 0.323242L6.74707 1.16406L4.50488 3.4541L6.76074 5.75098L5.94727 6.5918L3.68457 4.28809L1.42188 6.5918L0.608398 5.75098Z" fill="#414141"/>
</svg>
</span>
                            {product.height}
                            <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.608398 5.75098L2.86426 3.4541L0.62207 1.16406L1.43555 0.323242L3.68457 2.61328L5.93359 0.323242L6.74707 1.16406L4.50488 3.4541L6.76074 5.75098L5.94727 6.5918L3.68457 4.28809L1.42188 6.5918L0.608398 5.75098Z" fill="#414141"/>
</svg>
</span>
                            {product.deep}
                        </li>
                    </ul>
                </div>
            </div>
            <h4 className="product__info-desc">Описание</h4>
            <p className="product__info-description">
                {product.description}
            </p>
        </div>
    );
};

export default ProductInfo;
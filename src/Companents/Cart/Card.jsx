import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {CustomContext} from "../../config/context/context";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'



const Card = ({item}) => {

    const {favorites, favHandler, addCarts, user, addCartsCountPlus, addCartsCountMinus} = useContext(CustomContext);

    const [open, setOpen] = useState('true');

    const navigate = useNavigate();

    return (
        <div className="card" >

            <span style={{ZIndex: 0}} className="card__fav" onClick={() => favHandler(item)}>
                {
                    favorites.some(el => el.id === item.id) ? <AiFillHeart style={{color: 'red'}}/> : <AiOutlineHeart />
                }
            </span>
            <Link to={`/product/${item.id}`}>
                <img className="card__img" src={`/${item.image}`} alt={item.title}/>
            </Link>

            <div  className="card__info" onClick={() => {
                if (setOpen){
                    setOpen((prev) => !prev)
                }
            }}>


                <h3 className="card__title">
                    {item.title}
                </h3>
                <p className="card__category">
                    {item.category}
                </p>

                <p className="card__price">
                    {item.price}₽
                </p>

            </div>
            <div className={`card__size ${open ? 'active': ''}`}>
                <h4 className="card__size-title">Размеры</h4>

                <div className="card__size-info">
                    <p className="card__size-info__size">
                        <span className="card__size-info__sizes">ШИРИНА</span>
                        {item.width}
                    </p>
                    <span><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.521484 5.07227L2.45508 3.10352L0.533203 1.14062L1.23047 0.419922L3.1582 2.38281L5.08594 0.419922L5.7832 1.14062L3.86133 3.10352L5.79492 5.07227L5.09766 5.79297L3.1582 3.81836L1.21875 5.79297L0.521484 5.07227Z" fill="#414141"/>
</svg>
</span>
                    <p className="card__size-info__size">
                        <span className="card__size-info__sizes">ГЛУБИНА</span>
                        {item.deep}
                    </p>
                    <span><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.521484 5.07227L2.45508 3.10352L0.533203 1.14062L1.23047 0.419922L3.1582 2.38281L5.08594 0.419922L5.7832 1.14062L3.86133 3.10352L5.79492 5.07227L5.09766 5.79297L3.1582 3.81836L1.21875 5.79297L0.521484 5.07227Z" fill="#414141"/>
</svg>
</span>
                    <p className="card__size-info__size">
                        <span className="card__size-info__sizes">ВЫСОТА</span>
                        {item.height}
                    </p>

                </div>

                {
                    user.carts?.some(el => el.id === item.id) ?
                        <div className="card__size-count">
                        <button type='button' onClick={() => addCartsCountMinus(item.id)}>-</button>
                        <span>{
                            user.carts.find(el => el.id === item.id).count
                        }</span>
                        <button type='button' onClick={() => addCartsCountPlus(item.id)}>+</button>
                    </div>
                        :  <button type='button' className="card__size-btn" onClick={() => {
                        if ('id' in user){
                            addCarts(item)
                        } else {
                            navigate('/login')
                        }
                    }}>Добавить в корзину</button>
                }




            </div>
        </div>
    );
};

export default Card;
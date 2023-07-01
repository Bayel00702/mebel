import React, {Fragment, useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../../Companents/Cart/Card";

const Favorites = () => {

    const {favorites} = useContext(CustomContext);

    const [page, setPage] = useState(1);


    let favoritesPagesCount = new Array(Math.ceil(favorites.length / 4)).fill(null, 0 );

    useEffect(() => {
        if(page > favorites.length){
            setPage(favorites.length)
        }

    }, [favorites]);

    if(favorites.length){
        return (
            <section className="favorites">
                <div className="container">
                    <h2 className="favorites__title favorites">Избранных товары</h2>
                    <div className="hitSale__row">
                        {
                            favorites.filter((item, idx) => idx >= page * 4 - 4 && idx < page * 4).map((item) => (
                                <Fragment key={item.id}>
                                    <Card item={item}/>
                                </Fragment>
                            ))
                        }
                    </div>
                    {
                        favoritesPagesCount.length !== 1 && <ul className="favorites__list">
                            {
                                favoritesPagesCount.map((item, idx) => (
                                   <li
                                       onClick={() => {
                                        setPage(idx + 1 );
                                    }} key={idx} >{idx + 1}</li>
                                ))
                            }
                        </ul>
                    }

                </div>
            </section>
        )
    } else{
        return <h2 className="favorites__title favorites">Избранных товаров нет</h2>
    }

};

export default Favorites;
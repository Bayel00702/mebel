import React, {Fragment, useContext, useEffect, useState} from 'react';
import AsideFilter from "../../Companents/AsideFilter/AsideFilter";
import Card from "../../Companents/Cart/Card";
import api from "../../config/Api/Api";
import {CustomContext} from "../../config/context/context";
import {useLocation} from 'react-router-dom'

const Catalog = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [slider, setSlider] = useState([0, 30000]);

    const {search, setSearch} = useContext(CustomContext);


    const location = useLocation();


    useEffect(() => {

        let queryParamsApi = `?${search.length ? `title_like=${search}&` : ''}${category.length ? `category=${category}&` : ''}${sort.length ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc&` : ''}`;
        let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`;

        api(`product${queryParamsApi}${queryParamsFromTo}`).json()
            .then((res) => setProducts(res))
    }, [search, sort, category]);



    return (
        <main>
            <section className="catalog">
                <div className="container">
                    <div className="catalog__row">
                        <AsideFilter slider={slider} setSlider={setSlider} category={category} setCategory={setCategory} sort={sort} setSort={setSort}/>
                        <div className="hitSale__row catalog__content">
                            {
                                products.map((item) => (
                                    <Fragment key={item.id}>
                                        <Card item={item}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Catalog;
import  {useContext, useEffect, Fragment} from 'react';
import Card from "../Cart/Card";
import {CustomContext} from "../../config/context/context";

const HitSale = () => {

    const {hitSale, getHitSale} = useContext(CustomContext);

    useEffect(() => {
        getHitSale()
    }, []);

    return (
        <section className="hitSale">
            <div className="container">
                <h2 className="hitSale__title">Хиты продаж</h2>
                <div className="hitSale__row">
                    {
                        hitSale.map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HitSale;
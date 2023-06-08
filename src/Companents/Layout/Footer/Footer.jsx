import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__left">
                        <h2 className="footer__left-title">НАВИГАЦИЯ</h2>

                        <div className="footer__left-lists">
                            <ul className="footer__left-lists__list">
                                <li className="footer__left-lists__item">Кухни</li>
                                <li className="footer__left-lists__item">Спальни</li>
                                <li className="footer__left-lists__item">Гостинные</li>
                            </ul>
                            <ul className="footer__left-lists__list">
                                <li className="footer__left-lists__item">Прихожие</li>
                                <li className="footer__left-lists__item">Офисная мебель</li>
                                <li className="footer__left-lists__item">Детская</li>
                            </ul>
                            <ul className="footer__left-lists__list">
                                <li className="footer__left-lists__item">Шкафы</li>
                                <li className="footer__left-lists__item">Матрасы</li>
                                <li className="footer__left-lists__item">Мягкая мебель</li>
                            </ul>
                        </div>

                        <div className="footer__left-texts">
                            <p className="footer__left-texts__sale">Акция</p>
                            <p className="footer__left-texts__new">Новинки</p>
                        </div>
                    </div>

                    <div className="footer__right">
                        <span><svg width="56" height="30" viewBox="0 0 56 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.4541 24.4629H19.9844V30H0.255859V0.140625H7.4541V24.4629ZM32.4736 0.140625L39.1387 20.915L45.7832 0.140625H55.2578V30H48.0391V23.0273L48.7363 8.75391L41.5176 30H36.7598L29.5205 8.7334L30.2178 23.0273V30H23.0195V0.140625H32.4736Z" fill="black"/>
</svg>
</span>

                        <p className="footer__right-address">
                            г. Анапа, Анапское шоссе,
                            <br/>
                            30 Ж/К Черное море
                        </p>

                        <div className="footer__right-contact">
                            <p className="footer__right-contact__text"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.21922 1H3C1.89543 1 1 1.89543 1 3V5C1 10.5228 5.47715 15 11 15H13C14.1046 15 15 14.1046 15 13V11.618C15 11.2393 14.786 10.893 14.4472 10.7236L12.0313 9.51564C11.487 9.24349 10.8278 9.51652 10.6354 10.0938L10.3376 10.9871C10.1447 11.5658 9.55118 11.9102 8.95309 11.7906C6.55929 11.3119 4.68814 9.44071 4.20938 7.04691C4.08976 6.44882 4.43422 5.85526 5.01286 5.66238L6.12149 5.29284C6.61721 5.1276 6.90214 4.60855 6.7754 4.10162L6.18937 1.75746C6.07807 1.3123 5.67809 1 5.21922 1Z" stroke="black"/>
</svg>
</span>8 (964) 89 99 119</p>
                            <p className="footer__right-contact__text"><span><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.25 4.21429H13.3214M5.28571 1H11.7143C14.0812 1 16 2.91878 16 5.28571V11.7143C16 14.0812 14.0812 16 11.7143 16H5.28571C2.91878 16 1 14.0812 1 11.7143V5.28571C1 2.91878 2.91878 1 5.28571 1ZM8.5 11.7143C6.7248 11.7143 5.28571 10.2752 5.28571 8.5C5.28571 6.7248 6.7248 5.28571 8.5 5.28571C10.2752 5.28571 11.7143 6.7248 11.7143 8.5C11.7143 10.2752 10.2752 11.7143 8.5 11.7143Z" stroke="black"/>
</svg>
</span>INSTAGRAM</p>
                            <p className="footer__right-contact__text"><span><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4.5L9.16667 9.16667L17.3333 4.5M2.16667 1H16.1667C16.811 1 17.3333 1.52233 17.3333 2.16667V13.8333C17.3333 14.4777 16.811 15 16.1667 15H2.16667C1.52233 15 1 14.4777 1 13.8333V2.16667C1 1.52233 1.52233 1 2.16667 1Z" stroke="black"/>
</svg>
</span>mebel_loft_anapa@mail.ru</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
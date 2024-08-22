import './style.css';
import MenuComp from '../MenuComp/MenuComp';
import headerImg from '../../img/Header-img.png';

import iphone from '../../img/iphone.png';
import laptop from '../../img/laptop.png';
import TV from '../../img/TV.png';
import girl from '../../img/girl.png';
import vacuum from '../../img/vacuum-cleaner.png';
import superVacuum from '../../img/super-vacuum.png';

import LG from '../../img/LG.png';
import XIAOMI from '../../img/XIAOMI.png';
import APPLE from '../../img/APPLE.png';
import LENOVO from '../../img/LENOVO.png';
import HP from '../../img/HP.png';
import SAMSUNG from '../../img/SAMSUNG.png';


import allApple from '../../img/barcha-apple.png';
import allXiaomi from '../../img/barcha-xiaomi.png';
import allSamsung from '../../img/barcha-samsung.png';

import Japan from '../../img/made-in-japan.jpg';
import verified from '../../img/verified.png';

import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import { obj_card } from '../../card_list_01';



function HomeCompo() {
    // const [weektext, setWeektext] = useState("");
    const time = new Date().getHours()
    const minute = new Date().getMinutes()
    const week = new Date().getDay()

    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <div className="left-text">
                        <p className="nav-text">{time}:{minute < 10 ? "0" + minute : minute}  {week === 1 ? "Dushanba" : ""}{week === 2 ? "Seshanba" : ""}{week === 3 ? "Chorshanba" : ""}{week === 4 ? "Payshanba" : ""}{week === 5 ? "Juma" : ""}{week === 6 ? "Shanba" : ""}{week === 7 ? "Yakshanba" : ""}</p>
                    </div>
                    <div className="right-text">
                        {/* <p className="nav-text">O'zbekcha <i className="fa-solid fa-caret-down"></i></p> */}
                        <button onClick={() => handleClick('eng')} >
                            English
                        </button>
                        <button onClick={() => handleClick('ru')} >
                            Russian
                        </button>
                        <button onClick={() => handleClick('uz')} >
                            Uzbek
                        </button>
                    </div>
                </nav>
            </div>
            <MenuComp />
            <img src={headerImg} alt="" className='header-img' />
            <div className="header-cards">
                <div className="header-card">
                    <img src={iphone} alt="" className='card-img' />
                    <h4>{t('phone.phone_text')}</h4></div>
                <div className="header-card" style={{ width: "190px" }}>
                    <img src={laptop} alt="" className='card-img' />
                    <h4>{t('laptop.laptop_text')}</h4></div>
                <div className="header-card" style={{ width: "200px" }}>
                    <img src={TV} alt="" className='card-img' />
                    <h4>{t('tv.tv_text')}</h4></div>
                <div className="header-card">
                    <img src={girl} alt="" className='card-img' />
                    <h4>{t('beautiful.beautiful_text')}</h4></div>
                <div className="header-card">
                    <img src={vacuum} alt="" className='card-img' />
                    <h4>{t('texnika.texnika_text')}</h4></div>
                <div className="header-card">
                    <img src={superVacuum} alt="" className='card-img' />
                    <h4>{t('avto.avto_text')}</h4></div>
            </div>
            <section className='section'>
                <div className="ADS">
                    <div className="brand-header">
                        <h2>{t('brend.brend_text')}</h2>        <a href="" style={{ textDecoration: "underline", color: "green" }}></a>
                    </div>
                    <div className="brands-img">
                        <img src={LG} alt="" className='brand-img' />
                        <img src={XIAOMI} alt="" className='brand-img' />
                        <img src={APPLE} alt="" className='brand-img' />
                        <img src={LENOVO} alt="" className='brand-img' />
                        <img src={HP} alt="" className='brand-img' />
                        <img src={SAMSUNG} alt="" className='brand-img' />
                    </div>
                    <div className="popular-products">
                        <h2 style={{ marginBottom: "30px", marginTop: "30px" }}>{t('mahsulot.mahsulot_text')}</h2>
                    </div>
                    <div className="product-cards">
                        {obj_card.map(({ product_name, product_title, product_price, product_sale, product_image }) => (
                            <div className="product-card">
                                <img src={product_image} alt="" className='product-card-img' />
                                <h4 className='product-header'>{product_name}</h4>
                                <p style={{ textAlign: "left" }} className='product-info'>{product_title}</p>
                                <div className="product-price">{product_price}</div>
                                <div className="month-price">
                                    {product_sale}
                                </div>
                                <button className="product-card-btn">
                                    <i className="fa-solid fa-cart-plus"></i>
                                    {t('savatcha.savat')}</button>

                            </div>
                        ))}
                    </div>
                    <div className="popular-products">
                        <h2 style={{ marginBottom: "30px", marginTop: "30px" }}>{t('chegirma.chegirma_text')}</h2>
                    </div>
                    <div className="product-cards">
                        {obj_card.map(({ product_name, product_title, product_price, product_sale, product_image }) => (
                            <div className="product-card">
                                <img src={product_image} alt="" className='product-card-img' />
                                <h4 className='product-header'>{product_name}</h4>
                                <p style={{ textAlign: "left" }} className='product-info'>{product_title}</p>
                                <div className="product-price">{product_price}</div>
                                <div className="month-price">
                                    {product_sale}
                                </div>
                                <button className="product-card-btn">
                                    <i className="fa-solid fa-cart-plus"></i>
                                    {t('savatcha.savat')}</button>

                            </div>
                        ))}
                    </div>
                    <div className="ads">
                        <img src={allApple} alt="" className='brands' />
                        <img src={allXiaomi} alt="" className='brands' />
                        <img src={allSamsung} alt="" className='brands' />
                    </div>
                    <h2 style={{ marginBottom: "30px", marginTop: "30px" }}>{t('qulaynarx.qulaynarx_text')}</h2>
                    <div className="product-cards">
                        {obj_card.map(({ product_name, product_title, product_price, product_sale, product_image }) => (
                            <div className="product-card">
                                <img src={product_image} alt="" className='product-card-img' />
                                <h4 className='product-header'>{product_name}</h4>
                                <p style={{ textAlign: "left" }} className='product-info'>{product_title}</p>
                                <div className="product-price">{product_price}</div>
                                <div className="month-price">
                                    {product_sale}
                                </div>
                                <button className="product-card-btn">
                                    <i className="fa-solid fa-cart-plus"></i>
                                    {t('savatcha.savat')}</button>

                            </div>
                        ))}
                    </div>
                    <img src={Japan} alt="" style={{ width: "1120px", marginTop: "25px" }} />
                    <h2 style={{ textAlign: "center", marginTop: "25px" }}>{t('pulqayta.pulqayta_text')}</h2>
                    <div className="delivery-info">
                        <div className="delivery">
                            <div className="delivery-icon"><i className="fa-solid fa-truck"></i></div>
                            <h3 style={{ marginBottom: "10px", color: "#065374" }}>{t('dastavka.dastavka')}</h3>
                            <p style={{ color: "#333333" }}>{t('dastavka_text.dastavka_text')}</p>
                        </div>
                        <div className="delivery">
                            <div className="delivery-icon"><img src={verified} alt="" /></div>
                            <h3 style={{ marginBottom: "10px", color: "#065374" }}>{t('bolibT.bolibT')}</h3>
                            <p style={{ color: "#333333" }}>{t('bolibT_text.bolibT_text')}</p>
                        </div>
                        <div className="delivery">
                            <div className="delivery-icon"><i className="fa-solid fa-award"></i></div>
                            <h3 style={{ marginBottom: "10px", color: "#065374" }}>{t('garant.garant')}</h3>
                            <p style={{ color: "#333333" }}>{t('garant_text.garant_text')}</p>
                        </div>
                        <div className="delivery">
                            <div className="delivery-icon"><i className="fa-solid fa-phone-volume"></i></div>
                            <h3 style={{ marginBottom: "10px", color: "#065374" }}>{t('xizmat.xizmat')}</h3>
                            <p style={{ color: "#333333" }}>{t('xizmat_text.xizmat_text')}</p>
                        </div>
                    </div>
                    <div className="last-seen">
                        <h2 style={{ marginTop: "30px" }}>{t('songi.songi')}</h2>
                    </div>
                    <div className="last-seens">

                        {obj_card.map(({ product_name, product_title, product_price, product_sale, product_image }) => (
                            <div className="product-card">
                                <img src={product_image} alt="" className='product-card-img' />
                                <h4 className='product-header'>{product_name}</h4>
                                <p style={{ textAlign: "left" }} className='product-info'>{product_title}</p>
                                <div className="product-price">{product_price}</div>
                                <div className="month-price">
                                    {product_sale}
                                </div>
                                <button className="product-card-btn">
                                    <i className="fa-solid fa-cart-plus"></i>
                                    {t('savatcha.savat')}</button>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-part">
                    <div className="footer-left">
                        <h2 className="footer-header">{t('qolab.qolab')}</h2>
                        <div className="footer-number"><i className="fa-solid fa-mobile-screen-button"></i>
                            +998 (94) 412 70 70
                        </div>
                        <div className="footer-calendar">
                            <i className="fa-solid fa-calendar-days"></i>
                            09:00 - 20:00 (Har kuni)
                        </div>
                    </div>
                    <div className="footer-right">
                        <h2 className="footer-header-right" style={{ marginBottom: "30px" }}>
                            {t('olsavdo.olsavdo')}
                        </h2>
                        <div className="footer-locate">
                            <i className="fa-solid fa-location-dot"></i>
                            {t('local.local')}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default HomeCompo
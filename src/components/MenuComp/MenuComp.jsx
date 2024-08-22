import React from 'react'
import "./style.css"

import { useTranslation } from 'react-i18next';
import i18next from "i18next";


function MenuComp() {
    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    return (
        <div className="box">
            <div className="box-div">
                <div className="box-inp">
                    <input type="text" placeholder={t('izlash.iz')} className="head-inp" />
                </div>
                <div className="right-box-icon">
                    <div className="box-icons">
                        <div className="icon">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <p className="text-icon">{t('taqos.taq')}</p>
                    </div>
                    <div className="box-icons">
                        <div className="icon">
                        <i class="fa-solid fa-code-compare"></i>
                        </div>
                        <p className="text-icon">{t('sev.sevim')}</p>
                    </div>
                    <div className="box-icons">
                        <div className="icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <p className="text-icon">{t('savatcha.savat')}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuComp

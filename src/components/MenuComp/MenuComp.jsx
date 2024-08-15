import React from 'react'
import "./style.css"

function MenuComp() {
    return (
        <div className="box">
            <div className="box-div">
                <div className="box-inp">
                    <input type="text" placeholder='Mahsulot izlash...' className="head-inp" />
                </div>
                <div className="right-box-icon">
                    <div className="box-icons">
                        <div className="icon">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <p className="text-icon">Sevimli</p>
                    </div>
                    <div className="box-icons">
                        <div className="icon">
                        <i class="fa-solid fa-code-compare"></i>
                        </div>
                        <p className="text-icon">Taqqos</p>
                    </div>
                    <div className="box-icons">
                        <div className="icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <p className="text-icon">Savat</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuComp

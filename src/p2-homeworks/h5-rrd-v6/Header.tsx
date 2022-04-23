import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


function Header() {

    const [menuFlag, setMenuFlag] = useState<boolean>(true)
    const onMouseEnterHandler = () => setMenuFlag(false)
    const onMouseLeaveHandler = () => setMenuFlag(true)

    return (
        <div>
            <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={s.menuList}>
                <div className={menuFlag ? `${s.hidden} ${s.menuListLink}` : s.menuListLink}>
                    <NavLink   to={'/pre-junior'}>Pre Junior---</NavLink>
                </div>
                <div className={menuFlag ? s.hidden : ''}>
                    <NavLink  to={'/junior'}>Junior---</NavLink>
                </div>
                <div className={menuFlag ? s.hidden : ''}>
                    <NavLink  to={'/junior-plus'}>Junior Plus</NavLink>
                </div>
                <div>
                    <div>Menu</div>
                </div>
            </div>
        </div>
    )
}

export default Header

import React from "react";
import styles from './Footer.module.css'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/Logo.svg'


export const Footer = () => {
    return (
        <section id="Footer" className={styles.sectionFooter}>
            <div className="container">
                <div className={styles.footerTop}>
                    <NavLink to="/" className={styles.footerLogo}>
                        <img src={Logo} alt=""/>
                        <h4 className={styles.logoTitle}>Covid - 19</h4>
                    </NavLink>
                    <ul className={styles.footerNav}>
                        <li className={styles.menu_item}>
                            <NavLink exact to="/" activeClassName={styles.active}>
                                Overview
                            </NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink exact to="/about" activeClassName={styles.active}>
                                About
                            </NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink exact to="/symptoms" activeClassName={styles.active}>
                                Symptoms
                            </NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink exact to="/prevention" activeClassName={styles.active}>
                                Prevention
                            </NavLink>
                        </li>
                        <li className={styles.menu_item}>
                            <NavLink exact to="/treatment" activeClassName={styles.active}>
                                Treatment
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={styles.footerSocial}>
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true" style={{color: '#365899'}}></i></Link></li>
                        <li><Link to="#"><i className="fa fa-youtube-play" style={{color: 'red'}}></i></Link></li>
                        <li><Link to="#"><i className="fa fa-whatsapp" aria-hidden="true" style={{color: '#25D366'}}></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true" style={{color: 'rgb(26, 145, 218)'}}></i></Link></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    2020 @ All rights reserved by pixelspark.co
                </div>
            </div>
        </section>
    )
}
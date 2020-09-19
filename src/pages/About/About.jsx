import React from "react";
import style from './About.module.css'
import {Button} from "../../components/components";
import AboutBack from '../../assets/AboutBack.svg';

export const About = () => {
    return (
        <div className={style.about}>
            <div className="container">
                <div className={style.aboutRow}>
                        <div className={style.aboutIconBack} style={{backgroundImage: `url(${AboutBack})`}}>

                        </div>
                    <div className={style.aboutContent}>
                        <div className="aboutTitle">
                            <h6>What Is Covid-19 </h6>
                            <h1>Coronavirus</h1>
                        </div>
                        <div className={style.aboutItem}>
                            Corona viruses are a type of virus. There are many different kinds, and some cause disease.
                            A newly identified type has caused a recent outbreak of respiratory illness now called
                            COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of
                            Critical Event Preparedness and Response
                        </div>
                        <Button>Learn more</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};
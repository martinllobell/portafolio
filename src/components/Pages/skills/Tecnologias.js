import React from "react";
import { motion } from "framer-motion";
import '../Pages.css'
/////////////////
import css from '../../../assets/icons/css.png'
import git from '../../../assets/icons/git.png'
import github from '../../../assets/icons/github.png'
import html from '../../../assets/icons/html.png'
import javascript from '../../../assets/icons/javascript.png'
import nginex from '../../../assets/icons/nginex.png'
import nodejs from '../../../assets/icons/nodejs.png'
import postgres from '../../../assets/icons/postgres.png'
import react from '../../../assets/icons/react.png'
import redux from '../../../assets/icons/redux.png'
import sass from '../../../assets/icons/sass.png'

const tecnologiasVariants = {
    hidden:{
        opacity:0,
        // x:'100vw'
    },
    show:{
        opacity:1,
        x:0,
        zIndex:5,
        transition:{
            type:'spring',
            stiffness:50
        }
    },
    exit:{
        opacity:0,
        // x:'-100vw',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export default function Tecnologias(){
    return (
        <motion.div className={'skills-tecnologias'} variants={tecnologiasVariants} initial='hidden' animate='show' exit='exit' layout>
                <h3 className='h3-tecnologias'>Algunas de las tecnologías que domino...</h3>
                <div className='cont-tecngologias'>
                    <div className='react'>
                        <img className='imgIco' src={react} alt=''/>
                    </div>
                    <div className='redux'>
                        <img className='imgIco' src={redux} alt=''/>
                    </div>
                    <div className='css'>
                        <img className='imgIco' src={css} alt=''/>
                    </div>
                    <div className='html'>
                        <img className='imgIco' src={html} alt=''/>
                    </div>
                    <div className='sass'>
                        <img className='imgIco' src={sass} alt=''/>
                    </div>
                    <div className='nodejs'>
                        <img className='imgIco' src={nodejs} alt=''/>
                    </div>
                    <div className='nginex'>
                        <img className='imgIco' src={nginex} alt=''/>
                    </div>
                    <div className='postgres'>
                        <img className='imgIco' src={postgres} alt=''/>
                    </div>
                    <div className='git'>
                        <img className='imgIco' src={git} alt=''/>
                    </div>
                    <div className='javascript'>
                        <img className='imgIco' src={javascript} alt=''/>
                    </div>
                </div>
            </motion.div>
    )
}
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Pages.css'
import styles from './about.module.scss'
import { Link } from "react-router-dom";

const aboutVariants = {
    hidden:{
        opacity:0,
        y:'50vh'
    },
    show: {
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            stiffness:100
        }
    },
    exit:{
        opacity:0,
        y:'-50vh',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
const pvariants = {
    hidden:{
        opacity:0,
        display:'none',
        x:'50vh'
    },
    show: {
        opacity:1,
        display:'inherit',
        x:0,
        transition:{
            type:'spring',
            stiffness:60
        }
    },
    exit:{
        opacity:0,
        display:'none',
        x:'-50vh',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export default function About(){
    const [state, setState] = useState(false)
    const [aux, setAux] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{setAux(true)}, 3000);
    },[])
    return(
        <motion.div className='about-cont' variants={aboutVariants} initial='hidden' animate='show' exit='exit'>
            <div className='about-subcont'>
                <h1 className='h1-about'>Martín Llobell</h1>
                <div className='foto-perfil'/>
            </div>
            <div className='about-description'>
                <h2 className='h2-description'>Sobre mi...</h2>
                <motion.p variants={pvariants} initial='hidden' animate={!state?'show':'hidden'} exit='exit' className='p-description'>Soy desarrollador de aplicaciones web, me apasiona la computación y todo lo relacionado con la tecnología. En definitiva adoro el mundo IT. Soy muy perfeccionista y me gusta mucho el diseño, es difícil que quede conforme con un solo resultado sabiendo que se puede mejorar. Adoro el orden, la organización y el trabajo en equipo. Me gustaría poder seguir desarrollándome tanto personal como profesionalmente adquiriendo experiencia y reforzando virtudes.</motion.p>
                <motion.p variants={pvariants} initial='hidden' animate={state?'show':'hidden'} exit='exit' className='p-description'>De chico siempre quise dedicarme a la computación, y ahora con 20 años soy programador! Tambien tengo conocimientos en reparación de equipos informáticos, me dedico principalmente al manteninimiento y reparación de computadoras, A demás soy músico, toco la guitarra y el piano, unos de mis géneros preferidos son el Hard Rock y el Metal</motion.p>
                <motion.p onClick={()=>{!state?(setState(true)):setState(false)}} className='p-changue' variants={pvariants} initial='hidden' animate={aux?'show':'hidden'} exit='exit'>{!state?'Ver Más...':'Atrás...'}</motion.p>
            </div>
            {/* ////// particles //////// */}
            <div className={styles.contDivsprueba}>    
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                        <div className={styles.particula}/>
                    </div>
        </motion.div>
    )
}
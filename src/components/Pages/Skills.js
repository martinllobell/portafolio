import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from './skills.module.scss'
import Aptitudes from "./skills/Aptitudes";
import {AnimatePresence} from 'framer-motion'


////////////////////
import Tecnologias from "./skills/Tecnologias";



const skillsVariants = {
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


export default function Skills(){

    const [skills, setSkills] = useState('')

    return(
        <motion.div  className='skills-cont' variants={skillsVariants} initial='hidden' animate='show' exit='exit'>
            <h2 className='skills-h2'>{skills==''?'Tecnologías':'Aptitudes Personales'}</h2>
            <button onClick={()=>{skills===''?setSkills('personal'):setSkills('')}} className='btn-switcher'>{skills==''?'Ver Aptitudes Personales':'Ver Skills Técnicas'}</button>
            <AnimatePresence exitBeforeEnter>
                {
                skills===''?<Tecnologias/>:<Aptitudes/>
                }
            </AnimatePresence>
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
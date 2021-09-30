import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from './projects.module.scss'
import cardfondo from '../../assets/proyectos/countires/cardfondo.png'
import cardfondo2 from '../../assets/proyectos/yoagronomo/cardfondo.png'
import cardfondo3 from '../../assets/proyectos/carrusel/cardfondo.png'
import { skillsVariants, projectsVariants, cardVariants, contCardVariants} from './projectVariants.js'
import { agronomo, countries, carrusel, ProjectOpen} from "./projectInfo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Projects(){

    const [openProjectData, setOpenProjectData] = useState({})
    const [mobile, setMobile] = useState(0)
    const projectBack = useSelector((state)=> state.projectback)
    const dispacth = useDispatch()
    useEffect(()=>{
        dispacth({type:'project-back', payload:false})
        setOpenProjectData({})
    },[])
    useEffect(()=>{
        var widthItem = window.outerWidth
        setMobile(widthItem)
    },[window.outerWidth])

    return(
        <motion.div className={styles.contMain} variants={projectsVariants} initial='hidden' animate='show' exit='exit'>
            <motion.h2 className={styles.h2Projects} variants={contCardVariants} initial='hidden' animate={!projectBack?'show':'hidden'} exit='exit'>Proyectos</motion.h2>
            <motion.p className={styles.projectDescription} variants={contCardVariants} initial='hidden' animate={!projectBack?'show':'hidden'} exit='exit'>Estos son algunos de mis proyectos personales, pronto irán apareciendo muchos más!</motion.p>
            <motion.div className={styles.fullScreenP} variants={skillsVariants} initial='hidden' animate={projectBack?'show':'hidden'} exit='exit'>
                {projectBack?ProjectOpen(openProjectData):null}
            </motion.div>
            <motion.div className={styles.contProject} variants={contCardVariants} initial='hidden' animate={!projectBack?'show':'hidden'} exit='exit'>
                <motion.div className={mobile<600?styles.yoagronomo:styles.none} onClick={()=>{dispacth({type:'project-back', payload:true}); setOpenProjectData(agronomo)}} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                        <img className={styles.imgCard} src={cardfondo2} alt=''/>
                        <div className={styles.ghostdiv}>
                            <h2 className={styles.h2Card}>Yo-Agrónomo</h2>  
                        </div>
                </motion.div>
                <motion.div className={mobile<600?styles.yoagronomo:styles.none} onClick={()=>{dispacth({type:'project-back', payload:true}); setOpenProjectData(agronomo)}} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo2} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>Yo-Agrónomo</h2>  
                    </div>
                </motion.div>
                <motion.div className={styles.countries} onClick={()=>{dispacth({type:'project-back', payload:true}); setOpenProjectData(countries)}} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>My Countries App</h2>  
                    </div>
                </motion.div>
                <motion.div className={styles.yoagronomo} onClick={()=>{dispacth({type:'project-back', payload:true}); setOpenProjectData(agronomo)}} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo2} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>Yo-Agrónomo</h2>  
                    </div>
                </motion.div>
                <motion.div className={styles.carrusell} onClick={()=>{dispacth({type:'project-back', payload:true}); setOpenProjectData(carrusel)}} variants={cardVariants} initial='hidden' animate='show' exit='exit'>
                    <img className={styles.imgCard} src={cardfondo3} alt=''/>
                    <div className={styles.ghostdiv}>
                        <h2 className={styles.h2Card}>Carousell</h2>  
                    </div>
                </motion.div>
            </motion.div>
            <motion.h2 className={mobile<600?styles.deslizah2:styles.none} variants={contCardVariants} initial='hidden' animate={!projectBack?'show':'hidden'} exit='exit'>Deslizá para ver!</motion.h2>
            <motion.button className={styles.btnAtras}  variants={cardVariants} initial='hidden' animate={projectBack?'show':'hidden'} exit='exit' onClick={()=>{dispacth({type:'project-back', payload:false})}}/>
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
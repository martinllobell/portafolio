import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import ico from '../../assets/arrow.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'


const navegacionVariants={
    hidden:{
        opacity:0,
        display:'none'
    },
    show: {
        opacity:1,
        transition:{
            ease: 'easeInOut',
            duration: 1
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
export default function NavBar (){
    const [footer, setFooter] = useState(false)
    const dispacth = useDispatch()
    const projectBack = useSelector((state)=> state.projectback)
    const [url, setUrl] = useState('')
    const [urlNext, setUrlNext] = useState('')
    const [urlPrev, setUrlPrev] = useState('')

    useEffect(()=>{
        setUrl(window.location.pathname);
    },[window.location.pathname])
    useEffect(()=>{
        if(url==='/about'){
            setUrlNext('/skills');
            setUrlPrev('/');
        }else if(url === '/skills'){
            setUrlNext('/projects');
            setUrlPrev('/about');
        }else if(url === '/projects'){
            setUrlNext('/contact');
            setUrlPrev('/skills');
        }else if(url==='/contact'){
            setUrlNext(null);
            setUrlPrev('/')
        }
    },[url])

    return (
        <div>
            <div className={styles.navbar}>
                <Link to='/' className={styles.ico}/>
                <div className={styles.contLinks}>
                    <Link to='/about'className={styles.link}>Sobre mi</Link>
                    <Link to='/skills' className={styles.link}>Aptitudes</Link>
                    <Link to='/projects' className={styles.link} onClick={()=>{dispacth({type:'project-back', payload:false})}}>Proyectos</Link>
                    <Link to='/contact' className={styles.link}>Contacto</Link>
                </div>
            </div>
            <motion.div className={styles.navegacionBtnCont} variants={navegacionVariants} hidden='hidden' animate={url==='/'||projectBack?'hidden':'show'} exit='exit' >
                <Link to={urlNext} className={urlNext===null?styles.none:styles.btnLinkNext} onClick={()=>{dispacth({type:'project-back', payload:false})}}></Link>
                <Link to={urlPrev} className={styles.btnLinkPrev} onClick={()=>{dispacth({type:'project-back', payload:false})}}></Link>
            </motion.div>
        </div>

    )
}
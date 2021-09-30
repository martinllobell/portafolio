import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import {motion} from 'framer-motion'
import {ghostDivMotionVariants, btnGhostMotion} from './variantsMotion'
import {Link} from 'react-router-dom'
import cvIco from '../../assets/CV.png'
import curriculum from '../../assets/CVLlobellEspañol.pdf'

export default function Home(){
    const [ghost, setGhost] = useState('')
    const [CV, SetCV] = useState()
    useEffect(()=>{
        SetCV(curriculum)
    },[])
    const contVariables = {
        hidden:{
            opacity: 0,
            y:'-10vh'
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                stiffness:30
            }
        },
        exit:{
            y:'-100vh',
            transition:{
                ease:'easeInOut',
                duration: 0.5
            }
        }
    }
    function copyNumber(){
        var input = '+5492616714972'
        navigator.clipboard.writeText(input);
        alert('Número Copiado')
    }

    return (
        <motion.div className={styles.contPrincipal} variants={contVariables} initial='hidden' animate='show' exit='exit'>
            <div className={styles.cont}>
                <div className={styles.home1}>
                    <div className={styles.contTitles}>
                        <h4 className={styles.title2}/>
                    </div>
                    <segment className={styles.contBtnInfo}>
                        <Link path to='/about' className={styles.btnMas}>{`</>`}</Link>
                    </segment>
                    <section className={styles.contRedes}>
                        <div onClick={()=>{setGhost('')}} className={ghost===''?styles.none:styles.ghotsdesactivate}/>
                        <motion.div className={styles.contLinksRedes} variants={ghostDivMotionVariants} initial='hidden' animate={ghost} exit='exit'>
                            <a href='https://github.com/martinllobell' className={styles.githubL}></a>
                            <Link to='/contact'className={styles.gmailL}/>
                            <a onClick={copyNumber} className={styles.whatsappL}></a>
                            <a href='https://www.linkedin.com/in/martin-llobell-devel0per' className={styles.linkedinL}></a>
                        </motion.div>
                        <motion.button onClick={()=>{ghost==''?setGhost('show'):setGhost('')}} className={ghost==''?styles.btnRedes:styles.btnRedesDes}><h4 className={styles.redesH4}>Redes Sociales!</h4></motion.button>
                    </section>
                    <section className={styles.cvSection}>
                        <h1 className={styles.textCV}>Descargá mi CV!</h1>
                        <a href={CV} download={CV} className={styles.btnCV} />
                    </section>
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
                    <h1 className={styles.title}> © Martín Llobell (todos los derechos resevados)</h1>
                </div>
            </div>
        </motion.div >
    )
}
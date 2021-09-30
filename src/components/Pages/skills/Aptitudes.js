import React from "react";
import { motion } from "framer-motion";
import auto from '../../../assets/aptitudes/auto-suficiente.png'
import comunicacion from '../../../assets/aptitudes/comunicacion.png'
import learn from '../../../assets/aptitudes/learn.png'
import proactivo from '../../../assets/aptitudes/proactivo.png'
import solucion from '../../../assets/aptitudes/solucion-problemas.png'
import team from '../../../assets/aptitudes/team-work.png'



const aptitudesVariants = {
    hidden:{
        opacity:0,
        // x:'-100vw'
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
        // x:'100vw',
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export default function Aptitudes(){
    return(
        <motion.div className={'skills-personales'} variants={aptitudesVariants} initial='hidden' animate='show' exit='exit'>
                    <div className='auto'>
                        <img className='imgIco' src={auto} alt=''/>
                        <p className='p-aptitud'>Self-Sufficient</p>
                    </div>
                    <div className='team'>
                        <img className='imgIco' src={team} alt=''/>
                        <p className='p-aptitud'>Team-Worker</p>
                    </div>
                    <div className='proactivo'>
                        <img className='imgIco' src={proactivo} alt=''/>
                        <p className='p-aptitud'>Proactive</p>
                    </div>
                    <div className='solucion'>
                        <img className='imgIco' src={solucion} alt=''/>
                        <p className='p-aptitud'>Problem-Solver</p>
                    </div>
                    <div className='learn'>
                        <img className='imgIco' src={learn} alt=''/>
                        <p className='p-aptitud'>Learn-Skill</p>
                    </div>
                    <div className='comunicacion'>
                        <img className='imgIco' src={comunicacion} alt=''/>
                        <p className='p-aptitud'>Comunicacion-Skill</p>
                    </div>
            </motion.div>  
    )
}
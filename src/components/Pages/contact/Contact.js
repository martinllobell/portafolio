import { motion } from "framer-motion";
import React, {useRef} from "react";
import styles from './contact.module.scss'
import email from '../../../assets/iconsContact/email.png'
import telefono from '../../../assets/iconsContact/telefono.png'
import ubicacion from '../../../assets/iconsContact/ubicacion.png'
import {variantsCont} from './variants.js'
import emailjs from 'emailjs-com'




export default function Contact(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bdiyctm', 'correo-gmail', form.current, 'user_vCV8lAwH1oo39BW3qfUun')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert('Mensaje enviado!')
      };
    return(
        <motion.div className={styles.contactCont} variants={variantsCont} initial='hidden' animate='show' exit='exit'>
            <motion.section className={styles.formCont}>
                <div className={styles.leftSide}>
                    <div className={styles.textcontLeft}>
                        <h2 className={styles.h2contact}>Trabajemos juntos!</h2>
                        <p className={styles.pcontact}>Dejame tu mensaje acá abajo y me pondré en contacto enseguida, completá con tu nombre y tu email.</p>
                    </div>
                    <form className={styles.form} ref={form} onSubmit={sendEmail}>
                        <div className={styles.inputCont}>
                            <input type='text' id='name' name='name' className={styles.input} placeholder='Nombre'></input>
                            <input type='email' id='email' name='email' className={styles.input} placeholder='Correo electrónico'></input>
                        </div>
                        <div className={styles.textareaCont}>
                            <textarea name='message' id='message' rows='4' placeholder='Escribí tu mensaje...' className={styles.textarea}></textarea>
                            <input type='submit' value='Send' className={styles.buttonSend}></input>
                        </div>
                    </form>
                </div>
                <div className={styles.rightSide}>
                    <h2 className={styles.h2contactR}>Información de contacto</h2>
                    <div className={styles.contIco}>
                        <div>
                            <div className={styles.conticoname}>
                                <img src={ubicacion} alt='' className={styles.ico}/>
                                <p className={styles.iconame}>Ubicación: </p>
                            </div>
                            <p className={styles.info}>Virgen De Lourdes 3595, Maipú Mendoza, Argentina</p>
                        </div>
                        <div>
                            <div className={styles.conticoname}>
                                <img src={email} alt='' className={styles.ico}/>
                                <p className={styles.iconame}>Email: </p>
                            </div>
                            <p className={styles.info}>martinllobell3.0@gmail.com</p>
                        </div>
                        <div>
                            <div className={styles.conticoname}>
                                <img src={telefono} alt='' className={styles.ico}/>
                                <p className={styles.iconame}>Teléfono: </p>
                            </div>
                            <p className={styles.info}>+54 9 2616714972</p>
                        </div>
                    </div>
                </div>
            </motion.section>
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
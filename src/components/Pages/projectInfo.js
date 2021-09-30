import Cinicio from '../../assets/proyectos/countires/inicio.jpg'
import Cdetalle from '../../assets/proyectos/countires/detalle.jpg'
import Clanding from '../../assets/proyectos/countires/landing.jpg'
//////////////////////////////////////////////////////////////////
import Ymenu from '../../assets/proyectos/yoagronomo/menu.jpg'
import Ylotes from '../../assets/proyectos/yoagronomo/lotes.jpg'
import Yresponsive from '../../assets/proyectos/yoagronomo/responsive.gif'
import Ymanejo from '../../assets/proyectos/yoagronomo/manejo.gif'
///////////////////////////////////////////////////////////////////////
import carruselgif from '../../assets/proyectos/carrusel/carrusel.gif'
///////////////////////////////////////////////////////////////////////
import styles from './projects.module.scss'
import arrow from '../../assets/arrow.png'
import store from '../../redux/store.js'


export const countries ={
    name: 'Countries-App!',
    images: [Cinicio, Cdetalle, Clanding],
    description: 'Esta aplicación permite ver países y su respectiva información (continente, población, área, bandera, etc) agregar actividades turísticas y filtrar por población, continente, orden alfabético y por actividades turísticas. Tiene una interfaz acorde a la temática. Utilicé React/Nodejs para realizarla y me tomó aproximadamente 2 semanas terminarla',
    cargo:'Full-Stack',
    tecnologias: 'React, Node.js, PostgreSQL, Express, Sequelize, CSS, HTML, API-REST',
    duracion: '2 semanas',

}
export const agronomo ={
    name:'Yo-Agrónomo!',
    images:[Ymenu, Ylotes, Yresponsive, Ymanejo],
    description: 'YoAgrónomo nace de la necesidad de una herramienta de gestión integral, en donde la persona que administra una empresa del sector agro pueda tener fácil acceso a toda su información. Nuestra plataforma le permite conservar un registro de las cuestiones más importantes del día a día, mantener una agenda ordenada y consultar datos e informes relevantes respecto al clima, consultas técnicas o el estado de los mercados. Mediante una herramienta satelital, se puede acceder a datos en tiempo real de análisis de suelo.',
    cargo:'Full-Stack(orientación Front-End)',
    tecnologias: 'React, Node.js, PostgreSQL, Express, Sequelize, CSS, HTML, API-REST',
    duracion: '3 semanas',

}
export const carrusel ={
    name:'Carousell SPA',
    images:[carruselgif],
    description:'Se trata de un carrusel sin librerías de ningún tipo únicamente Javascript vanilla. El objetivo era poder realizar un carrusel consumiendo un JSON, la navegación debería ser con botones sin utilizar librerías de terceros. la tecnología principal que utilicé fue React-Native (Expo), Fue divertido para mí puesto que no tenía experiencia con native pero pude realizarlo sin muchas complicaciones',
    cargo:'Front-End, Mobile Developer',
    tecnologias: 'React-Native, StyleSheet',
    duracion: '5 días',
}

export function ProjectOpen(project){
    const {name, images, description, tecnologias, cargo, duracion} = project

    function dispatchBackProject() {
        const action = {
          type: 'project-back',
          payload: false
        }
        store.dispatch(action)
      }

    function bucleImg(images){
        let imagenes = 0
        images&&images.map((d,i)=>{
            imagenes = i
        })
        if(imagenes === 0){
            return (
                <div className={styles.carruselImgsCarrusel}>
                    <img className={styles.imageCarruselCarruselApp} src={images[0]} alt=''/>
                </div>
            ) 
        }else if(imagenes === 3){
            var posicion = 1
            function slideNext(){
                var widthItem = window.outerWidth * 0.40;
                if(posicion < 4 && window.outerWidth > 1000){
                    document.getElementById('carrusell').scrollTo(widthItem * posicion, 0)
                    posicion = posicion + 1
                }else if(window.outerWidth < 1000){
                    var widthIteMobile = window.outerWidth * 0.80;
                    document.getElementById('carrusell').scrollTo(widthIteMobile * posicion, 0)
                    posicion = posicion + 1
                }else{
                    posicion = 1
                    document.getElementById('carrusell').scrollTo(-widthItem, 0)
                }

                console.log('AASASASDADD', window.outerWidth);
            }
            return (
                <div className={styles.carruselImgs} id='carrusell'>
                    <section className={styles.arrows}>
                        <img className={styles.nextA} src={arrow} alt='' onClick={slideNext}/>
                    </section>
                    <img className={styles.imageCarruselAgronomo} src={images[0]} alt='' id='img-1'/>
                    <img className={styles.imageCarruselAgronomo} src={images[1]} alt='' id='img-2'/>
                    <img className={styles.imageCarruselAgronomo} src={images[2]} alt='' id='img-3'/>
                    <img className={styles.imageCarruselAgronomo} src={images[3]} alt='' id='img-4'/>
                </div>
            ) 
        }else if(imagenes === 2){
            var posicion = 1
            function slideNext(){
                var widthItem = window.outerWidth * 0.22;
                if(posicion < 3 && window.outerWidth>1000){
                    document.getElementById('carrusell').scrollTo(widthItem * posicion, 0)
                    posicion = posicion + 1
                }else if(window.outerWidth < 1000){
                    var widthIteMobile = window.outerWidth * 0.80;
                    document.getElementById('carrusell').scrollTo(widthIteMobile * posicion, 0)
                    posicion = posicion + 1
                }else {
                    posicion = 1
                    document.getElementById('carrusell').scrollTo(-widthItem, 0)
                }
            }
            return (
                <div className={styles.carruselImgsCountries} id='carrusell'>
                <section className={styles.arrowsCountries}>
                    <img className={styles.nextA} src={arrow} alt='' onClick={slideNext}/>
                </section>
                    <img className={styles.imageCarruselPaises} src={images[0]} alt=''/>
                    <img className={styles.imageCarruselPaises} src={images[1]} alt=''/>
                    <img className={styles.imageCarruselPaises} src={images[2]} alt=''/>
                </div>
            ) 
        }
    }
    return(
        <div className={styles.contProjectFullScreen}>
            <h1 className={project.name==='Carousell SPA'?styles.none:styles.h1Project} onClick={dispatchBackProject}>{name}</h1>
            <div className={styles.sliderYDesc}>
                {bucleImg(images)}
                <h4 className={styles.descriptionH4} onClick={dispatchBackProject}>Descripción <p className={styles.description}>{description}</p></h4>
            </div>
            <div className={styles.contInfo} onClick={dispatchBackProject}>
                <h4>Cargo<p>{cargo}</p> </h4>
                <h4>Tecnologías <p>{tecnologias}</p></h4>
                <h4>Duración<p>{duracion}</p></h4>
            </div>
        </div>
    )
}
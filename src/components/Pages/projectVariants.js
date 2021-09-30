export const skillsVariants = {
    hidden:{
        opacity:0,
        y:'50vh'
    },
    oculto: {
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            stiffness:100
        }
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
export const projectsVariants = {
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
export const cardVariants={
    hidden:{
        opacity:0,
    },
    show: {
        opacity:.8,
        transition:{
            type:'spring',
            stiffness:100
        }
    },
    exit:{
        opacity:0,
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export const contCardVariants={
    hidden:{
        opacity:0,
        y:'50vh',
        zIndex: 2,
    },
    show: {
        opacity:1,
        zIndex: 20,
        y:'0',
        x:0,
        transition:{
            type:'spring',
            stiffness:100
        }
    },
    exit:{
        opacity:0,
        transition:{
            ease:'easeInOut',
            duration: 0.5
        }
    }
}
export const variantsCont = {
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
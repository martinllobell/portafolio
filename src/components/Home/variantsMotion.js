export const ghostDivMotionVariants ={
    hidden:{
        opacity: 0,
        x:'-5vw'
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            ease:'easeInOut',
            duration: 0.6
        }
    },
    exit:{
        x:'-5vw',
        transition:{
            type:'spring',
            stiffness:30
        }
    }
}
export const btnGhostMotion = {
    initial:{
        x:0
    },
    tap:{
        x:'10vw',
        transition:{
            type:'spring',
            stiffness:100
        }
    },
    end:{
        x:0,
        transition:{
            type:'spring',
            stiffness:80
        }
    }
}
const initialState = {
    projectback: false

}
export default function reducer (state = initialState, action){
    switch(action.type){
        case 'project-back':
            return {
                ...state,
                projectback: action.payload
        }
        default:
            return {
                ...state
            }
    }
}
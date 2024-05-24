// import {createContext, useReducer} from 'react'

// export const WorkoutsContext =createContext()

// export const WorkoutContextProvider=({children})=>{
//     const[state,dispatch]=useReducer(workoutsReducer,{
//        workouts:null 
//     })
    
//     // dispatch({type:'SET_WORKOUTS',payload})
//     return(
//       <WorkoutsContext.Provider value={{workouts:[]}}>
//         {children}
//       </WorkoutsContext.Provider>
//     )
// }
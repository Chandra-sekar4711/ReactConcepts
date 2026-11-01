import React from 'react'
import {Home} from './Home.jsx'
import { createContext } from 'react'

 export const contextdata = createContext();


function MainPage() {


    return(
    <div>
    <contextdata.Provider value="Manobalan">
     <Home />
    </contextdata.Provider>
    </div>
)
}

export { MainPage}

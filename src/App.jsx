import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { Context, state as initialState, reducers } from './store/tabs'

// Sections
import Header from './sections/Header'
import Sidebar from './sections/Sidebar'
import Main from './sections/Main'

// Styled
import { StyledWrapper } from './styled'

const App = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)
   const [isSidebarVisible, toggleSidebar] = React.useState(false)
   return (
      <StyledWrapper>
         <Context.Provider value={{ state, dispatch }}>
            <Router>
               <Header toggleSidebar={toggleSidebar} />
               <Sidebar
                  visible={isSidebarVisible}
                  toggleSidebar={toggleSidebar}
               />
               <Main />
            </Router>
         </Context.Provider>
      </StyledWrapper>
   )
}

export default App
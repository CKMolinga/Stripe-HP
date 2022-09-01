import React, { useState, useContext } from 'react'
import sublinks from './data'

 const AppContenxt = React.createContext()

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContenxt.Provider value={{isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSidebar, closeSubmenu}}>{children}</AppContenxt.Provider>
}

export const useGlobalContext = () => { return useContext(AppContenxt)} 
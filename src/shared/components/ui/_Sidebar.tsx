import { createContext, useCallback, useContext, useState } from "react"
import { cn } from "@/shared/lib/utils"
import { useIsMobile } from "@/shared/hooks/use-mobile"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
    state: "expanded" | "collapsed"
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.")
    }
    return context
}

function SidebarProvider({
    className,
    style,
    children,
    ...props
}: React.ComponentProps<"div">) {
    const isMobile = useIsMobile();
    const [_open, _setOpen] = useState<boolean>(true);
    const [openMobile, setOpenMobile] = useState<boolean>(false);

    const setOpen = useCallback((value:boolean) => {
        _setOpen(value)

        document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE};`
    },[_open])

    const toggleSidebar = useCallback(() => {
        return isMobile ? setOpenMobile(!openMobile) : setOpen(!_open)
    }, [isMobile, setOpen, setOpenMobile, openMobile, _open])

    const state = _open ? "expanded" : "collapsed"

    return (
        <SidebarContext.Provider value={{}}>

        </SidebarContext.Provider>
    )
}

function Sidebar() {
    return (
        <></>
    )
}

function SidebarInset() {
    return (
        <></>
    )
}

function SidebarHeader() {
    return (
        <></>
    )
}

function SidebarFooter() {
    return (
        <></>
    )
}

function SidebarTrigger() {
    return (
        <></>
    )
}
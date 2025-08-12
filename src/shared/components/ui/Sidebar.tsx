"use client"

import * as React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

import { useIsMobile } from "@/shared/hooks/use-mobile"
import { cn } from "@/shared/lib/utils"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
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

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
	const context = React.useContext(SidebarContext)
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.")
	}

	return context
}

function SidebarProvider({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	className,
	style,
	children,
	...props
}: React.ComponentProps<"div"> & {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean) => void
}) {
	const isMobile = useIsMobile()
	const [openMobile, setOpenMobile] = React.useState(false)

	// This is the internal state of the sidebar.
	// We use openProp and setOpenProp for control from outside the component.
	const [_open, _setOpen] = React.useState(defaultOpen)
	const open = openProp ?? _open
	const setOpen = React.useCallback(
		(value: boolean | ((value: boolean) => boolean)) => {
			const openState = typeof value === "function" ? value(open) : value
			if (setOpenProp) {
				setOpenProp(openState)
			} else {
				_setOpen(openState)
			}

			// This sets the cookie to keep the sidebar state.
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
		},
		[setOpenProp, open]
	)

	// Helper to toggle the sidebar.
	const toggleSidebar = React.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
	}, [isMobile, setOpen, setOpenMobile])

	// Adds a keyboard shortcut to toggle the sidebar.
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
				(event.metaKey || event.ctrlKey)
			) {
				event.preventDefault()
				toggleSidebar()
			}
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [toggleSidebar])

	// We add a state so that we can do data-state="expanded" or "collapsed".
	// This makes it easier to style the sidebar with Tailwind classes.
	const state = open ? "expanded" : "collapsed"

	const contextValue = React.useMemo<SidebarContextProps>(
		() => ({
			state,
			open,
			setOpen,
			isMobile,
			openMobile,
			setOpenMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
	)

	return (
		<SidebarContext.Provider value={contextValue}>
			<div
				data-slot="sidebar-wrapper"
				style={
					{
						"--sidebar-width": SIDEBAR_WIDTH,
						"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
						...style,
					} as React.CSSProperties
				}
				className={cn(
					"group/sidebar-wrapper flex min-h-screen w-full bg-base-100",
					className
				)}
				{...props}
			>
				{children}
			</div>
		</SidebarContext.Provider>
	)
}

function Sidebar({
	side = "left",
	variant = "sidebar",
	collapsible = "offcanvas",
	className,
	children,
	...props
}: React.ComponentProps<"div"> & {
	side?: "left" | "right"
	variant?: "sidebar" | "floating" | "inset"
	collapsible?: "offcanvas" | "icon" | "none"
}) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

	if (collapsible === "none") {
		return (
			<div
				data-slot="sidebar"
				className={cn(
					"bg-base-200 text-base-content flex h-full w-64 flex-col border-r border-base-300",
					className
				)}
				{...props}
			>
				{children}
			</div>
		)
	}

	if (isMobile) {
		return (
			<div className="drawer">
				<input
					id="sidebar-drawer"
					type="checkbox"
					className="drawer-toggle"
					checked={openMobile}
					onChange={(e) => setOpenMobile(e.target.checked)}
				/>
				<div className="drawer-side">
					<label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
					<aside
						className={cn(
							"bg-base-200 text-base-content min-h-full w-72 p-0",
							className
						)}
						{...props}
					>
						<div className="flex h-full w-full flex-col">{children}</div>
					</aside>
				</div>
			</div>
		)
	}

	return (
		<div
			className="group peer text-base-content hidden md:block"
			data-state={state}
			data-collapsible={state === "collapsed" ? collapsible : ""}
			data-variant={variant}
			data-side={side}
			data-slot="sidebar"
		>
			{/* This is what handles the sidebar gap on desktop */}
			<div
				data-slot="sidebar-gap"
				className={cn(
					"relative w-64 bg-transparent transition-[width] duration-200 ease-linear",
					state === "collapsed" && collapsible === "offcanvas" && "w-0",
					side === "right" && "rotate-180",
					variant === "floating" || variant === "inset"
						? state === "collapsed" && "w-16"
						: state === "collapsed" && "w-12"
				)}
			/>
			<div
				data-slot="sidebar-container"
				className={cn(
					"fixed inset-y-0 z-10 hidden h-screen w-64 transition-[left,right,width] duration-200 ease-linear md:flex",
					side === "left"
						? "left-0"
						: "right-0",
					state === "collapsed" && collapsible === "offcanvas" && side === "left" && "-left-64",
					state === "collapsed" && collapsible === "offcanvas" && side === "right" && "-right-64",
					// Adjust for variants
					variant === "floating" || variant === "inset"
						? "p-2"
						: state !== "collapsed" && side === "left" && "border-r border-base-300",
					state !== "collapsed" && side === "right" && "border-l border-base-300",
					state === "collapsed" && "w-12",
					className
				)}
				{...props}
			>
				<div
					data-sidebar="sidebar"
					data-slot="sidebar-inner"
					className={cn(
						"flex h-full w-full flex-col",
						variant === "floating" && "rounded-lg border border-base-300 shadow-lg",
						variant === "inset" && "rounded-lg border border-base-300"
					)}
				>
					{children}
				</div>
			</div>
		</div>
	)
}

function SidebarTrigger({
	className,
	onClick,
	...props
}: React.ComponentProps<"button">) {
	const { toggleSidebar } = useSidebar()

	return (
		<button
			data-sidebar="trigger"
			data-slot="sidebar-trigger"
			className={cn("btn btn-ghost btn-square btn-sm", className)}
			onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
				onClick?.(event)
				toggleSidebar()
			}}
			{...props}
		>
			<Bars3Icon className="size-4" />
			<span className="sr-only">Toggle Sidebar</span>
		</button>
	)
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
	return (
		<main
			data-slot="sidebar-inset"
			className={cn(
				"bg-base-100 relative flex w-full flex-1 flex-col",
				"md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
				className
			)}
			{...props}
		/>
	)
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-header"
			data-sidebar="header"
			className={cn("flex flex-col gap-2 border-b border-base-300", className)}
			{...props}
		/>
	)
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sidebar-footer"
			data-sidebar="footer"
			className={cn("flex p-4", className)}
			{...props}
		/>
	)
}

export {
	Sidebar,
	SidebarFooter,
	SidebarHeader,
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
	useSidebar,
}

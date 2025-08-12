"use client"

import * as React from "react"
import {
  Sidebar
} from "@/shared/components/ui/Sidebar"
import SidebarContent from "./SidebarContent"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
        <SidebarContent />
    </Sidebar>
  )
}
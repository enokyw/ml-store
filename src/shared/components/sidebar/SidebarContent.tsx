import React, { useState, useEffect } from 'react';
import {
    ChevronRightIcon,
    PlayIcon,
    ClockIcon,
    StarIcon,
    Cog6ToothIcon,
    CpuChipIcon,
    DocumentTextIcon,
    AdjustmentsHorizontalIcon,
    WrenchScrewdriverIcon,
    ChartBarIcon,
    PaperAirplaneIcon,
    EllipsisHorizontalIcon,
    BuildingOfficeIcon,
    UserIcon,
} from '@heroicons/react/24/outline';

import {
    SidebarHeader,
    SidebarFooter,
    useSidebar,
} from '@/shared/components/ui/Sidebar';

interface NavigationItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    isExpandable?: boolean;
    children?: NavigationItem[];
}

const AppSidebarContent: React.FC = () => {
    const { state, isMobile } = useSidebar();
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['playground']));

    const isCollapsed = state === 'collapsed';

    // Close expanded items when in collapsed mode
    useEffect(() => {
        if (isCollapsed && !isMobile) {
            setExpandedItems(new Set());
        } else if (!isCollapsed && !isMobile) {
            setExpandedItems(new Set(['playground']));
        }
    }, [isCollapsed, isMobile]);

    const toggleExpanded = (itemId: string) => {
        // Don't allow expansion in collapsed mode
        if (isCollapsed && !isMobile) return;

        const newExpandedItems = new Set(expandedItems);
        if (newExpandedItems.has(itemId)) {
            newExpandedItems.delete(itemId);
        } else {
            newExpandedItems.add(itemId);
        }
        setExpandedItems(newExpandedItems);
    };

    const platformItems: NavigationItem[] = [
        {
            id: 'playground',
            label: 'Playground',
            icon: <PlayIcon className="size-4" />,
            isExpandable: true,
            children: [
                { id: 'history', label: 'History', icon: <ClockIcon className="size-4" /> },
                { id: 'starred', label: 'Starred', icon: <StarIcon className="size-4" /> },
                { id: 'settings-sub', label: 'Settings', icon: <Cog6ToothIcon className="size-4" /> },
            ]
        },
        { id: 'models', label: 'Models', icon: <CpuChipIcon className="size-4" /> },
        { id: 'documentation', label: 'Documentation', icon: <DocumentTextIcon className="size-4" /> },
        { id: 'settings', label: 'Settings', icon: <AdjustmentsHorizontalIcon className="size-4" /> },
    ];

    const projectItems: NavigationItem[] = [
        { id: 'design-engineering', label: 'Design Engineering', icon: <WrenchScrewdriverIcon className="size-4" /> },
        { id: 'sales-marketing', label: 'Sales & Marketing', icon: <ChartBarIcon className="size-4" /> },
        { id: 'travel', label: 'Travel', icon: <PaperAirplaneIcon className="size-4" /> },
        { id: 'more', label: 'More', icon: <EllipsisHorizontalIcon className="size-4" /> },
    ];

    const renderNavigationItem = (item: NavigationItem) => {
        const isExpanded = expandedItems.has(item.id);

        if (item.isExpandable) {
            return (
                <li key={item.id}>
                    <button
                        onClick={() => toggleExpanded(item.id)}
                        className="btn btn-ghost w-full justify-between px-3 py-2 text-sm font-medium hover:bg-base-300 rounded-md transition-colors min-h-0 h-auto normal-case"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-base-content/70">{item.icon}</span>
                            <span className="text-base-content group-data-[collapsible=icon]:hidden">{item.label}</span>
                        </div>
                        <ChevronRightIcon
                            className={`size-4 text-base-content/70 transition-transform duration-200 group-data-[collapsible=icon]:hidden ${isExpanded ? 'rotate-90' : ''
                                }`}
                        />
                    </button>
                    {isExpanded && item.children && (
                        <ul className="ml-4 mt-1 space-y-1 group-data-[collapsible=icon]:hidden">
                            {item.children.map((childItem) => (
                                <li key={childItem.id}>
                                    <a
                                        href="#"
                                        className="btn btn-ghost w-full justify-start px-3 py-2 text-sm hover:bg-base-300 rounded-md transition-colors min-h-0 h-auto normal-case font-normal"
                                    >
                                        <span className="text-base-content/70">{childItem.icon}</span>
                                        <span className="text-base-content">{childItem.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            );
        }

        return (
            <li key={item.id}>
                <a
                    href="#"
                    className="btn btn-ghost w-full justify-start px-3 py-2 text-sm font-medium hover:bg-base-300 rounded-md transition-colors min-h-0 h-auto normal-case"
                >
                    <span className="text-base-content/70">{item.icon}</span>
                    <span className="text-base-content group-data-[collapsible=icon]:hidden">{item.label}</span>
                </a>
            </li>
        );
    };

    return (
        <>
            {/* Company Header */}
            <SidebarHeader>
                <div className="flex items-center gap-3 w-full justify-start p-4 h-auto min-h-0">
                    <div className="size-8 bg-primary text-primary-content rounded-lg flex items-center justify-center flex-shrink-0">
                        <BuildingOfficeIcon className="size-5" />
                    </div>
                    <div className="flex-1 text-left group-data-[collapsible=icon]:hidden">
                        <div className="truncate font-semibold text-sm text-base-content">Acme Inc</div>
                        <div className="truncate text-xs text-base-content/70">Enterprise</div>
                    </div>
                </div>
            </SidebarHeader>

            {/* Navigation Content */}
            <div className="flex-1 overflow-auto p-4">
                {/* Platform Section */}
                <div className="mb-6">
                    <div className="text-xs font-semibold text-base-content/70 uppercase tracking-wider mb-3 px-2 group-data-[collapsible=icon]:hidden">
                        Platform
                    </div>
                    <ul className="space-y-1">
                        {platformItems.map(item => renderNavigationItem(item))}
                    </ul>
                </div>

                {/* Projects Section */}
                <div>
                    <div className="text-xs font-semibold text-base-content/70 uppercase tracking-wider mb-3 px-2 group-data-[collapsible=icon]:hidden">
                        Projects
                    </div>
                    <ul className="space-y-1">
                        {projectItems.map(item => renderNavigationItem(item))}
                    </ul>
                </div>
            </div>

            {/* User Profile */}
            <SidebarFooter>
                <div className="dropdown dropdown-right dropdown-end w-full">
                    <div tabIndex={0} role="button" className="btn btn-ghost w-full justify-start px-3 py-2 text-sm font-medium hover:bg-base-300 rounded-md transition-colors min-h-0 h-auto normal-case">
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <UserIcon className="size-4 text-white" />
                            </div>
                        </div>
                        <div className="flex-1 text-left group-data-[collapsible=icon]:hidden">
                            <div className="truncate font-medium text-sm text-base-content">shadcn</div>
                            <div className="truncate text-xs text-base-content/70">me@example.com</div>
                        </div>
                        <ChevronRightIcon className="size-4 text-base-content/50" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </SidebarFooter>
        </>
    );
};

export default AppSidebarContent;
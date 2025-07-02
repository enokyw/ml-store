import {
    ComputerDesktopIcon,
    BellIcon,
    ChatBubbleLeftRightIcon,
    BookmarkIcon,
    BriefcaseIcon,
    UserGroupIcon,
    StarIcon,
    CheckBadgeIcon,
    UserIcon,
    EllipsisHorizontalIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'

interface NavigationItem {
    icon: React.ElementType
    label: string
    href: string
    badge?: number
}

const navigationItems: NavigationItem[] = [
    { icon: ComputerDesktopIcon, label: 'Dashboard', href: '/[tenant]' },
    { icon: ClipboardDocumentListIcon, label: 'Inventario', href: '/[tenant]/inventory' },
    { icon: BellIcon, label: 'Notifications', href: '/notifications', badge: 3 },
    { icon: ChatBubbleLeftRightIcon, label: 'Messages', href: '/messages' },
    { icon: BookmarkIcon, label: 'Bookmarks', href: '/bookmarks' },
    { icon: BriefcaseIcon, label: 'Jobs', href: '/jobs' },
    { icon: UserGroupIcon, label: 'Communities', href: '/communities' },
    { icon: StarIcon, label: 'Premium', href: '/premium' },
    { icon: CheckBadgeIcon, label: 'Verified Orgs', href: '/verified' },
    { icon: UserIcon, label: 'Profile', href: '/profile' },
    { icon: EllipsisHorizontalIcon, label: 'More', href: '/more' },
]

export const Sidebar = () => {
    return (
        <div className="flex h-full bg-base-100">
            <div className="w-16 xl:w-64 bg-base-100 border-r border-base-300 flex flex-col h-full">
                {/* Logo */}
                <div className="p-4">
                    <div className="w-8 h-8 bg-base-content rounded-full flex items-center justify-center hover:bg-base-content/80 transition-colors cursor-pointer">
                        <span className="text-base-100 font-bold text-lg">𝕏</span>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-2 overflow-y-auto">
                    <ul className="space-y-1">
                        {navigationItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-base-200 transition-colors group"
                                >
                                    <div className="relative">
                                        <item.icon className="size-6" />
                                        {item.badge && (
                                            <span className="absolute -top-1 -right-1 bg-primary text-primary-content text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <span className="hidden xl:block font-medium">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Post Button */}
                <div className="p-4">
                    <button className="btn btn-primary w-full xl:btn-lg">
                        <span className="hidden xl:block">Post</span>
                        <span className="xl:hidden">+</span>
                    </button>
                </div>

                {/* User Profile */}
                <div className="p-4 border-t border-base-300">
                    <div className="flex items-center gap-3 p-2 rounded-full hover:bg-base-200 cursor-pointer">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://picsum.photos/40/40" alt="Profile" />
                            </div>
                        </div>
                        <div className="hidden xl:block flex-1 min-w-0">
                            <div className="font-bold text-sm truncate">enok lima</div>
                            <div className="text-base-content/70 text-sm truncate">@enoklima369</div>
                        </div>
                        <EllipsisHorizontalIcon className="hidden xl:block w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}
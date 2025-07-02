import {
    ChevronRightIcon,
    UserIcon,
    KeyIcon,
    ArrowDownTrayIcon,
    ExclamationTriangleIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

interface SettingItem {
    icon: React.ElementType
    title: string
    description: string
    href: string
}

const accountSettings: SettingItem[] = [
    {
        icon: UserIcon,
        title: 'Account information',
        description: 'See your account information like your phone number and email address.',
        href: '/settings/account'
    },
    {
        icon: KeyIcon,
        title: 'Change your password',
        description: 'Change your password at any time.',
        href: '/settings/password'
    },
    {
        icon: ArrowDownTrayIcon,
        title: 'Download an archive of your data',
        description: 'Get insights into the type of information stored for your account.',
        href: '/settings/download'
    },
    {
        icon: ExclamationTriangleIcon,
        title: 'Deactivate your account',
        description: 'Find out how you can deactivate your account.',
        href: '/settings/deactivate'
    }
]

const settingsCategories = [
    'Your account',
    'Monetization',
    'Premium',
    'Creator Subscriptions',
    'Security and account access',
    'Privacy and safety',
    'Notifications',
    'Accessibility, display, and languages',
    'Additional resources',
    'Help Center'
]

export const SettingsPanel = () => {
    
    return (
        <div className="w-70 xl:w-80 bg-base-100 border-r border-base-300 flex flex-col h-full">
            {/* Settings Header */}
            <div className="p-4 border-b border-base-300">
                <h1 className="text-xl font-bold">Settings</h1>

                {/* Search */}
                <div className="relative mt-4">
                    <label className="label w-full">
                        <input type="text" required placeholder="Search" className="input input-md pl-10 rounded-full" />
                        <MagnifyingGlassIcon className="size-6 text-base-content/50 absolute left-2 top-1/2 -translate-y-1/2 z-[1]" />
                    </label>
                </div>
            </div>

            {/* Settings Categories */}
            <div className="flex-1 overflow-y-auto">
                <nav className="py-2">
                    {settingsCategories.map((category, index) => (
                        <a
                            key={category}
                            href={`/settings/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`flex items-center justify-between px-6 py-3 hover:bg-base-200 transition-colors ${index === 0 ? 'bg-base-200 border-r-2 border-primary' : ''
                                }`}
                        >
                            <span className={`text-sm ${index === 0 && ''}`}>
                                {category}
                            </span>
                            <ChevronRightIcon className="size-5 text-base-content/50" />
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export const AccountSettingsDetail = () => {
    return (
        <div className="p-6 space-y-1">
            {accountSettings.map((setting) => (
                <a
                    key={setting.title}
                    href={setting.href}
                    className="flex items-center gap-4 p-4 hover:bg-base-200 transition-colors group"
                >
                    <div className="p-3 rounded-full bg-base-200/50 group-hover:bg-base-300">
                        <setting.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base">{setting.title}</h3>
                        <p className="text-base-content/60 text-sm mt-1 leading-relaxed">{setting.description}</p>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-base-content/40 group-hover:text-base-content/60" />
                </a>
            ))}
        </div>
    )
} 
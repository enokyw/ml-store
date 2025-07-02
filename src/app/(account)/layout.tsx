export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex items-center justify-center size-full">
            <div className="fixed inset-0">
                {children}
            </div>
        </main>
    )
}
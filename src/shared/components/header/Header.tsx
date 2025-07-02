export const Header = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
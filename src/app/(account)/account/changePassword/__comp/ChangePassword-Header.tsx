interface ChangePasswordHeaderProps {
    onClose: () => void;
    canGoBack?: boolean;
    onBack?: () => void;
}

export const ChangePasswordHeader = ({ onClose, canGoBack = false, onBack }: ChangePasswordHeaderProps) => {
    const handleCloseClick = () => {
        if (canGoBack && onBack) {
            onBack();
        } else {
            onClose();
        }
    };

    return (
        <div className="flex justify-between items-center mb-6">
            <button 
                onClick={handleCloseClick}
                className="btn btn-ghost btn-sm btn-circle"
            >
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <button className="btn btn-ghost btn-sm btn-circle">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    );
}; 
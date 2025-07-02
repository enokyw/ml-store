interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input = ({ label, className, ...props }: InputProps) => {
    return (
        <label className="floating-label">
            <span>{label}</span>
            <input
                className={`input input-md w-full ${className || ''}`}
                {...props}
            />
        </label>
    )
}
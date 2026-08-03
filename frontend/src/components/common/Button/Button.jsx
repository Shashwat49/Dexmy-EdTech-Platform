import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, onClick, type = 'button' }) => {
    return (
        <button
            type={type}
            className={`btn btn--${variant} btn--${size}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    //Optional
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

function Button({children, color = 'primary', onClick}: ButtonProps) {
    return (
        <div>
            <button
                type="button"
                className={"btn btn-" + color}
                onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button

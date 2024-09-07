import {ReactNode} from "react";

interface AlertProps {
    children: ReactNode;
    onClose: () => void;
}

function Alert({children, onClose}: AlertProps) {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose}/>
        </div>
    )
}

export default Alert


import type { FC } from 'react';
import type { ReactDivProps } from '../../components';


export
type ModalProps = ReactDivProps & {
    open?: boolean
}

// ---------------------------

// Functional Component.
export
const Modal: FC<ModalProps> = ({
    open,
    className: _className, 
    ...props
}) => {
    // console.clear()
    console.group("●●● (src/theme/daisyui/Modal) ●●●")

    const className = ['modal', open ? 'modal-open' : '', _className].join(' ')
    // console.log("1. className:", className)

    console.groupEnd()
    
    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={className} />
} // Modal



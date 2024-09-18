import type { FC } from 'react';
import type { ReactDivProps } from '../../components';


export
type ModalActionProps = ReactDivProps & {}  // ModalActionProps

// ---------------------------

export
const ModalAction: FC<ModalActionProps> = ({
    className: _className, 
    ...props
}) => {
    // console.clear()
    console.group("●●● (ModalAction) ●●●")

    // console.log("1. className:", _className)
    // console.log("2. props:", props)

    const className = ['modal-action', _className].join(' ')

    console.groupEnd()

    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={className} />
} // ModalAction



import type { FC } from 'react';
import type { ReactDivProps } from '../../components';



// ---------------------------

export
type ModalProps = ReactDivProps & {
    open?: boolean
} // ModalProps

// ---------------------------

// Functional Component.
export
const Modal: FC<ModalProps> = ({
    open,
    className: _className, 
    ...props
}) => {
    // console.clear();
    // console.group(
    //     ">>> Modal(",
    //     "\n\topen:", open,
    //     "\n\tclassName:", _className,
    //     "\n\tprops:", props,
    //     "\n) invoked."
    // )

    // console.clear()
    console.group("●●● (Modal) ●●●")

    const className = ['modal', open ? 'modal-open' : '', _className].join(' ')
    // console.log("1. className:", className)

    console.groupEnd()
    
    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element". (***)
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.   (***)
    return <div {...props} className={className} />
} // Modal



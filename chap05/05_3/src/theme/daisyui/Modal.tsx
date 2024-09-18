import type { FC } from 'react';
import { useEffect } from 'react';

import type { ReactDivProps } from '../../components';


export
type ModalProps = ReactDivProps & {
    open?: boolean
}

// ---------------------------

// Functional Component.
let renderCount: number = 0

export
const Modal: FC<ModalProps> = ({
    open,
    className: _className, 
    ...props
}) => {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ Modal ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/theme/daisyui/Modal) ●●●")
    console.groupEnd()

    const className = ['modal', open ? 'modal-open' : '', _className].join(' ')
    
    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={className} />
} // Modal





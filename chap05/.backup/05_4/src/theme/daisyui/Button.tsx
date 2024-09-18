import type {FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren} from 'react'
import { useEffect } from 'react';


export
type ReactButtonProps = 
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// ---------------------------

export
type ButtonProps = ReactButtonProps & {}

// ---------------------------

// Functional Component.
let renderCount: number = 0

export
const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className: _className,
    ...buttonProps
}) => {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ Button ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/theme/daisyui/Button) ●●●")
    console.groupEnd()
    
    const className = ['btn', _className].join(' ')
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <button {...buttonProps} className={className} />
} // Button

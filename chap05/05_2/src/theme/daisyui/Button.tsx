import type {FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren} from 'react'


export
type ReactButtonProps = 
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// ---------------------------

export
type ButtonProps = ReactButtonProps & {}

// ---------------------------

// Functional Component.
export
const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className: _className,
    ...buttonProps
}) => {
    console.group("●●● (src/theme/daisyui/Button) ●●●")
    console.groupEnd()
    
    const className = ['btn', _className].join(' ')
    
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <button {...buttonProps} className={className} />
} // Button

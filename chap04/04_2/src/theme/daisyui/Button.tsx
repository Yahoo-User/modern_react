import type {FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren} from 'react'


// interface ButtonHTMLAttributes<T> extends HTMLAttributes<T>                        <--- ***
export
type ReactButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// ----------------------------

export
type ButtonProps = ReactButtonProps & {}

// ----------------------------

// type "PropsWithChildren<P = unknown>" = P & { children?: ReactNode | undefined };  <--- ***
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className: _className,
    ...buttonProps
}) => {
  // console.clear()
  // console.group("●●● (src/theme/daisyui) ●●●")
  // console.groupEnd()

  const className = ['btn', _className].join(' ')

  // ----------------------------
  
  // ts(2657)  - JSX expressions must have "one parent element".
  // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
  return <button {...buttonProps} className={className} />
} // Button

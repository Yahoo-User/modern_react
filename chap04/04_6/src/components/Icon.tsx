import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react'


export
type ReactSpanProps =
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// ---------------------------

export
type IconProps = ReactSpanProps & {
    name: string
}

// ---------------------------

// Functional Component<P>

export
const Icon: FC<IconProps> = ({
    name,
    className: _className,
    ...props
}) => {
    // console.clear()
    console.group("●●● (src/components/Icon) ●●●")
    console.groupEnd()

    const className = ['material-icons', _className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <span {...props} className={className}>{name}</span>
} // Icon


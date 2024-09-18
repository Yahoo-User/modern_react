import type {FC} from 'react'

import type { DivProps } from './Div'
import {Div} from './Div'


export
type AvatarProps = DivProps & {
    size?: string
}

// ---------------------------

export
const Avatar: FC<AvatarProps> = ({
    className: _className,
    style: _style,
    src,
    size,
    ...props 
}) => {
    console.group("●●● (src/components/Avatar) ●●●")
    console.groupEnd()
    
    const w_or_h = size ?? '3rem'
    const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <Div {...props} src={src} width={w_or_h} height={w_or_h} className={className} style={_style}/>
} // Avatar





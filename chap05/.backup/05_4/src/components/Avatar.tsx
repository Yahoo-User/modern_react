import type {FC} from 'react'
import { useEffect } from 'react'

import {Div} from './Div'
import type {DivProps} from './Div'


export
type AvatarProps = DivProps & {
    size?: string
}

// ---------------------------

let renderCount: number = 0

export
const Avatar: FC<AvatarProps> = ({
    className: _className,
    style: _style,
    src,
    size,
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
        console.log(`☞ [ Avatar ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/components/Avatar) ●●●")
    console.groupEnd()
    
    const w_or_h = size ?? '3rem'
    const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <Div {...props} src={src} width={w_or_h} height={w_or_h} className={className} style={_style} />
} // Avatar

// ---------------------------



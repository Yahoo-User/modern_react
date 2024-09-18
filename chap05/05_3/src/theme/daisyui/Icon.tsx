import type {FC} from 'react'
import { useEffect } from 'react'

import type {ButtonProps} from './Button'
import type {IconProps as CIconProps} from '../../components'

import {Button} from './Button'
import {Icon as CIcon} from '../../components'


export
type IconProps = ButtonProps & CIconProps & {
    iconClassName?: string
}

// ---------------------------

// Functional Component.
let renderCount: number = 0

export
const Icon: FC<IconProps> = ({
    name,
    iconClassName,
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
        console.log(`☞ [ Icon ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/theme/daisyui/Icon) ●●●")
    console.groupEnd()

    const className = ['btn', _className].join(' ')
    const btnClassName = ['btn-circle', className].join(' ')

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <Button {...buttonProps} className={ btnClassName }>
            <CIcon className={ iconClassName } name={ name } />
        </Button>
    )
} // Icon



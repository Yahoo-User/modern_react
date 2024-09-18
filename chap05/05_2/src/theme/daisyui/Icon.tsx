import type {FC} from 'react'

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
export
const Icon: FC<IconProps> = ({
    name,
    iconClassName,
    className: _className,
    ...buttonProps
}) => {
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



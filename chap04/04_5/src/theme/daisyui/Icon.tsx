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
    // console.clear();
    // console.group(
    //     ">>> Icon(",
    //     "\n\tname:", name,
    //     "\n\ticonClassName:", iconClassName,
    //     "\n\tclassName:", _className,
    //     "\n\tbuttonProps:", buttonProps,
    //     "\n) invoked."
    // )

    // console.clear()
    console.group("●●● (Icon) ●●●")

    const className = ['btn', _className].join(' ')
    // console.log("1. className:", className)

    // -----------------------

    const btnClassName = ['btn-circle', className].join(' ')
    // console.log("2. btnClassName:", btnClassName)

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element". (***)
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.   (***)
    return (
        <Button {...buttonProps} className={ btnClassName }>
            <CIcon className={ iconClassName } name={ name } />
        </Button>
    )
} // Icon



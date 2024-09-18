import type {FC} from 'react'
import { useEffect } from 'react'

import type {ReactDivProps} from '../../components'
import {Div} from '../../components'
import {Icon} from './Icon'


export
type ModalContentProps = ReactDivProps & {
    onCloseIconClicked?: () => void
    closeIconClassName?: string
}

// ---------------------------

// Functional Component.
let renderCount: number = 0

export
const ModalContent: FC<ModalContentProps> = ({
    onCloseIconClicked: _onCloseIconClicked,
    closeIconClassName: _closeIconClassName,
    className: _className,
    children: _children,
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
        console.log(`☞ [ ModalContent ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/theme/daisyui/ModalContent) ●●●")
    console.groupEnd()
    
    const showCloseIcon = _onCloseIconClicked ? true : false
    const className = ['modal-box', showCloseIcon && 'relative', _className].join(' ')
    const closeIconClassName = _closeIconClassName ?? 'btn-primary btn-outline btn-sm'

    // ---------------------------
    
    if (!showCloseIcon) {      
        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return <div {...props} className={className} children={_children} />
    } // if

    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
      <div {...props} className={className}>
          <Div className="absolute" right="0.5rem" top="0.5rem">
              <Icon name="close" className={closeIconClassName} onClick={_onCloseIconClicked} />
          </Div>
          
          {_children}
      </div>
    )
} // ModalContent


import type {FC} from 'react'

import type {ReactDivProps} from '../../components'
import {Div} from '../../components'
import {Icon} from './Icon'


// ---------------------------

export
type ModalContentProps = ReactDivProps & {
    onCloseIconClicked?: () => void
    closeIconClassName?: string
}

// ---------------------------

// Functional Component.
export
const ModalContent: FC<ModalContentProps> = ({
    onCloseIconClicked: _onCloseIconClicked,
    closeIconClassName: _closeIconClassName,
    className: _className,
    children: _children,
    ...props
}) => {
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




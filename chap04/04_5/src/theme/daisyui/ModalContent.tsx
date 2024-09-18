import type {FC} from 'react'
import type {ReactDivProps} from '../../components'
import {Div} from '../../components'
import {Icon} from './Icon'


// ---------------------------

export
type ModalContentProps = ReactDivProps & {
    onCloseIconClicked?: () => void
    closeIconClassName?: string
} // ModalContentProps

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
    // console.clear();
    // console.group(
    //     ">>> ModalContent(",
    //     "\n\tonCloseIconClicked:", _onCloseIconClicked,
    //     "\n\tcloseIconClassName:", _closeIconClassName,
    //     "\n\tclassName:", _className,
    //     "\n\tchildren:", _children,
    //     "\n\tprops:", props,
    //     "\n) invoked."
    // )

    // console.clear()
    console.group("●●● (ModalContent) ●●●")
    
    // console.log("1. onCloseIconClicked:", _onCloseIconClicked)
    // console.log("2. closeIconClassName:", _closeIconClassName)
    // console.log("3. className:", _className)
    // console.log("4. children:", _children)
    // console.log("5. ...props:", props)
    
    const showCloseIcon = _onCloseIconClicked ? true : false
    const className = ['modal-box', showCloseIcon && 'relative', _className].join(' ')

    // console.log("5. showCloseIcon:", showCloseIcon)
    // console.log("3*. className:", className)

    console.groupEnd()

    // ---------------------------
    
    if (!showCloseIcon) {
        console.groupEnd()
      
        // ts(2657) - JSX expressions must have "one parent element". (***)
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.   (***)
        return <div {...props} className={className} children={_children} />
    } // if
    
    // ---------------------------

    const closeIconClassName = _closeIconClassName ?? 'btn-primary btn-outline btn-sm'
    // console.log("2*. closeIconClassName:", closeIconClassName)

    console.groupEnd()

    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element". (***)
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.   (***)
    return (
      <div {...props} className={className}>
          <Div className="absolute" right="0.5rem" top="0.5rem">
              <Icon name="close" className={closeIconClassName} onClick={_onCloseIconClicked} />
          </Div>
          
          {_children}
      </div>
    )
} // ModalContent


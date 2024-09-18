import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import { useEffect } from 'react'

import type { WidthHeight } from './WidthHeight'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
import type { MinMaxWidthHeight } from './MinMaxWidthHeight'


export
type ReactDivProps =
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

// ---------------------------

export
type DivProps = ReactDivProps &
    PropsWithChildren<WidthHeight> &
    LeftRightTopBottom &
    MinMaxWidthHeight & {
        src?: string
    }

// ---------------------------

// Functional Component<P>
let renderCount: number = 0

export
const Div: FC<DivProps> = ({
    width, height,
    style: _style,
    src,
    className: _className,
    left, right, top, bottom,
    minWidth, maxWidth, minHeight, maxHeight,
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
        console.log(`☞ [ Div ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/components/Div) ●●●")
  
    const style = {
      ..._style,
      // width: width, height: height,
      width, height,
      backgroundImage: src && `url(${src})`,
      // left: left, right: right, top: top, bottom: bottom,
      left, right, top, bottom,
      // minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: minHeight
      minWidth, maxWidth, minHeight, maxHeight
    }

    const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')

    console.groupEnd()

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={className} style={style} />
} // Div




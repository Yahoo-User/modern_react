import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type { WidthHeight } from './WidthHeight'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
import type { MinMaxWidthHeight } from './MinMaxWidthHeight'


export
type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

// ---------------------------

export
type DivProps = ReactDivProps &
    // type PropsWithChildren < P = unknown > = P & { children?: ReactNode | undefined };
    PropsWithChildren<WidthHeight> &
    LeftRightTopBottom &
    MinMaxWidthHeight & 
    { src?: string }

// ---------------------------

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
    // console.clear()
    // console.group("●●● (src/components/Div) ●●●")
    // console.groupEnd()

    const style = {
      ..._style,
      width, height,                              // width: width, height: height,
      backgroundImage: src && `url(${src})`,
      left, right, top, bottom,                   // left: left, right: right, top: top, bottom: bottom,
      minWidth, maxWidth, minHeight, maxHeight    // minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: minHeight
    }

    const className = [ 'box-sizing', src && 'bg-gray-300', _className ].join(' ')

    // ------------------------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={ className } style={ style } />
} // Div



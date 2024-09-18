import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'

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
    MinMaxWidthHeight & 
    { src?: string }

// ---------------------------

// Functional Component<P>

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
    console.group("●●● (src/components/Div) ●●●")
    console.groupEnd()
  
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

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={ className } style={ style } />
} // Div



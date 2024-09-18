import { DetailedHTMLProps, HTMLAttributes, FC } from "react";


export
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export
const Div: FC<DivProps> = ({
    className: _className,
    style: _style,
    children: _children,
    ...restProps
}) => {
    // console.clear()
    // console.group("●●● (src/components/Div) ●●●")
    // console.groupEnd()

    // --------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div style={_style} className={_className} children={_children} {...restProps} />
} // Div



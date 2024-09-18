import { DetailedHTMLProps, FC, HTMLAttributes } from "react";


export
type SubTitleProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

// --------------------

export
const SubTitle: FC<SubTitleProps> = ({
    className: _className,
    style: _style,
    children: _children,
    ...restProps
}) => {
    // console.clear()
    // console.group("●●● (src/components/SubTitle) ●●●")
    // console.groupEnd()

    // --------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <h3 className={_className} style={_style} children={_children} {...restProps} />
} // SubTitle


import { DetailedHTMLProps, HTMLAttributes, FC } from "react";


export
type TitleProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>


export
const Title: FC<TitleProps> = ({
    className: _className,
    style: _style,
    ...restProps
}) => {
    // console.clear()
    // console.group("●●● (src/components/Title) ●●●")
    // console.groupEnd()

    // --------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <p className={_className} style={_style} {...restProps} />
} // Title


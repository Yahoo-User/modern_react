import type {DetailedHTMLProps, HTMLAttributes, FC} from "react"


export
type ReactTitleProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

// ---------------------------

// Functional Component<P>
export
const Title: FC<ReactTitleProps> = ({
    className: _className,
    style: _style,
    children: _children,
    ...restProps}
) => {
    // console.clear()
    console.group("●●● (src/components/Title) ●●●")
    console.groupEnd()

    // --------------------

    // ts(2657) - JSX expressions must have "one parent element". (***)
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.   (***)
    return <p 
            children = { _children }
            className={ _className }
            style={ _style }
            { ...restProps } />
} // Title


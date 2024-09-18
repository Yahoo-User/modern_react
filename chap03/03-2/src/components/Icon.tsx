import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, FC} from "react"


export type IconProps = {
    name: string;
    style?: CSSProperties | undefined;
}

// --------------
// 1st. method - Using properties directly
// --------------
export const Icon1: FC<IconProps> = (props: IconProps) => {          // OK
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <span className="material-symbols-outlined" style={ props.style }>{props.name}</span>
}

// --------------
// 2nd. method - Using de-structuring assignment
// --------------
export const Icon2: FC<IconProps> = ({ name, style }) => {            // OK
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <span className="material-symbols-outlined" style={style}>{name}</span>
}

// --------------
// 3rd. method - Using ... operator (spread & rest)
// --------------
export const Icon3: FC<IconProps> = ({ name, ...restProperties }) => {          // OK
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <span className="material-symbols-outlined" {...restProperties}>{name}</span>
}

// --------------
// 4th. method - In way of the most React-like method.
// --------------
type ReactSpanProps = DetailedHTMLProps< HTMLAttributes<HTMLSpanElement>, HTMLSpanElement >

export
type NewIconProps = ReactSpanProps & { name: string; }

/*
    Once, New parameter name assigned using `:new_parameter_name` syntax,
    Then Old parameter name could * NOT * be used, Only`new_parameter_name` can be used.
*/
export const Icon: FC<NewIconProps> = ({ name, className: _className, ...props}) => {
    const className = ["material-symbols-outlined", _className].join(' ')
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <span {...props} className={ className }>{name}</span>
}



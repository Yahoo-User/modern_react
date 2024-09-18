import type { FC, FunctionComponent } from "react"

// Implementing a Functional Component by Arrow Function.

export
type ArrowComponentProps = {
    href: string;
    text: string;
} // Properties Type

// -----------------------

// NOTE: `export default` keyword cannot be attached to the arrow function. (***)

// const ArrowComponent = (props: ArrowComponentProps) => {                        // OK
// const ArrowComponent: FC<ArrowComponentProps> = (props) => {                    // OK
const ArrowComponent: FunctionComponent<ArrowComponentProps> = (props) => {     // OK
    
    // console.clear()
    console.group("♠♠♠♠♠♠♠ (src/ArrowComponent) ♠♠♠♠♠♠♠")
    console.groupEnd()

    const { href, text } = props

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ul>
            <li>
                <a href={href} target="_blank" rel="noreferrer">
                    <p>{text}</p>
                </a>
            </li>
        </ul>
    )
} // ArrowComponent

export default ArrowComponent;


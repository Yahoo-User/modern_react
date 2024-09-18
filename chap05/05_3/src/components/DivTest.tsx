import type { DetailedHTMLProps, HTMLAttributes, FC  } from "react"
import { useEffect } from "react";


/* -----------------------------------
 * Test Code in the `src/App.tsx`:
 * -----------------------------------
 
    import "./App.css"
    import { DivTest } from "./components"

    
    export default
    function App() {
        
        // ts(2657)  - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return (
            <div>
                <h3>src/App.tsx</h3>
                <hr />

                <DivTest name="Yoseph" age={23} id="ID" className="_className" style={ { color: 'blue' } }>
                    <div>
                        <p>Hello, World</p>
                    </div>
                </DivTest>
            </div>
        )
    } // App
 */

// ---------------------------

export
type ReactDivProps =
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

// ---------------------------

export
type DivTestProps = ReactDivProps & {
    name: string;
    age?: number;
} // DivTestProps

// ---------------------------

// Functional Component<P>
let renderCount: number = 0

export
const DivTest: FC<DivTestProps> = ({ 
    className: _className,
    style: _style,
    children: _children,
    ...restProps
}) => {
    /*
        In this variant of "useEffect", the following message will be printed
        when the component is "mounted" and every time the component "state" or "props" is updated.
        
        If you want to see logs only when the component re-renders,
        the simplest way is to make a "useEffect" hook *Without* a "dependency array",
        this will make it run after each component render.
    */
    useEffect(() => {
        console.log(`☞ [ DivTest ] Component is Mounted or Re-rendered(${++renderCount}) <=====================.`);
    })

    // -----------------------
    console.group("●●● (src/components/DivTest) ●●●")
    console.groupEnd()
    
    // --------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return ( // With `children` attribute -> All transfered child elements are *DISPLAYED* inside <div>.
        <div 
            style={_style}
            className={_className}
            // All transfered child elements are * DISPLAYED * inside <div>.
            children={_children}
            {...restProps} />
    ) // OK

    // --------------------

/* 
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return ( // With `children` attribute -> All transfered child elements are *DISPLAYED* inside <div>.
        <div 
            style={_style}
            className={_className}
            children={_children}
            {...restProps}>
            
            // error ts(2710) - 'children' are specified twice.
            // The attribute named 'children' will be overwritten.
            <h4>Yoseph</h4>
        </div>
    ) // XX
*/

    // --------------------

/* 
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return ( // Without `children` attribute -> All transfered child elements are *NOT* displayed inside <div>.
        <div
            style={_style}
            className={_className}
            {...restProps} />
    ) // OK
*/

    // --------------------

/* 
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return ( // Without `children` attribute -> All transfered child elements are *NOT* displayed inside <div>.
        <div
            style={_style}
            className={_className}
            {...restProps}>
            <h4>Yoseph</h4>
        </div>
    ) // OK
*/

} // DivTest




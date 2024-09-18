import { Component } from "react"


// To Define a properties type
export
type ClassComponentProps = {
    href: string;
    text: string;
}

// -----------------------

// error ts(2449) - Class 'ClassComponent' used before its declaration.
// export default ClassComponent;   // XX

class ClassComponent extends Component<ClassComponentProps> {

    render() { // return type: JSX.Element
        console.debug("* ClassComponent::render() invoked.")
        console.log("\t+ this.props:", this.props)

        // Type Annotation couldn't be used in de-structured assignment.    <--- ***
        const { href, text } = this.props

        // ----------------------
        // 1st. method
        // ----------------------
        // Append additional logic by typescript code.    <--- ***

        // const isLoading = true
        // if (isLoading) return <p>loading...</p>

        // returns Virtual DOM by JSX

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        // return (
        //   <ul>
        //     <li>
        //       <a href="http://www.google.com" target="_blank" rel="noreferrer">
        //         <p>Go to Google</p>
        //       </a>
        //     </li>
        //   </ul>
        // ) // return


        // ----------------------
        // 2nd. method
        // ----------------------
        
        // Append additional logic by typescript code.    <--- ***

        // const isLoading = false
        
        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.

        // const children = (
        //   <ul>
        //     <li>
        //       <a href={href} target="_blank" rel="noreferrer">
        //         <p>{text}</p>
        //       </a>
        //     </li>
        //   </ul>
        // )

        // returns Virtual DOM by JSX using "Short-Circuiting Effect"
        
        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        // return (
        //   <div>
        //     {/* Using "Short-Circuiting Effect" */}
        //     {isLoading && <p>Loading ... </p>}        {/* returns undefined if isLoading == false */}
        //     {!isLoading && <ul>{children}</ul>}       {/* returns undefined if isLoading == true */}
        //   </div>
        // )


        // ----------------------
        // 3rd. method
        // ----------------------
        const isLoading = false

        const children = isLoading ?
            // returns Virtual DOM by JSX
            
            // ts(2657) - JSX expressions must have "one parent element".
            // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
            <p>Loading ...</p> :
            (
                <ul>
                    <li>
                        <a href={href} target="_blank" rel="noreferrer">
                            <p>{text}</p>
                        </a>
                    </li>
                </ul>
            )

        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        return <div>{children}</div>
    } // render
} // end class

export default ClassComponent;              // OK


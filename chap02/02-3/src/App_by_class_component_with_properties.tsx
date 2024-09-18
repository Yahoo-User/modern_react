import { Component } from "react"
import ClassComponent from "./ClassComponent";


export default
class App extends Component {

  render() {
    console.debug("* App::render() invoked.")

    // --------------------
    // 1st. Case : Without `properties` of a React component
    // --------------------
    
    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    // return (
    //   <ul>
    //     <ClassComponent />
    //     <ClassComponent />
    //   </ul>
    // )

    // --------------------
    // 2nd. Case : With `properties` of a React Component
    // --------------------

    // `Parent` component, "App" transfers two data into the Child component, `ClassComponent`
    // through properties : "href", "text". (***)

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <ul>
          <ClassComponent href="http://www.google.com" text="1. Go to Google." />
          <ClassComponent href="http://www.facebook.com" text="2. Go to Facebook" />
        </ul>
    )
  } // render
} // end class




// ------------------------------------------
// 1. Styling Using `fontsource` package
// ------------------------------------------
// import '@fontsource/roboto/900-italic.css'
// import '@fontsource/material-icons-sharp'


// // Functional Component.
// export default function UsingIcon() {
//     // return <li>UsingIcon</li>
//     return (
//         <div>
//             <h3>src/pages/UsingIcon.tsx</h3>
//             <hr />

//             <h3 style={{ fontFamily: 'Roboto', fontSize: '26px' }}>
//                 Using @fontsource/roboto web-safe font
//             </h3>
//             <h3 style={{ fontFamily: 'Material Icons Sharp', fontSize: '26px' }}>
//                 home
//             </h3>
//         </div>
//     )
// } // UsingIcon


// ------------------------------------------
// 2. Styling Using User-defined Icon component
// ------------------------------------------

import { Icon, Icon1, Icon2, Icon3 } from "../components"


export default
function UsingIcon() {
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div>
            <h3>src/pages/UsingIcon.tsx</h3>
            <hr />

            <h3>UsingIcon</h3>
l
            <Icon1  name="home"                 style={{color: 'blue'}} />
            <Icon2  name="check_circle_outline" style={{ fontSize: '50px', color: 'red' }} />
            <Icon3  name="check_circle_outline" style={{ color: 'red' }} />
            <Icon   name="check_circle_outline" style={{ fontSize: '50px', color: 'red' }} />
        </div>
    )
}


import {Title, Subtitle} from "../components"
import { useResponsive } from "../contexts"


// Functional Component.

export default
function ResponsiveContextTest(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ResponsiveContextTest) ●●●")

    const breakpoint = useResponsive()                                         // <--- ***
    console.log("1. breakpoint:", breakpoint)

    console.groupEnd()

    // -----------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-xl font-bold text-center">ResponsiveContextTest</Title>

            <div className="mt-4">
                <Subtitle className="text-3xl font-bold text-center text-red-500">breakpoint: {breakpoint}</Subtitle> {/* <--- *** */}
            </div>
        </section>
    )
} // ResponsiveContextTest


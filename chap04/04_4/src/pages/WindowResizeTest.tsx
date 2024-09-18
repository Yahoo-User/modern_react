import {Title, Subtitle} from "../components";
import { useWindowResize } from "../hooks";


// Functional Component.
export default
function WindowResizeTest(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/WindowResizeTest) ●●●")
    console.groupEnd()

    // De-structuring an Array.
    const [innerWidth, innerHeight] = useWindowResize()

    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-3xl italic text-center">WindowResizeTest</Title>
            
            <Subtitle className="mt-4 text-2xl text-center text-red-600">
                innerWidth({innerWidth}), innerHeight({innerHeight})
            </Subtitle>
        </section>
    )
} // WindowResizeTest


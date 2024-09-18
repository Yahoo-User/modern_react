import { useCallback, useState, useMemo } from "react"

import { Title, Div } from "../components"
import { Icon } from "../theme/daisyui"
import * as D from "../data"


/**
 * React Hook "useMemo" cannot be called at the top level.
 * React Hooks must be called in a React function component or a custom React Hook function.    <--- ***
 * 
 * const jobTitles3 = useMemo<string[]>(() => D.makeArray<string>(4, '').map(D.randomJobTitle), [])
 */

// Functional Component.
export default
function ArrayState(): JSX.Element {
    // console.clear()
    console.group("●●● (src/pages/ArrayState) ●●●")

    // -----------------------

    const [images, setImages] = useState<string[]>([])
    // console.log("1. images: %s", images)

    // -----------------------

    const addImage    = useCallback(() => setImages(images => [D.randomImage(200, 100, 50), ...images]), [])
    // console.log("2. addImage: %s", addImage)

    // -----------------------

    const clearImages = useCallback(() => setImages(notUsed => []), [])
    // console.log("3. clearImages: %s", clearImages)

    // -----------------------

    const children: JSX.Element[] =
        // ts(2657) - JSX expressions must have "one parent element".
        // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
        useMemo<JSX.Element[]>(() => images.map((image, index) => (
            <Div
                key={index}
                src={image}
                className="w-1/5 m-2"
                height="5rem"
                minHeight="5rem"
            />
        )), [images]) // children
    
    // console.log("4. children:", children)

    // -----------------------
    console.groupEnd()
    // -----------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <section className="mt-4">
            <Title className="text-2xl italic text-center">ArrayState</Title>

            <div className="flex justify-center mt-4">
                <div className="tooltip" data-tip="add image">
                    <Icon name="add" onClick={addImage} className="mr-12 btn-primary" />
                </div>
                
                <div className="tooltip" data-tip="clear all">
                    <Icon name="clear all" onClick={clearImages} className="text-sm/2" />
                </div>
            </div>

            <div className="flex flex-wrap mt-4">{children}</div>
        </section>
    )
} // ArrayState


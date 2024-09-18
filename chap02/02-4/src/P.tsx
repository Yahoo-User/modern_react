import type { FC, PropsWithChildren, ReactNode } from "react"


// type FC<P = {}> = FunctionComponent<P>;
// type ReactNode = ReactElement | string | number | ...

export type PProps = {
    // key?: React.Key         // `key` property *NOT* transfered (***)
    children?: ReactNode    // ReactElement
} // PProps

export type PProps2 = {}    // Without `children` property


// NOTE: export default couldn't be attached to the Arrow function. (***)

// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };  <--- ***

// const P: FC<PProps> = (props) => {   // OK
const P: FC<PropsWithChildren<PProps2>> = (props) => {  // OK With `PropsWithChildren` generic type.
    console.debug("* P(", props, ") invoked.")

    // ---------------------
    // 1st. method - `children` property
    // ---------------------
    // const { children } = props
    // return <p children={children} />    // <--- ***

    // ---------------------
    // 2nd. method - by JSX {...props} sentence
    // ---------------------
    return <p {...props} />             // <--- ***
} // P

export default P;


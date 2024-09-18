import React from "react"
import type { DetailedHTMLProps, HTMLAttributes } from "react"

// import RaiseException from "./RaiseException"


/**
		[ (I) NewLifecycle, (I) DeprecatedLifecycle ]
							▲
							│
				[ (I) ComponentLifecycle ]
							▲
							│
					[ (I) Component ]
							▲
							│
		 [ (C) PureComponent, (I) ClassicComponent ]
							▲
							│
			  [ (C) User-defined Component ]

	1. when running normally without change of "state" in the "componentDidMount":
		① render > ② componentDidMount

	2. When running normally with changing "state" in the "componentDidMount":
		① render > ② componentWillUnmount > ③ componentDidMount	> ④ setState
		
	3. When running with changing "state" in the "componentDidMount" 
	   and then an Error occurred from descendent components:
		① render > ② componentWillUnmount > ③ componentDidMount	> ④ setState > ⑤ componentDidCatch

	4. When refresh web browser with changing "state" in the "componentDidMount",
	   The "componentWillUnmount" cb *NOT* invoked, Regardless of occurring of an error.
		① render > ② componentDidMount > ③ setState

	5. When updating component with changing "state" in the "componentDidMount":
		① shouldComponentUpdate > ② render > ③ getSnapshotBeforeUpdate > ④ componentDidUpdate
 */

export
type ComponentLifecycleProps = DetailedHTMLProps<
	HTMLAttributes<HTMLParagraphElement>, 
	HTMLParagraphElement
> & {
	name?: string;
	age? : number;
}

// -----------------------

let TURN: number = 0
let initialRendered: boolean = false
// let turn: number = 0

// -----------------------

// error ts(2449) - Class 'ClassComponent' used before its declaration.
// export default ClassComponent;              									// XX
class ComponentLifecycle extends React.Component<ComponentLifecycleProps> {

	/**
	 * Catches exceptions generated in "descendant" components.
	 * Unhandled exceptions will cause the "entire" component tree to "unmount".
	 */
	componentDidCatch(e: Error, eInfo: React.ErrorInfo): void {
		console.group("%d. componentDidCatch", ++TURN)
			console.log("e:", e); console.log("eInfo:", eInfo)
		console.groupEnd()
	}

	// -----------------------

	/**
	 * Called immediately after a component is mounted.
	 * Setting "state" here will trigger "re-rendering".
	 */
	componentDidMount(): void {
		console.group("%d. componentDidMount", ++TURN)
			console.log("this.state:", this.state)
		console.groupEnd()

		// Update "state".
		this.setState({speed: 77})
	}

	// -----------------------

	/**
	 * Called immediately after updating occurs.
	 * Not called for the "initial" render.
	 * The snapshot is only present if "getSnapshotBeforeUpdate" is present and returns "non-null".
	 */
	componentDidUpdate(
		prevProps: Readonly<ComponentLifecycleProps>,
		prevState: Readonly<{}>, snapshot?: any
	): void {
		console.group("%d. componentDidUpdate", ++TURN)
			console.log("prevProps:", prevProps)
			console.log("prevState:", prevState)
			console.log("snapshot:", snapshot)
		console.groupEnd();
	}

	// -----------------------

	/**
	 * Called immediately before a component is "destroyed".
	 * Perform any necessary "cleanup" in this method,
	 * such as cancelled network requests, or cleaning up any DOM elements created in "componentDidMount".
	 */
	componentWillUnmount(): void {
		console.group("%d. componentWillUnmount", ++TURN); console.groupEnd();
	}

	// -----------------------

	/**
	 * Called to determine whether the change in "props" and "state" should "trigger" a re-render.
	 * Component always returns "true".
	 * 
	 * "PureComponent" implements a shallow comparison 
	 * on "props" and "state" and returns "true" if any "props" or "states" have changed.
	 *
	 * If "false" is returned, "Component#render", "componentWillUpdate" and "componentDidUpdate" will *NOT* be called.
	 * 
	 * Warning: Lifecycle has a method called "shouldComponentUpdate()". 
	 * 		    "shouldComponentUpdate" should not be used when extending "React.PureComponent".
	 */
	shouldComponentUpdate(
		nextProps: Readonly<ComponentLifecycleProps>,
		nextState: Readonly<{}>, nextContext: any
	): boolean {
		TURN = 0

		console.group("%d. shouldComponentUpdate", ++TURN)
			console.log("nextProps:", nextProps)
			console.log("nextState:", nextState)
			console.log("nextContext:", nextContext)
		console.groupEnd()
		
		return true
	}

	// -----------------------

	// We MUST keep "setState()" as a unified signature
	// because it allows proper checking of the method return type.
	// ----------------------------------------------------
	// "setState()"를 통합서명으로 유지해야 합니다.
	// 이는 메서드 반환유형을 적절하게 확인할 수 있기 때문입니다.
	setState<K extends never>(
		state:
			{} | 
			((prevState: Readonly<{}>, props: Readonly<ComponentLifecycleProps>) => {} | Pick<{}, K> | null) | 
			Pick<{}, K> |
			null,
		cb?: (() => void) | undefined
	): void {
		console.group("%d. setState", ++TURN)
			console.log("state:", state)
			console.log("cb:", cb)
		console.groupEnd();
	}

	// -----------------------

	/**
	 * Runs before React applies the result of `render` to the document,
	 * and returns an object to be given to "componentDidUpdate".
	 * Useful for saving things such as scroll position before "render" causes changes to it.
	 *
	 * Note: the presence of "getSnapshotBeforeUpdate" prevents
	 * 		 any of the *deprecated* lifecycle events from running.
	 */
	getSnapshotBeforeUpdate(
		prevProps: Readonly<ComponentLifecycleProps>,
		prevState: Readonly<{}>
	): {
		weight: number;
		height: number;
	} {
		console.group("%d. getSnapshotBeforeUpdate", ++TURN)
			console.log("prevProps:", prevProps)
			console.log("prevState:", prevState)
		console.groupEnd();

		return { weight: 58.9, height: 172.5 }
	}

	// -----------------------

	// ts(2657) - JSX expressions must have "one parent element".
	// ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
	render(): JSX.Element {
		if (initialRendered) console.group("%d. re-render", ++TURN)
		else console.group("%d. render", ++TURN)

			console.log("initialRendered:", initialRendered)
			console.log("this.props:", this.props)		// this.props : readonly

		console.groupEnd();

		if (!initialRendered) initialRendered = !initialRendered
		console.log("initialRendered:", initialRendered)

		// ------------------------
		
		// ts(2657)  - JSX expressions must have "one parent element".
		// ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
		return (
			<div>
				<h3>src/components/Lifecycle.tsx</h3>
				<hr /><br />

				{/* <RaiseException /> */}
			</div>
		)
	} // render

} // end class


export default ComponentLifecycle;





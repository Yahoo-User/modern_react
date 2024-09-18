import type { FC } from 'react';

import type { ReactDivProps } from '../../components';


export
type ModalActionProps = ReactDivProps & {}

// ---------------------------

export
const ModalAction: FC<ModalActionProps> = ({
    className: _className, 
    ...props
}) => {
    console.group("●●● (src/theme/daisyui/ModalAction) ●●●")
    console.groupEnd()

    const className = ['modal-action', _className].join(' ')

    // ---------------------------

    // ts(2657) - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return <div {...props} className={className} />
} // ModalAction



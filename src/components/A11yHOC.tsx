import React, {ComponentType} from "react"
import {IA11y} from "@/interfaces/IA11y"
import {IButton} from "@/app/button-sample-2/_utils/interface/IButton"
import {Button} from "@/app/button-sample-2/_utils/Button"

type WithA11yProps = IButton & { a11yProps?: Partial<IA11y> }

const withA11y = (WrappedComponent: ComponentType<IButton>, defaultA11y: IA11y) => {
    const EnhancedComponent = ({a11yProps = {}, ...restProps}: WithA11yProps) => {
        const mergedA11y = {...defaultA11y, ...a11yProps}

        return <WrappedComponent {...restProps} {...mergedA11y} />
    }

    return EnhancedComponent
}

const A11yButton = withA11y(Button, {
    role: "button",
    tabIndex: 1,
    "aria-describedby": "This is default description"
})

export default A11yButton

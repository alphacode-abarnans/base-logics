import React, {ComponentType} from "react"
import {IA11y} from "@/interfaces/IA11y"
import {IButton} from "@/app/button-1/_utils/interface/IButton"

type WithA11yProps = IButton

const withA11y = (WrappedComponent: ComponentType<IButton>, a11y: IA11y) => {
    const EnhancedComponent = (props: WithA11yProps) => {
        const {...restProps} = props

        return <WrappedComponent {...restProps} {...a11y} />
    }

    return EnhancedComponent
}

export default withA11y

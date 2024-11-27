import React, {ComponentType, useRef, useState} from "react"
import {IResize} from "@/interfaces/IResize"
import {IButton} from "@/app/button-sample-2/_utils/interface/IButton"

type resizeProps = IButton

const resizeComponent = (WrappedComponent: ComponentType<IButton>, defaultResize: IResize) => {
    const EnhancedComponent = ({...restProps}: resizeProps) => {
        const divRef = useRef(null)
        const [dimensions, setDimensions] = useState({width: 500, height: 50})

        const handleResize = (event, direction: "right" | "bottom") => {
            event.preventDefault()
            const startWidth = dimensions.width
            const startHeight = dimensions.height
            const startX = event.clientX
            const startY = event.clientY

            const onMouseMove = (moveEvent) => {
                const deltaX = moveEvent.clientX - startX
                const deltaY = moveEvent.clientY - startY

                if (direction === "right") {
                    setDimensions((prev) => ({...prev, width: startWidth + deltaX}))
                } else if (direction === "bottom") {
                    setDimensions((prev) => ({...prev, height: startHeight + deltaY}))
                }
            }

            const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove)
                document.removeEventListener("mouseup", onMouseUp)
            }

            document.addEventListener("mousemove", onMouseMove)
            document.addEventListener("mouseup", onMouseUp)
        }

        return (
            <div
            ref={divRef}
            className="relative overflow-auto inline-block"
                    style={{
                        width: `${dimensions.width}px`,
                        height: `${dimensions.height}px`,
                    }}>
            <WrappedComponent {...defaultResize} {...restProps} width={dimensions.width} height={dimensions.height} />

            <div
                className="absolute top-0 right-0 h-full w-[2px] cursor-e-resize"
                onMouseDown={(event) => handleResize(event, "right")}
                style={{zIndex: 10}}
            />
            <div
                className="absolute bottom-0 left-0 w-full h-2 cursor-s-resize"
                onMouseDown={(event) => handleResize(event, "bottom")}
                style={{zIndex: 10}}
            />
        </div>
        )
    }

    return EnhancedComponent
}

export default resizeComponent

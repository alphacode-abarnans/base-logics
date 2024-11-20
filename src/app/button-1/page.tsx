"use client"

import Button from "./_utils/Button"
import { SkinProps } from "@/app/button-1/_utils/interface/IButton"

const ButtonExample = () => {
    const handleOnClick = () => {
        console.log("Button clicked!")
    }
    const handleOnHover = () => {
        console.log("Button hovered!")
    }
    const handleOnRightClick = () => {
        console.log("Button right clicked!")
    }

    return (
        <div className="m-4">
            <h1 className="mb-5 text-2xl text-gray-700 font-bold">Button Variants</h1>

            <Button
                action={{
                    onClick: handleOnClick,
                    onHover: handleOnHover,
                    onRightClick: handleOnRightClick
                }}
                Skin={ButtonSkin1}
                disabled={false}
            />


            <Button
                action={{
                    onClick: handleOnClick,
                    onHover: handleOnHover,
                    onRightClick: handleOnRightClick
                }}
                Skin={ButtonSkin2}
                disabled={false}
                loading={{
                    isLoading: false,
                    skin: <>Loading...</>,
                    direction: "replace"
                }}
            />

            <Button
                action={{
                    onClick: handleOnClick,
                    onHover: handleOnHover,
                    onRightClick: handleOnRightClick
                }}
                Skin={ButtonSkin1}
                disabled={true}
                loading={{
                    isLoading: true,
                    skin: <span className="me-2">Loading</span>,
                    direction: "start"
                }}
            />

            <Button
                action={{
                    onClick: handleOnClick,
                    onHover: handleOnHover,
                    onRightClick: handleOnRightClick
                }}
                Skin={ButtonSkin1}
                disabled={true}
                loading={{
                    isLoading: true,
                    skin: <span className="ms-2">Loading</span>,
                    direction: "end"
                }}
            />

            <Button
                action={{
                    onClick: handleOnClick,
                    onHover: handleOnHover,
                    onRightClick: handleOnRightClick
                }}
                Skin={ButtonSkin1}
                disabled={true}
                loading={{
                    isLoading: true,
                    skin: <>Loading</>,
                    direction: "replace"
                }}
            />
        </div>
    )
}

const ButtonSkin1 = ({disabled, loading}: SkinProps) => {
    return (
        <div
            className={`mx-4 rounded-md bg-gray-200 py-2 px-4 font-medium text-gray-800 ${disabled ? "cursor-default" : "cursor-pointer hover:bg-gray-300"}`}>
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Button 1"}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

const ButtonSkin2 = ({disabled, loading}: SkinProps) => {
    return (
        <div className={`mx-4 rounded-full bg-blue-700 py-2 px-4 font-medium text-white ${disabled ? "cursor-default" : "hover:bg-blue-800"}`}>
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Button 1"}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

export default ButtonExample
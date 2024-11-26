"use client"

import Button from "./_utils/Button"

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
                skin={<ButtonSkin1/>}
                disabled={false}
            />

            <Button
                action={{
                    onClick: handleOnClick,
                    onHover: handleOnHover,
                    onRightClick: handleOnRightClick
                }}
                skin={<ButtonSkin1/>}
                disabled={true}
                loading={{
                    isLoading: true,
                    skin: <span className="rounded-md bg-gray-200 py-2 px-4 font-medium text-gray-800 hover:bg-gray-300">Loading...</span>,
                    direction: "replace"
                }}
            />
        </div>
    )
}

const ButtonSkin1 = () => {
    return (
        <span className="mx-2 rounded-md bg-gray-200 py-2 px-4 font-medium text-gray-800 hover:bg-gray-300">
            Button 1
        </span>
    )
}

export default ButtonExample
"use client"


import {Button} from "@/components/button/Button.logic"
import {buttonSkin1, buttonSkin2, loadingButtonSkin1} from "@/components/button/Button.ui"

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

            <div className="flex gap-4">
                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin1}
                    disabled={false}
                    id="button-1"
                    content="Submit"
                    size="lg"
                />
            </div>

            <div className="mt-20 flex gap-4">
                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-2"
                    content="Button SM"
                    size="sm"
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={true}
                    id="button-3"
                    content="Button MD"
                    size="md"
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-4"
                    content="Button LG"
                    size="lg"
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-5"
                    content="Button XL"
                    size="xl"
                />
            </div>

            <div className="mt-20 flex gap-4">
                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-5"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "start", size: "lg"}}
                    LoadingSkin={buttonSkin2}
                    loadingContent="Loading... "
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-4"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "end", size: "lg"}}
                    LoadingSkin={buttonSkin2}
                    loadingContent=" Loading..."
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-4"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "replace", size: "lg"}}
                    LoadingSkin={buttonSkin2}
                    loadingContent="Loading..."
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={true}
                    id="button-5"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "start", size: "lg"}}
                    LoadingSkin={buttonSkin2}
                    loadingContent="Disabled Loading "
                />
            </div>

            <div className="mt-20 flex gap-4">
                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-5"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "start", size: "lg"}}
                    LoadingSkin={loadingButtonSkin1}
                    loadingContent="Loading... "
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-4"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "end", size: "lg"}}
                    LoadingSkin={loadingButtonSkin1}
                    loadingContent=" Loading..."
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={buttonSkin2}
                    disabled={false}
                    id="button-4"
                    content="Button"
                    size="lg"
                    loading={{isLoading: true, direction: "replace", size: "lg"}}
                    LoadingSkin={loadingButtonSkin1}
                    loadingContent="Loading..."
                />
            </div>
        </div>
    )
}

export default ButtonExample
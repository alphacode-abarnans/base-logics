"use client"


import {Button, SkinProps} from "@/components/button/Button.logic"
import {ButtonSkin1, ButtonSkin2} from "@/components/button/Button.ui";

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
                Skin={ButtonSkin1}
                disabled={false}
                id="button-1"
            />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={ButtonSkin2}
                    disabled={false}
                    id="button-2"
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={ButtonSkin2}
                    disabled={true}
                    id="button-3"
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={ButtonSkin2}
                    disabled={false}
                    id="button-4"
                    loading={{isLoading:true, direction:"replace", skin:"Loading..." }}
                />

                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    Skin={ButtonSkin2}
                    disabled={false}
                    id="button-5"
                    loading={{isLoading:true, direction:"start", skin:"Loading... " }}
                />
            </div>
        </div>
    )
}

export default ButtonExample
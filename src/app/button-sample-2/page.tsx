"use client"

import {SkinProps} from "@/app/button-sample-2/_utils/interface/IButton"
import {Button} from "./_utils/Button"
import A11yButton from "@/components/A11yHOC"
import resizeComponent from "@/components/Resize"

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

    const ResizeHoc = resizeComponent(Button, {})

    return (
        <div className="m-4">
            <h1 className="mb-5 text-2xl text-gray-700 font-bold">Button Variants</h1>
            <div className="flex gap-5">
                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="button-1"
                    Skin={ButtonSkin1}
                    disabled={false}
                />


                <Button
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="button-2"
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
                    id="button-3"
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
                    id="button-4"
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
                    id="button-5"
                    Skin={ButtonSkin1}
                    disabled={true}
                    loading={{
                        isLoading: true,
                        skin: <>Loading</>,
                        direction: "replace"
                    }}
                />
            </div>

            <h1 className="mt-20 mb-5 text-2xl text-gray-700 font-bold">A11y Button Variants</h1>
            <div className="flex gap-5">
                <A11yButton
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="a11y-button-1"
                    Skin={ButtonSkin1}
                    disabled={false}
                    a11yProps={{
                        "aria-describedby": "This is button variant 1",
                        tabIndex: 1,
                    }}
                />

                <A11yButton
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="a11y-button-2"
                    Skin={ButtonSkin2}
                    disabled={false}
                    loading={{
                        isLoading: false,
                        skin: <>Loading...</>,
                        direction: "replace"
                    }}
                    a11yProps={{
                        "aria-describedby": "This is button variant 2",
                        tabIndex: 1,
                    }}
                />

                <A11yButton
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="a11y-button-3"
                    Skin={ButtonSkin1}
                    disabled={true}
                    loading={{
                        isLoading: true,
                        skin: <span className="me-2">Loading</span>,
                        direction: "start"
                    }}
                    a11yProps={{
                        "aria-describedby": "This is button variant 3",
                        tabIndex: 3,
                    }}
                />

                <A11yButton
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="a11y-button-4"
                    Skin={ButtonSkin1}
                    disabled={true}
                    loading={{
                        isLoading: true,
                        skin: <span className="ms-2">Loading</span>,
                        direction: "end"
                    }}
                    a11yProps={{
                        "aria-describedby": "This is button variant 4",
                        tabIndex: 2,
                    }}
                />

                <A11yButton
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="a11y-button-5"
                    Skin={ButtonSkin1}
                    disabled={true}
                    loading={{
                        isLoading: true,
                        skin: <>Loading</>,
                        direction: "replace"
                    }}
                    a11yProps={{
                        "aria-describedby": "This is button variant 5",
                        tabIndex: 1,
                    }}
                />
            </div>

            <h1 className="mt-20 mb-5 text-2xl text-gray-700 font-bold">Resizable Button Variants</h1>
            <div className="flex gap-5 mb-96">
                <ResizeHoc
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="resize-button-1"
                    Skin={ButtonSkin3}
                    disabled={false}
                />

                <ResizeHoc
                    action={{
                        onClick: handleOnClick,
                        onHover: handleOnHover,
                        onRightClick: handleOnRightClick
                    }}
                    id="resize-button-2"
                    Skin={ButtonSkin4}
                    disabled={false}
                />
            </div>
        </div>
    )
}

const ButtonSkin1 = ({disabled, loading}: SkinProps) => {
    return (
        <div
            className={`rounded-md bg-gray-200 py-2 px-4 font-medium text-gray-800 ${disabled ? "cursor-default opacity-60" : "cursor-pointer hover:bg-gray-300"}`}>
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Submit"}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

const ButtonSkin2 = ({disabled, loading}: SkinProps) => {
    return (
        <div
            className={`rounded-full bg-blue-700 py-2 px-4 font-medium text-white ${disabled ? "cursor-default" : "cursor-pointer hover:bg-blue-800"}`}>
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Button 1"}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

const ButtonSkin3 = ({disabled, loading, width, height}: SkinProps) => {
    return (
        <div
            className={`rounded-md bg-gray-200 flex justify-center items-center font-medium text-gray-800 ${disabled ? "cursor-default" : "cursor-pointer hover:bg-gray-300"} w-[${width}] h-[${height}]`}
            style={{width, height}}>
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Submit"}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

const ButtonSkin4 = ({disabled, loading, width, height}: SkinProps) => {
    return (
        <div
            className={`rounded-md bg-blue-700 flex justify-center items-center font-medium text-white ${disabled ? "cursor-default" : "cursor-pointer hover:bg-blue-800"} w-[${width}] h-[${height}]`}
            style={{width, height}}>
            {loading?.isLoading && loading.direction === "start" && loading.skin}
            {loading?.isLoading && loading.direction === "replace" && loading.skin}
            {(loading?.isLoading && (loading.direction === "start" || loading.direction === "end") || !loading?.isLoading) && "Resizable Button 2"}
            {loading?.isLoading && loading.direction === "end" && loading.skin}
        </div>
    )
}

export default ButtonExample
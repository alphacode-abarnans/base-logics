/* eslint-disable import/no-anonymous-default-export */
import {Button} from "@/components/button/Button.logic";
import {buttonSkin1, buttonSkin2, loadingButtonSkin1} from "@/components/button/Button.ui";

export default {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        "loading.isLoading": {
            control: "boolean",
        },
        "loading.direction": {
            control: {type: "radio"},
            options: ["start", "end", "replace"],
        },
        "loading.size": {
            control: {type: "radio"},
            options: ["sm", "md", "lg","xl"],
        },
    },
    args: {
        id: "button-1",
        disabled: false,
        content: "Button",
        size: "sm",
        action: {
            onChange: console.log("Button clicked!"),
            onHover: console.log("Button hovered!"),
            onRightClick: console.log("Button right clicked!"),
        },
        Skin: buttonSkin1,
        loading: {
            isLoading: false,
            direction: "end",
            size: "md",
        },
    },
};

export const Default = {
    args: {
        id: "button-1",
        disabled: false,
        content: "Button",
        size: "sm",
        action: {
            onChange: console.log("Button clicked!"),
            onHover: console.log("Button hovered!"),
            onRightClick: console.log("Button right clicked!"),
        },
        Skin: buttonSkin1,
    },
};

export const Skin1 = {
    args: {
        id: "button-1",
        disabled: false,
        content: "Button",
        size: "sm",
        action: {
            onChange: console.log("Button clicked!"),
            onHover: console.log("Button hovered!"),
            onRightClick: console.log("Button right clicked!"),
        },
        Skin: buttonSkin2,
    },
};

export const Loading = {
    args: {
        id: "button-1",
        disabled: false,
        content: "Button",
        size: "sm",
        action: {
            onChange: console.log("Button clicked!"),
            onHover: console.log("Button hovered!"),
            onRightClick: console.log("Button right clicked!"),
        },
        Skin: buttonSkin2,
        loading: {
            isLoading: true,
            direction: "start",
            size: "lg",
        },
        loadingContent: "Loading...",
    },
};

export const LoadingWithSkin = {
    args: {
        id: "button-1",
        disabled: false,
        content: "Button",
        size: "sm",
        action: {
            onChange: console.log("Button clicked!"),
            onHover: console.log("Button hovered!"),
            onRightClick: console.log("Button right clicked!"),
        },
        Skin: buttonSkin2,
        loading: {
            isLoading: true,
            direction: "start",
            size: "lg",
        },
        loadingContent: "Loading...",
        LoadingSkin: loadingButtonSkin1
    },
};

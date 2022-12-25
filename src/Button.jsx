import "./Button.css"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Button(props) {

    const showButton = () => {

        if (!props.hover && !props.focus && !props.variant && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#3F3F3F", backgroundColor: "#E0E0E0", "border": "2px solid #E0E0E0", boxShadow: "0 0 5px #E0E0E0"
            }} >Default</button>
        }

        else if (props.hover && props.focus && !props.variant && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#3F3F3F", backgroundColor: "#AEAEAE", "border": "2px solid #AEAEAE", boxShadow: "0 0 5px #AEAEAE"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && props.variant === "outline" && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#6E83FE", backgroundColor: "#FFFFFF", "border": "2px solid #6E83FE", boxShadow: "0 0 5px #6E83FE"
            }} >Default</button>
        }

        else if (props.hover && props.focus && props.variant === "outline" && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#6E83FE", backgroundColor: "#EAEFFF", "border": "2px solid #6E83FE", boxShadow: "0 0 5px #6E83FE"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && props.variant === "text" && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#6E83FE", backgroundColor: "#FFFFFF", "border": "2px solid #FFFFFF", boxShadow: "0 0 5px #FFFFFF"
            }} >Default</button>
        }

        else if (props.hover && props.focus && props.variant === "text" && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#6E83FE", backgroundColor: "#EAEFFF", "border": "2px solid #EAEFFF", boxShadow: "0 0 5px #EAEFFF"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && !props.variant && !props.size && !props.color && !props.disabled && props.disableShadow === true && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#3D5AFE", "border": "2px solid #3D5AFE", boxShadow: "none"
            }} >Default</button>
        }


        else if (!props.hover && !props.focus && !props.variant && !props.size && !props.color && props.disabled === true && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#9E9E9E", backgroundColor: "#E0E0E0", "border": "2px solid #E0E0E0", boxShadow: "0 0 5px #E0E0E0"
            }} >Default</button>
        }


        else if (!props.hover && !props.focus && props.variant === "text" && !props.size && !props.color && props.disabled === true && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#9E9E9E", backgroundColor: "#FFFFFF", "border": "2px solid #FFFFFF", boxShadow: "0 0 5px #FFFFFF"
            }} >Default</button>
        }


        else if (!props.hover && !props.focus && !props.variant && !props.size && !props.color && !props.disabled && !props.disableShadow && props.startIcon === "store" && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#2962FF", "border": "2px solid #2962FF", boxShadow: "0 0 5px #2962FF", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"
            }} ><AiOutlineShoppingCart fontSize={20} />Default</button>
        }


        else if (!props.hover && !props.focus && !props.variant && !props.size && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && props.endIcon === "store") {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#2962FF", "border": "2px solid #2962FF", boxShadow: "0 0 5px #2962FF", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"
            }} >Default <AiOutlineShoppingCart fontSize={20} /></button>
        }

        else if (!props.hover && !props.focus && !props.variant && props.size === "sm" && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#2962FF", "border": "2px solid #2962FF", boxShadow: "0 0 5px #2962FF", padding: "10px 15px", fontSize: "12px"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && !props.variant && props.size === "md" && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#2962FF", "border": "2px solid #2962FF", boxShadow: "0 0 5px #2962FF", padding: "10px 15px", fontSize: "14px"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && !props.variant && props.size === "lg" && !props.color && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#2962FF", "border": "2px solid #2962FF", boxShadow: "0 0 5px #2962FF", padding: "10px 20px"
            }} >Default</button>
        }


        else if (!props.hover && !props.focus && !props.variant && !props.size && props.color === "default" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#3F3F3F", backgroundColor: "#E0E0E0", "border": "2px solid #E0E0E0", boxShadow: "0 0 5px #E0E0E0"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && !props.variant && !props.size && props.color === "primary" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#2962FF", "border": "2px solid #2962FF", boxShadow: "0 0 5px #2962FF"
            }} >Default</button>
        }

        else if (!props.hover && !props.focus && !props.variant && !props.size && props.color === "secondary" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#455A64", "border": "2px solid #455A64", boxShadow: "0 0 5px #455A64"
            }} >Secondary</button>
        }

        else if (!props.hover && !props.focus && !props.variant && !props.size && props.color === "danger" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#D32F2F", "border": "2px solid #D32F2F", boxShadow: "0 0 5px #D32F2F"
            }} >Danger</button>
        }



        else if (props.hover === true && props.focus === true && !props.variant && !props.size && props.color === "default" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#3F3F3F", backgroundColor: "#AEAEAE", "border": "2px solid #AEAEAE", boxShadow: "0 0 5px #AEAEAE"
            }} >Default</button>
        }

        else if (props.hover === true && props.focus === true && !props.variant && !props.size && props.color === "primary" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#0039CB", "border": "2px solid #0039CB", boxShadow: "0 0 5px #0039CB"
            }} >Default</button>
        }

        else if (props.hover === true && props.focus === true && !props.variant && !props.size && props.color === "secondary" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#1C313A", "border": "2px solid #1C313A", boxShadow: "0 0 5px #1C313A"
            }} >Secondary</button>
        }

        else if (props.hover === true && props.focus === true && !props.variant && !props.size && props.color === "danger" && !props.disabled && !props.disableShadow && !props.startIcon && !props.endIcon) {
            return <button style={{
                color: "#FFFFFF", backgroundColor: "#9A0007", "border": "2px solid #9A0007", boxShadow: "0 0 5px #9A0007"
            }} >Danger</button>
        }


    }

    return (
        <>
            {showButton()}
        </>
    )
}

import React from "react";

function Avatar({
    children,
    baackgroundColor,
    px,
    py,
    color,
    borderRadius,fontSize,
    cursor
}) {
    const style={
        baackgroundColor,
        padding:`${py} ${px}`,
        color:color|| "black",
        borderRadius,
        fontSize,
        textAlign:"cursor",
        cursor:cursor || null,
        textDecoration:"none"
    };
    return(
        <div>Avatar</div>
    )
}

export default Avatar
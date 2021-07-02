import React from 'react'
// import face1 from "../../assets/images/face-male-1.jpg"
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style'
import propTypes from "prop-types"


export default function Avatar({ src, size = "48px", status, statusIconSize = "8px", ...rest }) {
    return (
        <StyledAvatar {...rest}>
            {status && <StatusIcon status={status} size={statusIconSize}></StatusIcon>}
            <AvatarClip size={size}>
                <AvatarImage src={src} alt="" />
            </AvatarClip>
        </StyledAvatar>
    )
}

Avatar.propTypes = {
    src: propTypes.string.isRequired,
    size: propTypes.string,
    status: propTypes.oneOf(["online", "offline"]),
    statusIconSize: propTypes.string,
}

import React from "react";
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import ProfileImage from "assets/images/face-male-1.jpg"
import { faCommentDots, faFolder, faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faCog, faEllipsisH, faUsers } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={ProfileImage} status="online"></Avatar>
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots}></MenuItem>
        <MenuItem icon={faUsers}></MenuItem>
        <MenuItem icon={faFolder}></MenuItem>
        <MenuItem icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  )
}


export default NavBar;
export { MenuItem }

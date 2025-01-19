import { useState } from "react";
import type { ReactNode } from "react";
import { Box, IconButton, Menu } from "@mui/material";
import type { ButtonProps, MenuProps } from "@mui/material";

interface TableIconActionProps {
  children: ReactNode;
  selectButtonProps?: Omit<ButtonProps, 'onClick'>;
  menuProps?: Omit<MenuProps, 'open' | 'onClose' | 'anchorEl'>;
  icon?: ReactNode;
}

export function TableIconActions({
  children,
  menuProps,
  // selectButtonProps,
  icon,
}: TableIconActionProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        component="button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // {...selectButtonProps}
      >
        {icon}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        {...menuProps}
      >
        {children}
      </Menu>
    </Box>
  );
}
import {
  // Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
//INTERFACES
interface INavBarListProps {
  open?: boolean;
  link: string;
  Icon: any;
  label: string;
  setLinkName:any
  
}

function NavbarList(props: INavBarListProps) {
  const theme: any = useTheme();
  const { open, link, Icon, label,setLinkName } = props;
  console.log(props,open);
  const pathName = usePathname();
  
  return (
    <ListItem sx={Styles.mainListItem(pathName, link)}>
      <Link onClick={()=>{
        setLinkName(label)
      }} style={Styles.linkStyle} href={link}>
        <ListItemIcon sx={Styles.ListItemIconStyle(theme)}>
          <Icon sx={Styles.iconStyles()} />
          <ListItemText
            disableTypography
            primary={label}
            sx={Styles.ListItemTextStyle(pathName)}
          />
        </ListItemIcon>
      </Link>
    </ListItem>
  );
}

export default NavbarList;
//Styles for navbar lists
const Styles = {
  mainListItem: (pathname: any, link: any) => ({
    px: 3,
    py: 2,
    mr: 5,
    ...(pathname.includes(link) && {
      backgroundColor: "#3CC2E0",
      borderRadius: "0px 25px 20px 0px",
      "& .MuiListItemText-root": {
        color: "#ffff",
      },
      "& .MuiSvgIcon-root": {
        color: "#ffff",
      },
    }),
    "&:hover": {
      backgroundColor: "#3CC2E0",
      borderRadius: "0px 25px 20px 0px",
      "& .MuiListItemText-root": {
        color: "#ffff",
      },
      "& .MuiSvgIcon-root": {
        color: "#ffff",
      },
    },
  }),
  linkStyle: {
    textDecoration: "none",
    width: "100%",
  },
  iconStyles: () => ({
    // backgroundColor: pathname === link ? "#ffff" : "#ffff",
    

    
  }),
  ListItemButtonStyle: (pathname: string, text: any, theme?: Theme) => ({
    padding: "6px 22px",
    px: 2.1,
    py: 1,
    borderRadius: "6px",
    backgroundColor: pathname === text.link ? "#ffff" : theme?.palette?.common?.white,
    "&:hover": {
      bgColor: "#3CC2E0",
    },
  }),
  ListItemIconStyle: (theme: Theme) => ({

    minWidth: 0,
    justifyContent: "center",
    color: theme?.palette?.common?.white,
  }),
  ListItemTextStyle: (props:any) => (
    {
    display: "flex",
    px: 3,
    color: props?.theme?.palette?.common?.white,
    lineHeight: "19.36px",
    fontWeight: 500,
    fontSize: "16px",
    // backgroundColor: pathname === link ? "#ffff" : theme?.palette?.common?.white,
    

  }),
};

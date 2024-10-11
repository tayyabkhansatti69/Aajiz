// import { BorderBottom } from "@mui/icons-material";
import type { Theme } from "@mui/material";

export const styles = {
  tabRoot: (theme: Theme, MaxWidth: number, tabsRootSx:any) => ({
    
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    minHeight: 40,
    borderBottom: "unset",
    borderRadius: 0.75,
    // border: `1px solid ${
    //   theme.palette.mode === "dark" ? "transparent" : theme.palette.neutral[200]
    // }`,
    padding: "5px 7px",
    "& .MuiTabs-flexContainer": {
      gap: 0,
    },
    ...tabsRootSx,
  }),
  tab: (theme: Theme, tabRootSx:any) => ({
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "20px",
    padding: "4px 20px",
    borderRadius: "4px",
    // width: 150,
    minHeight: 32,
    gap: 0,
    color: theme.palette.text.primary,

    "&.MuiButtonBase-root": {
      width: "fit-content",
      marginLeft: "0px !important",
      minWidth: 170,
      "&.Mui-selected": {
       color:"#1582A5",
      BorderBottom: "2px solid",
      marginLeft: "0px !important",
    },
    },
    "&.Mui-selected": {
       color:"#1582A5",
      BorderBottom: "2px solid !important",
      marginLeft: "0px !important",
      fontWeight:"bold"
    },
   
    ...tabRootSx,
  }),
};

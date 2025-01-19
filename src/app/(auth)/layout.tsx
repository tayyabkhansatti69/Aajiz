"use client";

import { Grid } from "@mui/material";

function Layout(props: any) {
  const { children } = props;

  return (
    <>
      <Grid container>
        <Grid bgcolor="#FFFFFF" height="100vh" width="100%">
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;

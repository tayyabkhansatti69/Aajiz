"use client";
import React, { useState, Children, useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import { useSelector } from "react-redux";
import { styles } from "./tabs.styles";

interface Props {
  tabsArray?: string[];
  permissionsArray?: any[];
  children?: React.ReactNode;
  Index?: number | null;
  onChange?: (newValue: number) => void;
}

export default function HorizontalTabs({
  tabsArray = [],
  permissionsArray = [],
  children,
  Index = 0,
  onChange = () => {
    ("");
  },
}: Props): JSX.Element {
  const tabChildren = Children.toArray(children);
  const [value, setValue] = useState<number | null>(0);
  const {
    user: { userPermissions },
  } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (Index) setValue(Index);
  }, [Index]);

  // Filter tabs and their corresponding children based on permissions
  const filteredTabs = tabsArray.filter((_, index) =>
    permissionsArray[index]?.id
      ? Object.prototype.hasOwnProperty.call(
          userPermissions,
          permissionsArray[index].id,
        )
      : true,
  );

  const filteredChildren = tabChildren.filter((_, index: any) =>
    permissionsArray[index]?.id
      ? Object.prototype.hasOwnProperty.call(
          userPermissions,
          permissionsArray[index].id,
        )
      : true,
  );

  // Adjust the index if the currently selected tab is not visible
  const filteredIndex = Math.min(value ?? 0, filteredTabs.length - 1);

  return (
    <Box>
      <Box className="tab_wrapper" sx={styles.tabsWrapper}>
        <Tabs
          classes={{ root: "_root", indicator: "_indicator" }}
          value={filteredIndex}
          onChange={(_, newValue) => {
            setValue(newValue);
            onChange(newValue);
          }}
          variant="scrollable"
        >
          {filteredTabs.map((tab, index) => (
            <Tab
              disableRipple
              classes={{ root: "tab_root", selected: "_selected" }}
              key={tab}
              label={tab}
              value={index}
            />
          ))}
        </Tabs>
      </Box>
      {filteredChildren.map(
        (child, index) =>
          filteredIndex === index && (
            <Box key={`child${filteredIndex}`}>{child}</Box>
          ),
      )}
    </Box>
  );
}

import { Box, Divider, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { hcmCardData } from "./hcm-card.data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import type {
  HcmCardDataType,
  HcmSubType,
  SelectedCardType,
} from "./hcm-card.types";
import Link from "next/link";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { StyledLink } from "@/src/components";
// import { StyledLink } from "@/components";

export function HcmCard({ setHcmCardData, hcmCardDatamain }: any): JSX.Element {
  const [mouseHover, setMouseHover] = useState<HcmSubType | null>(null);
  const [cardData, setCardData] = useState<HcmCardDataType[]>(hcmCardData);
  const [checkedComplete, setCheckedComplete] = useState<boolean>(false);
console.log(mouseHover)
  useEffect(() => {
    const checkedData = cardData.map((item) => {
      return item.data.filter((subItem) => subItem.checked);
    });
    const flattenedData: HcmSubType[] = checkedData.reduce(
      (acc, current) => acc.concat(current),
      []
    );
    setHcmCardData(flattenedData);
    flattenedData.length > 0
      ? setCheckedComplete(true)
      : setCheckedComplete(false);
  }, [cardData, setHcmCardData]);
  const cardSelectHandler = (data: SelectedCardType): void => {
    setCardData((oldArray) => {
      return oldArray.map((parent: HcmCardDataType): HcmCardDataType => {
        return {
          ...parent,
          data: parent.data.map((child) => {
            // Check if this is the selected card
            const isSelectedCard =
              child.childId === data.childId &&
              parent.parentId === data.parentId &&
              data.disabled !== true;

            // Set the checked state based on whether it's the selected card
            return {
              ...child,
              checked: isSelectedCard ? !child.checked : false,
            };
          }),
        };
      });
    });
  };
  return (
    <Stack spacing={1} padding={2}>
      <Typography lineHeight={1.5} variant="h5" color="primary.main">
        Define Your Role!
      </Typography>
      <Typography lineHeight={1.5} variant="body1" color="primary.main">
        Please Define your role
      </Typography>
      <Stack
        sx={{
          p: "2.5rem",
          borderRadius: "0.8rem",
        }}
        spacing={2}
      >
        {cardData.map((item) => (
          <Stack key={item.parentId} direction="column" spacing={1}>
            <Typography variant="body1" fontWeight="bold" color="primary.main">
              {item.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {item.data.map(
                ({ childId, name, Icon, checked, disabled, ...data }) => {
                  let color;
                  if (disabled === true) {
                    color = "neutral.200";
                  } else if (checked) {
                    color = "primary.darkest";
                  } else {
                    color = "common.white";
                  }
                  console.log(data);

                  return (
                    <Box
                      key={name}
                      sx={{
                        position: "relative",
                        cursor: "pointer",
                        width: "100%",
                        height: "100px",
                        backgroundColor: color,
                        overflow: "hidden",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        py: 5,
                        px: 2,
                        gap: 10,
                        border: "1px solid",
                        borderColor: "primary.main",
                      }}
                      onMouseEnter={() => {
                        setMouseHover({ childId, name, Icon, checked });
                      }}
                      onMouseLeave={() => {
                        setMouseHover(null);
                      }}
                      onClick={() => {
                        cardSelectHandler({
                          name,
                          Icon,
                          checked,
                          parentId: item.parentId,
                          childId,
                          disabled,
                        });
                      }}
                    >
                      <Box
                        height={76}
                        borderRadius="50%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          bgColor: checked ? "primary.main" : "neutral.400",
                        }}
                      >
                        <Icon
                          sx={{
                            color: checked ? "common.white" : "primary.darkest",
                            fontSize: 55,
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: checked ? "common.white" : "primary.darkest",
                          fontWeight: 600,
                        }}
                        variant="h6"
                      >
                        {name}
                      </Typography>
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: checked ? "common.white" : "primary.darkest",
                          fontSize: 30,
                          ml: "auto",
                        }}
                      />
                    </Box>
                  );
                }
              )}
            </Box>
          </Stack>
        ))}

        <Stack direction="row" justifyContent="end" spacing={2}>
          <Button  sx={{ borderRadius: 30, minWidth: 200}} variant="contained" href="/sign-in">
            Back
          </Button>
          {checkedComplete && (
            <Link
              href={{
                pathname: "/sign-up",
                query: { role: hcmCardDatamain[0].value },
              }}
            >
              <Button
                variant="outlined"
                type="submit"
                sx={{ borderRadius: 30, minWidth: 200, color: "primary.main" }}
                endIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
            </Link>
          )}
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        component="span"
        textAlign="center"
        fontWeight={600}
        color="primary.main"
      >
        {`Already have an account?`}
        <StyledLink href="/sign-in">Login</StyledLink>
      </Typography>
      <Stack direction="column">
        <Divider>
          <Typography variant="subtitle2" color="primary.main">
            Or login with
          </Typography>
        </Divider>
        <Stack gap={2} direction={"row"} justifyContent="center" mr={1}>
          <IconButton>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z"
                fill="#1877F2"
              />
            </svg>
          </IconButton>
          <IconButton>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                fill="#FFC107"
              />
              <path
                d="M1.15308 5.3455L4.43858 7.755C5.32758 5.554 7.48058 4 10.0001 4C11.5296 4 12.9211 4.577 13.9806 5.5195L16.8091 2.691C15.0231 1.0265 12.6341 0 10.0001 0C6.15908 0 2.82808 2.1685 1.15308 5.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M9.99991 20C12.5829 20 14.9299 19.0115 16.7044 17.404L13.6094 14.785C12.5717 15.5742 11.3036 16.001 9.99991 16C7.39891 16 5.19041 14.3415 4.35841 12.027L1.09741 14.5395C2.75241 17.778 6.11341 20 9.99991 20Z"
                fill="#4CAF50"
              />
              <path
                d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                fill="#1976D2"
              />
            </svg>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

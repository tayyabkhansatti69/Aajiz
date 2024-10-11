// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedInIcon,
//   TwitterIcon,
// } from "@assets/icons";
// import { footerLogo, appleStore, playStore } from "@assets/images";
// import styled from "@emotion/styled";
// import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";

// const footerLinks = [
//   {
//     id: 1,
//     title: "Cookies Policy",
//     link: "",
//   },
//   {
//     id: 2,
//     title: "Privacy Policy",
//     link: "",
//   },
//   {
//     id: 3,
//     title: "Terms & Conditions",
//     link: "",
//   },
// ];
// export default function CareersFooter(props): JSX.Element {
//   const theme: any = useTheme();
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: () =>
//           theme.palette.mode === "dark" ? "neutral.800" : "common.white",
//         borderTopColor: "divider", // TODO: color to be changed
//         borderTopStyle: "solid",
//         borderTopWidth: 1,
//         pt: {
//           md: 4,
//           xs: 3,
//         },
//       }}
//       {...props}
//     >
//       <Container maxWidth="xxl">
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: { xs: "start", md: "center" },
//             justifyContent: "space-between",
//             flexDirection: { xs: "column", md: "row" },
//           }}
//         >
//           <Box>
//             <Image src={footerLogo} alt="logo" />
//             <Typography
//               variant="body1"
//               color="text.secondary"
//               sx={{ whiteSpace: "pre-line", mt: 1, lineHeight: "17px" }}
//             >
//               {`The Personnel Library is an advanced software application designed\n
//               to revolutionize people management and HR processes.`}
//             </Typography>
//           </Box>
//           <Box>
//             <Box sx={{ display: "flex", gap: 2, mt: { xs: 3, md: 0 } }}>
//               <LinkedInIcon />
//               <TwitterIcon />
//               <FacebookIcon />
//               <InstagramIcon />
//             </Box>
//             <Box
//               sx={{
//                 mt: { xs: 3, md: 4 },
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 flexDirection: { xs: "column", md: "row" },
//               }}
//             >
//               <Link href="">
//                 <Image src={appleStore} alt="apple-store-icon" />
//               </Link>
//               <Link href="">
//                 <Image src={playStore} alt="play-store-icon" />
//               </Link>
//             </Box>
//           </Box>
//         </Box>

//         {/* TODO: Divider color to be changed */}
//         <Divider sx={{ mb: 3, marginTop: 3 }} />
//       </Container>
//       <Box
//         sx={{
//           backgroundColor: theme.palette.mode === "light" ? "#EBE9FE" : "",
//           py: 2,
//         }}
//       >
//         <Container
//           maxWidth="xxl"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexDirection: { xs: "column", md: "row" },
//           }}
//         >
//           <Typography color="text.primary" variant="subtitle2">
//             Copyrights © 2023 All Rights Reserved by{" "}
//             <strong>Personnel Library</strong>
//           </Typography>
//           <Box sx={{ mt: { xs: 2, md: 0 } }}>
//             {footerLinks.map((item) => (
//               <StyledLink href={item.link} key={item.id}>
//                 {item.title}{" "}
//                 {item.id === 1 || item.id === 2 ? (
//                   <Box sx={{ px: 1 }} component="span">
//                     |
//                   </Box>
//                 ) : (
//                   ""
//                 )}
//               </StyledLink>
//             ))}
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// const StyledLink = styled(Link)(({ theme }: any) => ({
//   textDecoration: "none",
//   fontSize: "14px",
//   textAlign: "end",
//   color:
//     theme.palette.mode === "light" ? "#101828" : theme.palette.common.white,
//   fontWeight: 500,
// }));

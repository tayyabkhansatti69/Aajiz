import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import img1 from "@/src/assets/as/Blog Image (1).png";
import img2 from "@/src/assets/as/Blog Image (2).png";
import img3 from "@/src/assets/as/Blog Image.jpg";
import img4 from "@/src/assets/as/Blog Image.png";
import img6 from "@/src/assets/as/sec-section.svg";
import img5 from "@/src/assets/as/top-section.svg";
import Image from "next/image";

function section_2_new() {
  return (
    <section>
      <Container
        maxWidth={"xl"}
        sx={{
          backgroundColor: "background.tertiary",
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
      
      <Image src={img5} alt="top-section" style={{
        width:"100%"
      }}/>
      <Image src={img6} alt="top-section" style={{
        width:"100%"
      }}/>

       
      </Container>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Card sx={{ maxWidth: 300,display:"flex",justifyContent:"center" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={img1.src}
                alt="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h6" component="div">
                  SAT a standardized test that measures a student&#39;s skills in
                  three core areas
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Critical Reading, Math, and Writing. Students in grades 11 and
                  12 take the SAT so that they can submit their scores to
                  colleges as part of the college application process.
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2, borderRadius: 6,"&:hover":{backgroundColor:"secondary.main",color:"common.white"} }}
                  color="secondary"
                >
                  Find Experts
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={img2.src}
                alt="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Stack justifyContent={"space-between"}>
                <Typography gutterBottom variant="h6" component="div">
                  IGCSE examinations signal the completion of High School
                  education
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  designed for students aged 14+ who want to progress on to
                  A-levels – or other international equivalents – before
                  entering university
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt:7, borderRadius: 6,"&:hover":{backgroundColor:"secondary.main",color:"common.white"} }}
                  color="secondary"
                >
                  Find Experts
                </Button>
                </Stack>
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={img3.src}
                alt="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h6" component="div">
                  The two types of IELTS academic and general training tests
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  IELTS is aimed at people who want to study in an
                  English-speaking environment, work in or emigrate to an
                  English-speaking country, or get a job.
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 5, borderRadius: 6,"&:hover":{backgroundColor:"secondary.main",color:"common.white"}}}
                  color="secondary"
                >
                  Find Experts
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={img4.src}
                alt="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h6" component="div">
                  TOEFL is a trademark Educational Testing Service (ETS).
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  A globally accepted, standardized English language test to
                  examine international students’ English proficiency in
                  Reading, Listening, Speaking and Writing as the English
                  Language.
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 3, borderRadius: 6,"&:hover":{backgroundColor:"secondary.main",color:"common.white"} }}
                  color="secondary"
                >
                  Find Experts
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </section>
  );
}

export default section_2_new;

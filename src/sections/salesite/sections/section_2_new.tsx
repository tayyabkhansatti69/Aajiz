import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

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
        <Typography variant="h2">About Us</Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa,
            ut accusamus temporibus illum natus quis repellendus consequatur
            quasi voluptatum quos dicta dolorum similique. Quod quos nobis
            dolorum, sed nam fugiat beatae magnam quaerat debitis sint, harum
            sunt cupiditate possimus dolor molestias, minima consequatur aut
            error repellendus ea? Est maiores, ut veniam, quidem dolores
            nesciunt eos obcaecati quasi natus expedita atque accusamus omnis
            magnam culpa sed aut blanditiis id. Eos deleniti incidunt dolorem
            repudiandae iusto porro ea hic doloremque autem sequi magni, nulla
            distinctio atque quas eius pariatur laudantium maiores quos? Quasi
            accusantium distinctio esse. Similique praesentium enim suscipit
            placeat.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}

export default section_2_new;

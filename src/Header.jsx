import { Box, Stack, Typography, ButtonGroup, Button } from "@mui/material";

export const Header = ({ page, setPage }) => {
  // lista pagine → generiamo i bottoni dinamicamente
  const pages = [
    { key: "start", label: "Einführung" },
    { key: "fokusfrage", label: "Fokusfrage" },
    { key: "explore", label: "Explore" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#eee333", // giallo FHNW
        color: "black",
        borderBottom: "4px solid black",
        pb: 1,
      }}
    >
      {/* TITOLO */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          py: 1,
        }}
      >
        Passantenfrequenzen Bahnhofstrasse – Projektarbeit FHNW
      </Typography>

      {/* BOTTONI DINAMICI */}
      <Stack direction="row" justifyContent="center" alignItems="center">
        <ButtonGroup>
          {pages.map((p) => (
            <Button
              key={p.key}
              onClick={() => setPage(p.key)}
              sx={{
                backgroundColor: page === p.key ? "black" : "#eee333",
                color: page === p.key ? "#eee333" : "black",
                border: "1px solid black",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "black",
                  color: "#eee333",
                },
              }}
            >
              {p.label}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

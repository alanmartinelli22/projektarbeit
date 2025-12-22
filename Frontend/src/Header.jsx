import { Box, Stack, Typography, ButtonGroup, Button } from "@mui/material";
import logo from "./assets/fhnw_logo.png";

export const Header = ({ page, setPage }) => {
  const pages = [
    { key: "start", label: "Einführung" },
    { key: "fokusfrage", label: "Fokusfrage" },
    { key: "explore", label: "Explore" },
  ];

  return (
    <Box
      className="header"
      sx={{
        backgroundColor: "#eee333",
        color: "black",
        py: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      {/* LOGO + TITOLO */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <img
          src={logo}
          alt="FHNW Logo"
          style={{ height: "50px", objectFit: "contain" }}
        />

        <Typography variant="h5" sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>
          Passantenfrequenzen Bahnhofstrasse – Projektarbeit FHNW
        </Typography>
      </Box>

      {/* BOTTONI DINAMICI */}
      <Stack direction="row" alignItems="center">
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

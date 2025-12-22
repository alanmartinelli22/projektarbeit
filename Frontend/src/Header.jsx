import { Box, Stack, Typography, ButtonGroup, Button } from "@mui/material";
import logo from "./assets/fhnw_logo.png";

// Definiert die verfügbaren Seiten für die Navigation
const pages = [
  { key: "start", label: "Einführung" },
  { key: "fokusfrage", label: "Fokusfrage" },
  { key: "explore", label: "Explore" },
];

export const Header = ({ page, setPage }) => {
  // Wechselt die Seite im Hauptzustand der App
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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
      {/* Logo und Titel der Applikation */}
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

      {/* Navigations-Buttons */}
      <Stack direction="row" alignItems="center">
        <ButtonGroup>
          {pages.map((p) => {
            const isActive = page === p.key;

            return (
              <Button
                key={p.key}
                onClick={() => handlePageChange(p.key)}
                aria-current={isActive ? "page" : undefined}
                sx={{
                  backgroundColor: isActive ? "black" : "#eee333",
                  color: isActive ? "#eee333" : "black",
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
            );
          })}
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

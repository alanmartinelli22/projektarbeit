import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Map } from "./Map";

export const Start = () => {
  return (
    <div className="page">
      <div className="pageTitle">
        <Typography variant="h4" gutterBottom>
          Einführung
        </Typography>
      </div>

      <div className="pageIntro">
        <Typography variant="body1" paragraph>
          Diese Webanwendung analysiert Passantenfrequenzen an der Zürcher
          Bahnhofstrasse. Die Daten stammen von Hystreet und enthalten
          stündliche Zählungen von Fussgängerinnen und Fussgängern an mehreren
          Messstandorten (Bahnhofstrasse Nord, Mitte, Süd sowie
          Lintheschergasse).
        </Typography>

        <Typography variant="body1" paragraph>
          Ziel der Projektarbeit ist es, eine konkrete Fokusfrage mit einer
          geeigneten Visualisierung zu beantworten und zusätzlich eine einfache,
          interaktive Exploration des Datensatzes zu ermöglichen.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Aufbau der Anwendung:
        </Typography>

        <List dense>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Einführung"
              secondary="Kurzbeschreibung des Datensatzes, der Projektziele und eine Übersichtskarte der Messstandorte."
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Fokusfrage"
              secondary='Visualisierung zur Beantwortung der Frage: "Wann gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger in Richtung LTR als in Richtung RTL?"'
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Explore"
              secondary="Interaktive Ansicht mit Filtern (Datum, Standort, Personengruppe und Richtung), um Muster und Unterschiede im Datensatz zu untersuchen."
            />
          </ListItem>
        </List>
      </div>

      <div className="mapContainer">
        <Typography variant="h6" paragraph>
          Die Karte zeigt die verfügbaren Messstandorte:
        </Typography>

        <Map />
      </div>
    </div>
  );
};

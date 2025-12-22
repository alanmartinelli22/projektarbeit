import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Map } from "./Map";

export const Start = () => {
  return (
    <div className="page">
      <div className="pageTitle">
        {/* Titel der Startseite, erklärt kurz den Einstieg in die App */}
        <Typography variant="h4" gutterBottom>
          Einführung
        </Typography>
      </div>

      <div className="pageIntro">
        {/* Kurze Beschreibung: Was zeigt die App und worum geht es beim Datensatz */}
        <Typography variant="body1" paragraph>
          Diese Webanwendung analysiert Passantenfrequenzen an der Zürcher
          Bahnhofstrasse. Die Daten werden über das Open Data Portal der Stadt
          Zürich bereitgestellt und enthalten stündliche Zählungen von
          Fussgängerinnen und Fussgängern an mehreren Messstandorten
          (Bahnhofstrasse Nord, Mitte, Süd sowie Lintheschergasse).
        </Typography>

        {/* Projektziel: Fokusfrage beantworten und danach Exploration ermöglichen */}
        <Typography variant="body1" paragraph>
          Ziel der Projektarbeit ist es, eine konkrete Fokusfrage mit einer
          geeigneten Visualisierung zu beantworten und zusätzlich eine einfache,
          interaktive Exploration des Datensatzes zu ermöglichen.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Aufbau der Anwendung:
        </Typography>

        {/* Übersicht über die drei Seiten: hilft den Nutzenden bei der Orientierung */}
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
              secondary='Visualisierung zur Beantwortung der Frage: "Wann gibt es an der Bahnhofstrasse Nord während der Street Parade am 10. August 2024 mehr erwachsene Fussgänger in Richtung LTR als in Richtung RTL?"'
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

        {/* Karte: zeigt die Messpunkte räumlich, damit man die Standorte versteht */}
        <Map />
      </div>
    </div>
  );
};

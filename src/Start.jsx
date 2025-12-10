import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Map } from "./Map";

export const Start = () => {
  return (
    <div className="page">
      {/* Titolo */}
      <div className="pageTitle">
        <Typography variant="h4" gutterBottom>
          Einführung
        </Typography>
      </div>

      {/* Testo introduttivo */}
      <div className="pageIntro">
        <Typography variant="body1" paragraph>
          In diesem Projekt analysieren wir die Passantenfrequenzen an der
          Zürcher Bahnhofstrasse. Die Daten stammen von Hystreet und enthalten
          stündliche Zählungen von Fussgängerinnen und Fussgängern an
          verschiedenen Messpunkten (z.B. Bahnhofstrasse Nord, Mitte, Süd).
        </Typography>

        <Typography variant="body1" paragraph>
          Ziel ist es, eine konkrete Fokusfrage zu beantworten und gleichzeitig
          eine einfache, interaktive Exploration der Daten zu ermöglichen.
        </Typography>

        {/* Abschnitt Titel */}
        <Typography variant="h6" gutterBottom>
          Aufbau der Anwendung
        </Typography>

        {/* Liste */}
        <List dense>
          <ListItem>
            <ListItemText
              primary="Einführung"
              secondary="Beschreibung des Datensatzes und des Projektziels. Später ergänzen wir hier auch eine Übersichtskarte der Messstandorte."
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Fokusfrage"
              secondary='Visualisierung, die beantwortet: "Wann gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger in Richtung LTR als RTL?"'
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Explore"
              secondary="Einfache explorative Ansicht, um weitere Orte, Variablen und Zeiträume interaktiv zu untersuchen."
            />
          </ListItem>
        </List>
      </div>

      {/* Mappa */}
      <div className="mapContainer">
        <Map />
      </div>
    </div>
  );
};

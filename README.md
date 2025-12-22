# Passantenfrequenzen Bahnhofstrasse – Projektarbeit FHNW

Diese Applikation ist das Resultat einer Projektarbeit im Studiengang **Geomatik / Geomatics FHNW**.  
Sie analysiert die Passantenfrequenzen an der Zürcher Bahnhofstrasse auf Basis von **Hystreet Open-Data** und kombiniert eine fokussierte Fragestellung mit einer interaktiven Exploration der Daten.

Die Anwendung besteht aus einem **Frontend (React + Vite)** und einem **Backend (FastAPI)** und kann lokal auf `localhost` gestartet und getestet werden.

---

## Projektziel

Ziel der Projektarbeit ist es,

- eine **konkrete Fokusfrage** mithilfe einer geeigneten Visualisierung zu beantworten und
- eine **explorative Ansicht** bereitzustellen, mit der Nutzerinnen und Nutzer weitere Muster im Datensatz interaktiv untersuchen können.

Dabei liegt der Fokus auf einer klaren Trennung von

- **Datenaufbereitung und Logik** (Backend) und
- **Darstellung und Interaktion** (Frontend).

---

## Inhalt der Applikation

### Einführung

- Kurzbeschreibung des Datensatzes
- Erklärung der Projektidee
- Übersichtskarte der Messstandorte an der Bahnhofstrasse (Nord, Mitte, Süd, Lintheschergasse)

### Fokusfrage

Beantwortung der Frage:

> **Wann gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger in Richtung LTR als in Richtung RTL?**

- Statische, sorgfältig gestaltete Visualisierung
- Kurze textuelle Interpretation der Ergebnisse
- Die Visualisierung wurde in einem Jupyter Notebook mit Python und Altair erstellt und als Vega-Lite-Spezifikation exportiert.

### Explore

- Interaktive Explorationsansicht
- Filter nach Zeit, Standort, Personengruppe und Richtung
- Dynamisch generierte Visualisierungen
- Die Visualisierung wird serverseitig erzeugt und als Vega-Lite-Spezifikation an das Frontend übermittelt.

---

## Datenbasis

- **Hystreet – Passantenfrequenzen an der Bahnhofstrasse (Stundenwerte)**
- Open Data Portal Stadt Zürich
- Kartengrundlagen: OpenStreetMap

Für die Entwicklung wird teilweise ein **Teildatensatz** verwendet, um schnelle Ladezeiten zu gewährleisten.  
Die Architektur erlaubt eine einfache Umstellung auf den vollständigen Datensatz.

---

## Voraussetzungen

Zum lokalen Testen der Applikation werden benötigt:

- **Node.js** (empfohlen: Version 18 oder höher)
- **Python** (Version 3.9 oder höher)
- **pip** (Python Package Manager)

---

## Frontend starten (React + Vite)

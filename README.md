# 3050 Webprogrammierung und interaktive Datenvisualisierung

## Projektarbeit – Passantenfrequenzen Bahnhofstrasse Zürich

## Fokusfrage

**Wann gibt es an der Bahnhofstrasse Nord während der Street Parade am 10. August 2024 mehr erwachsene Fussgänger in Richtung LTR als in Richtung RTL?**

---

## Projektbeschreibung

Diese Web-Applikation analysiert Passantenfrequenzen entlang der Zürcher Bahnhofstrasse.
Die Daten stammen aus einem Pilotprojekt der Stadt Zürich und werden über das Open Data Portal bereitgestellt. Erfasst werden unter anderem stündliche Zählungen von Fussgängerinnen und Fussgängern, ihre Laufrichtung (LTR / RTL) sowie die Zugehörigkeit zu Erwachsenen oder Kindern.

Die Applikation ist zweigeteilt:

1. Beantwortung einer konkreten Fokusfrage mithilfe einer gezielten Visualisierung
2. Interaktive Exploration des gesamten Datensatzes, um weitere Muster und Unterschiede untersuchen zu können

Die Projektarbeit dient als Vorbereitung auf die mündliche Prüfung und orientiert sich an den im Modul behandelten Technologien.

---

## Aufbau der Applikation

Das Projekt ist in zwei Hauptbereiche unterteilt: Frontend und Backend.

### Frontend

Das Frontend ist für Darstellung, Navigation und Interaktion zuständig.

Verwendete Technologien:

- React (Vite)
- Material UI (MUI)
- Vega / Vega-Embed für interaktive Visualisierungen
- React Leaflet für die Darstellung der Messstandorte
- CSS für Layout und Struktur

Seitenstruktur:

- **Einführung**
  Beschreibung des Datensatzes, der Projektziele und Übersichtskarte der Messstandorte
- **Fokusfrage**
  Visualisierung zur Beantwortung der definierten Fokusfrage
- **Explore**
  Interaktive Exploration des Datensatzes mit Filtern nach Zeit, Ort, Personengruppe und Richtung

### Backend

Das Backend stellt die Daten über eine FastAPI-Schnittstelle bereit.

Verwendete Technologien:

- Python
- FastAPI
- Pandas (Laden und Verarbeitung des Gesamtdatensatzes im Arbeitsspeicher)
- Uvicorn (ASGI Server)

Der vollständige Datensatz (**Gesamtdatensatz.csv**) wird beim Start des Servers einmalig in ein Pandas DataFrame geladen.
Das Frontend ruft ausschliesslich gefilterte oder aggregierte Daten ab.
Die Aufbereitung der Daten für die Visualisierung erfolgt bewusst im Frontend.

---

## Systemvoraussetzungen

Folgende Software sollte installiert sein:

- Python (Version 3.8 oder höher)
- Node.js (LTS Version)
- npm
- Visual Studio Code oder ein vergleichbarer Editor

---

## Installation und Start (lokal)

### Backend starten

1. Sicherstellen, dass sich die Datei **Gesamtdatensatz.csv** im Backend-Ordner befindet (gleicher Ordner wie `main.py`)
2. Projektordner im Terminal öffnen
3. In das Backend-Verzeichnis wechseln:

   ```
   cd backend
   ```

4. Benötigte Bibliotheken installieren:

   ```
   pip install fastapi uvicorn pandas
   ```

5. Backend starten:

   ```
   fastapi dev main.py
   ```

   oder alternativ:

   ```
   uvicorn main:app --reload
   ```

Das Backend läuft standardmässig auf `http://localhost:8000`.

---

### Frontend starten

6. Neues Terminal öffnen
7. In das Frontend-Verzeichnis wechseln:

   ```
   cd frontend
   ```

8. Abhängigkeiten installieren:

   ```
   npm install
   ```

9. Frontend starten:

   ```
   npm run dev
   ```

Das Frontend läuft standardmässig auf `http://localhost:5173`.

---

## Hinweise zur Nutzung

- Beim Start der Applikation wird die Einführungsseite angezeigt
- Die Navigation erfolgt über den Header
- Die Seite **Fokusfrage** beantwortet die definierte Fragestellung visuell
- In der **Explore**-Ansicht können Filter verwendet werden, um Daten nach verschiedenen Kriterien zu untersuchen
- Die Visualisierungen werden im Frontend auf Basis der vom Backend gelieferten aggregierten Daten erstellt.

---

## Autoren

- Alan Martinelli
- Siro Gentilini

---

## Hinweis

Diese Applikation wurde im Rahmen des Moduls **3050 Webprogrammierung und interaktive Datenvisualisierung** an der FHNW entwickelt und dient als Grundlage für die mündliche Prüfung.

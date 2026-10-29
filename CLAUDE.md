# Hinweise für Claude

## Git und Pull Requests

- Für jede neue Aufgabe einen frischen Branch vom aktuellen `master` anlegen.
- Vor jedem Push prüfen, ob der vorherige Pull Request schon gemergt ist. Nach einem Merge nie auf dem alten Branch weiterarbeiten.
- Keine Merge-Commits von `master` in Feature-Branches. Muss ein Branch aktualisiert werden, wird er auf `master` gerebased.
- Ein Pull Request enthält nur die Commits der aktuellen Aufgabe, keine bereits gemergte Historie.

## Inhalte des Lebenslaufs

- Texte nicht ohne Rückfrage umschreiben, kürzen oder abschwächen. Änderungen erst als Vorschlag zeigen (vorher/nachher) und nach Freigabe umsetzen.
- Keine neuen Angaben ergänzen, die nicht freigegeben sind (z. B. Kundennamen in der Zusammenfassung).
- Senior-Signale und Schlagworte für Recruiter bleiben erhalten: „Senior“, „Lead-Level“, „Lead-Expertise“, „(Freelancer)“, „KI-Tools“ usw.
- Reine Fehlerkorrekturen (Rechtschreibung, Grammatik, Firmennamen, Fachbegriffe) sind erlaubt, aber im Pull Request aufzulisten.

## PDF

- Nach jeder Änderung `npm run build` ausführen und das PDF prüfen: 9 Seiten, Seite 1 mit Zusammenfassung, Open-Source-Entwicklung und eigenen Produkten, Seite 2 mit Technischer Expertise und Skills.

# Interactive Card Details Form

Eine React-Umsetzung der [Frontend Mentor Challenge "Interactive Card Details Form"](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

Das Projekt bildet ein Kreditkartenformular mit Live-Vorschau der Karte, Formularvalidierung und einer interaktiven Kartenansicht mit leichter 3D-Tilt-Animation ab.

## Links

- Live site: [creditcard-form-react-fm.vercel.app](https://creditcard-form-react-fm.vercel.app/)
- GitHub: [srenV/creditcard-form-react-fm](https://github.com/srenV/creditcard-form-react-fm)

## Preview

![Credit card form screenshot](src/assets/screenshot.png)

## Features

- Live-Preview von Vorder- und Rückseite der Kreditkarte
- Synchronisierung der Formulardaten über React Context
- Validierung für Karteninhaber, Kartennummer, Ablaufdatum und CVC
- Numerische Eingaben werden auf Ziffern beschränkt
- Hover-/Tilt-Effekt auf den Karten
- Responsive Layout auf Basis von Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Phosphor Icons

## Projektstruktur

```text
src/
├── app/
│   └── App.jsx
├── features/
│   └── credit-card/
│       ├── components/
│       │   ├── CreditCardBackside.jsx
│       │   ├── CreditCardFrontside.jsx
│       │   └── CreditCardForm.jsx
│       └── context/
│           ├── CreditCardProvider.jsx
│           └── creditCardContext.js
├── shared/
│   └── layout/
│       └── Footer.jsx
├── index.css
└── main.jsx
```

## Hinweis

Das Projekt ist als Frontend-Mentor-Challenge aufgebaut und dient als UI-/UX-Übung mit Fokus auf Formularinteraktion, Zustandsverwaltung und visuelle Präsentation.

# Baigiamasis Darbas (Evelina Sabaitytė) TYPE15

Mano baigiamasis darbas turi pilnai veikiančias CRUD operacijas: registracijos formoje galima sukurti vartotoją, kuris atvaizduojamas lentelėje. Registruotą vartotoją galima ištrinti bei redaguoti. Mano lentelėje galima matyti iki 7 vartotojų, kiti matomi puslapiavimo (pagination) pagalba. Taip pat aukščiau lentelės yra įgyvendinta registruotų vartotojų paieška.

## Turinys

- [Instaliacija](#installation)
- [Naudojimas](#usage)
- [Projekto Struktūra](#project-structure)
- [Funkcionalumas](#features)

## Instaliacija

Paleisti aplikaciją sekite žemiau nurodytus žingsnius

**Server**

1. Naviguojam į server direktoriją `cd server`.
2. Instaliuojam dependencies su komanda `npm install`.
3. Paleidžiam serverį development aplinkoje su komanda `npm run dev`.

**Client**

1. Naviguojam į server direktoriją `cd client`.
2. Instaliuojam dependencies su komanda `npm install`.
3. Paleidžiam client'ą development aplinkoje su komanda `npm start`.

## Naudojimas

Atlikus žingsnius aukščiau aplikacija yra paleidžiama ir galima pradėti naudotis aplikacijos funkcijomis: pridėti vartotojus, redaguoti vartotojus juos ištrinti bei ieškoti registruotus vartotojus paieškoje.

## Projekto Struktūra

**Client**

Client direktorija sukurta naudojant React su Vite. Struktūra atvaizduojama žemiau:

- `src/` - Visą React kodą galite rasti čia.
  - `components/` - Čia rasite visus sukurtus komponentus.
  - `hooks/` - Čia yra tanstack@react-query bibliotekos naudojamos funkcijos, skirtos atlikti CRUD operacijas.
  - `styles/` - Čia rasite GlobalStyles.ts failą, kuris naudojamas globaliam stiliui ir UtilityStyles.ts failą, kur galima rasti reusable styled komponentų stilių.
  - `types/` - Čia rasite enums ir interface, kuriuos panaudoju tam tikruose komponentuose.
  - `App.tsx` - Pagrindinis komponentas, kuris supa visus kitus komponentus.
  - `GlobalStyles` - Minėtas globalių stilių komponentas, kuris ateina iš 'styles/GlobalStyles.ts'.
  - `Header` - Header komponentas, kuriame galima rasti `UserFormModal` ir `SearchBar` komponentus, `UserFormModal` viduje sąlyginai renderinimas `Button` komponentas su tekstu 'Pridėti naują'. `SearchBar` komponente galima rasti `SearchInput` komponentą bei rezultatų skaičiavimą.
  - `StyledMain` - Main stiliaus komponentas, kuris atėjo iš 'styles/UtilityStyles.ts'.
  - `StyledSection` - Section stiliaus komponentas iš 'styles/UtilityStyles.ts'.
  - `Table` - Pagrindinės lentelės komponentas.
  - `Footer` - Footer komponentas, kuriame nurodyti dabartiniai metai.

Panaudotos bibliotekos: `axios`, `tanstack@react-query`, `styled-components`.

**Server**

Serveris sukurtas naudojant Node.js su Express.js biblioteką, taip pat prijungta MongoDB duomenų bazė. Serverio struktūra atvaizduojama žemiau:

- `src/` - Visą Express serverio kodą galite rasti čia.
- `config/` - Šiame aplanke rasite serverio sujungimą su duombaze, naudojant 'mongoose' biblioteką.
- `controllers/` - Šiame aplanke rasite visas funkcijas, susijusias su endpoint'ais, aprašytais app.ts faile.
- `models/` - Šiame aplanke aprašyta MongoDB vartotojų Schema.
- `app.ts` - Tai yra pradinis failas, kuriame paleidžiamas serveris, atidaromas sujungimas su duombaze ir inicijuojami endpoint'ai.

Panaudotos bibliotekos: `concurrently`, `cors`, `dotenv`, `express`, `mongoose`. Taip pat naudojama `nodemon` development aplinkoje.

## Funkcionalumas

- Vartotojų paieška
- Vartotojų kūrimas
- Vartotojų redagavimas
- Vartotojų ištrinimas

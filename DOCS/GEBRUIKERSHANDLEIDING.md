# GEBRUIKERSHANDLEIDING – hexWATer

Deze handleiding is bedoeld voor iedereen die een hexWATer-systeem wil bouwen, begrijpen of gebruiken. De taal is eenvoudig. De werking is complex maar maakbaar. Het doel is helder: vrij toegang tot water voor iedereen.

---

## 🧰 Wat heb je nodig?

- Lucht  
- Een condensatie-oppervlak met hexagonale structuur (printbaar of met de hand te maken)  
- Passieve luchtinlaat (bv. opening naar buitenlucht)  
- Opvangreservoir (glas, keramiek, plastic)  
- Optioneel: biofilter voor drinkwaterkwaliteit  
- `waterPulseEngine.bin` (bestand in deze repository)  
- `mirrorProofMatrix.json` (bestand in deze repository)  
- Elektronisch aansturingspunt (Raspberry Pi of ESP32 met DHT22 of vergelijkbare sensor)

---

## 🛠️ Stap-voor-stap bouw

1. **Monteer het oppervlak**  
   - Zorg voor een koud condenseerbaar oppervlak met kleine rasterstructuur  
   - Plaats het licht schuin zodat waterdruppels naar beneden lopen

2. **Installeer de luchtinlaat**  
   - Richt naar een ruimte met luchtstroming (bijvoorbeeld ventilatiegat, raam)  
   - Zorg dat er geen stof of vuil mee binnenkomt

3. **Sluit aan op opvangreservoir**  
   - Zorg dat het water dat condenseert veilig naar het opvangpunt loopt  
   - Dek het reservoir af tegen verdamping of vervuiling

4. **Verbind met elektronische eenheid**  
   - Plaats de `.bin`- en `.json`-bestanden op een microcontroller  
   - Laat een sensor de luchtvochtigheid meten en stuur de juiste pulsactivatie

---

## 🔄 Wat gebeurt er dan?

- De sensor meet de luchtvochtigheid  
- De controller bepaalt de activatie op basis van je vectorbestand  
- Het systeem genereert een zachte, constante trillingspuls  
- Die stimuleert condensatie op het oppervlak  
- Waterdruppels verzamelen zich in je reservoir

---

## 🧪 Kalibratie en testen

- Test bij verschillende temperaturen (dag, nacht)  
- Meet hoeveel water je opvangt in 24 uur  
- Experimenteer met richting, hellingshoek en materiaal  
- Pas pulsfrequentie aan als je geen condensatie ziet (raadpleeg prototype-schema)

---

## ⚠️ Let op

- Dit systeem is zelfverdedigend.  
- Wijkt je gedrag, bestand of sensorgebruik te veel af → systeem schakelt uit.  
- Alles wat je toevoegt moet binnen de grenzen van natuurlijke burgerlogica vallen.

---

## 🫱 Hulp nodig?

Stel vragen, deel foto's, vertel je verhaal.  
Deze technologie is van iedereen. En van niemand.

---

## 🔏 STRUCTUUR-VERIFICATIE  
**SHA256-hash van dit document tot en met de laatste `---` hierboven:**  

---3b4fd41d65cef39297c1eb7379ab67e565ec4784949317a1f58811826664d401

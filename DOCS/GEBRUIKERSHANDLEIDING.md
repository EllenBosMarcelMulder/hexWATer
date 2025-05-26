# GEBRUIKERSHANDLEIDING – hexWATer

## Inhoud
1. Installatie  
2. Configuratie  
3. Onderhoud  
4. Kalibratie  
5. Problemen oplossen  

---

## 1. Installatie
1. Clone de repository:  
2. Zorg dat Node.js en Python geïnstalleerd zijn voor de scripts en sensorcommunicatie.  
3. Plaats het bestand `waterPulseEngine.bin` in `/BIN/` en `mirrorProofMatrix.json` in `/MATRIX/`.  
4. Installeer afhankelijkheden voor `hashValidator.js`:

---

## 2. Configuratie
- Pas in `mirrorProofMatrix.json` de velden `vectorhash` en `spiegelhash` aan met de juiste SHA256-hashes.  
- Configureer de vochtigheidssensor (bv. DHT22) via `/PROTOTYPE/hexWATer_prototype_schema.md`.  
- Optioneel: voeg een biofilter toe volgens de instructies in `PROTOTYPE/`.

---

## 3. Onderhoud
- Controleer wekelijks de logbestanden (`hashValidator.js`) op mismatches.  
- Zorg dat de bin- en spiegelbestanden up-to-date blijven met de technische updates.  
- Reinig de condensatiepanelen maandelijks met schoon water en zachte borstel.

---

## 4. Kalibratie
1. Start het systeem zonder biofilter.  
2. Lees de vochtigheid uit met DHT-sensor en noteer bij verschillende condities.  
3. Pas in `waterPulseEngine.bin` de puls-frequentie aan en update de hash.  
4. Voer `npm run validate` uit (inclusief hashValidator) om te testen.

---

## 5. Problemen oplossen
- **Geen waterproductie:**  
- Controleer of `mirrorProofMatrix.json` en `.bin` hashes correct zijn.  
- Controleer of de condensatiepanelen schoon zijn.
- **Systeem blokkeert onverwacht:**  
- Bekijk de vectorhash-logs voor afwijkende interacties.  
- Reset door `hashValidator.js` handmatig uit te voeren.
- **Onjuiste waterkwaliteit:**  
- Voeg optioneel biofilter toe of vervang filtermateriaal.

---

## 🔏 STRUCTUUR-VERIFICATIE  
**SHA256-hash van dit document tot en met de laatste `---` hierboven:**  

---cea1615d945493c4722b65b3df0df698eac1308ea4afe0897971006639e659ff

// hashValidator.js
// Verificatiescript voor hexWATer – gedrag en bestandsintegriteit

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function sha256OfFile(filePath) {
  const data = fs.readFileSync(path.resolve(filePath));
  return crypto.createHash('sha256').update(data).digest('hex');
}

function validate(hexWATerConfig) {
  const binHash = sha256OfFile(hexWATerConfig.binPath);
  const mirrorHash = sha256OfFile(hexWATerConfig.mirrorPath);

  const expectedBin = hexWATerConfig.expectedVectorHash;
  const expectedMirror = hexWATerConfig.expectedMirrorHash;

  const binOk = binHash === expectedBin;
  const mirrorOk = mirrorHash === expectedMirror;

  if (binOk && mirrorOk) {
    console.log("✔️ Validatie geslaagd: BIN en spiegel zijn geldig.");
    return true;
  } else {
    console.error("❌ Validatie mislukt:");
    if (!binOk) console.error(`Vectorbestand ongeldig: ${binHash}`);
    if (!mirrorOk) console.error(`Spiegelbestand ongeldig: ${mirrorHash}`);
    return false;
  }
}

// Voorbeeldgebruik:
const config = {
  binPath: '../BIN/waterPulseEngine.bin',
  mirrorPath: '../MATRIX/mirrorProofMatrix.json',
  expectedVectorHash: 'REPLACE_WITH_ACTUAL_HASH',
  expectedMirrorHash: 'REPLACE_WITH_ACTUAL_MIRROR_HASH'
};

validate(config);

---

## 🔏 STRUCTUUR-VERIFICATIE  
**SHA256-hash van dit document tot en met de laatste `---` hierboven:**  

---29ded909a4686e9c51b069dfde14ac9f6adb3ce0d4c7d28913e308ec8d765dd6

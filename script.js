function leggTilGjest(e) {
    e.preventDefault();
    const navn = document.getElementById('gjestNavn').value || 'Anonym';
    const melding = document.getElementById('gjestMelding').value;
    if (!melding.trim()) {
      alert('Du må skrive en melding, altså!');
      return false;
    }
    const dato = new Date().toLocaleDateString('no-NO');
    const liste = document.getElementById('gjestebokListe');
    const nyttInnlegg = document.createElement('p');
    nyttInnlegg.innerHTML = '<strong>' + navn + ', ' + dato + ':</strong> ' + melding;
    liste.prepend(nyttInnlegg);
    document.getElementById('gjestNavn').value = '';
    document.getElementById('gjestMelding').value = '';
    return false;
  }

  // --- "Login" (KUN for visning, IKKE sikker!) ---
  // TODO (LOGIN): Dette er IKKE et ekte innloggingssystem. Alt skjer i
  // nettleseren og hvem som helst kan lese/omgå koden. Bygg en ekte
  // backend-løsning med sikker autentisering. 
  function apneLogin() {
    const boks = document.getElementById('loginBoks');
    boks.hidden = !boks.hidden;
    boks.scrollIntoView({behavior: 'smooth'});
    return false;
  }

  function sjekkLogin(e) {
    e.preventDefault();
    const bruker = document.getElementById('brukernavn').value;
    const pass = document.getElementById('passord').value;
    // FAKE sjekk - IKKE bruk dette i en ekte løsning!
    if (bruker === 'jens' && pass === 'falafel123') {
      alert('Velkommen tilbake, ' + bruker + '! (Dette er ikke ekte sikkerhet!)');
    } else {
      alert('Feil brukernavn eller passord (eller: dette systemet er ikke ekte ennå!)');
    }
    return false;
  }

  // --- Besøksteller (kun lokal, "liksom") ---
  // TODO (DATABASE): Erstatt med en ekte teller lagret i database på server.
  (function tellBesok() {
    let antall = sessionStorage.getItem('jensFalafelBesok');
    antall = antall ? parseInt(antall) + 1 : 42;
    sessionStorage.setItem('jensFalafelBesok', antall);
    document.getElementById('tellerVerdi').textContent = String(antall).padStart(6, '0');
  })();
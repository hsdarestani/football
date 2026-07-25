/* Atlasgames V8: deutsche Oberfläche, Kontrast- und Interaktionskorrekturen */
(() => {
  'use strict';

  const exact = new Map(Object.entries({
    'Services':'Leistungen','Player Login':'Spieler-Anmeldung','Management Demo':'Management-Demo',
    'Frankfurt · Germany · Football operations':'Frankfurt · Deutschland · Fußballorganisation',
    'The game':'Das Spiel','beyond':'über den','the pitch.':'Platz hinaus.',
    'Live Management Demo':'Management-Demo öffnen','Spieler-Portal öffnen':'Spielerportal öffnen',
    'Sample players':'Beispielspieler','Portfolio value':'Gesamtwert','Working modules':'Funktionsbereiche','Interactive demo':'Interaktive Demo',
    'Player Focus':'Spieler im Mittelpunkt','Player focus':'Spieler im Mittelpunkt','Matchday':'Spieltag','Club ready':'Bereit für Vereine',
    'Transfer Desk':'Transferzentrale','Live pipeline':'Aktuelle Vorgänge','PLAYER CARE':'SPIELERBETREUUNG','TRANSFER DESK':'TRANSFERZENTRALE',
    'SCOUTING':'TALENTSICHTUNG','MEDICAL VAULT':'MEDIZINARCHIV','SPONSORSHIP':'SPONSORING','TRAVEL':'REISEN','PERFORMANCE':'LEISTUNGSDATEN',
    'Selected roster':'Ausgewählte Spieler','SELECTED ROSTER':'AUSGEWÄHLTE SPIELER','Talent with':'Talente mit','real stories.':'echten Geschichten.',
    'Digital operating system':'Digitales Betriebssystem','DIGITAL OPERATING SYSTEM':'DIGITALES BETRIEBSSYSTEM',
    'Everything the agency':'Alles, was die Agentur','actually needs.':'wirklich braucht.',
    'Player CRM':'Spielerbetreuung','Communication':'Kommunikation','Calendar & Travel':'Kalender & Reisen','Medical Vault':'Medizinarchiv',
    'Sponsors':'Sponsoren','Open module →':'Modul öffnen →',
    'Interactive product demo · Sample data only · Atlasgames Management':'Interaktive Produktdemo · Nur Beispieldaten · Atlasgames Management',
    'All players & operations':'Alle Spieler und Abläufe','Personal workspace':'Persönlicher Bereich','MANAGEMENT':'VERWALTUNG',
    'FOOTBALL OFFICE':'FUSSBALLBÜRO','SECURE PLAYER & MANAGEMENT WORKSPACE':'GESCHÜTZTER BEREICH FÜR SPIELER UND VERWALTUNG',
    'Management Workspace':'Verwaltungsbereich','Management workspace':'Verwaltungsbereich','MANAGEMENT WORKSPACE':'VERWALTUNGSBEREICH','Football Office':'Fußballbüro','Football office':'Fußballbüro','FOOTBALL OFFICE':'FUSSBALLBÜRO',
    'Command Center':'Leitstand','Players':'Spieler','Tasks':'Aufgaben','Calendar':'Kalender','Messages':'Nachrichten','Documents':'Dokumente',
    'Contracts':'Verträge','Scouting':'Talentsichtung','Medical':'Medizin','Travel':'Reisen','Analytics':'Auswertung','My Space':'Meine Übersicht',
    'Performance':'Leistungsdaten','Logout':'Abmelden','Today':'Heute','Today’s briefing':'Tagesüberblick','TODAY’S BRIEFING':'TAGESÜBERBLICK',
    'Today’s priorities, player status and live business signals.':'Heutige Prioritäten, Spielerstatus und aktuelle Geschäftsvorgänge.',
    'Contract, brand & performance aligned.':'Vertrag, Marke und Leistung aufeinander abgestimmt.',
    'Contract':'Vertrag','CONTRACT':'VERTRAG','Rating':'Bewertung','RATING':'BEWERTUNG','Next event':'Nächster Termin','NEXT EVENT':'NÄCHSTER TERMIN',
    'Open player':'Spielerakte öffnen','Message':'Nachricht','Portfolio value':'Gesamtwert','PORTFOLIO VALUE':'GESAMTWERT',
    'Open actions':'Offene Aufgaben','OPEN ACTIONS':'OFFENE AUFGABEN','Transfer cases':'Transferfälle','TRANSFER CASES':'TRANSFERFÄLLE',
    'Unread messages':'Ungelesene Nachrichten','UNREAD MESSAGES':'UNGELESENE NACHRICHTEN','Needs attention today':'Heute zu bearbeiten',
    'Priority actions':'Wichtige Aufgaben','View board':'Aufgabenübersicht','Upcoming schedule':'Anstehende Termine','Quick actions':'Schnellaktionen',
    'Create a sample record':'Beispieleintrag erstellen','＋ Player':'＋ Spieler','✓ Task':'✓ Aufgabe','◫ Event':'◫ Termin','▤ Document':'▤ Dokument',
    '⇄ Transfer':'⇄ Transferfall','✈ Travel':'✈ Reise','✚ Medical':'✚ Medizin','◆ Sponsor':'◆ Sponsoring',
    '＋ New task':'＋ Neue Aufgabe','＋ New event':'＋ Neuer Termin','＋ Add player':'＋ Spieler hinzufügen','＋ Add record':'＋ Eintrag hinzufügen',
    '＋ New contract':'＋ Neuer Vertrag','＋ Upload document':'＋ Datei hochladen','＋ Player':'＋ Spieler',
    'Priority':'Priorität','High':'Hoch','Medium':'Mittel','Low':'Niedrig','Done':'Erledigt','In Progress':'In Arbeit','Review':'Prüfung',
    'Open':'Offen','Closed':'Abgeschlossen','Lead':'Erstkontakt','Offer':'Angebot','Negotiation':'Verhandlung',
    'Available':'Verfügbar','International':'Nationalspieler','Prospect':'Perspektivspieler','Watchlist':'Beobachtungsliste','Report':'Bericht',
    'Confirmed':'Bestätigt','Pending':'Ausstehend','Active':'Aktiv','Draft':'Entwurf','Signed':'Signiert','Private':'Vertraulich','Valid':'Gültig',
    'Fit':'Einsatzbereit','Rehab':'Reha','Monitoring':'Beobachtung','Meeting':'Besprechung','Match':'Spiel','Training':'Training',
    'Sponsor':'Sponsoring','Recovery':'Regeneration','Screening':'Untersuchung','Legal':'Recht','Brand':'Marke','Player Care':'Spielerbetreuung',
    'Document center':'Dokumentenarchiv','Document Center':'Dokumentenarchiv','Upload document':'Datei hochladen','Preview':'Öffnen','Sign':'Signieren',
    'Delete':'Löschen','Reset':'Zurücksetzen','files':'Dateien','Type':'Kategorie','Date':'Datum','Identity':'Identität','Presentation':'Präsentation','DOCUMENT':'DATEI','PLAYER':'SPIELER','TYPE':'KATEGORIE','STATUS':'STATUS','DATE':'DATUM',
    'PARTNER':'PARTNER','VALUE':'WERT','DELIVERABLE':'LEISTUNG','CLUB':'VEREIN','START':'BEGINN','END':'ENDE','ROUTE':'STRECKE','HOTEL':'HOTEL',
    'REPORT':'BERICHT','NOTE':'HINWEIS','PROSPECT':'TALENT','POSITION':'POSITION','AGE':'ALTER','SCORE':'BEWERTUNG',
    'DEAL PROBABILITY':'ABSCHLUSSWAHRSCHEINLICHKEIT','MARKET VALUE':'MARKTWERT','SAMPLE PLAYERS':'BEISPIELSPIELER',
    'Player':'Spieler','Document':'Dokument','Task':'Aufgabe','Event':'Termin','Club network':'Vereinsnetzwerk','Eredivisie club':'Verein aus der Eredivisie',
    'Premier League club':'Verein aus der Premier League','Online · secure demo chat':'Online · geschützter Demo-Chat',
    'Performance trend':'Leistungsentwicklung','Rolling 90-day sample':'Beispieldaten der letzten 90 Tage','Media & brand wall':'Medien- und Markenübersicht',
    'Performance story':'Leistungsbericht','Transfer visibility':'Transferübersicht','Live sample metric':'Aktuelle Beispielkennzahl',
    'Tasks completed':'Erledigte Aufgaben','TASKS COMPLETED':'ERLEDIGTE AUFGABEN','ONE OFFICE.':'EIN BÜRO.',
    'PLAYER PORTAL':'SPIELERPORTAL','PLAYER WORKSPACE':'PERSÖNLICHER BEREICH','OVERALL RATING':'GESAMTBEWERTUNG','Personal performance and availability overview.':'Persönliche Leistungs- und Verfügbarkeitsübersicht.','Contract meeting in Frankfurt':'Vertragsgespräch in Frankfurt','27 July · 10:00 · Kennedyallee 113. The new addendum is available in your documents.':'27. Juli · 10:00 · Kennedyallee 113. Der neue Vertragsnachtrag ist in deinen Dokumenten verfügbar.','Everything important from your management in one place.':'Alles Wichtige aus deiner Betreuung an einem Ort.',
    'Ready':'Bereit','Next action':'Nächster Schritt','Documents':'Dokumente','Next appointment':'Nächster Termin','From management':'Von der Betreuung',
    'Upcoming bookings':'Anstehende Buchungen','No restriction':'Keine Einschränkung','Open documents':'Dokumente öffnen',
    'Contract meeting — Frankfurt':'Vertragsgespräch — Frankfurt','Contract meeting':'Vertragsgespräch',
    'Your hotel confirmation is now in Travel.':'Deine Hotelbestätigung liegt jetzt unter Reisen bereit.',
    'The club presentation looks strong. Please add the new performance slide.':'Die Vereinspräsentation ist überzeugend. Bitte ergänze die neue Leistungsfolie.',
    'Training plan received. Can we move the meeting to 10:30?':'Trainingsplan erhalten. Können wir den Termin auf 10:30 Uhr verschieben?',
    'Yes, updated in the calendar. I also uploaded the draft addendum.':'Ja, im Kalender aktualisiert. Den Entwurf des Nachtrags habe ich ebenfalls hochgeladen.',
    'Contract terms, deadlines and lifecycle status.':'Vertragsbedingungen, Fristen und aktueller Bearbeitungsstand.',
    'Contracts, passports, medical files and travel confirmations.':'Verträge, Reisepässe, medizinische Unterlagen und Reisebestätigungen.',
    'Direct conversations with realistic sample threads.':'Direkte Nachrichten mit realistischen Beispielverläufen.',
    'Direct conversations between players and management.':'Direkte, nachvollziehbare Kommunikation zwischen Spielern und Betreuung.',
    'Matches, meetings, medical appointments and travel.':'Spiele, Besprechungen, medizinische Termine und Reisen.',
    'Meetings, matches, flights, hotels and visas.':'Besprechungen, Spiele, Flüge, Hotels und Visa.',
    'Flights, hotels and player-care logistics.':'Flüge, Hotels und die gesamte Spielerbetreuung auf Reisen.',
    'Private sample reports, fitness and rehabilitation status.':'Vertrauliche Beispielberichte, Fitness- und Rehabilitationsstatus.',
    'Private reports, rehab status and screening notes.':'Vertrauliche Berichte, Reha-Status und Untersuchungshinweise.',
    'Partnership value, deliverables and campaign status.':'Partnerschaftswert, vereinbarte Leistungen und Kampagnenstatus.',
    'Partnership values, deliverables and campaign status.':'Partnerschaftswerte, vereinbarte Leistungen und Kampagnenstatus.',
    'Pipeline, probability, offers and club conversations.':'Vorgänge, Wahrscheinlichkeiten, Angebote und Vereinsgespräche.',
    'A live pipeline with editable probability and stage.':'Aktuelle Transfervorgänge mit bearbeitbarer Wahrscheinlichkeit und Phase.',
    'A growing prospect watchlist with evaluation scores.':'Eine wachsende Talentliste mit detaillierten Bewertungen.',
    'A living CRM for the complete Atlasgames roster.':'Eine zentrale Spielerbetreuung für den gesamten Atlasgames-Spielerbestand.',
    'Profile, contracts, documents, contacts and performance.':'Profile, Verträge, Dokumente, Kontakte und Leistungsdaten.',
    'Portfolio, deal and operational performance.':'Spielerbestand, Transfervorgänge und betriebliche Kennzahlen.',
    'Across legal, care and brand':'Über Recht, Betreuung und Marke hinweg',
    'The Frankfurt addendum is awaiting final confirmation. Medical status is fit and the next sponsor campaign is in negotiation.':'Der Frankfurter Vertragsnachtrag wartet auf die letzte Bestätigung. Der Spieler ist einsatzbereit und die nächste Sponsorenkampagne befindet sich in Verhandlung.',
    'Contract, performance, travel, medical and communication in one profile.':'Vertrag, Leistung, Reisen, Medizin und Kommunikation in einem Profil.',
    'Demo credentials are pre-filled. No real personal or medical information is transmitted.':'Die Demo-Zugangsdaten sind vorausgefüllt. Es werden keine echten persönlichen oder medizinischen Daten übertragen.',
    'All players & operations':'Alle Spieler und Abläufe','Open module':'Modul öffnen','Open player':'Spielerakte öffnen',
    'Employment Contract 2026–2031.pdf':'Arbeitsvertrag 2026–2031.pdf','Medical Screening July.pdf':'Medizinische Untersuchung Juli.pdf','Passport Younes.pdf':'Reisepass Younes.pdf','Stuttgart Performance Deck.pdf':'Leistungsunterlagen Stuttgart.pdf','Hotel Dubai Confirmation.pdf':'Hotelbestätigung Dubai.pdf','No result':'Kein Ergebnis','Player found':'Spieler gefunden','Task found':'Aufgabe gefunden','Document found':'Dokument gefunden',
    'Try a player, task or document name.':'Bitte einen Spieler, eine Aufgabe oder ein Dokument eingeben.',
    'Matchday: Stuttgart vs Freiburg':'Spieltag: Stuttgart gegen Freiburg','Medical screening':'Medizinische Untersuchung',
    'Frankfurt contract addendum':'Frankfurter Vertragsnachtrag','Visa documents for Dubai camp':'Visaunterlagen für das Trainingslager in Dubai',
    'Medical report review':'Medizinischen Bericht prüfen','Routine screening':'Routineuntersuchung',
    'Campaign + launch event':'Kampagne und Auftaktveranstaltung',
    'Sample internal note: maintain weekly player-care check-in, align media activity with match schedule and review contract milestones quarterly.':'Interner Beispielhinweis: Wöchentlichen Austausch zur Spielerbetreuung einhalten, Medienaktivitäten mit dem Spielplan abstimmen und Vertragsmeilensteine vierteljährlich prüfen.',
    'Player portal':'Spielerportal','Player Portal':'Spielerportal','PLAYER PORTAL':'SPIELERPORTAL',
    'Player workspace':'Persönlicher Bereich','Player Workspace':'Persönlicher Bereich','PLAYER WORKSPACE':'PERSÖNLICHER BEREICH',
    'Overall rating':'Gesamtbewertung','Overall Rating':'Gesamtbewertung','OVERALL RATING':'GESAMTBEWERTUNG',
    'Performance Score':'Leistungsbewertung','Next Appointment':'Nächster Termin','No appointment':'Kein Termin',
    'Open Tasks':'Offene Aufgaben','Tap to manage':'Zum Bearbeiten öffnen','Secure vault':'Geschütztes Archiv',
    'Contract Until':'Vertrag bis','My Tasks':'Meine Aufgaben','Upcoming':'Anstehend','Personal agenda':'Persönlicher Kalender',
    'Availability':'Verfügbarkeit','Minutes':'Spielminuten','Impact':'Einfluss','Deal probability':'Abschlusswahrscheinlichkeit',
    'Response time':'Reaktionszeit','Operational benchmark':'Betrieblicher Vergleichswert','vs. previous period':'gegenüber dem vorherigen Zeitraum',
    'Editorial profile':'Redaktionelles Profil','Send':'Senden','Management Admin':'Verwaltung',
    'Football Operations · Live Demo':'Fußballorganisation · Live-Demo','Player Portal ansehen':'Spielerportal ansehen',
    'Professional Football Management':'Professionelles Fußballmanagement','Managed Players':'Betreute Spieler',
    'Top League Players':'Spieler in Top-Ligen','Active Rumours':'Aktuelle Wechselgerüchte',
    'Right Winger':'Rechtsaußen','Centre-Forward':'Mittelstürmer','Centre-Back':'Innenverteidiger',
    'Midfielder':'Mittelfeldspieler','Attacking Midfield':'Offensives Mittelfeld','Right-Back':'Rechtsverteidiger',
    'Central Midfield':'Zentrales Mittelfeld','Left Winger':'Linksaußen','Goalkeeper':'Torwart','Left-Back':'Linksverteidiger',
    'Free agent':'Vereinslos','Academy':'Nachwuchs','Top flight':'Erste Liga','Nation':'Nationalität','NATION':'NATIONALITÄT',
    'Current focus':'Aktueller Schwerpunkt','Profile notes':'Profilnotizen','Edit profile':'Profil bearbeiten',
    'overview':'Übersicht','tasks':'Aufgaben','documents':'Dokumente','contract':'Vertrag','performance':'Leistungsdaten',
    'Operational work that can be created, moved and completed.':'Aufgaben können erstellt, verschoben und abgeschlossen werden.',
    'Waiting':'Wartet','Agenda':'Terminübersicht','events':'Termine','SAT':'SA','SUN':'SO','MON':'MO','TUE':'DI','WED':'MI','THU':'DO','FRI':'FR',
    'Sponsor shooting':'Sponsoren-Fotoshooting','Move forward →':'Weiterführen →','Interest':'Interesse','New case':'Neuer Fall',
    '2. Bundesliga shortlist':'Auswahlliste 2. Bundesliga','Eintracht Frankfurt renewal':'Vertragsverlängerung Eintracht Frankfurt',
    'Contacted':'Kontaktiert','Striker':'Stürmer','Winger':'Flügelspieler','Load management':'Belastungssteuerung',
    'Hamstring follow-up':'Nachkontrolle Oberschenkel','Monthly content':'Monatliche Inhalte','Local mobility partner':'Regionaler Mobilitätspartner',
    '4 social posts + 2 appearances':'4 Social-Media-Beiträge und 2 Auftritte',
    'Live sample metric':'Aktuelle Beispielkennzahl','Rolling 90-day sample':'Beispieldaten der letzten 90 Tage',
    'Performance trend':'Leistungsentwicklung','Media & brand wall':'Medien- und Markenübersicht','Club network':'Vereinsnetzwerk',
    'Transfer visibility':'Transferübersicht','Performance story':'Leistungsbericht','Player focus':'Spieler im Mittelpunkt',
    'contract':'Vertrag','documents':'Dokumente','performance':'Leistungsdaten','tasks':'Aufgaben'
  }));

  const phraseRules = [
    [/^(\d+) represented players$/i, '$1 betreute Spieler'],
    [/^(\d+) players$/i, '$1 Spieler'],
    [/^(\d+) files$/i, '$1 Dateien'],
    [/^(\d+) offer in review$/i, '$1 Angebot in Prüfung'],
    [/^(\d+)% probability$/i, '$1 % Wahrscheinlichkeit'],
    [/^due (.+)$/i, 'fällig am $1'],
    [/^Until (.+)$/i, 'Bis $1'],
    [/^Return to team training in (\d+) days\.?$/i, 'Rückkehr ins Mannschaftstraining in $1 Tagen.'],
    [/^No restriction\. Monitor sprint volume\.?$/i, 'Keine Einschränkung. Sprintbelastung beobachten.'],
    [/^All markers normal\.?$/i, 'Alle Werte unauffällig.'],
    [/^€([\d.]+)$/i, '$1 €'],
    [/^€(\d+)\.(\d+)m$/i, '$1,$2 Mio. €'],
    [/^(\d+) Jul$/i, '$1. Juli'],
    [/^(\d+) July$/i, '$1. Juli']
  ];

  const inlineRules = [
    [/\bSECURE PLAYER & MANAGEMENT WORKSPACE\b/gi,'GESCHÜTZTER BEREICH FÜR SPIELER UND VERWALTUNG'],[/\bSECURE PLAYER & VERWALTUNGSBEREICH\b/gi,'GESCHÜTZTER BEREICH FÜR SPIELER UND VERWALTUNG'],[/\bManagement Workspace\b/gi,'Verwaltungsbereich'],[/\bFootball Office\b/gi,'Fußballbüro'],
    [/\bONE OFFICE\b/gi,'EIN BÜRO'],[/\bSECURE PLAYER & MANAGEMENT WORKSPACE\b/gi,'GESCHÜTZTER BEREICH FÜR SPIELER UND VERWALTUNG'],
    [/\bDEAL PROBABILITY\b/gi,'ABSCHLUSSWAHRSCHEINLICHKEIT'],[/\bMARKET VALUE\b/gi,'MARKTWERT'],
    [/\bPlayer Care\b/gi,'Spielerbetreuung'],[/\bBrand\b/gi,'Marke'],[/\bLegal\b/gi,'Recht'],[/\bMedical\b/gi,'Medizin'],
    [/\bdue\b/gi,'fällig am'],[/\bSample-Daten\b/gi,'Beispieldaten'],[/\bSample data\b/gi,'Beispieldaten'],
    [/\bVALUE\b/g,'WERT'],[/\bValue\b/g,'Wert'],[/\bDELIVERABLE\b/g,'LEISTUNG'],[/\bDeliverable\b/g,'Leistung'],[/\bType\b/g,'Kategorie'],[/\bDate\b/g,'Datum']
  ];

  function translateValue(value) {
    if (!value) return value;
    const trimmed = value.trim();
    let translated = exact.get(trimmed);
    if (translated == null) translated = trimmed;
    for (const [pattern, replacement] of phraseRules) translated = translated.replace(pattern, replacement);
    for (const [pattern, replacement] of inlineRules) translated = translated.replace(pattern, replacement);
    return value.replace(trimmed, translated);
  }

  let translating = false;
  function translate(root = document.body) {
    if (!root || translating) return;
    translating = true;
    try {
      document.documentElement.lang = 'de';
      document.title = 'Atlasgames Management — Digitales Fußballbüro';
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = 'Atlasgames Management: digitale Spielerbetreuung, Transfers, Kommunikation und Organisation in einem modernen Fußballbüro.';

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || /^(SCRIPT|STYLE|TEXTAREA|OPTION)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
          return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        const next = translateValue(node.nodeValue);
        if (next !== node.nodeValue) node.nodeValue = next;
      }

      document.querySelectorAll('[placeholder]').forEach(el => {
        const value = el.getAttribute('placeholder');
        const replacements = {
          'Search players, tasks, documents...':'Spieler, Aufgaben und Dokumente suchen …','Search players, tasks, documents…':'Spieler, Aufgaben und Dokumente suchen …',
          'Search players...':'Spieler suchen …','Type a message...':'Nachricht schreiben …','Search...':'Suchen …'
        };
        if (replacements[value]) el.setAttribute('placeholder', replacements[value]);
      });
      document.querySelectorAll('[title]').forEach(el => {
        const value = el.getAttribute('title');
        const replacements = {'Notifications':'Benachrichtigungen','Switch role':'Rolle wechseln','Reset demo':'Demo zurücksetzen','Close':'Schließen'};
        if (replacements[value]) el.setAttribute('title', replacements[value]);
      });
    } finally {
      translating = false;
    }
  }

  document.addEventListener('click', event => {
    const saveButton = event.target.closest('#record-form button:not([type="button"])');
    if (!saveButton) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const form = saveButton.closest('form');
    if (form && form.reportValidity()) form.requestSubmit();
  }, true);

  document.addEventListener('keydown', event => {
    const input = event.target.closest('#global-search');
    if (!input || event.key !== 'Enter') return;
    event.preventDefault();
    const query = input.value.trim().toLowerCase();
    if (!query || typeof db === 'undefined' || typeof ui === 'undefined') return;
    const foundPlayer = db.players.find(item => `${item.name} ${item.club} ${item.position}`.toLowerCase().includes(query));
    if (foundPlayer) { ui.selectedPlayer = foundPlayer.id; ui.playerTab = 'overview'; ui.route = 'players'; render(); toast('Spieler gefunden', foundPlayer.name); return; }
    const foundTask = db.tasks.find(item => item.title.toLowerCase().includes(query));
    if (foundTask) { ui.route = 'tasks'; render(); toast('Aufgabe gefunden', foundTask.title); return; }
    const foundDocument = db.docs.find(item => item.name.toLowerCase().includes(query));
    if (foundDocument) { ui.route = 'documents'; render(); toast('Dokument gefunden', foundDocument.name); return; }
    toast('Kein Ergebnis', 'Bitte einen Spieler, eine Aufgabe oder ein Dokument eingeben.');
  });

  const observer = new MutationObserver(() => requestAnimationFrame(() => translate(document.body)));
  const start = () => { translate(document.body); observer.observe(document.documentElement, {subtree:true, childList:true, characterData:true}); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true}); else start();
})();
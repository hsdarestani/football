import {MEDIA} from './media.js';
export const players=[
 {id:'younes',name:'Younes Ebnoutalib',club:'VfB Stuttgart',position:'Mittelstürmer',number:11,value:'8,0 Mio. €',rating:86,availability:'100 %',image:MEDIA.younes,nation:'Deutschland / Marokko',contract:'30.06.2031'},
 {id:'dickson',name:'Dickson Abiama',club:'1. FC Kaiserslautern',position:'Mittelstürmer',number:17,value:'650 Tsd. €',rating:78,availability:'82 %',image:MEDIA.transfer,nation:'Deutschland / Nigeria',contract:'30.06.2027'},
 {id:'jamie',name:'Jamie Leweling',club:'VfB Stuttgart',position:'Rechtsaußen',number:18,value:'22,0 Mio. €',rating:88,availability:'96 %',image:MEDIA.talent,nation:'Deutschland',contract:'30.06.2029'},
 {id:'luca',name:'Luca Sirch',club:'1. FC Kaiserslautern',position:'Innenverteidiger',number:5,value:'2,2 Mio. €',rating:79,availability:'92 %',image:MEDIA.stadium,nation:'Deutschland',contract:'30.06.2028'},
 {id:'ayoub',name:'Ayoub Chaikhoun',club:'U23 Demo-Team',position:'Offensives Mittelfeld',number:8,value:'500 Tsd. €',rating:75,availability:'98 %',image:MEDIA.firstgoal,nation:'Deutschland / Marokko',contract:'30.06.2029'},
 {id:'aymen',name:'Aymen Barkok',club:'Demo-Profil',position:'Zentrales Mittelfeld',number:10,value:'1,2 Mio. €',rating:80,availability:'89 %',image:MEDIA.portrait,nation:'Deutschland / Marokko',contract:'30.06.2027'}
];
export const publicModules=[
 {id:'public',icon:'players',title:'Öffentlicher Bereich',desc:'Management-Vorstellung, Spielerübersicht, Profile, Bildergalerie, Highlight-Videos, Karriere, Titel, News und Transfers.',points:['Digitale Visitenkarte','Öffentliche Spielerprofile','Bilder & Highlight-Videos','Statistiken & Erfolge']},
 {id:'player',icon:'home',title:'Spielerportal',desc:'Persönlicher Zugang mit Dashboard, Kalender, Chat, Dokumenten, Aufgaben, Reisen, Leistung, Sponsoren und Kontakten.',points:['Persönliches Dashboard','Chat & Push','Kalender und Aufgaben','Dokumente, Visa & Reisen']},
 {id:'admin',icon:'settings',title:'Management & Admin',desc:'Zentrale Verwaltung aller Spieler, Verträge, Dokumente, Notizen, Aufgaben, Kalender, Sponsoren und Rechte.',points:['Spieler-CRM','Fristen & Erinnerungen','Gruppenkommunikation','Rollen & Berechtigungen']},
 {id:'future',icon:'ai',title:'Erweiterte Module',desc:'Digitale Unterschrift, Datenintegrationen, KI-Suche, Cloud-Synchronisation, Videoanalyse, Partnerportal und medizinische Befunde.',points:['KI-Dokumentensuche','Transfermarkt-Integration','Digitale Signaturen','Cloud & Mehrsprachigkeit']}
];
export const modules=[
 {id:'dashboard',icon:'home',title:'Leitstand',group:'Übersicht',desc:'Tagesüberblick, Prioritäten, Fristen und aktuelle Aktivitäten.'},
 {id:'players',icon:'players',title:'Spielerverwaltung',group:'Kernmodule',desc:'Profile, Kontakte, Karriere, Erfolge, interne Notizen und Ansprechpartner.'},
 {id:'communication',icon:'messages',title:'Chat & Kommunikation',group:'Kernmodule',desc:'Einzel- und Gruppenchats mit Management, Spielern und Mitarbeitern.'},
 {id:'calendar',icon:'calendar',title:'Kalender & Termine',group:'Organisation',desc:'Training, Reisen, Besprechungen und direkte Terminbuchung.'},
 {id:'tasks',icon:'tasks',title:'Aufgaben & To-dos',group:'Organisation',desc:'Aufgaben an Spieler oder Mitarbeiter vergeben und verfolgen.'},
 {id:'notifications',icon:'bell',title:'Push-Mitteilungen',group:'Kommunikation',desc:'Gezielte Mitteilungen an einzelne Spieler, Gruppen oder alle Nutzer.'},
 {id:'documents',icon:'docs',title:'Dokumentencenter',group:'Dokumente',desc:'Verträge, Versicherungen, Reisepässe, Visa und persönliche Dateien.'},
 {id:'contracts',icon:'contract',title:'Verträge & Fristen',group:'Dokumente',desc:'Vertragslaufzeiten, Erinnerungen, digitale Unterschriften und Archiv.'},
 {id:'travel',icon:'travel',title:'Flüge, Hotels & Visa',group:'Organisation',desc:'Reiseplanung, Hotelinformationen, Visa und persönliche Logistik.'},
 {id:'medical',icon:'medical',title:'Medizinischer Bereich',group:'Performance',desc:'MRT, Röntgen, Arztberichte, Reha-Status und sensible Unterlagen.'},
 {id:'performance',icon:'performance',title:'Leistung & Statistiken',group:'Performance',desc:'Leistungsdaten, Ratings, Entwicklung und individuell aufbereitete Statistiken.'},
 {id:'video',icon:'video',title:'Videos & Spielanalyse',group:'Performance',desc:'Highlight-Videos, individuelle Clips, Spielanalysen und Uploads.'},
 {id:'transfers',icon:'transfer',title:'Transferübersicht',group:'Business',desc:'Vereinskontakte, Angebote, Verhandlungen und aktueller Status.'},
 {id:'scouting',icon:'scout',title:'Scouting',group:'Business',desc:'Talente, Bewertungen, Beobachtungslisten und Video-Notizen.'},
 {id:'sponsors',icon:'sponsor',title:'Sponsoren & Partner',group:'Business',desc:'Sponsoreninformationen, Leistungen, Kampagnen und Partnerportal.'},
 {id:'roles',icon:'roles',title:'Rollen & Rechte',group:'System',desc:'Sicherer Zugriff für Management, Spieler, Mitarbeiter und Partner.'},
 {id:'ai',icon:'ai',title:'KI-Dokumentensuche',group:'System',desc:'Intelligente Suche in Verträgen, Berichten, Fristen und Dateien.'},
 {id:'integrations',icon:'partner',title:'Daten & Integrationen',group:'System',desc:'Transfermarkt, Statistikdaten, Cloud-Synchronisation und API-Anbindung.'}
];
export const activity=[
 {title:'Vertragsnachtrag bereit',sub:'Younes Ebnoutalib · Dokumentencenter',time:'vor 12 Min.',image:MEDIA.younes},
 {title:'Neue Club-Anfrage',sub:'Dickson Abiama · Transferübersicht',time:'vor 28 Min.',image:MEDIA.transfer},
 {title:'Leistungsbericht hochgeladen',sub:'Jamie Leweling · Spielanalyse',time:'vor 1 Std.',image:MEDIA.talent},
 {title:'Hotel bestätigt',sub:'London-Reise · Spielerbetreuung',time:'vor 2 Std.',image:MEDIA.lifestyle}
];
export const sampleRows={
 documents:[['Arbeitsvertrag 2026–2031','Younes Ebnoutalib','Vertrag','Signiert'],['Medizinischer Bericht Juli','Dickson Abiama','Medizin','Vertraulich'],['Visa-Unterlagen London','Younes Ebnoutalib','Reise','Gültig'],['Sponsoring-Vereinbarung','Jamie Leweling','Sponsoring','In Prüfung']],
 transfers:[['Dickson Abiama','2. Bundesliga Verein','Verhandlung','72 %'],['Jamie Leweling','Premier League Verein','Interesse','42 %'],['Ayoub Chaikhoun','Eredivisie Verein','Analyse','58 %'],['Younes Ebnoutalib','VfB Stuttgart','Abgeschlossen','100 %']],
 medical:[['Dickson Abiama','MRT / Adduktoren','Reha','03.08.2026'],['Luca Sirch','Belastungssteuerung','Einsatzbereit','—'],['Jamie Leweling','Regeneration','Einsatzbereit','—']],
 travel:[['Younes Ebnoutalib','Frankfurt → London','LH 902','The Hoxton'],['Jamie Leweling','Stuttgart → Berlin','ICE 1098','Tagesreise'],['Dickson Abiama','Frankfurt → Düsseldorf','Fahrdienst','Hyatt Regency']]
};

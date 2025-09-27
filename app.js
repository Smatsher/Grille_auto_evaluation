document.getElementById('autoEvalForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 15;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(
    'MINISTÈRE DE L’ENSEIGNEMENT SUPÉRIEUR ET DE LA RECHERCHE SCIENTIFIQUE',
    105,
    y,
    null,
    null,
    'center'
  );
  y += 6;
  doc.text(
    "MINISTÈRE DE L'ÉDUCATION NATIONALE ET DE L’ALPHABÉTISATION",
    105,
    y,
    null,
    null,
    'center'
  );
  y += 6;
  doc.text('MINISTÈRE DES SPORTS', 105, y, null, null, 'center');
  y += 6;
  doc.text('RÉPUBLIQUE DE CÔTE D’IVOIRE', 105, y, null, null, 'center');
  y += 8;
  doc.setLineWidth(0.5);
  doc.line(10, y, 200, y);
  y += 10;
  doc.setFontSize(14);
  doc.text(
    "GRILLE D'AUTO-ÉVALUATION DES PROFESSEUR.E.S STAGIAIRES DU SECONDAIRE",
    105,
    y,
    null,
    null,
    'center'
  );
  y += 6;
  doc.line(10, y, 200, y);
  y += 12;

  const idFields = [
    { name: 'nom_prenoms', label: 'Nom et prénoms' },
    { name: 'matricule', label: 'Matricule' },
    { name: 'discipline', label: 'Discipline enseignée' },
    { name: 'parcours', label: 'Parcours' },
    { name: 'contacts', label: 'Contact(s)' },
    { name: 'date_debut_stage', label: 'Date de début de stage' },
    { name: 'drena', label: 'DRENA' },
    { name: 'apfc', label: 'APFC' },
    { name: 'etablissement', label: 'Établissement' },
    { name: 'classes_tenues', label: 'Classe(s) tenue(s)' },
    { name: 'classe_concernee', label: 'Classe concernée' },
    { name: 'volume_horaire', label: 'Volume horaire hebdomadaire' },
    { name: 'date_auto_eval', label: 'Date de l’auto-évaluation' },
    { name: 'effectif', label: 'Effectif total' },
    { name: 'filles', label: 'Filles' },
    { name: 'garcons', label: 'Garçons' },
    { name: 'presences', label: 'Présences' },
    { name: 'absences', label: 'Absences' },
    { name: 'titre_lecon', label: 'Titre de la leçon' },
    { name: 'titre_seance', label: 'Titre de la séance' },
    { name: 'num_seance', label: 'Numéro de la séance' },
    { name: 'duree_seance', label: 'Durée de la séance' },
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  idFields.forEach((field) => {
    const input = document.querySelector(`[name="${field.name}"]`);
    if (input) {
      let value = input.value;
      if (field.name === 'parcours') {
        value = input.options[input.selectedIndex].text;
      }
      if (!value) value = '_________________';
      doc.text(`${field.label} : ${value}`, 15, y);
      y += 7;
      if (y > 280) {
        doc.addPage();
        y = 15;
      }
    }
  });

  y += 8;
  doc.setFont('helvetica', 'bold');
  doc.text("Grille d'appréciation", 15, y);
  y += 8;
  doc.setFont('helvetica', 'normal');

  const criteria = [
    {
      name: 'critere_1_1',
      label: '1.1 J’ai enseigné un contenu conforme au programme éducatif prescrit.',
    },
    {
      name: 'critere_1_2',
      label: '1.2 J’ai exécuté une séance en conformité avec la progression prescrite.',
    },
    { name: 'critere_1_3', label: '1.3 J’ai maîtrisé le contenu académique enseigné.' },
    { name: 'critere_1_4', label: '1.4 J’ai respecté la démarche de la discipline.' },
    { name: 'critere_1_5', label: '1.5 J’ai aidé les élèves à s’approprier les habiletés visées.' },
    {
      name: 'critere_1_6',
      label:
        '1.6 J’ai utilisé un matériel didactique approprié, incluant les TICE, le cas échéant.',
    },
    { name: 'critere_1_7', label: '1.7 J’ai exécuté un plan de leçon/séance cohérent.' },
    {
      name: 'critere_2_1',
      label:
        '2.1 J’ai utilisé la méthode active en veillant à faire participer autant les garçons et les filles que les élèves à besoins spécifiques.',
    },
    {
      name: 'critere_2_2',
      label:
        '2.2 J’ai utilisé des consignes et questions claires au cours du processus enseignement/apprentissage/évaluation.',
    },
    {
      name: 'critere_2_3',
      label: '2.3 J’ai effectué une évaluation en conformité avec les habiletés visées.',
    },
    {
      name: 'critere_2_4',
      label:
        '2.4 J’ai apprécié et renforcé de manière pertinente les réponses des filles, des garçons et des élèves à besoins spécifiques.',
    },
    { name: 'critere_2_5', label: '2.5 J’ai géré rationnellement le temps imparti à la séance.' },
    {
      name: 'critere_2_6',
      label:
        '2.6 Je me suis déplacé(e) dans toute la classe tout en étant attentif(ve) pendant la séance.',
    },
    {
      name: 'critere_2_7',
      label:
        '2.7 J’ai utilisé une expression orale et/ou une gestuelle et les stratégies qui facilitent les apprentissages.',
    },
    {
      name: 'critere_2_8',
      label:
        '2.8 J’ai vérifié les traces écrites/productions dans le cahier des élèves au cours de la séance.',
    },
    {
      name: 'critere_2_9',
      label:
        '2.9 J’ai utilisé convenablement le matériel didactique et pédagogique, incluant le tableau et les TICE, en veillant à la prise en compte des élèves à besoins spécifiques.',
    },
    {
      name: 'critere_3_1',
      label: '3.1 J’ai rempli correctement les colonnes du cahier de textes.',
    },
    { name: 'critere_3_2', label: '3.2 J’ai renseigné correctement le cahier d’appel.' },
    { name: 'critere_3_3', label: '3.3 J’ai renseigné correctement le registre de notes.' },
    { name: 'critere_4_1', label: '4.1 J’étais correctement habillé(e).' },
    { name: 'critere_4_2', label: '4.2 Je me suis assuré(e) que la classe est propre.' },
    { name: 'critere_4_3', label: '4.3 J’ai eu un comportement respectueux en classe.' },
    { name: 'critere_4_4', label: '4.4 J’ai été ponctuel(le) en classe.' },
    {
      name: 'critere_4_5',
      label:
        '4.5 J’ai entretenu de bonnes relations avec tous les acteurs de la communauté éducative.',
    },
  ];

  criteria.forEach((c) => {
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
    const input = document.querySelector(`[name="${c.name}"]`);
    let val = input ? input.value : '_________________';
    doc.text(`${c.label} : ${val}`, 15, y);
    y += 7;
  });

  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Partie qualitative', 15, y);
  y += 8;
  doc.setFont('helvetica', 'normal');

  const qualitativeFields = [
    { name: 'points_forts', label: 'Points forts' },
    { name: 'points_ameliorer', label: 'Points à améliorer' },
    { name: 'engagements', label: 'Pour m’améliorer, je m’engage à :' },
    { name: 'lieu', label: 'Fait à' },
    { name: 'date_signature', label: 'Le' },
    { name: 'signature', label: 'Signature' },
  ];

  qualitativeFields.forEach((f) => {
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
    const input = document.querySelector(`[name="${f.name}"]`);
    let val = input ? input.value : '_________________';
    doc.text(`${f.label} : ${val}`, 15, y);
    y += 14;
  });

  // Save filename with current date
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  doc.save(`auto-evaluation-${dateStr}.pdf`);
});

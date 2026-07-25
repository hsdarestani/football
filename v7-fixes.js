/* Atlasgames V7 production interaction fixes */
(() => {
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

    const player = db.players.find(item => `${item.name} ${item.club} ${item.position}`.toLowerCase().includes(query));
    if (player) {
      ui.selectedPlayer = player.id;
      ui.playerTab = 'overview';
      ui.route = 'players';
      render();
      toast('Player found', player.name);
      return;
    }

    const task = db.tasks.find(item => item.title.toLowerCase().includes(query));
    if (task) {
      ui.route = 'tasks';
      render();
      toast('Task found', task.title);
      return;
    }

    const doc = db.docs.find(item => item.name.toLowerCase().includes(query));
    if (doc) {
      ui.route = 'documents';
      render();
      toast('Document found', doc.name);
      return;
    }

    toast('No result', 'Try a player, task or document name.');
  });
})();

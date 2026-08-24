const catalog = window.PRODUCT_CATALOG || [];
const grid = document.querySelector('#product-grid');
const search = document.querySelector('#catalog-search');
const filters = document.querySelector('#lane-filters');
const count = document.querySelector('#catalog-count');
const dialog = document.querySelector('#product-dialog');
const dialogContent = document.querySelector('#dialog-content');
const closeDialog = document.querySelector('#close-dialog');
let activeLane = 'All systems';

const toneByLane = {
  'AI agent governance': 'violet',
  'Governance & assurance': 'blue',
  'Finance & revenue': 'amber',
  'Service operations': 'rose',
  'Field & facilities': 'green',
  'Data & knowledge': 'cyan',
  'Operations systems': 'indigo',
};

const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));

function miniPreview(item) {
  const nodes = item.fields.slice(0, 4).map((field, index) => `<span class="mini-node n${index + 1}"><i>${String(index + 1).padStart(2, '0')}</i>${escapeHtml(field)}</span>`).join('');
  const evidence = item.resolutionFields?.[0] || 'Evidence required before closeout';
  return `<div class="mini-preview motif-${item.motif}" aria-hidden="true"><div class="mini-bar"><span></span><span></span><span></span></div><div class="mini-title">${escapeHtml(item.recordLabel || item.name)}</div><div class="mini-flow">${nodes}</div><div class="mini-evidence"><i></i> Closeout: ${escapeHtml(evidence)}</div></div>`;
}

function renderCatalog() {
  const term = search.value.trim().toLowerCase();
  const visible = catalog.filter((item) => {
    const matchesLane = activeLane === 'All systems' || item.lane === activeLane;
    const matchesTerm = !term || [item.name, item.lane, ...item.fields].join(' ').toLowerCase().includes(term);
    return matchesLane && matchesTerm;
  });
  count.textContent = `${visible.length} of ${catalog.length} visual product previews`;
  grid.innerHTML = visible.map((item) => `<button class="product-card tone-${toneByLane[item.lane] || 'indigo'}${item.featured ? ' featured' : ''}" type="button" data-product-id="${item.id}"><div class="card-top"><span>${escapeHtml(item.id.replace('p', '#'))}</span><span>${escapeHtml(item.status)}</span></div>${miniPreview(item)}<div class="card-copy"><p>${escapeHtml(item.lane)}</p><h2>${escapeHtml(item.name)}</h2><small>${escapeHtml(item.outcome || 'Accountable local workflow')}</small><span>Open visual workflow preview <b>↗</b></span></div></button>`).join('');
}

function renderFilters() {
  const lanes = ['All systems', ...new Set(catalog.map((item) => item.lane))];
  filters.innerHTML = lanes.map((lane) => `<button class="lane-filter${lane === activeLane ? ' active' : ''}" type="button" data-lane="${escapeHtml(lane)}">${escapeHtml(lane)}</button>`).join('');
}

function detailPreview(item) {
  const fields = item.fields.map((field, index) => `<div class="detail-field"><span>${String(index + 1).padStart(2, '0')}</span><div><b>${escapeHtml(field)}</b><small>Persisted local workflow field</small></div></div>`).join('');
  const evidence = item.resolutionFields?.join(' · ') || 'Recorded evidence';
  return `<section class="detail-preview tone-${toneByLane[item.lane] || 'indigo'}"><div class="preview-header"><div><span>ACTUAL WORKFLOW METADATA VIEW</span><h3>${escapeHtml(item.recordLabel || item.name)}</h3></div><em>${escapeHtml(item.status)}</em></div><div class="preview-layout"><div class="preview-rail"><span>${escapeHtml(item.sourceLabel || 'SOURCE')}</span><span>REVIEW</span><span>${escapeHtml(item.resolveLabel || 'OUTCOME')}</span></div><div class="preview-work"><div class="preview-metric"><span>${escapeHtml(item.recordLabel || 'ACTIVE RECORD').toUpperCase()}</span><b>01</b><small>Independent local persistent workflow</small></div><div class="detail-fields">${fields}</div><div class="resolution-row"><span>${escapeHtml(item.resolveLabel || 'Evidence-gated closeout')}</span><b>${escapeHtml(evidence)}</b></div></div></div></section>`;
}

function openProduct(id) {
  const item = catalog.find((candidate) => candidate.id === id);
  if (!item) return;
  const summary = item.pitch || 'This visual preview represents the product’s independent local workflow: it captures product-specific information, retains an accountable owner, and requires recorded evidence before resolution.';
  dialogContent.innerHTML = `<div class="detail-meta"><span>${escapeHtml(item.id.replace('p', '#'))} / ${escapeHtml(item.lane)}</span><span>${escapeHtml(item.status)}</span></div><p class="eyebrow">SOURCE-SAFE PRODUCT VIEW</p><h2 id="dialog-title">${escapeHtml(item.name)}</h2><p class="detail-lede">${escapeHtml(summary)}</p><div class="product-fit"><span><b>Designed for</b>${escapeHtml(item.buyer || 'Engineering or security leader')}</span><span><b>Intended outcome</b>${escapeHtml(item.outcome || 'Accountable agent action control')}</span></div>${detailPreview(item)}<div class="detail-boundary"><b>What visitors can inspect</b><span>Actual product metadata, persisted workflow fields, control sequence, and activation boundary.</span><b>What remains private</b><span>Repository source, local database, test accounts, environment values, and external integrations.</span></div>`;
  dialog.showModal();
}

filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-lane]');
  if (!button) return;
  activeLane = button.dataset.lane;
  renderFilters();
  renderCatalog();
});

grid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-product-id]');
  if (card) openProduct(card.dataset.productId);
});

search.addEventListener('input', renderCatalog);
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
renderFilters();
renderCatalog();

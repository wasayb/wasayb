const user = 'wasayb';
const api = `https://api.github.com/users/${user}`;

const number = value => new Intl.NumberFormat('en', { notation: value > 999 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(value || 0);
const escapeHtml = value => String(value || '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[character]));

async function loadProfile() {
  const [profileResponse, repositoryResponse] = await Promise.all([
    fetch(api),
    fetch(`${api}/repos?per_page=100&sort=updated`),
  ]);
  if (!profileResponse.ok || !repositoryResponse.ok) throw new Error('Public GitHub signal is unavailable right now.');
  const profile = await profileResponse.json();
  const repositories = await repositoryResponse.json();
  document.getElementById('repo-count').textContent = number(profile.public_repos);
  document.getElementById('follower-count').textContent = number(profile.followers);
  document.getElementById('updated-at').textContent = `PUBLIC SIGNAL / ${new Date().toLocaleDateString(undefined, { month: 'short', year: 'numeric' }).toUpperCase()}`;
  renderRepositories(repositories);
}

function renderRepositories(repositories) {
  const target = document.getElementById('repo-list');
  const selected = repositories
    .filter(repository => !repository.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 6);
  target.innerHTML = selected.length ? selected.map(repository => `
    <a class="repo-item" href="${escapeHtml(repository.html_url)}" target="_blank" rel="noreferrer">
      <div class="repo-top"><span class="repo-name">${escapeHtml(repository.name)}</span><span class="repo-lang">${escapeHtml(repository.language || 'SOURCE')}</span></div>
      <p>${escapeHtml(repository.description || 'Public repository in the @wasayb index.')}</p>
      <div class="repo-meta"><span>★ ${number(repository.stargazers_count)}</span><span>FORKS ${number(repository.forks_count)}</span></div>
    </a>`).join('') : '<p class="loading">No public repositories available.</p>';
}

loadProfile().catch(() => {
  document.getElementById('repo-list').innerHTML = '<p class="loading">Public repository signal is temporarily unavailable. Visit the GitHub profile directly.</p>';
  document.getElementById('updated-at').textContent = 'PUBLIC SIGNAL / OFFLINE';
});

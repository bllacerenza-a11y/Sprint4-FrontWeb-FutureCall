const TOPICS = ['Função afim', 'HTML', 'Inteligência artificial'];

export async function fetchStudyTopics() {
  const titles = TOPICS.join('|');
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    prop: 'extracts|info',
    exintro: '1',
    explaintext: '1',
    inprop: 'url',
    titles,
    origin: '*',
  });

  const response = await fetch(`https://pt.wikipedia.org/w/api.php?${params}`);

  if (!response.ok) {
    throw new Error('Não foi possível carregar os conteúdos de estudo.');
  }

  const data = await response.json();

  function cleanExtract(extract = '') {
    return extract
      .replace(/\{\\displaystyle\s*([^}]*)\}/g, '$1')
      .replace(/\\[a-zA-Z]+/g, '')
      .replace(/[{}]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return Object.values(data.query.pages)
    .map((page) => ({
      id: page.pageid,
      title: page.title,
      extract: cleanExtract(page.extract),
      url: page.fullurl,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

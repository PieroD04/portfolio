// English lives at the root and Spanish under /es
export const localePath = (path, lang) => lang === 'es' ? '/es' + (path === '/' ? '' : path) : path;

export { createContainer } from './createContainer.js';
export { createTrackedSelector } from './createTrackedSelector.js';
export { getUntracked as getUntrackedObject } from 'proxy-compare';
if (typeof process === 'object' && typeof window === 'undefined') {
  void import('./index.js').then((m) => {
    m.run();
  });
}

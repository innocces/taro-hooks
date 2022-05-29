/**
 * @description generate deps by framework
 */
import type { SandpackPredefinedTemplate } from '@codesandbox/sandpack-react';
/**
 * @param {SandpackPredefinedTemplate} framework
 */
export default function getDeps(framework: SandpackPredefinedTemplate) {
  // only deal react & vue, default react
  framework = framework ?? 'react';
  const a = 1;
}

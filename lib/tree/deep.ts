import Node from './node';

export function deep(node: Node | null): number {
  if (!node) return 0;

  return Math.max(deep(node.left), deep(node.right)) + 1;
}

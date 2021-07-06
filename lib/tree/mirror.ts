import Node from './node';

export function mirror(node: Node | null): Node | null {
  if (!node) return null;

  const left = mirror(node.left);
  const right = mirror(node.right);
  node.left = right;
  node.right = left;

  return node;
}

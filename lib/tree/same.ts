import Node from './node';

export function same(node1: Node | null, node2: Node | null): boolean {
  if ((node1 === null && node2 !== null) || (node1 !== null && node2 === null)) {
    return false;
  }

  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1?.value !== node2?.value) {
    return false
  } else {
    return same(node1!.left, node2!.left) && same(node1!.right, node2!.right);
  }
}

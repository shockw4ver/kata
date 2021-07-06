import Node from './node';

export enum EVisitType {
  Pre,
  In,
  Post
}

export function visitTree(node: Node, type: EVisitType, handler?: (value: number) => void) {
  if (type === EVisitType.Pre) {
    handler && handler(node.value);
  }

  node.left && visitTree(node.left, type, handler);

  if (type === EVisitType.In) {
    handler && handler(node.value);
  }

  node.right && visitTree(node.right, type, handler);

  if (type === EVisitType.Post) {
    handler && handler(node.value);
  }
}

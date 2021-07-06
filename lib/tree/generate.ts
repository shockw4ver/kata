import Node from './node';

const tree6 = new Node(9, null, null);
const tree5 = new Node(6, null, null);
const tree4 = new Node(3, null, null);
const tree3 = new Node(1, null, null);
const tree2 = new Node(7, tree5, tree6);
const tree1 = new Node(2, tree3, tree4);
const treeA = new Node(4, tree1, tree2);

const _tree2 = new Node(2, tree4, tree3);
const _tree1 = new Node(7, tree6, tree5);
const _treeA = new Node(4, _tree1, _tree2);

export {
  treeA,
  _treeA
}

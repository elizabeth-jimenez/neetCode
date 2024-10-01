maxDepth(root) {
    if(root === null) return 0;

    var leftDepth = this.maxDepth(root.left);
    var rightDepth = this.maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}
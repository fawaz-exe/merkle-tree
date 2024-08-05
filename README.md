# merkle-tree

> The tree hashes its leaf node from bottom up till it reaches parent.

![Merkle Tree Representation](https://upload.wikimedia.org/wikipedia/commons/9/95/Hash_Tree.svg)

(https://en.wikipedia.org/wiki/Merkle_tree)

Merkle Root = H(H(v1||v2) || H(v3||v4))

                        |
         /------------------------------\
        /                                \
   H(v1||v2)                         H(v3||v4)
     /   \                             /   \
    /     \                           /     \
   v1     v2                         v3     v4

![Bitcoin Merkel Tree:](https://github.com/fawaz-exe/merkle-tree/blob/5635d64ef4c24dc8efd4f499be73610e35c3702f/utils/Bitcoin_whitepaper_merkel_tree.png)


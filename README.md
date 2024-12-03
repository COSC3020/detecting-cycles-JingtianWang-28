# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

///

When traversing the graph in union, each edge is called once. Find needs to determine whether two nodes are in the same set. The complexity depends on the number of edges E

Find connects all nodes on the path to the root node each time it visits. The time complexity is O(V)

Union merges two sets and calls find to determine whether the root nodes of the two nodes are the same. The time complexity of a single union is O(α(V))

α is the extremely slowly growing inverse Ackermann function and less than log(v).

The total time complexity is theta(Eα(V))

###
https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
https://en.wikipedia.org/wiki/Ackermann_function#Inverse
https://blog.csdn.net/Floatiy/article/details/79424763

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice

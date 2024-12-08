module.exports = hasCycle;
function hasCycle(graph) {
    const parent = {};
    
    function find(node) {
        if (!(node in parent)) {
            parent[node] = node; 
        }
        if (parent[node] !== node) {
            parent[node] = find(parent[node]); 
        }
        return parent[node];
    }

    function union(node1, node2) {
        const root1 = find(node1);
        const root2 = find(node2);
        if (root1 === root2) {
            return true; 
        }
        parent[root1] = root2; 
        return false;
    }

    for (const [node1, node2] of graph.edges) {
        if (union(node1, node2)) {
            return true; 
        }
    }

    return false; 
}

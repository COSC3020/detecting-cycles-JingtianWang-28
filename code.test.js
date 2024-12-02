
const assert = require('assert');
const hasCycle = require('./code.js'); 
const testCases = [
    {
        description: 'Graph with a single cycle',
        input: { edges: [[0, 1], [1, 2], [2, 0]] },
        expected: true
    },
    {
        description: 'Graph without a cycle',
        input: { edges: [[0, 1], [1, 2], [2, 3]] },
        expected: false
    },
    {
        description: 'Empty graph',
        input: { edges: [] },
        expected: false
    },
    {
        description: 'Graph with disconnected components (no cycles)',
        input: { edges: [[0, 1], [2, 3]] },
        expected: false
    },
    {
        description: 'Graph with multiple disconnected components, one with a cycle',
        input: { edges: [[0, 1], [1, 2], [2, 0], [3, 4]] },
        expected: true
    },
    {
        description: 'Graph with a self-loop (cycle)',
        input: { edges: [[0, 0]] },
        expected: true
    }
];


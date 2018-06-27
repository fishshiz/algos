class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(src, dest) {
    this.adjList.get(src).push(dest);
    this.adjList.get(dest).push(src);
  }

  bfs(node) {
    const visited = [];
    for (let i = 0; i < this.vertices.length; i++) {
      visited[i] = false;

      let queue = [];
      visited[node] = true;

      queue.unshift(node);
      while (queue.length > 0) {
        let el = queue.pop();
        console.log(el);
        let list = this.adjList.get(el);

        for (i in list) {
          let neighbor = list[i];

          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.shift(neighbor);
          }
        }
      }
    }
  }

  dfs(node) {
    const visited = [];
    for (let i = 0; i < this.vertices; i++) {
      visited[i] = false;

      this.DFSUtil(node, visited);
    }
  }

  DFSUtil(vert, visited) {
    visited[vert] = true;

    console.log(vert);

    let neighbors = this.adjList.get(vert);

    for (let i in neighbors) {
      let el = neighbors[i];
      if (!visited[el]) {
        this.DFSUtil(el, visited);
      }
    }
  }
}

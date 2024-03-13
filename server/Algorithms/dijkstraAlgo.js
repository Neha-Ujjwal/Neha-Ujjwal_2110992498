const arr = require("./Graph/AdjacenyMatrix.js");
function shortestPathDijkstra(s, d) {
  const count = arr.length;
  const vis = new Array(count).fill(false);
  const dis = new Array(count).fill(Infinity);

  dis[s] = 0;

  for (let i = 0; i < count - 1; i++) {
    const u = findMinDistanceVertex(dis, vis);
    vis[u] = true;

    for (let v = 0; v < count; v++) {
      if (!vis[v] && arr[u][v] !== 0 && dis[u] + arr[u][v] < dis[v]) {
        dis[v] = dis[u] + arr[u][v];
      }
    }
  }

  return dis[d];
}

function findMinDistanceVertex(dis, vis) {
  let minn = Infinity;
  let minnVer = -1;
  for (let i = 0; i < dis.length; i++) {
    if (!vis[i] && dis[i] < minn) {
      minn = dis[i];
      minnVer = i;
    }
  }
  return minnVer;
}

module.exports = shortestPathDijkstra;

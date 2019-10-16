<template>
  <div id="page">
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
        <p slot="title" style="text-align:left ">个人信息</p>
        <div class="info">
          <div>
            <label>名字：</label>
            {{JSON.parse(this.$route.query.data).label}}
          </div>
          <div>
            <label>身份：</label>
            {{JSON.parse(this.$route.query.data).lv}}
          </div>
          <div>
            <label>邮箱：</label>123456@qq.com
          </div>
          <div>
            <label>主要项目：</label>xx国家基金项目、xxxx省基金项目
          </div>
        </div>
      </Card>
    </div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
        <p slot="title" style="text-align:left ">TreeGraph</p>
        <div id="tree"></div>
      </Card>
    </div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {};
  },
  mounted() {
    
    this.initG6(JSON.parse(this.$route.query.data), "tree");
  },
  methods: {
    initG6(data, name) {
      const graph = new G6.TreeGraph({
        container: name,
        width: 700,
        height: 500,
        center: [1000, 100],

        modes: {
          default: [
            {
              type: "collapse-expand"
            },
            "drag-canvas",
            "zoom-canvas"
          ]
        },
        layout: {
          type: "dendrogram",
          direction: "LR",
          nodeSep: 50,
          rankSep: 150
        },
        defaultNode: {
          size: 10,
          anchorPoints: [[0, 0.5], [1, 0.5]],
          style: {
            fill: "#40a9ff",
            stroke: "#096dd9"
          }
        },
        defaultEdge: {
          shape: "cubic-horizontal",
          style: {
            stroke: "#A3B1BF"
          }
        }
      });
      graph.node(function(node) {
        return {
          size: 20,
          style: {
            fill: "#40a9ff",
            stroke: "#096dd9"
          },
          label: node.name,
          labelCfg: {
            style: {
              fontSize: 16
            },
            position:
              node.children && node.children.length > 0 ? "left" : "right"
          }
        };
      });
      graph.edge(function(edge) {
        return {
          shape: "cubic-horizontal",
          color: "#A3B1BF"
          // label: edge.target._cfg.model.name
        };
      });

      graph.data(data);
      graph.render();
      graph.fitView();
    }
  }
};
</script>

<style scoped>
#tree {
  width: 100%;
  font-family: "Microsoft YaHei";
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.info div {
  padding: 4px;
}
.info label {
  font-weight: 600;
}
</style>
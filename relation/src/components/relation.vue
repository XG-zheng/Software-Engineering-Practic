<template>
  <div id="tree-box">
    
  </div>
</template>
<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  mounted(){
    let fa=document.getElementById("tree-box");

    let data=JSON.parse(this.$route.query.data);
    for(var i=0;i<data.length;++i){
      var container=document.createElement("div");
      container.style.width="1000px";
      container.style.height="800px"; 
      var box=document.createElement("div");
      box.id="tree"+i
      container.appendChild(box)
      fa.appendChild(container)
      this.initG6(data[i],"tree"+i);
    }
  },
  methods: {
    initG6(data,name) {
      const graph = new G6.TreeGraph({
        container: name,
        width:800,
        height:700,
        center:[1000,100],
       
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
          type:"dendrogram",
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
      graph.on("node:contextmenu", ev => {
        let name=ev.item._cfg.model.label;
        if(name.indexOf("博士生")!=-1)return;
        if(name.indexOf("硕士生")!=-1)return;
        if(name.indexOf("本科生")!=-1)return;
        this.$router.push({
          path:'info',
          query:{
            data:JSON.stringify(ev.item._cfg.model)
          }
        })
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
</style>
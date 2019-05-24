<template>
  <div class="about">
    <canvas id="canvas" width="800" height="400"></canvas>
  </div>
</template>
<style scoped>
.about {
  height: 100%;
}
#canvas {
  border: 1px solid #000;
}
</style>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  mounted() {
    var canvas = new fabric.Canvas("canvas");

    canvas.on("mouse:over", function(options) {
      // console.log(options.e.clientX, options.e.clientY);
      console.log(options);
      if (options.target) {
        options.target.set("fill", "green");
        canvas.renderAll();
      }
    });

    canvas.on("mouse:out", function(options) {
      // console.log(options.e.clientX, options.e.clientY);
      console.log(options);
      if (options.target) {
        options.target.set("fill", "red");
        canvas.renderAll();
      }
    });

    // create a rectangle object
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
      selectable: false,
      // hasControls: false
      hoverCursor: 'default'
    });
    rect.on("move", function(option) {
      console.log(option);
    });
    canvas.add(rect);

    // rect.set({ left: 20, top: 50 });
    // canvas.renderAll();
  }
};
</script>



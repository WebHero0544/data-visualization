<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 100%;
}
</style>

<script>
import L from "leaflet";
import Konva from 'konva';

L.BaseLayer = L.Path.extend({
  options: {
    renderer: L.canvas(),
    datas: []
  },

  // Initialization of the plugin
  initialize: function(options) {
    L.setOptions(this, options);
  },

  // Called when the plugin layer is added to the map
  onAdd: function(map) {
    this.renderer();
    // Set up events
    map.on({ moveend: this.renderer }, this);
  },

  // Called when the plugin layer is removed from the map
  onRemove: function(map) {
    map.removeLayer(this._renderer);
    // Remove events
    map.off({ moveend: this.renderer }, this);
  },

  // Update the container - Updates the dimensions of the svg pane
  renderer: function() {
    var self = this;
    var ctx = this._renderer._container.getContext("2d");

    ctx.clearRect(
      0,
      0,
      this._renderer._container.width,
      this._renderer._container.height
    );

    ctx.strokeStyle = "rgb(0, 176, 80)";

    this.options.datas.forEach(function(item) {
      ctx.beginPath();
      item.forEach(function(el, index) {
        var p = self.getCoords([el.lat, el.lon]);
        if (index === 0) {
          ctx.moveTo(p.x, p.y);
        } else {
          ctx.lineTo(p.x, p.y);
        }
      });
      ctx.stroke();
    });
  },
  // Calculate the coordinates for the provided data
  getCoords: function(latlng) {
    var point = this._map.latLngToLayerPoint(latlng);

    return { x: point.x, y: point.y };
  }
});
L.baseLayer = function(options) {
  return new L.BaseLayer(options);
};




export default {
  name: 'home',
  mounted() {
    this.initMap();
    const baseLayer = L.baseLayer({ datas: this.getDatas() }).addTo(this.map);
    console.log(baseLayer);
  },
  methods: {
    // 初始化地图
    initMap() {
      this.map = L.map("map", {
        center: [37.17782559332976, 107.314453125],
        zoom: 5,
        minZoom: 4,
        maxZoom: 13,
        attributionControl: false,
        zoomControl: false
      });

      // 国家瓦片图边界
      L.tileLayer(
        "/MapCache/googleMap/gis/world/Map_x={x}y={y}zoom={z}.png"
      ).addTo(this.map);
      // 省边界
      L.tileLayer(
        "/MapCache/googleMap/gis/province_l/Map_x={x}y={y}zoom={z}.png",
        { zIndex: 350 }
      ).addTo(this.map);
      // 省会名称
      L.tileLayer(
        "/MapCache/googleMap/gis/provincial_capital/Map_x={x}y={y}zoom={z}.png",
        { zIndex: 350 }
      ).addTo(this.map);
      // 河流
      L.tileLayer("/MapCache/googleMap/gis/river/Map_x={x}y={y}zoom={z}.png", {
        zIndex: 350
      }).addTo(this.map);
    },
    getDatas() {
      return [
        [
          {
            lon: 53.85,
            lat: -21.32
          },
          {
            lon: 53.37,
            lat: -21.72
          },
          {
            lon: 54.41,
            lat: -26.16
          },
          {
            lon: 53.37,
            lat: -28.29
          },
          {
            lon: 49.01,
            lat: -27.77
          },
          {
            lon: 48.94,
            lat: -28.67
          },
          {
            lon: 55.86,
            lat: -30.51
          },
          {
            lon: 56.35,
            lat: -30.32
          },
          {
            lon: 57.18,
            lat: -26.55
          },
          {
            lon: 56.42,
            lat: -22.57
          },
          {
            lon: 53.85,
            lat: -21.32
          }
        ],
        [
          {
            lon: 413.85,
            lat: -21.32
          },
          {
            lon: 413.37,
            lat: -21.72
          },
          {
            lon: 414.40999999999997,
            lat: -26.16
          },
          {
            lon: 413.37,
            lat: -28.29
          },
          {
            lon: 409.01,
            lat: -27.77
          },
          {
            lon: 408.94,
            lat: -28.67
          },
          {
            lon: 415.86,
            lat: -30.51
          },
          {
            lon: 416.35,
            lat: -30.32
          },
          {
            lon: 417.18,
            lat: -26.55
          },
          {
            lon: 416.42,
            lat: -22.57
          },
          {
            lon: 413.85,
            lat: -21.32
          }
        ],
        [
          {
            lon: 63.77,
            lat: -5.01
          },
          {
            lon: 60.37,
            lat: -7.42
          },
          {
            lon: 55.66,
            lat: -7.42
          },
          {
            lon: 55.18,
            lat: -9.21
          },
          {
            lon: 63.42,
            lat: -9.49
          },
          {
            lon: 68.2,
            lat: -10.86
          },
          {
            lon: 68.4,
            lat: -9.83
          },
          {
            lon: 68.4,
            lat: -9.62
          },
          {
            lon: 67.78,
            lat: -8.53
          },
          {
            lon: 66.4,
            lat: -7.84
          },
          {
            lon: 64.6,
            lat: -4.87
          },
          {
            lon: 63.77,
            lat: -5.01
          }
        ],
        [
          {
            lon: 423.77,
            lat: -5.01
          },
          {
            lon: 420.37,
            lat: -7.42
          },
          {
            lon: 415.65999999999997,
            lat: -7.42
          },
          {
            lon: 415.18,
            lat: -9.21
          },
          {
            lon: 423.42,
            lat: -9.49
          },
          {
            lon: 428.2,
            lat: -10.86
          },
          {
            lon: 428.4,
            lat: -9.83
          },
          {
            lon: 428.4,
            lat: -9.62
          },
          {
            lon: 427.78,
            lat: -8.53
          },
          {
            lon: 426.4,
            lat: -7.84
          },
          {
            lon: 424.6,
            lat: -4.87
          },
          {
            lon: 423.77,
            lat: -5.01
          }
        ],
        [
          {
            lon: 89.05,
            lat: -5.63
          },
          {
            lon: 85.17,
            lat: -5.43
          },
          {
            lon: 81.98,
            lat: -5.29
          },
          {
            lon: 81.36,
            lat: -6.39
          },
          {
            lon: 85.65,
            lat: -6.95
          },
          {
            lon: 90.57,
            lat: -7.57
          },
          {
            lon: 92.65,
            lat: -5.91
          },
          {
            lon: 92.16,
            lat: -4.74
          },
          {
            lon: 90.92,
            lat: -5.22
          },
          {
            lon: 89.05,
            lat: -5.63
          }
        ],
        [
          {
            lon: 449.05,
            lat: -5.63
          },
          {
            lon: 445.17,
            lat: -5.43
          },
          {
            lon: 441.98,
            lat: -5.29
          },
          {
            lon: 441.36,
            lat: -6.39
          },
          {
            lon: 445.65,
            lat: -6.95
          },
          {
            lon: 450.57,
            lat: -7.57
          },
          {
            lon: 452.65,
            lat: -5.91
          },
          {
            lon: 452.15999999999997,
            lat: -4.74
          },
          {
            lon: 450.92,
            lat: -5.22
          },
          {
            lon: 449.05,
            lat: -5.63
          }
        ],
        [
          {
            lon: 87.67,
            lat: -25
          },
          {
            lon: 85.17,
            lat: -24.48
          },
          {
            lon: 86.21,
            lat: -27.33
          },
          {
            lon: 87.39,
            lat: -29.18
          },
          {
            lon: 87.67,
            lat: -31.51
          },
          {
            lon: 86.21,
            lat: -33.32
          },
          {
            lon: 86.28,
            lat: -34.55
          },
          {
            lon: 90.43,
            lat: -30.32
          },
          {
            lon: 88.84,
            lat: -25.97
          },
          {
            lon: 87.67,
            lat: -25
          }
        ],
        [
          {
            lon: 447.67,
            lat: -25
          },
          {
            lon: 445.17,
            lat: -24.48
          },
          {
            lon: 446.21,
            lat: -27.33
          },
          {
            lon: 447.39,
            lat: -29.18
          },
          {
            lon: 447.67,
            lat: -31.51
          },
          {
            lon: 446.21,
            lat: -33.32
          },
          {
            lon: 446.28,
            lat: -34.55
          },
          {
            lon: 450.43,
            lat: -30.32
          },
          {
            lon: 448.84000000000003,
            lat: -25.97
          },
          {
            lon: 447.67,
            lat: -25
          }
        ],
        [
          {
            lon: 103.07,
            lat: 0.5
          },
          {
            lon: 102.36,
            lat: 1.1
          },
          {
            lon: 101.36,
            lat: 1.16
          },
          {
            lon: 101.36,
            lat: -0.17
          },
          {
            lon: 101.58,
            lat: -2.21
          },
          {
            lon: 103.35,
            lat: -4.58
          },
          {
            lon: 105.78,
            lat: -6.56
          },
          {
            lon: 106.28,
            lat: -6.94
          },
          {
            lon: 108.26,
            lat: -7.05
          },
          {
            lon: 107.43,
            lat: -5.62
          },
          {
            lon: 106.5,
            lat: -4.63
          },
          {
            lon: 103.46,
            lat: 0.06
          },
          {
            lon: 103.07,
            lat: 0.5
          }
        ],
        [
          {
            lon: 463.07,
            lat: 0.5
          },
          {
            lon: 462.36,
            lat: 1.1
          },
          {
            lon: 461.36,
            lat: 1.16
          },
          {
            lon: 461.36,
            lat: -0.17
          },
          {
            lon: 461.58,
            lat: -2.21
          },
          {
            lon: 463.35,
            lat: -4.58
          },
          {
            lon: 465.78,
            lat: -6.56
          },
          {
            lon: 466.28,
            lat: -6.94
          },
          {
            lon: 468.26,
            lat: -7.05
          },
          {
            lon: 467.43,
            lat: -5.62
          },
          {
            lon: 466.5,
            lat: -4.63
          },
          {
            lon: 463.46,
            lat: 0.06
          },
          {
            lon: 463.07,
            lat: 0.5
          }
        ],
        [
          {
            lon: 116.21,
            lat: 5.73
          },
          {
            lon: 115.83,
            lat: 5.57
          },
          {
            lon: 112.29,
            lat: 1.21
          },
          {
            lon: 111.52,
            lat: -0.11
          },
          {
            lon: 111.74,
            lat: -0.44
          },
          {
            lon: 112.07,
            lat: -0.66
          },
          {
            lon: 115.6,
            lat: -3.59
          },
          {
            lon: 116.1,
            lat: -3.31
          },
          {
            lon: 116.49,
            lat: -1.44
          },
          {
            lon: 117.87,
            lat: 0.88
          },
          {
            lon: 117.81,
            lat: 4.14
          },
          {
            lon: 117.65,
            lat: 5.68
          },
          {
            lon: 116.21,
            lat: 5.73
          }
        ],
        [
          {
            lon: 476.21,
            lat: 5.73
          },
          {
            lon: 475.83,
            lat: 5.57
          },
          {
            lon: 472.29,
            lat: 1.21
          },
          {
            lon: 471.52,
            lat: -0.11
          },
          {
            lon: 471.74,
            lat: -0.44
          },
          {
            lon: 472.07,
            lat: -0.66
          },
          {
            lon: 475.6,
            lat: -3.59
          },
          {
            lon: 476.1,
            lat: -3.31
          },
          {
            lon: 476.49,
            lat: -1.44
          },
          {
            lon: 477.87,
            lat: 0.88
          },
          {
            lon: 477.81,
            lat: 4.14
          },
          {
            lon: 477.65,
            lat: 5.68
          },
          {
            lon: 476.21,
            lat: 5.73
          }
        ],
        [
          {
            lon: 103.46,
            lat: 0.06
          },
          {
            lon: 104.23,
            lat: 2.44
          },
          {
            lon: 102.24,
            lat: 6.13
          },
          {
            lon: 101.96,
            lat: 6.29
          },
          {
            lon: 101.74,
            lat: 6.46
          },
          {
            lon: 101.3,
            lat: 6.84
          },
          {
            lon: 100.92,
            lat: 7.12
          },
          {
            lon: 100.58,
            lat: 7.28
          },
          {
            lon: 99.15,
            lat: 9.65
          },
          {
            lon: 98.32,
            lat: 10.57
          },
          {
            lon: 98.16,
            lat: 10.41
          },
          {
            lon: 97.94,
            lat: 9.8
          },
          {
            lon: 98.38,
            lat: 8.87
          },
          {
            lon: 99.32,
            lat: 7.56
          },
          {
            lon: 101.25,
            lat: 3.32
          },
          {
            lon: 100.42,
            lat: 3.15
          },
          {
            lon: 97.27,
            lat: 5.85
          },
          {
            lon: 95.34,
            lat: 5.63
          },
          {
            lon: 95.31,
            lat: 5.15
          },
          {
            lon: 95.56,
            lat: 4.48
          },
          {
            lon: 97,
            lat: 3.54
          },
          {
            lon: 98.71,
            lat: 1.55
          },
          {
            lon: 98.82,
            lat: 1.33
          },
          {
            lon: 99.09,
            lat: 0.67
          },
          {
            lon: 101.58,
            lat: -2.21
          }
        ],
        [
          {
            lon: 463.46,
            lat: 0.06
          },
          {
            lon: 464.23,
            lat: 2.44
          },
          {
            lon: 462.24,
            lat: 6.13
          },
          {
            lon: 461.96,
            lat: 6.29
          },
          {
            lon: 461.74,
            lat: 6.46
          },
          {
            lon: 461.3,
            lat: 6.84
          },
          {
            lon: 460.92,
            lat: 7.12
          },
          {
            lon: 460.58,
            lat: 7.28
          },
          {
            lon: 459.15,
            lat: 9.65
          },
          {
            lon: 458.32,
            lat: 10.57
          },
          {
            lon: 458.15999999999997,
            lat: 10.41
          },
          {
            lon: 457.94,
            lat: 9.8
          },
          {
            lon: 458.38,
            lat: 8.87
          },
          {
            lon: 459.32,
            lat: 7.56
          },
          {
            lon: 461.25,
            lat: 3.32
          },
          {
            lon: 460.42,
            lat: 3.15
          },
          {
            lon: 457.27,
            lat: 5.85
          },
          {
            lon: 455.34000000000003,
            lat: 5.63
          },
          {
            lon: 455.31,
            lat: 5.15
          },
          {
            lon: 455.56,
            lat: 4.48
          },
          {
            lon: 457,
            lat: 3.54
          },
          {
            lon: 458.71,
            lat: 1.55
          },
          {
            lon: 458.82,
            lat: 1.33
          },
          {
            lon: 459.09000000000003,
            lat: 0.67
          },
          {
            lon: 461.58,
            lat: -2.21
          }
        ],
        [
          {
            lon: 100.59,
            lat: 20.27
          },
          {
            lon: 98.22,
            lat: 19.53
          },
          {
            lon: 95.4,
            lat: 18.84
          },
          {
            lon: 94.63,
            lat: 17.23
          },
          {
            lon: 97.06,
            lat: 16.59
          },
          {
            lon: 98.38,
            lat: 16.43
          },
          {
            lon: 100.04,
            lat: 16.16
          },
          {
            lon: 100.26,
            lat: 16.16
          },
          {
            lon: 102.19,
            lat: 17.4
          },
          {
            lon: 103.96,
            lat: 18.63
          },
          {
            lon: 105.06,
            lat: 18.95
          },
          {
            lon: 105.67,
            lat: 19.8
          },
          {
            lon: 105.83,
            lat: 20.7
          },
          {
            lon: 100.59,
            lat: 20.27
          }
        ],
        [
          {
            lon: 460.59000000000003,
            lat: 20.27
          },
          {
            lon: 458.22,
            lat: 19.53
          },
          {
            lon: 455.4,
            lat: 18.84
          },
          {
            lon: 454.63,
            lat: 17.23
          },
          {
            lon: 457.06,
            lat: 16.59
          },
          {
            lon: 458.38,
            lat: 16.43
          },
          {
            lon: 460.04,
            lat: 16.16
          },
          {
            lon: 460.26,
            lat: 16.16
          },
          {
            lon: 462.19,
            lat: 17.4
          },
          {
            lon: 463.96,
            lat: 18.63
          },
          {
            lon: 465.06,
            lat: 18.95
          },
          {
            lon: 465.67,
            lat: 19.8
          },
          {
            lon: 465.83,
            lat: 20.7
          },
          {
            lon: 460.59000000000003,
            lat: 20.27
          }
        ],
        [
          {
            lon: 108.1,
            lat: 16.38
          },
          {
            lon: 107.16,
            lat: 17.13
          },
          {
            lon: 106.94,
            lat: 17.18
          },
          {
            lon: 106.5,
            lat: 17.18
          },
          {
            lon: 106.22,
            lat: 14.6
          },
          {
            lon: 105.17,
            lat: 9.76
          },
          {
            lon: 106.27,
            lat: 9.92
          },
          {
            lon: 108.37,
            lat: 11.45
          },
          {
            lon: 108.1,
            lat: 16.38
          }
        ],
        [
          {
            lon: 468.1,
            lat: 16.38
          },
          {
            lon: 467.15999999999997,
            lat: 17.13
          },
          {
            lon: 466.94,
            lat: 17.18
          },
          {
            lon: 466.5,
            lat: 17.18
          },
          {
            lon: 466.22,
            lat: 14.6
          },
          {
            lon: 465.17,
            lat: 9.76
          },
          {
            lon: 466.27,
            lat: 9.92
          },
          {
            lon: 468.37,
            lat: 11.45
          },
          {
            lon: 468.1,
            lat: 16.38
          }
        ],
        [
          {
            lon: 99.15,
            lat: 9.65
          },
          {
            lon: 101.14,
            lat: 12.21
          },
          {
            lon: 103.51,
            lat: 11.23
          },
          {
            lon: 104.62,
            lat: 8.72
          },
          {
            lon: 105.94,
            lat: 8.83
          },
          {
            lon: 106.27,
            lat: 9.92
          }
        ],
        [
          {
            lon: 459.15,
            lat: 9.65
          },
          {
            lon: 461.14,
            lat: 12.21
          },
          {
            lon: 463.51,
            lat: 11.23
          },
          {
            lon: 464.62,
            lat: 8.72
          },
          {
            lon: 465.94,
            lat: 8.83
          },
          {
            lon: 466.27,
            lat: 9.92
          }
        ],
        [
          {
            lon: 105.67,
            lat: 19.8
          },
          {
            lon: 106,
            lat: 18.79
          },
          {
            lon: 106.94,
            lat: 17.18
          }
        ],
        [
          {
            lon: 465.67,
            lat: 19.8
          },
          {
            lon: 466,
            lat: 18.79
          },
          {
            lon: 466.94,
            lat: 17.18
          }
        ],
        [
          {
            lon: 97.06,
            lat: 16.59
          },
          {
            lon: 96.98,
            lat: 14.76
          },
          {
            lon: 95.7,
            lat: 11.81
          },
          {
            lon: 93.73,
            lat: 11.03
          },
          {
            lon: 90.77,
            lat: 10.3
          },
          {
            lon: 90.77,
            lat: 8.78
          },
          {
            lon: 89.69,
            lat: 5.05
          },
          {
            lon: 93.73,
            lat: 5.5
          },
          {
            lon: 95.31,
            lat: 5.15
          }
        ],
        [
          {
            lon: 457.06,
            lat: 16.59
          },
          {
            lon: 456.98,
            lat: 14.76
          },
          {
            lon: 455.7,
            lat: 11.81
          },
          {
            lon: 453.73,
            lat: 11.03
          },
          {
            lon: 450.77,
            lat: 10.3
          },
          {
            lon: 450.77,
            lat: 8.78
          },
          {
            lon: 449.69,
            lat: 5.05
          },
          {
            lon: 453.73,
            lat: 5.5
          },
          {
            lon: 455.31,
            lat: 5.15
          }
        ],
        [
          {
            lon: 85.86,
            lat: 22.28
          },
          {
            lon: 81.49,
            lat: 17.16
          },
          {
            lon: 81.71,
            lat: 17.05
          },
          {
            lon: 85.19,
            lat: 19.71
          },
          {
            lon: 86.42,
            lat: 20.57
          },
          {
            lon: 86.75,
            lat: 21.96
          },
          {
            lon: 85.86,
            lat: 22.28
          }
        ],
        [
          {
            lon: 445.86,
            lat: 22.28
          },
          {
            lon: 441.49,
            lat: 17.16
          },
          {
            lon: 441.71,
            lat: 17.05
          },
          {
            lon: 445.19,
            lat: 19.71
          },
          {
            lon: 446.42,
            lat: 20.57
          },
          {
            lon: 446.75,
            lat: 21.96
          },
          {
            lon: 445.86,
            lat: 22.28
          }
        ],
        [
          {
            lon: 79.64,
            lat: 15.74
          },
          {
            lon: 79.25,
            lat: 15.74
          },
          {
            lon: 78.18,
            lat: 13.44
          },
          {
            lon: 75.5,
            lat: 12.5
          },
          {
            lon: 75.66,
            lat: 11.4
          },
          {
            lon: 75.83,
            lat: 11.23
          },
          {
            lon: 76.78,
            lat: 8.57
          },
          {
            lon: 77.9,
            lat: 8.18
          },
          {
            lon: 78.74,
            lat: 8.9
          },
          {
            lon: 80.03,
            lat: 15.69
          },
          {
            lon: 79.64,
            lat: 15.74
          }
        ],
        [
          {
            lon: 439.64,
            lat: 15.74
          },
          {
            lon: 439.25,
            lat: 15.74
          },
          {
            lon: 438.18,
            lat: 13.44
          },
          {
            lon: 435.5,
            lat: 12.5
          },
          {
            lon: 435.65999999999997,
            lat: 11.4
          },
          {
            lon: 435.83,
            lat: 11.23
          },
          {
            lon: 436.78,
            lat: 8.57
          },
          {
            lon: 437.9,
            lat: 8.18
          },
          {
            lon: 438.74,
            lat: 8.9
          },
          {
            lon: 440.03,
            lat: 15.69
          },
          {
            lon: 439.64,
            lat: 15.74
          }
        ],
        [
          {
            lon: 122.58,
            lat: -1.18
          },
          {
            lon: 119.83,
            lat: -0.96
          },
          {
            lon: 119.97,
            lat: -4.79
          },
          {
            lon: 125.4,
            lat: -6.02
          },
          {
            lon: 129.01,
            lat: -3.64
          },
          {
            lon: 128.36,
            lat: -3.2
          },
          {
            lon: 123.44,
            lat: -3.85
          },
          {
            lon: 122.58,
            lat: -1.18
          }
        ],
        [
          {
            lon: 482.58,
            lat: -1.18
          },
          {
            lon: 479.83,
            lat: -0.96
          },
          {
            lon: 479.97,
            lat: -4.79
          },
          {
            lon: 485.4,
            lat: -6.02
          },
          {
            lon: 489.01,
            lat: -3.64
          },
          {
            lon: 488.36,
            lat: -3.2
          },
          {
            lon: 483.44,
            lat: -3.85
          },
          {
            lon: 482.58,
            lat: -1.18
          }
        ],
        [
          {
            lon: 152.45,
            lat: -12.54
          },
          {
            lon: 150.42,
            lat: -13.18
          },
          {
            lon: 150.06,
            lat: -14.89
          },
          {
            lon: 153.9,
            lat: -17.49
          },
          {
            lon: 154.26,
            lat: -17.07
          },
          {
            lon: 155.07,
            lat: -14.94
          },
          {
            lon: 154.84,
            lat: -13.54
          },
          {
            lon: 154.69,
            lat: -13.33
          },
          {
            lon: 152.45,
            lat: -12.54
          }
        ],
        [
          {
            lon: 512.45,
            lat: -12.54
          },
          {
            lon: 510.41999999999996,
            lat: -13.18
          },
          {
            lon: 510.06,
            lat: -14.89
          },
          {
            lon: 513.9,
            lat: -17.49
          },
          {
            lon: 514.26,
            lat: -17.07
          },
          {
            lon: 515.0699999999999,
            lat: -14.94
          },
          {
            lon: 514.84,
            lat: -13.54
          },
          {
            lon: 514.69,
            lat: -13.33
          },
          {
            lon: 512.45,
            lat: -12.54
          }
        ],
        [
          {
            lon: 155.07,
            lat: -14.94
          },
          {
            lon: 156.96,
            lat: -14.05
          },
          {
            lon: 157.76,
            lat: -12.36
          },
          {
            lon: 148.62,
            lat: -7.17
          },
          {
            lon: 150.57,
            lat: -6.16
          },
          {
            lon: 150.06,
            lat: -3.42
          },
          {
            lon: 146.81,
            lat: -3.35
          },
          {
            lon: 141.67,
            lat: -2.77
          },
          {
            lon: 138.06,
            lat: -1.33
          },
          {
            lon: 136.83,
            lat: -1.47
          },
          {
            lon: 138.13,
            lat: -4.14
          },
          {
            lon: 138.49,
            lat: -4.36
          },
          {
            lon: 143.27,
            lat: -6.6
          },
          {
            lon: 143.99,
            lat: -7.82
          },
          {
            lon: 147.97,
            lat: -11.4
          },
          {
            lon: 148.47,
            lat: -16.16
          },
          {
            lon: 150.86,
            lat: -20.15
          },
          {
            lon: 158.38,
            lat: -20.08
          },
          {
            lon: 158.81,
            lat: -18.19
          },
          {
            lon: 154.26,
            lat: -17.07
          }
        ],
        [
          {
            lon: 515.0699999999999,
            lat: -14.94
          },
          {
            lon: 516.96,
            lat: -14.05
          },
          {
            lon: 517.76,
            lat: -12.36
          },
          {
            lon: 508.62,
            lat: -7.17
          },
          {
            lon: 510.57,
            lat: -6.16
          },
          {
            lon: 510.06,
            lat: -3.42
          },
          {
            lon: 506.81,
            lat: -3.35
          },
          {
            lon: 501.66999999999996,
            lat: -2.77
          },
          {
            lon: 498.06,
            lat: -1.33
          },
          {
            lon: 496.83000000000004,
            lat: -1.47
          },
          {
            lon: 498.13,
            lat: -4.14
          },
          {
            lon: 498.49,
            lat: -4.36
          },
          {
            lon: 503.27,
            lat: -6.6
          },
          {
            lon: 503.99,
            lat: -7.82
          },
          {
            lon: 507.97,
            lat: -11.4
          },
          {
            lon: 508.47,
            lat: -16.16
          },
          {
            lon: 510.86,
            lat: -20.15
          },
          {
            lon: 518.38,
            lat: -20.08
          },
          {
            lon: 518.81,
            lat: -18.19
          },
          {
            lon: 514.26,
            lat: -17.07
          }
        ],
        [
          {
            lon: 167.66,
            lat: -7.96
          },
          {
            lon: 167.44,
            lat: -8.47
          },
          {
            lon: 162.67,
            lat: -14.6
          },
          {
            lon: 164.18,
            lat: -14.75
          },
          {
            lon: 164.76,
            lat: -14.39
          },
          {
            lon: 168.81,
            lat: -8.54
          },
          {
            lon: 168.89,
            lat: -7.53
          },
          {
            lon: 167.66,
            lat: -7.96
          }
        ],
        [
          {
            lon: 527.66,
            lat: -7.96
          },
          {
            lon: 527.44,
            lat: -8.47
          },
          {
            lon: 522.67,
            lat: -14.6
          },
          {
            lon: 524.1800000000001,
            lat: -14.75
          },
          {
            lon: 524.76,
            lat: -14.39
          },
          {
            lon: 528.81,
            lat: -8.54
          },
          {
            lon: 528.89,
            lat: -7.53
          },
          {
            lon: 527.66,
            lat: -7.96
          }
        ],
        [
          {
            lon: -172.17,
            lat: -8.39
          },
          {
            lon: -175.71,
            lat: -8.04
          },
          {
            lon: -172.53,
            lat: -10.12
          },
          {
            lon: -170.72,
            lat: -13.61
          },
          {
            lon: -165.73,
            lat: -15.03
          },
          {
            lon: -165.3,
            lat: -13.04
          },
          {
            lon: -169.85,
            lat: -10.76
          },
          {
            lon: -172.17,
            lat: -8.39
          }
        ],
        [
          {
            lon: 187.83,
            lat: -8.39
          },
          {
            lon: 184.29,
            lat: -8.04
          },
          {
            lon: 187.47,
            lat: -10.12
          },
          {
            lon: 189.28,
            lat: -13.61
          },
          {
            lon: 194.27,
            lat: -15.03
          },
          {
            lon: 194.7,
            lat: -13.04
          },
          {
            lon: 190.15,
            lat: -10.76
          },
          {
            lon: 187.83,
            lat: -8.39
          }
        ],
        [
          {
            lon: 160.39,
            lat: -14.83
          },
          {
            lon: 161.86,
            lat: -16.01
          },
          {
            lon: 164.57,
            lat: -16.39
          },
          {
            lon: 168.7,
            lat: -11.58
          },
          {
            lon: 177.68,
            lat: -9.28
          },
          {
            lon: 185.56,
            lat: -10.3
          },
          {
            lon: 187.56,
            lat: -15.13
          },
          {
            lon: 196.34,
            lat: -16.89
          },
          {
            lon: 199.63,
            lat: -18.02
          },
          {
            lon: 202.56,
            lat: -18.87
          },
          {
            lon: 201.44,
            lat: -15.07
          },
          {
            lon: 197.76,
            lat: -13.1
          },
          {
            lon: 193.56,
            lat: -9.85
          },
          {
            lon: 189.24,
            lat: -6.45
          },
          {
            lon: 189.04,
            lat: -6.32
          },
          {
            lon: 188.72,
            lat: -6.07
          },
          {
            lon: 181.49,
            lat: -4
          },
          {
            lon: 180.65,
            lat: -3.62
          },
          {
            lon: 179.16,
            lat: -3.1
          },
          {
            lon: 173.22,
            lat: -3.49
          },
          {
            lon: 167.22,
            lat: 0
          },
          {
            lon: 165.73,
            lat: -0.39
          },
          {
            lon: 166.57,
            lat: -2.39
          },
          {
            lon: 166.83,
            lat: -6
          },
          {
            lon: 160.39,
            lat: -14.83
          }
        ],
        [
          {
            lon: 153.2,
            lat: 14.31
          },
          {
            lon: 150.07,
            lat: 10.93
          },
          {
            lon: 151.91,
            lat: 9.79
          },
          {
            lon: 154.95,
            lat: 11.29
          },
          {
            lon: 156.78,
            lat: 8.02
          },
          {
            lon: 158.72,
            lat: 7.55
          },
          {
            lon: 159.59,
            lat: 4.97
          },
          {
            lon: 157.91,
            lat: 0.26
          },
          {
            lon: 160.17,
            lat: 0.46
          },
          {
            lon: 162.3,
            lat: 6.13
          },
          {
            lon: 166.37,
            lat: 4.72
          },
          {
            lon: 169.15,
            lat: 5.23
          },
          {
            lon: 169.6,
            lat: 7.8
          },
          {
            lon: 160.37,
            lat: 11.07
          },
          {
            lon: 154.75,
            lat: 15.38
          },
          {
            lon: 154.1,
            lat: 15.2
          },
          {
            lon: 153.2,
            lat: 14.31
          }
        ],
        [
          {
            lon: 513.2,
            lat: 14.31
          },
          {
            lon: 510.07,
            lat: 10.93
          },
          {
            lon: 511.90999999999997,
            lat: 9.79
          },
          {
            lon: 514.95,
            lat: 11.29
          },
          {
            lon: 516.78,
            lat: 8.02
          },
          {
            lon: 518.72,
            lat: 7.55
          },
          {
            lon: 519.59,
            lat: 4.97
          },
          {
            lon: 517.91,
            lat: 0.26
          },
          {
            lon: 520.17,
            lat: 0.46
          },
          {
            lon: 522.3,
            lat: 6.13
          },
          {
            lon: 526.37,
            lat: 4.72
          },
          {
            lon: 529.15,
            lat: 5.23
          },
          {
            lon: 529.6,
            lat: 7.8
          },
          {
            lon: 520.37,
            lat: 11.07
          },
          {
            lon: 514.75,
            lat: 15.38
          },
          {
            lon: 514.1,
            lat: 15.2
          },
          {
            lon: 513.2,
            lat: 14.31
          }
        ],
        [
          {
            lon: 177.88,
            lat: 5.31
          },
          {
            lon: 174.42,
            lat: 4.56
          },
          {
            lon: 175.05,
            lat: 3.81
          },
          {
            lon: 176.26,
            lat: 3.35
          },
          {
            lon: 177.88,
            lat: 0.35
          },
          {
            lon: 179.26,
            lat: 0.3
          },
          {
            lon: 181.05,
            lat: 3.01
          },
          {
            lon: 184.28,
            lat: 3.52
          },
          {
            lon: 188.48,
            lat: 3.7
          },
          {
            lon: 190.16,
            lat: 2.31
          },
          {
            lon: 191.14,
            lat: -2.07
          },
          {
            lon: 192.23,
            lat: -2.35
          },
          {
            lon: 194.69,
            lat: -0.44
          },
          {
            lon: 196.63,
            lat: 1.29
          },
          {
            lon: 199.19,
            lat: 1.5
          },
          {
            lon: 200.62,
            lat: 3.03
          },
          {
            lon: 203.76,
            lat: 3.29
          },
          {
            lon: 204.4,
            lat: 3.58
          },
          {
            lon: 204.63,
            lat: 3.7
          },
          {
            lon: 204.74,
            lat: 3.81
          },
          {
            lon: 212.7,
            lat: 8.92
          },
          {
            lon: 212.76,
            lat: 9.78
          },
          {
            lon: 211.26,
            lat: 10.69
          },
          {
            lon: 202.49,
            lat: 6.4
          },
          {
            lon: 190.56,
            lat: 7.83
          },
          {
            lon: 183.58,
            lat: 5.71
          },
          {
            lon: 177.88,
            lat: 5.31
          }
        ],
        [
          {
            lon: -149.11,
            lat: -23.82
          },
          {
            lon: -150.45,
            lat: -23.26
          },
          {
            lon: -150.6,
            lat: -23.82
          },
          {
            lon: -148,
            lat: -27.66
          },
          {
            lon: -147.33,
            lat: -31.68
          },
          {
            lon: -144.12,
            lat: -32.35
          },
          {
            lon: -143.53,
            lat: -29.37
          },
          {
            lon: -149.11,
            lat: -23.82
          }
        ],
        [
          {
            lon: 210.89,
            lat: -23.82
          },
          {
            lon: 209.55,
            lat: -23.26
          },
          {
            lon: 209.4,
            lat: -23.82
          },
          {
            lon: 212,
            lat: -27.66
          },
          {
            lon: 212.67,
            lat: -31.68
          },
          {
            lon: 215.88,
            lat: -32.35
          },
          {
            lon: 216.47,
            lat: -29.37
          },
          {
            lon: 210.89,
            lat: -23.82
          }
        ],
        [
          {
            lon: -175.48,
            lat: -30.88
          },
          {
            lon: -176.38,
            lat: -31.02
          },
          {
            lon: -176.45,
            lat: -32.03
          },
          {
            lon: -172.36,
            lat: -36.32
          },
          {
            lon: -168.71,
            lat: -42.85
          },
          {
            lon: -166.92,
            lat: -47.77
          },
          {
            lon: -165.43,
            lat: -48.12
          },
          {
            lon: -165.8,
            lat: -42.72
          },
          {
            lon: -168.86,
            lat: -39.22
          },
          {
            lon: -171.76,
            lat: -34.36
          },
          {
            lon: -173.77,
            lat: -31.89
          },
          {
            lon: -175.48,
            lat: -30.88
          }
        ],
        [
          {
            lon: 184.52,
            lat: -30.88
          },
          {
            lon: 183.62,
            lat: -31.02
          },
          {
            lon: 183.55,
            lat: -32.03
          },
          {
            lon: 187.64,
            lat: -36.32
          },
          {
            lon: 191.29,
            lat: -42.85
          },
          {
            lon: 193.08,
            lat: -47.77
          },
          {
            lon: 194.57,
            lat: -48.12
          },
          {
            lon: 194.2,
            lat: -42.72
          },
          {
            lon: 191.14,
            lat: -39.22
          },
          {
            lon: 188.24,
            lat: -34.36
          },
          {
            lon: 186.23,
            lat: -31.89
          },
          {
            lon: 184.52,
            lat: -30.88
          }
        ],
        [
          {
            lon: 158.68,
            lat: -47.53
          },
          {
            lon: 155.33,
            lat: -45.88
          },
          {
            lon: 151.68,
            lat: -45.22
          },
          {
            lon: 152.35,
            lat: -46.06
          },
          {
            lon: 156,
            lat: -48.23
          },
          {
            lon: 160.54,
            lat: -50.42
          },
          {
            lon: 162.26,
            lat: -49.96
          },
          {
            lon: 159.43,
            lat: -48.06
          },
          {
            lon: 158.68,
            lat: -47.53
          }
        ],
        [
          {
            lon: 518.6800000000001,
            lat: -47.53
          },
          {
            lon: 515.33,
            lat: -45.88
          },
          {
            lon: 511.68,
            lat: -45.22
          },
          {
            lon: 512.35,
            lat: -46.06
          },
          {
            lon: 516,
            lat: -48.23
          },
          {
            lon: 520.54,
            lat: -50.42
          },
          {
            lon: 522.26,
            lat: -49.96
          },
          {
            lon: 519.4300000000001,
            lat: -48.06
          },
          {
            lon: 518.6800000000001,
            lat: -47.53
          }
        ],
        [
          {
            lon: -153.83,
            lat: -5.42
          },
          {
            lon: -157.77,
            lat: -7.82
          },
          {
            lon: -154.98,
            lat: -10.01
          },
          {
            lon: -152.1,
            lat: -10.58
          },
          {
            lon: -151.9,
            lat: -8.2
          },
          {
            lon: -153.83,
            lat: -5.42
          }
        ],
        [
          {
            lon: 206.17,
            lat: -5.42
          },
          {
            lon: 202.23,
            lat: -7.82
          },
          {
            lon: 205.02,
            lat: -10.01
          },
          {
            lon: 207.9,
            lat: -10.58
          },
          {
            lon: 208.1,
            lat: -8.2
          },
          {
            lon: 206.17,
            lat: -5.42
          }
        ],
        [
          {
            lon: -100.65,
            lat: -28.49
          },
          {
            lon: -102.47,
            lat: -27.16
          },
          {
            lon: -104.4,
            lat: -27.34
          },
          {
            lon: -99.88,
            lat: -31.74
          },
          {
            lon: -93.82,
            lat: -35.43
          },
          {
            lon: -93.44,
            lat: -34.75
          },
          {
            lon: -100.65,
            lat: -28.49
          }
        ],
        [
          {
            lon: 259.35,
            lat: -28.49
          },
          {
            lon: 257.53,
            lat: -27.16
          },
          {
            lon: 255.6,
            lat: -27.34
          },
          {
            lon: 260.12,
            lat: -31.74
          },
          {
            lon: 266.18,
            lat: -35.43
          },
          {
            lon: 266.56,
            lat: -34.75
          },
          {
            lon: 259.35,
            lat: -28.49
          }
        ],
        [
          {
            lon: -73.01,
            lat: 11.08
          },
          {
            lon: -76.07,
            lat: 9.01
          },
          {
            lon: -78.71,
            lat: 8.39
          },
          {
            lon: -81.83,
            lat: 5.15
          },
          {
            lon: -82.32,
            lat: 2.51
          },
          {
            lon: -79.05,
            lat: -1.03
          },
          {
            lon: -78.5,
            lat: -7.75
          },
          {
            lon: -77.65,
            lat: -10.04
          },
          {
            lon: -76.82,
            lat: -10.59
          },
          {
            lon: -75.01,
            lat: -10.86
          },
          {
            lon: -73.97,
            lat: -10.24
          },
          {
            lon: -73.83,
            lat: -9.2
          },
          {
            lon: -69.32,
            lat: -7.14
          },
          {
            lon: -64.39,
            lat: -8.52
          },
          {
            lon: -63.62,
            lat: -5.75
          },
          {
            lon: -72.44,
            lat: -3.81
          },
          {
            lon: -72.79,
            lat: -2.36
          },
          {
            lon: -71.05,
            lat: 1.11
          },
          {
            lon: -68.36,
            lat: 7.82
          },
          {
            lon: -68.29,
            lat: 9.77
          },
          {
            lon: -69.61,
            lat: 11.42
          },
          {
            lon: -73.01,
            lat: 11.08
          }
        ],
        [
          {
            lon: 286.99,
            lat: 11.08
          },
          {
            lon: 283.93,
            lat: 9.01
          },
          {
            lon: 281.29,
            lat: 8.39
          },
          {
            lon: 278.17,
            lat: 5.15
          },
          {
            lon: 277.68,
            lat: 2.51
          },
          {
            lon: 280.95,
            lat: -1.03
          },
          {
            lon: 281.5,
            lat: -7.75
          },
          {
            lon: 282.35,
            lat: -10.04
          },
          {
            lon: 283.18,
            lat: -10.59
          },
          {
            lon: 284.99,
            lat: -10.86
          },
          {
            lon: 286.03,
            lat: -10.24
          },
          {
            lon: 286.17,
            lat: -9.2
          },
          {
            lon: 290.68,
            lat: -7.14
          },
          {
            lon: 295.61,
            lat: -8.52
          },
          {
            lon: 296.38,
            lat: -5.75
          },
          {
            lon: 287.56,
            lat: -3.81
          },
          {
            lon: 287.21,
            lat: -2.36
          },
          {
            lon: 288.95,
            lat: 1.11
          },
          {
            lon: 291.64,
            lat: 7.82
          },
          {
            lon: 291.71,
            lat: 9.77
          },
          {
            lon: 290.39,
            lat: 11.42
          },
          {
            lon: 286.99,
            lat: 11.08
          }
        ],
        [
          {
            lon: -89.26,
            lat: 7.91
          },
          {
            lon: -92.45,
            lat: 6.46
          },
          {
            lon: -96.13,
            lat: 6.12
          },
          {
            lon: -99.81,
            lat: 7.29
          },
          {
            lon: -103.42,
            lat: 8.6
          },
          {
            lon: -103.84,
            lat: 7.22
          },
          {
            lon: -101.48,
            lat: 6.25
          },
          {
            lon: -96.27,
            lat: 4.31
          },
          {
            lon: -96.07,
            lat: 4.31
          },
          {
            lon: -87.11,
            lat: 5.08
          },
          {
            lon: -86.41,
            lat: 5.35
          },
          {
            lon: -87.18,
            lat: 8.46
          },
          {
            lon: -89.26,
            lat: 7.91
          }
        ],
        [
          {
            lon: 270.74,
            lat: 7.91
          },
          {
            lon: 267.55,
            lat: 6.46
          },
          {
            lon: 263.87,
            lat: 6.12
          },
          {
            lon: 260.19,
            lat: 7.29
          },
          {
            lon: 256.58,
            lat: 8.6
          },
          {
            lon: 256.15999999999997,
            lat: 7.22
          },
          {
            lon: 258.52,
            lat: 6.25
          },
          {
            lon: 263.73,
            lat: 4.31
          },
          {
            lon: 263.93,
            lat: 4.31
          },
          {
            lon: 272.89,
            lat: 5.08
          },
          {
            lon: 273.59000000000003,
            lat: 5.35
          },
          {
            lon: 272.82,
            lat: 8.46
          },
          {
            lon: 270.74,
            lat: 7.91
          }
        ],
        [
          {
            lon: -76.82,
            lat: -10.59
          },
          {
            lon: -73.07,
            lat: -14.28
          },
          {
            lon: -65.98,
            lat: -16.04
          },
          {
            lon: -66.12,
            lat: -14.48
          },
          {
            lon: -72.09,
            lat: -11.96
          },
          {
            lon: -73.97,
            lat: -10.24
          }
        ],
        [
          {
            lon: 283.18,
            lat: -10.59
          },
          {
            lon: 286.93,
            lat: -14.28
          },
          {
            lon: 294.02,
            lat: -16.04
          },
          {
            lon: 293.88,
            lat: -14.48
          },
          {
            lon: 287.90999999999997,
            lat: -11.96
          },
          {
            lon: 286.03,
            lat: -10.24
          }
        ],
        [
          {
            lon: -21.75,
            lat: 6.46
          },
          {
            lon: -22.24,
            lat: 6.32
          },
          {
            lon: -32.51,
            lat: 5.21
          },
          {
            lon: -32.51,
            lat: 4.59
          },
          {
            lon: -24.81,
            lat: 4.1
          },
          {
            lon: -13.14,
            lat: 0.29
          },
          {
            lon: -8.35,
            lat: 0.01
          },
          {
            lon: -3.7,
            lat: 1.4
          },
          {
            lon: -1.89,
            lat: 4.31
          },
          {
            lon: -1.76,
            lat: 7.22
          },
          {
            lon: -5.02,
            lat: 8.11
          },
          {
            lon: -9.39,
            lat: 10.32
          },
          {
            lon: -10.36,
            lat: 10.59
          },
          {
            lon: -12.03,
            lat: 10.59
          },
          {
            lon: -15.5,
            lat: 6.25
          },
          {
            lon: -21.75,
            lat: 6.46
          }
        ],
        [
          {
            lon: 338.25,
            lat: 6.46
          },
          {
            lon: 337.76,
            lat: 6.32
          },
          {
            lon: 327.49,
            lat: 5.21
          },
          {
            lon: 327.49,
            lat: 4.59
          },
          {
            lon: 335.19,
            lat: 4.1
          },
          {
            lon: 346.86,
            lat: 0.29
          },
          {
            lon: 351.65,
            lat: 0.01
          },
          {
            lon: 356.3,
            lat: 1.4
          },
          {
            lon: 358.11,
            lat: 4.31
          },
          {
            lon: 358.24,
            lat: 7.22
          },
          {
            lon: 354.98,
            lat: 8.11
          },
          {
            lon: 350.61,
            lat: 10.32
          },
          {
            lon: 349.64,
            lat: 10.59
          },
          {
            lon: 347.97,
            lat: 10.59
          },
          {
            lon: 344.5,
            lat: 6.25
          },
          {
            lon: 338.25,
            lat: 6.46
          }
        ],
        [
          {
            lon: -40.64,
            lat: 4.93
          },
          {
            lon: -46.12,
            lat: 3.62
          },
          {
            lon: -51.54,
            lat: 2.79
          },
          {
            lon: -51.65,
            lat: 2.64
          },
          {
            lon: -52.02,
            lat: -0.76
          },
          {
            lon: -55.77,
            lat: -3.11
          },
          {
            lon: -56.74,
            lat: -4.99
          },
          {
            lon: -56.19,
            lat: -6.58
          },
          {
            lon: -55.36,
            lat: -6.76
          },
          {
            lon: -49.04,
            lat: -4.85
          },
          {
            lon: -46.95,
            lat: -4.57
          },
          {
            lon: -45.43,
            lat: -3.88
          },
          {
            lon: -39.73,
            lat: -2.84
          },
          {
            lon: -39.73,
            lat: -0.48
          },
          {
            lon: -40.08,
            lat: -0.34
          },
          {
            lon: -45.64,
            lat: 0.84
          },
          {
            lon: -45.43,
            lat: 1.47
          },
          {
            lon: -40.36,
            lat: 2.44
          },
          {
            lon: -39.18,
            lat: 4.45
          },
          {
            lon: -40.64,
            lat: 4.93
          }
        ],
        [
          {
            lon: 319.36,
            lat: 4.93
          },
          {
            lon: 313.88,
            lat: 3.62
          },
          {
            lon: 308.46,
            lat: 2.79
          },
          {
            lon: 308.35,
            lat: 2.64
          },
          {
            lon: 307.98,
            lat: -0.76
          },
          {
            lon: 304.23,
            lat: -3.11
          },
          {
            lon: 303.26,
            lat: -4.99
          },
          {
            lon: 303.81,
            lat: -6.58
          },
          {
            lon: 304.64,
            lat: -6.76
          },
          {
            lon: 310.96,
            lat: -4.85
          },
          {
            lon: 313.05,
            lat: -4.57
          },
          {
            lon: 314.57,
            lat: -3.88
          },
          {
            lon: 320.27,
            lat: -2.84
          },
          {
            lon: 320.27,
            lat: -0.48
          },
          {
            lon: 319.92,
            lat: -0.34
          },
          {
            lon: 314.36,
            lat: 0.84
          },
          {
            lon: 314.57,
            lat: 1.47
          },
          {
            lon: 319.64,
            lat: 2.44
          },
          {
            lon: 320.82,
            lat: 4.45
          },
          {
            lon: 319.36,
            lat: 4.93
          }
        ],
        [
          {
            lon: -51.65,
            lat: 2.64
          },
          {
            lon: -53.14,
            lat: 1.92
          },
          {
            lon: -55.08,
            lat: 0.7
          },
          {
            lon: -55.52,
            lat: 0.64
          },
          {
            lon: -56.57,
            lat: 0.7
          },
          {
            lon: -57.51,
            lat: 0.92
          },
          {
            lon: -57.79,
            lat: 0.98
          },
          {
            lon: -64.93,
            lat: 1.53
          },
          {
            lon: -65.04,
            lat: 4.41
          },
          {
            lon: -64.38,
            lat: 6.89
          },
          {
            lon: -68.14,
            lat: 7.77
          },
          {
            lon: -68.36,
            lat: 7.82
          }
        ],
        [
          {
            lon: 308.35,
            lat: 2.64
          },
          {
            lon: 306.86,
            lat: 1.92
          },
          {
            lon: 304.92,
            lat: 0.7
          },
          {
            lon: 304.48,
            lat: 0.64
          },
          {
            lon: 303.43,
            lat: 0.7
          },
          {
            lon: 302.49,
            lat: 0.92
          },
          {
            lon: 302.21,
            lat: 0.98
          },
          {
            lon: 295.07,
            lat: 1.53
          },
          {
            lon: 294.96,
            lat: 4.41
          },
          {
            lon: 295.62,
            lat: 6.89
          },
          {
            lon: 291.86,
            lat: 7.77
          },
          {
            lon: 291.64,
            lat: 7.82
          }
        ],
        [
          {
            lon: -64.39,
            lat: -8.52
          },
          {
            lon: -61.94,
            lat: -9.73
          },
          {
            lon: -60.12,
            lat: -9.79
          },
          {
            lon: -55.36,
            lat: -6.76
          }
        ],
        [
          {
            lon: 295.61,
            lat: -8.52
          },
          {
            lon: 298.06,
            lat: -9.73
          },
          {
            lon: 299.88,
            lat: -9.79
          },
          {
            lon: 304.64,
            lat: -6.76
          }
        ],
        [
          {
            lon: -52.06,
            lat: -22.72
          },
          {
            lon: -53.25,
            lat: -22.36
          },
          {
            lon: -53.44,
            lat: -22.36
          },
          {
            lon: -52.69,
            lat: -26.16
          },
          {
            lon: -50.8,
            lat: -29.13
          },
          {
            lon: -49.16,
            lat: -29.71
          },
          {
            lon: -48.98,
            lat: -29.71
          },
          {
            lon: -45.39,
            lat: -24.92
          },
          {
            lon: -49.79,
            lat: -25.04
          },
          {
            lon: -52.06,
            lat: -22.72
          }
        ],
        [
          {
            lon: 307.94,
            lat: -22.72
          },
          {
            lon: 306.75,
            lat: -22.36
          },
          {
            lon: 306.56,
            lat: -22.36
          },
          {
            lon: 307.31,
            lat: -26.16
          },
          {
            lon: 309.2,
            lat: -29.13
          },
          {
            lon: 310.84000000000003,
            lat: -29.71
          },
          {
            lon: 311.02,
            lat: -29.71
          },
          {
            lon: 314.61,
            lat: -24.92
          },
          {
            lon: 310.21,
            lat: -25.04
          },
          {
            lon: 307.94,
            lat: -22.72
          }
        ],
        [
          {
            lon: -37.56,
            lat: -10.38
          },
          {
            lon: -39.06,
            lat: -12.5
          },
          {
            lon: -40.71,
            lat: -13.76
          },
          {
            lon: -38.06,
            lat: -16.76
          },
          {
            lon: -36.92,
            lat: -16.69
          },
          {
            lon: -37.2,
            lat: -13.76
          },
          {
            lon: -36.7,
            lat: -12.92
          },
          {
            lon: -36.99,
            lat: -10.38
          },
          {
            lon: -37.56,
            lat: -10.38
          }
        ],
        [
          {
            lon: 322.44,
            lat: -10.38
          },
          {
            lon: 320.94,
            lat: -12.5
          },
          {
            lon: 319.29,
            lat: -13.76
          },
          {
            lon: 321.94,
            lat: -16.76
          },
          {
            lon: 323.08,
            lat: -16.69
          },
          {
            lon: 322.8,
            lat: -13.76
          },
          {
            lon: 323.3,
            lat: -12.92
          },
          {
            lon: 323.01,
            lat: -10.38
          },
          {
            lon: 322.44,
            lat: -10.38
          }
        ],
        [
          {
            lon: -35.13,
            lat: -26.38
          },
          {
            lon: -38.35,
            lat: -26.31
          },
          {
            lon: -38.35,
            lat: -26.51
          },
          {
            lon: -33.77,
            lat: -29.09
          },
          {
            lon: -31.2,
            lat: -30.66
          },
          {
            lon: -28.63,
            lat: -31.37
          },
          {
            lon: -28.48,
            lat: -28.83
          },
          {
            lon: -30.48,
            lat: -28.3
          },
          {
            lon: -35.13,
            lat: -26.38
          }
        ],
        [
          {
            lon: 324.87,
            lat: -26.38
          },
          {
            lon: 321.65,
            lat: -26.31
          },
          {
            lon: 321.65,
            lat: -26.51
          },
          {
            lon: 326.23,
            lat: -29.09
          },
          {
            lon: 328.8,
            lat: -30.66
          },
          {
            lon: 331.37,
            lat: -31.37
          },
          {
            lon: 331.52,
            lat: -28.83
          },
          {
            lon: 329.52,
            lat: -28.3
          },
          {
            lon: 324.87,
            lat: -26.38
          }
        ],
        [
          {
            lon: -23.12,
            lat: -33.24
          },
          {
            lon: -25.05,
            lat: -33.11
          },
          {
            lon: -26.27,
            lat: -34.07
          },
          {
            lon: -24.62,
            lat: -36.46
          },
          {
            lon: -23.12,
            lat: -39.18
          },
          {
            lon: -22.55,
            lat: -38.5
          },
          {
            lon: -22.27,
            lat: -33.94
          },
          {
            lon: -23.12,
            lat: -33.24
          }
        ],
        [
          {
            lon: 336.88,
            lat: -33.24
          },
          {
            lon: 334.95,
            lat: -33.11
          },
          {
            lon: 333.73,
            lat: -34.07
          },
          {
            lon: 335.38,
            lat: -36.46
          },
          {
            lon: 336.88,
            lat: -39.18
          },
          {
            lon: 337.45,
            lat: -38.5
          },
          {
            lon: 337.73,
            lat: -33.94
          },
          {
            lon: 336.88,
            lat: -33.24
          }
        ],
        [
          {
            lon: -2.1,
            lat: -25.58
          },
          {
            lon: -3.67,
            lat: -25.38
          },
          {
            lon: -2.38,
            lat: -29.23
          },
          {
            lon: -4.67,
            lat: -30.01
          },
          {
            lon: -4.67,
            lat: -30.4
          },
          {
            lon: -0.59,
            lat: -32.22
          },
          {
            lon: 3.62,
            lat: -35.09
          },
          {
            lon: 4.69,
            lat: -35.21
          },
          {
            lon: 4.77,
            lat: -33.24
          },
          {
            lon: 1.41,
            lat: -31.05
          },
          {
            lon: -2.1,
            lat: -25.58
          }
        ],
        [
          {
            lon: 357.9,
            lat: -25.58
          },
          {
            lon: 356.33,
            lat: -25.38
          },
          {
            lon: 357.62,
            lat: -29.23
          },
          {
            lon: 355.33,
            lat: -30.01
          },
          {
            lon: 355.33,
            lat: -30.4
          },
          {
            lon: 359.41,
            lat: -32.22
          },
          {
            lon: 363.62,
            lat: -35.09
          },
          {
            lon: 364.69,
            lat: -35.21
          },
          {
            lon: 364.77,
            lat: -33.24
          },
          {
            lon: 361.41,
            lat: -31.05
          },
          {
            lon: 357.9,
            lat: -25.58
          }
        ],
        [
          {
            lon: 12.77,
            lat: 9.78
          },
          {
            lon: 11.54,
            lat: 7.98
          },
          {
            lon: 5.27,
            lat: 6.1
          },
          {
            lon: 7.09,
            lat: 4.62
          },
          {
            lon: 8.9,
            lat: 3.71
          },
          {
            lon: 9.56,
            lat: -1.23
          },
          {
            lon: 11.87,
            lat: -4.03
          },
          {
            lon: 12.03,
            lat: -4.11
          },
          {
            lon: 12.28,
            lat: -4.11
          },
          {
            lon: 12.53,
            lat: -4.11
          },
          {
            lon: 12.77,
            lat: -4.11
          },
          {
            lon: 13.84,
            lat: -2.46
          },
          {
            lon: 14.17,
            lat: -1.81
          },
          {
            lon: 14.42,
            lat: -1.31
          },
          {
            lon: 15.33,
            lat: 3.06
          },
          {
            lon: 14.75,
            lat: 3.71
          },
          {
            lon: 14.5,
            lat: 7.49
          },
          {
            lon: 14.5,
            lat: 9.05
          },
          {
            lon: 13.51,
            lat: 9.7
          },
          {
            lon: 12.77,
            lat: 9.78
          }
        ],
        [
          {
            lon: 372.77,
            lat: 9.78
          },
          {
            lon: 371.54,
            lat: 7.98
          },
          {
            lon: 365.27,
            lat: 6.1
          },
          {
            lon: 367.09,
            lat: 4.62
          },
          {
            lon: 368.9,
            lat: 3.71
          },
          {
            lon: 369.56,
            lat: -1.23
          },
          {
            lon: 371.87,
            lat: -4.03
          },
          {
            lon: 372.03,
            lat: -4.11
          },
          {
            lon: 372.28,
            lat: -4.11
          },
          {
            lon: 372.53,
            lat: -4.11
          },
          {
            lon: 372.77,
            lat: -4.11
          },
          {
            lon: 373.84,
            lat: -2.46
          },
          {
            lon: 374.17,
            lat: -1.81
          },
          {
            lon: 374.42,
            lat: -1.31
          },
          {
            lon: 375.33,
            lat: 3.06
          },
          {
            lon: 374.75,
            lat: 3.71
          },
          {
            lon: 374.5,
            lat: 7.49
          },
          {
            lon: 374.5,
            lat: 9.05
          },
          {
            lon: 373.51,
            lat: 9.7
          },
          {
            lon: 372.77,
            lat: 9.78
          }
        ],
        [
          {
            lon: 46.81,
            lat: 9.54
          },
          {
            lon: 46.56,
            lat: 9.54
          },
          {
            lon: 41.04,
            lat: 8.07
          },
          {
            lon: 36.84,
            lat: 7.57
          },
          {
            lon: 35.85,
            lat: 6.59
          },
          {
            lon: 33.79,
            lat: 5.11
          },
          {
            lon: 41.37,
            lat: 5.11
          },
          {
            lon: 47.55,
            lat: 8.8
          },
          {
            lon: 46.81,
            lat: 9.54
          }
        ],
        [
          {
            lon: 406.81,
            lat: 9.54
          },
          {
            lon: 406.56,
            lat: 9.54
          },
          {
            lon: 401.04,
            lat: 8.07
          },
          {
            lon: 396.84000000000003,
            lat: 7.57
          },
          {
            lon: 395.85,
            lat: 6.59
          },
          {
            lon: 393.79,
            lat: 5.11
          },
          {
            lon: 401.37,
            lat: 5.11
          },
          {
            lon: 407.55,
            lat: 8.8
          },
          {
            lon: 406.81,
            lat: 9.54
          }
        ],
        [
          {
            lon: 11.87,
            lat: -4.03
          },
          {
            lon: 13.93,
            lat: -7.56
          },
          {
            lon: 17.8,
            lat: -8.62
          },
          {
            lon: 21.26,
            lat: -9.52
          },
          {
            lon: 27.36,
            lat: -4.6
          },
          {
            lon: 31.81,
            lat: -5.34
          },
          {
            lon: 33.48,
            lat: -4.42
          },
          {
            lon: 36.63,
            lat: -5.27
          },
          {
            lon: 40.38,
            lat: -7.31
          },
          {
            lon: 45.82,
            lat: -7.81
          },
          {
            lon: 45.16,
            lat: -5.02
          },
          {
            lon: 40.79,
            lat: -1.39
          },
          {
            lon: 47.22,
            lat: 4.21
          },
          {
            lon: 50.43,
            lat: 11.17
          },
          {
            lon: 44.75,
            lat: 10.44
          },
          {
            lon: 37.41,
            lat: 10.03
          },
          {
            lon: 32.55,
            lat: 6.1
          },
          {
            lon: 27.28,
            lat: 5.11
          },
          {
            lon: 19.86,
            lat: 5.93
          },
          {
            lon: 19.53,
            lat: 6.92
          },
          {
            lon: 20.93,
            lat: 8.88
          },
          {
            lon: 22.25,
            lat: 9.95
          },
          {
            lon: 22.08,
            lat: 11.9
          },
          {
            lon: 13.51,
            lat: 9.7
          }
        ],
        [
          {
            lon: 371.87,
            lat: -4.03
          },
          {
            lon: 373.93,
            lat: -7.56
          },
          {
            lon: 377.8,
            lat: -8.62
          },
          {
            lon: 381.26,
            lat: -9.52
          },
          {
            lon: 387.36,
            lat: -4.6
          },
          {
            lon: 391.81,
            lat: -5.34
          },
          {
            lon: 393.48,
            lat: -4.42
          },
          {
            lon: 396.63,
            lat: -5.27
          },
          {
            lon: 400.38,
            lat: -7.31
          },
          {
            lon: 405.82,
            lat: -7.81
          },
          {
            lon: 405.15999999999997,
            lat: -5.02
          },
          {
            lon: 400.79,
            lat: -1.39
          },
          {
            lon: 407.22,
            lat: 4.21
          },
          {
            lon: 410.43,
            lat: 11.17
          },
          {
            lon: 404.75,
            lat: 10.44
          },
          {
            lon: 397.40999999999997,
            lat: 10.03
          },
          {
            lon: 392.55,
            lat: 6.1
          },
          {
            lon: 387.28,
            lat: 5.11
          },
          {
            lon: 379.86,
            lat: 5.93
          },
          {
            lon: 379.53,
            lat: 6.92
          },
          {
            lon: 380.93,
            lat: 8.88
          },
          {
            lon: 382.25,
            lat: 9.95
          },
          {
            lon: 382.08,
            lat: 11.9
          },
          {
            lon: 373.51,
            lat: 9.7
          }
        ],
        [
          {
            lon: -137.56,
            lat: 9.91
          },
          {
            lon: -139.96,
            lat: 10.04
          },
          {
            lon: -141.54,
            lat: 9.22
          },
          {
            lon: -138.11,
            lat: 7.66
          },
          {
            lon: -138.11,
            lat: 7.25
          },
          {
            lon: -139.62,
            lat: 4.71
          },
          {
            lon: -139.55,
            lat: 4.51
          },
          {
            lon: -133.23,
            lat: 2.72
          },
          {
            lon: -129.38,
            lat: 4.37
          },
          {
            lon: -125.6,
            lat: 3.2
          },
          {
            lon: -120.52,
            lat: 4.58
          },
          {
            lon: -113.79,
            lat: 3.62
          },
          {
            lon: -109.39,
            lat: 6.56
          },
          {
            lon: -110.08,
            lat: 7.79
          },
          {
            lon: -112.28,
            lat: 7.11
          },
          {
            lon: -118.6,
            lat: 6.9
          },
          {
            lon: -125.53,
            lat: 8
          },
          {
            lon: -131.92,
            lat: 9.97
          },
          {
            lon: -137.56,
            lat: 9.91
          }
        ],
        [
          {
            lon: 222.44,
            lat: 9.91
          },
          {
            lon: 220.04,
            lat: 10.04
          },
          {
            lon: 218.46,
            lat: 9.22
          },
          {
            lon: 221.89,
            lat: 7.66
          },
          {
            lon: 221.89,
            lat: 7.25
          },
          {
            lon: 220.38,
            lat: 4.71
          },
          {
            lon: 220.45,
            lat: 4.51
          },
          {
            lon: 226.77,
            lat: 2.72
          },
          {
            lon: 230.62,
            lat: 4.37
          },
          {
            lon: 234.4,
            lat: 3.2
          },
          {
            lon: 239.48000000000002,
            lat: 4.58
          },
          {
            lon: 246.20999999999998,
            lat: 3.62
          },
          {
            lon: 250.61,
            lat: 6.56
          },
          {
            lon: 249.92000000000002,
            lat: 7.79
          },
          {
            lon: 247.72,
            lat: 7.11
          },
          {
            lon: 241.4,
            lat: 6.9
          },
          {
            lon: 234.47,
            lat: 8
          },
          {
            lon: 228.08,
            lat: 9.97
          },
          {
            lon: 222.44,
            lat: 9.91
          }
        ],
        [
          {
            lon: -74.4,
            lat: 34.99
          },
          {
            lon: -73.5,
            lat: 35.64
          },
          {
            lon: -72.24,
            lat: 35.67
          },
          {
            lon: -70.98,
            lat: 36.39
          },
          {
            lon: -69.76,
            lat: 37.02
          },
          {
            lon: -70.21,
            lat: 37.27
          },
          {
            lon: -71.39,
            lat: 37.52
          },
          {
            lon: -72.16,
            lat: 37.66
          },
          {
            lon: -73.09,
            lat: 38.12
          },
          {
            lon: -73.46,
            lat: 38.01
          },
          {
            lon: -75.21,
            lat: 36.35
          },
          {
            lon: -74.72,
            lat: 34.78
          },
          {
            lon: -74.4,
            lat: 34.99
          }
        ],
        [
          {
            lon: 285.6,
            lat: 34.99
          },
          {
            lon: 286.5,
            lat: 35.64
          },
          {
            lon: 287.76,
            lat: 35.67
          },
          {
            lon: 289.02,
            lat: 36.39
          },
          {
            lon: 290.24,
            lat: 37.02
          },
          {
            lon: 289.79,
            lat: 37.27
          },
          {
            lon: 288.61,
            lat: 37.52
          },
          {
            lon: 287.84000000000003,
            lat: 37.66
          },
          {
            lon: 286.90999999999997,
            lat: 38.12
          },
          {
            lon: 286.54,
            lat: 38.01
          },
          {
            lon: 284.79,
            lat: 36.35
          },
          {
            lon: 285.28,
            lat: 34.78
          },
          {
            lon: 285.6,
            lat: 34.99
          }
        ],
        [
          {
            lon: -64.89,
            lat: 37.27
          },
          {
            lon: -63.42,
            lat: 37.45
          },
          {
            lon: -58.79,
            lat: 37.9
          },
          {
            lon: -58.22,
            lat: 38.08
          },
          {
            lon: -57.09,
            lat: 38.46
          },
          {
            lon: -56.96,
            lat: 38.5
          },
          {
            lon: -56.88,
            lat: 38.57
          },
          {
            lon: -63.38,
            lat: 38.36
          },
          {
            lon: -64.77,
            lat: 37.83
          },
          {
            lon: -64.89,
            lat: 37.69
          },
          {
            lon: -64.89,
            lat: 37.27
          }
        ],
        [
          {
            lon: 295.11,
            lat: 37.27
          },
          {
            lon: 296.58,
            lat: 37.45
          },
          {
            lon: 301.21,
            lat: 37.9
          },
          {
            lon: 301.78,
            lat: 38.08
          },
          {
            lon: 302.90999999999997,
            lat: 38.46
          },
          {
            lon: 303.04,
            lat: 38.5
          },
          {
            lon: 303.12,
            lat: 38.57
          },
          {
            lon: 296.62,
            lat: 38.36
          },
          {
            lon: 295.23,
            lat: 37.83
          },
          {
            lon: 295.11,
            lat: 37.69
          },
          {
            lon: 295.11,
            lat: 37.27
          }
        ],
        [
          {
            lon: -75.21,
            lat: 36.35
          },
          {
            lon: -78.05,
            lat: 32.93
          },
          {
            lon: -80.73,
            lat: 31.47
          },
          {
            lon: -82.81,
            lat: 30.84
          },
          {
            lon: -84.07,
            lat: 29.88
          },
          {
            lon: -87.36,
            lat: 29.32
          },
          {
            lon: -88.58,
            lat: 28.31
          },
          {
            lon: -89.59,
            lat: 27.37
          },
          {
            lon: -89.84,
            lat: 26.2
          },
          {
            lon: -87.93,
            lat: 26.31
          },
          {
            lon: -84.76,
            lat: 28.76
          },
          {
            lon: -81.22,
            lat: 29.77
          },
          {
            lon: -79.68,
            lat: 30.55
          },
          {
            lon: -77.04,
            lat: 30.81
          },
          {
            lon: -76.59,
            lat: 30.88
          },
          {
            lon: -70.98,
            lat: 35.53
          },
          {
            lon: -66.68,
            lat: 35.82
          },
          {
            lon: -64.89,
            lat: 37.27
          }
        ],
        [
          {
            lon: 284.79,
            lat: 36.35
          },
          {
            lon: 281.95,
            lat: 32.93
          },
          {
            lon: 279.27,
            lat: 31.47
          },
          {
            lon: 277.19,
            lat: 30.84
          },
          {
            lon: 275.93,
            lat: 29.88
          },
          {
            lon: 272.64,
            lat: 29.32
          },
          {
            lon: 271.42,
            lat: 28.31
          },
          {
            lon: 270.40999999999997,
            lat: 27.37
          },
          {
            lon: 270.15999999999997,
            lat: 26.2
          },
          {
            lon: 272.07,
            lat: 26.31
          },
          {
            lon: 275.24,
            lat: 28.76
          },
          {
            lon: 278.78,
            lat: 29.77
          },
          {
            lon: 280.32,
            lat: 30.55
          },
          {
            lon: 282.96,
            lat: 30.81
          },
          {
            lon: 283.40999999999997,
            lat: 30.88
          },
          {
            lon: 289.02,
            lat: 35.53
          },
          {
            lon: 293.32,
            lat: 35.82
          },
          {
            lon: 295.11,
            lat: 37.27
          }
        ],
        [
          {
            lon: -64.77,
            lat: 37.83
          },
          {
            lon: -67.04,
            lat: 37.87
          },
          {
            lon: -71.39,
            lat: 37.52
          }
        ],
        [
          {
            lon: 295.23,
            lat: 37.83
          },
          {
            lon: 292.96,
            lat: 37.87
          },
          {
            lon: 288.61,
            lat: 37.52
          }
        ],
        [
          {
            lon: -63.71,
            lat: 25.73
          },
          {
            lon: -62.33,
            lat: 26.38
          },
          {
            lon: -61.68,
            lat: 27.66
          },
          {
            lon: -63.22,
            lat: 28.08
          },
          {
            lon: -63.71,
            lat: 25.73
          }
        ],
        [
          {
            lon: 296.29,
            lat: 25.73
          },
          {
            lon: 297.67,
            lat: 26.38
          },
          {
            lon: 298.32,
            lat: 27.66
          },
          {
            lon: 296.78,
            lat: 28.08
          },
          {
            lon: 296.29,
            lat: 25.73
          }
        ],
        [
          {
            lon: -68.59,
            lat: 22.86
          },
          {
            lon: -68.51,
            lat: 21.62
          },
          {
            lon: -67.94,
            lat: 20.3
          },
          {
            lon: -66.55,
            lat: 19.95
          },
          {
            lon: -66.35,
            lat: 21.46
          },
          {
            lon: -67.57,
            lat: 23.13
          },
          {
            lon: -68.59,
            lat: 22.86
          }
        ],
        [
          {
            lon: 291.40999999999997,
            lat: 22.86
          },
          {
            lon: 291.49,
            lat: 21.62
          },
          {
            lon: 292.06,
            lat: 20.3
          },
          {
            lon: 293.45,
            lat: 19.95
          },
          {
            lon: 293.65,
            lat: 21.46
          },
          {
            lon: 292.43,
            lat: 23.13
          },
          {
            lon: 291.40999999999997,
            lat: 22.86
          }
        ],
        [
          {
            lon: 20.6,
            lat: 37.5
          },
          {
            lon: 21.19,
            lat: 36.86
          },
          {
            lon: 21.8,
            lat: 36.98
          },
          {
            lon: 22.12,
            lat: 37.19
          },
          {
            lon: 22.48,
            lat: 38.85
          },
          {
            lon: 22.48,
            lat: 39.34
          },
          {
            lon: 23.43,
            lat: 39.92
          },
          {
            lon: 23.9,
            lat: 40.42
          },
          {
            lon: 23.9,
            lat: 40.58
          },
          {
            lon: 23.73,
            lat: 41.75
          },
          {
            lon: 22.25,
            lat: 42.59
          },
          {
            lon: 21.31,
            lat: 42.95
          },
          {
            lon: 19.3,
            lat: 43.81
          },
          {
            lon: 19.91,
            lat: 42.98
          },
          {
            lon: 20.59,
            lat: 42.23
          },
          {
            lon: 19.6,
            lat: 40.62
          }
        ],
        [
          {
            lon: 380.6,
            lat: 37.5
          },
          {
            lon: 381.19,
            lat: 36.86
          },
          {
            lon: 381.8,
            lat: 36.98
          },
          {
            lon: 382.12,
            lat: 37.19
          },
          {
            lon: 382.48,
            lat: 38.85
          },
          {
            lon: 382.48,
            lat: 39.34
          },
          {
            lon: 383.43,
            lat: 39.92
          },
          {
            lon: 383.9,
            lat: 40.42
          },
          {
            lon: 383.9,
            lat: 40.58
          },
          {
            lon: 383.73,
            lat: 41.75
          },
          {
            lon: 382.25,
            lat: 42.59
          },
          {
            lon: 381.31,
            lat: 42.95
          },
          {
            lon: 379.3,
            lat: 43.81
          },
          {
            lon: 379.91,
            lat: 42.98
          },
          {
            lon: 380.59,
            lat: 42.23
          },
          {
            lon: 379.6,
            lat: 40.62
          }
        ],
        [
          {
            lon: 13.3,
            lat: 38.02
          },
          {
            lon: 11.7,
            lat: 37.78
          },
          {
            lon: 10.97,
            lat: 37.8
          },
          {
            lon: 8.83,
            lat: 39.58
          },
          {
            lon: 8.8,
            lat: 38.94
          },
          {
            lon: 9.06,
            lat: 38.05
          },
          {
            lon: 9.83,
            lat: 37.19
          },
          {
            lon: 9.95,
            lat: 37.04
          },
          {
            lon: 12.18,
            lat: 36.93
          },
          {
            lon: 14.33,
            lat: 37.37
          },
          {
            lon: 14.4,
            lat: 37.4
          },
          {
            lon: 14.59,
            lat: 37.56
          },
          {
            lon: 13.3,
            lat: 38.02
          }
        ],
        [
          {
            lon: 373.3,
            lat: 38.02
          },
          {
            lon: 371.7,
            lat: 37.78
          },
          {
            lon: 370.97,
            lat: 37.8
          },
          {
            lon: 368.83,
            lat: 39.58
          },
          {
            lon: 368.8,
            lat: 38.94
          },
          {
            lon: 369.06,
            lat: 38.05
          },
          {
            lon: 369.83,
            lat: 37.19
          },
          {
            lon: 369.95,
            lat: 37.04
          },
          {
            lon: 372.18,
            lat: 36.93
          },
          {
            lon: 374.33,
            lat: 37.37
          },
          {
            lon: 374.4,
            lat: 37.4
          },
          {
            lon: 374.59,
            lat: 37.56
          },
          {
            lon: 373.3,
            lat: 38.02
          }
        ],
        [
          {
            lon: 10.12,
            lat: 43.11
          },
          {
            lon: 10.06,
            lat: 42.87
          },
          {
            lon: 9.83,
            lat: 42.55
          },
          {
            lon: 9.81,
            lat: 42.25
          },
          {
            lon: 9.97,
            lat: 41.6
          },
          {
            lon: 10.7,
            lat: 40.69
          },
          {
            lon: 11.27,
            lat: 40.57
          },
          {
            lon: 11.57,
            lat: 40.68
          },
          {
            lon: 12.41,
            lat: 41.24
          },
          {
            lon: 13.6,
            lat: 41.44
          },
          {
            lon: 13.66,
            lat: 41.45
          },
          {
            lon: 15.23,
            lat: 41.7
          },
          {
            lon: 15.45,
            lat: 41.77
          },
          {
            lon: 15.54,
            lat: 41.83
          },
          {
            lon: 15.55,
            lat: 41.92
          },
          {
            lon: 16.07,
            lat: 42.37
          },
          {
            lon: 14.75,
            lat: 42.94
          },
          {
            lon: 13.93,
            lat: 43.01
          },
          {
            lon: 13.79,
            lat: 43.11
          },
          {
            lon: 13.45,
            lat: 43.67
          },
          {
            lon: 13.03,
            lat: 43.39
          },
          {
            lon: 13.24,
            lat: 42.78
          },
          {
            lon: 12.81,
            lat: 42.43
          },
          {
            lon: 12.04,
            lat: 42.36
          },
          {
            lon: 11.52,
            lat: 42.46
          },
          {
            lon: 10.14,
            lat: 43.36
          },
          {
            lon: 10.12,
            lat: 43.11
          }
        ],
        [
          {
            lon: 370.12,
            lat: 43.11
          },
          {
            lon: 370.06,
            lat: 42.87
          },
          {
            lon: 369.83,
            lat: 42.55
          },
          {
            lon: 369.81,
            lat: 42.25
          },
          {
            lon: 369.97,
            lat: 41.6
          },
          {
            lon: 370.7,
            lat: 40.69
          },
          {
            lon: 371.27,
            lat: 40.57
          },
          {
            lon: 371.57,
            lat: 40.68
          },
          {
            lon: 372.41,
            lat: 41.24
          },
          {
            lon: 373.6,
            lat: 41.44
          },
          {
            lon: 373.66,
            lat: 41.45
          },
          {
            lon: 375.23,
            lat: 41.7
          },
          {
            lon: 375.45,
            lat: 41.77
          },
          {
            lon: 375.54,
            lat: 41.83
          },
          {
            lon: 375.55,
            lat: 41.92
          },
          {
            lon: 376.07,
            lat: 42.37
          },
          {
            lon: 374.75,
            lat: 42.94
          },
          {
            lon: 373.93,
            lat: 43.01
          },
          {
            lon: 373.79,
            lat: 43.11
          },
          {
            lon: 373.45,
            lat: 43.67
          },
          {
            lon: 373.03,
            lat: 43.39
          },
          {
            lon: 373.24,
            lat: 42.78
          },
          {
            lon: 372.81,
            lat: 42.43
          },
          {
            lon: 372.04,
            lat: 42.36
          },
          {
            lon: 371.52,
            lat: 42.46
          },
          {
            lon: 370.14,
            lat: 43.36
          },
          {
            lon: 370.12,
            lat: 43.11
          }
        ],
        [
          {
            lon: 25.23,
            lat: 48.44
          },
          {
            lon: 25.64,
            lat: 48.94
          },
          {
            lon: 24.81,
            lat: 50.22
          },
          {
            lon: 24.91,
            lat: 52.11
          },
          {
            lon: 25.99,
            lat: 54.32
          },
          {
            lon: 27.76,
            lat: 56.07
          },
          {
            lon: 27.5,
            lat: 57.15
          },
          {
            lon: 25.93,
            lat: 57.42
          },
          {
            lon: 25.51,
            lat: 56
          },
          {
            lon: 23.11,
            lat: 50.3
          },
          {
            lon: 23.18,
            lat: 50.03
          },
          {
            lon: 24.36,
            lat: 48.67
          },
          {
            lon: 25.23,
            lat: 48.44
          }
        ],
        [
          {
            lon: 385.23,
            lat: 48.44
          },
          {
            lon: 385.64,
            lat: 48.94
          },
          {
            lon: 384.81,
            lat: 50.22
          },
          {
            lon: 384.91,
            lat: 52.11
          },
          {
            lon: 385.99,
            lat: 54.32
          },
          {
            lon: 387.76,
            lat: 56.07
          },
          {
            lon: 387.5,
            lat: 57.15
          },
          {
            lon: 385.93,
            lat: 57.42
          },
          {
            lon: 385.51,
            lat: 56
          },
          {
            lon: 383.11,
            lat: 50.3
          },
          {
            lon: 383.18,
            lat: 50.03
          },
          {
            lon: 384.36,
            lat: 48.67
          },
          {
            lon: 385.23,
            lat: 48.44
          }
        ],
        [
          {
            lon: 28.24,
            lat: 48.69
          },
          {
            lon: 29.88,
            lat: 48.1
          },
          {
            lon: 30.67,
            lat: 47.74
          },
          {
            lon: 30.99,
            lat: 46.88
          },
          {
            lon: 32.2,
            lat: 46.14
          },
          {
            lon: 34.2,
            lat: 45.59
          },
          {
            lon: 34.54,
            lat: 45.65
          },
          {
            lon: 35.12,
            lat: 46.32
          },
          {
            lon: 35.15,
            lat: 46.75
          },
          {
            lon: 36.9,
            lat: 46.91
          },
          {
            lon: 36.72,
            lat: 47.59
          },
          {
            lon: 35.28,
            lat: 48.52
          },
          {
            lon: 33.81,
            lat: 49.56
          },
          {
            lon: 32.88,
            lat: 50.51
          },
          {
            lon: 31.05,
            lat: 50.56
          },
          {
            lon: 29,
            lat: 50.12
          },
          {
            lon: 28.24,
            lat: 48.69
          }
        ],
        [
          {
            lon: 388.24,
            lat: 48.69
          },
          {
            lon: 389.88,
            lat: 48.1
          },
          {
            lon: 390.67,
            lat: 47.74
          },
          {
            lon: 390.99,
            lat: 46.88
          },
          {
            lon: 392.2,
            lat: 46.14
          },
          {
            lon: 394.2,
            lat: 45.59
          },
          {
            lon: 394.54,
            lat: 45.65
          },
          {
            lon: 395.12,
            lat: 46.32
          },
          {
            lon: 395.15,
            lat: 46.75
          },
          {
            lon: 396.9,
            lat: 46.91
          },
          {
            lon: 396.72,
            lat: 47.59
          },
          {
            lon: 395.28,
            lat: 48.52
          },
          {
            lon: 393.81,
            lat: 49.56
          },
          {
            lon: 392.88,
            lat: 50.51
          },
          {
            lon: 391.05,
            lat: 50.56
          },
          {
            lon: 389,
            lat: 50.12
          },
          {
            lon: 388.24,
            lat: 48.69
          }
        ],
        [
          {
            lon: 13.66,
            lat: 41.45
          },
          {
            lon: 15.02,
            lat: 40.31
          },
          {
            lon: 16.21,
            lat: 39.27
          },
          {
            lon: 15.99,
            lat: 38.71
          },
          {
            lon: 15.68,
            lat: 38.3
          },
          {
            lon: 15.33,
            lat: 37.94
          },
          {
            lon: 15.84,
            lat: 37.94
          },
          {
            lon: 16.23,
            lat: 38.04
          },
          {
            lon: 17.25,
            lat: 38.94
          },
          {
            lon: 17.28,
            lat: 39.85
          },
          {
            lon: 17.6,
            lat: 40.28
          },
          {
            lon: 19.97,
            lat: 39.19
          },
          {
            lon: 20.14,
            lat: 38.07
          },
          {
            lon: 20.6,
            lat: 37.5
          }
        ],
        [
          {
            lon: 373.66,
            lat: 41.45
          },
          {
            lon: 375.02,
            lat: 40.31
          },
          {
            lon: 376.21,
            lat: 39.27
          },
          {
            lon: 375.99,
            lat: 38.71
          },
          {
            lon: 375.68,
            lat: 38.3
          },
          {
            lon: 375.33,
            lat: 37.94
          },
          {
            lon: 375.84,
            lat: 37.94
          },
          {
            lon: 376.23,
            lat: 38.04
          },
          {
            lon: 377.25,
            lat: 38.94
          },
          {
            lon: 377.28,
            lat: 39.85
          },
          {
            lon: 377.6,
            lat: 40.28
          },
          {
            lon: 379.97,
            lat: 39.19
          },
          {
            lon: 380.14,
            lat: 38.07
          },
          {
            lon: 380.6,
            lat: 37.5
          }
        ],
        [
          {
            lon: 20.6,
            lat: 37.5
          },
          {
            lon: 20.6,
            lat: 38.59
          },
          {
            lon: 19.86,
            lat: 40.29
          },
          {
            lon: 19.6,
            lat: 40.62
          },
          {
            lon: 17.76,
            lat: 41.46
          },
          {
            lon: 17.6,
            lat: 41.55
          },
          {
            lon: 17.06,
            lat: 41.57
          },
          {
            lon: 16.48,
            lat: 42.01
          },
          {
            lon: 15.54,
            lat: 41.83
          }
        ],
        [
          {
            lon: 380.6,
            lat: 37.5
          },
          {
            lon: 380.6,
            lat: 38.59
          },
          {
            lon: 379.86,
            lat: 40.29
          },
          {
            lon: 379.6,
            lat: 40.62
          },
          {
            lon: 377.76,
            lat: 41.46
          },
          {
            lon: 377.6,
            lat: 41.55
          },
          {
            lon: 377.06,
            lat: 41.57
          },
          {
            lon: 376.48,
            lat: 42.01
          },
          {
            lon: 375.54,
            lat: 41.83
          }
        ],
        [
          {
            lon: 39.69,
            lat: 54.8
          },
          {
            lon: 38.75,
            lat: 56.03
          },
          {
            lon: 38.91,
            lat: 56.98
          },
          {
            lon: 42.45,
            lat: 56.62
          },
          {
            lon: 43.32,
            lat: 57.38
          },
          {
            lon: 43.65,
            lat: 58.14
          },
          {
            lon: 43.29,
            lat: 59.21
          },
          {
            lon: 40.47,
            lat: 59.91
          },
          {
            lon: 39.05,
            lat: 59.5
          },
          {
            lon: 38.23,
            lat: 59.03
          },
          {
            lon: 37.66,
            lat: 57.71
          },
          {
            lon: 36.04,
            lat: 56.39
          },
          {
            lon: 35.94,
            lat: 56.25
          },
          {
            lon: 35.08,
            lat: 51.67
          },
          {
            lon: 37.03,
            lat: 51.45
          },
          {
            lon: 37.71,
            lat: 51.77
          },
          {
            lon: 39.46,
            lat: 51.29
          },
          {
            lon: 41.05,
            lat: 50.82
          },
          {
            lon: 41.36,
            lat: 50.86
          },
          {
            lon: 41.28,
            lat: 51.15
          },
          {
            lon: 39.17,
            lat: 53.66
          },
          {
            lon: 39.69,
            lat: 54.8
          }
        ],
        [
          {
            lon: 399.69,
            lat: 54.8
          },
          {
            lon: 398.75,
            lat: 56.03
          },
          {
            lon: 398.90999999999997,
            lat: 56.98
          },
          {
            lon: 402.45,
            lat: 56.62
          },
          {
            lon: 403.32,
            lat: 57.38
          },
          {
            lon: 403.65,
            lat: 58.14
          },
          {
            lon: 403.29,
            lat: 59.21
          },
          {
            lon: 400.47,
            lat: 59.91
          },
          {
            lon: 399.05,
            lat: 59.5
          },
          {
            lon: 398.23,
            lat: 59.03
          },
          {
            lon: 397.65999999999997,
            lat: 57.71
          },
          {
            lon: 396.04,
            lat: 56.39
          },
          {
            lon: 395.94,
            lat: 56.25
          },
          {
            lon: 395.08,
            lat: 51.67
          },
          {
            lon: 397.03,
            lat: 51.45
          },
          {
            lon: 397.71,
            lat: 51.77
          },
          {
            lon: 399.46,
            lat: 51.29
          },
          {
            lon: 401.05,
            lat: 50.82
          },
          {
            lon: 401.36,
            lat: 50.86
          },
          {
            lon: 401.28,
            lat: 51.15
          },
          {
            lon: 399.17,
            lat: 53.66
          },
          {
            lon: 399.69,
            lat: 54.8
          }
        ],
        [
          {
            lon: 41.05,
            lat: 50.82
          },
          {
            lon: 43.6,
            lat: 48.71
          },
          {
            lon: 45.59,
            lat: 47.49
          },
          {
            lon: 47.14,
            lat: 48.68
          },
          {
            lon: 49.13,
            lat: 47.62
          },
          {
            lon: 49.4,
            lat: 48.58
          },
          {
            lon: 49.56,
            lat: 49.14
          },
          {
            lon: 46.08,
            lat: 49.83
          },
          {
            lon: 42.47,
            lat: 50.87
          },
          {
            lon: 42.37,
            lat: 50.95
          },
          {
            lon: 41.28,
            lat: 51.15
          }
        ],
        [
          {
            lon: 401.05,
            lat: 50.82
          },
          {
            lon: 403.6,
            lat: 48.71
          },
          {
            lon: 405.59000000000003,
            lat: 47.49
          },
          {
            lon: 407.14,
            lat: 48.68
          },
          {
            lon: 409.13,
            lat: 47.62
          },
          {
            lon: 409.4,
            lat: 48.58
          },
          {
            lon: 409.56,
            lat: 49.14
          },
          {
            lon: 406.08,
            lat: 49.83
          },
          {
            lon: 402.47,
            lat: 50.87
          },
          {
            lon: 402.37,
            lat: 50.95
          },
          {
            lon: 401.28,
            lat: 51.15
          }
        ],
        [
          {
            lon: 46.15,
            lat: 53.32
          },
          {
            lon: 47.14,
            lat: 53.08
          },
          {
            lon: 50.26,
            lat: 52.66
          },
          {
            lon: 51.85,
            lat: 53.34
          },
          {
            lon: 52.51,
            lat: 54.56
          },
          {
            lon: 48.5,
            lat: 54.43
          },
          {
            lon: 48.2,
            lat: 54.43
          },
          {
            lon: 44.63,
            lat: 53.54
          },
          {
            lon: 46.15,
            lat: 53.32
          }
        ],
        [
          {
            lon: 406.15,
            lat: 53.32
          },
          {
            lon: 407.14,
            lat: 53.08
          },
          {
            lon: 410.26,
            lat: 52.66
          },
          {
            lon: 411.85,
            lat: 53.34
          },
          {
            lon: 412.51,
            lat: 54.56
          },
          {
            lon: 408.5,
            lat: 54.43
          },
          {
            lon: 408.2,
            lat: 54.43
          },
          {
            lon: 404.63,
            lat: 53.54
          },
          {
            lon: 406.15,
            lat: 53.32
          }
        ],
        [
          {
            lon: 57.85,
            lat: 54.53
          },
          {
            lon: 57.05,
            lat: 53.37
          },
          {
            lon: 57.32,
            lat: 51.67
          },
          {
            lon: 59.24,
            lat: 52.93
          },
          {
            lon: 60.8,
            lat: 54.58
          },
          {
            lon: 60.6,
            lat: 55.72
          },
          {
            lon: 57.95,
            lat: 54.58
          },
          {
            lon: 57.85,
            lat: 54.53
          }
        ],
        [
          {
            lon: 417.85,
            lat: 54.53
          },
          {
            lon: 417.05,
            lat: 53.37
          },
          {
            lon: 417.32,
            lat: 51.67
          },
          {
            lon: 419.24,
            lat: 52.93
          },
          {
            lon: 420.8,
            lat: 54.58
          },
          {
            lon: 420.6,
            lat: 55.72
          },
          {
            lon: 417.95,
            lat: 54.58
          },
          {
            lon: 417.85,
            lat: 54.53
          }
        ],
        [
          {
            lon: 52.26,
            lat: 58.97
          },
          {
            lon: 53.93,
            lat: 58.88
          },
          {
            lon: 55.98,
            lat: 59.78
          },
          {
            lon: 55.55,
            lat: 60.8
          },
          {
            lon: 55.43,
            lat: 61.11
          },
          {
            lon: 55.65,
            lat: 62.33
          },
          {
            lon: 55.6,
            lat: 63.92
          },
          {
            lon: 53.41,
            lat: 62.83
          },
          {
            lon: 54.14,
            lat: 60.8
          },
          {
            lon: 52.17,
            lat: 59.89
          },
          {
            lon: 52.05,
            lat: 59.58
          },
          {
            lon: 52.26,
            lat: 58.97
          }
        ],
        [
          {
            lon: 412.26,
            lat: 58.97
          },
          {
            lon: 413.93,
            lat: 58.88
          },
          {
            lon: 415.98,
            lat: 59.78
          },
          {
            lon: 415.55,
            lat: 60.8
          },
          {
            lon: 415.43,
            lat: 61.11
          },
          {
            lon: 415.65,
            lat: 62.33
          },
          {
            lon: 415.6,
            lat: 63.92
          },
          {
            lon: 413.40999999999997,
            lat: 62.83
          },
          {
            lon: 414.14,
            lat: 60.8
          },
          {
            lon: 412.17,
            lat: 59.89
          },
          {
            lon: 412.05,
            lat: 59.58
          },
          {
            lon: 412.26,
            lat: 58.97
          }
        ],
        [
          {
            lon: 49.44,
            lat: 33.62
          },
          {
            lon: 49.8,
            lat: 32.7
          },
          {
            lon: 51.22,
            lat: 31.09
          },
          {
            lon: 53.33,
            lat: 28.94
          },
          {
            lon: 55.07,
            lat: 28.62
          },
          {
            lon: 57.89,
            lat: 28.12
          },
          {
            lon: 60.56,
            lat: 28.35
          },
          {
            lon: 61.38,
            lat: 27
          },
          {
            lon: 64.06,
            lat: 26.03
          },
          {
            lon: 63.59,
            lat: 27.66
          },
          {
            lon: 62.34,
            lat: 28.16
          },
          {
            lon: 61.49,
            lat: 28.81
          },
          {
            lon: 60.02,
            lat: 30.77
          },
          {
            lon: 59.97,
            lat: 32.53
          },
          {
            lon: 57.7,
            lat: 33.11
          },
          {
            lon: 56.46,
            lat: 33.24
          },
          {
            lon: 55.75,
            lat: 33.4
          },
          {
            lon: 53.72,
            lat: 33.81
          },
          {
            lon: 49.62,
            lat: 33.81
          },
          {
            lon: 49.44,
            lat: 33.62
          }
        ],
        [
          {
            lon: 409.44,
            lat: 33.62
          },
          {
            lon: 409.8,
            lat: 32.7
          },
          {
            lon: 411.22,
            lat: 31.09
          },
          {
            lon: 413.33,
            lat: 28.94
          },
          {
            lon: 415.07,
            lat: 28.62
          },
          {
            lon: 417.89,
            lat: 28.12
          },
          {
            lon: 420.56,
            lat: 28.35
          },
          {
            lon: 421.38,
            lat: 27
          },
          {
            lon: 424.06,
            lat: 26.03
          },
          {
            lon: 423.59000000000003,
            lat: 27.66
          },
          {
            lon: 422.34000000000003,
            lat: 28.16
          },
          {
            lon: 421.49,
            lat: 28.81
          },
          {
            lon: 420.02,
            lat: 30.77
          },
          {
            lon: 419.97,
            lat: 32.53
          },
          {
            lon: 417.7,
            lat: 33.11
          },
          {
            lon: 416.46,
            lat: 33.24
          },
          {
            lon: 415.75,
            lat: 33.4
          },
          {
            lon: 413.72,
            lat: 33.81
          },
          {
            lon: 409.62,
            lat: 33.81
          },
          {
            lon: 409.44,
            lat: 33.62
          }
        ],
        [
          {
            lon: 40.85,
            lat: 21.04
          },
          {
            lon: 41.86,
            lat: 21.19
          },
          {
            lon: 42.19,
            lat: 21.97
          },
          {
            lon: 42.43,
            lat: 22.51
          },
          {
            lon: 43.93,
            lat: 23.43
          },
          {
            lon: 45.83,
            lat: 24.04
          },
          {
            lon: 45.14,
            lat: 24.96
          },
          {
            lon: 44.9,
            lat: 25.07
          },
          {
            lon: 43.72,
            lat: 25.53
          },
          {
            lon: 43.28,
            lat: 28.13
          },
          {
            lon: 42.87,
            lat: 27.53
          },
          {
            lon: 41.54,
            lat: 24.92
          },
          {
            lon: 40.12,
            lat: 24.42
          },
          {
            lon: 40.65,
            lat: 21.19
          },
          {
            lon: 40.85,
            lat: 21.04
          }
        ],
        [
          {
            lon: 400.85,
            lat: 21.04
          },
          {
            lon: 401.86,
            lat: 21.19
          },
          {
            lon: 402.19,
            lat: 21.97
          },
          {
            lon: 402.43,
            lat: 22.51
          },
          {
            lon: 403.93,
            lat: 23.43
          },
          {
            lon: 405.83,
            lat: 24.04
          },
          {
            lon: 405.14,
            lat: 24.96
          },
          {
            lon: 404.9,
            lat: 25.07
          },
          {
            lon: 403.72,
            lat: 25.53
          },
          {
            lon: 403.28,
            lat: 28.13
          },
          {
            lon: 402.87,
            lat: 27.53
          },
          {
            lon: 401.54,
            lat: 24.92
          },
          {
            lon: 400.12,
            lat: 24.42
          },
          {
            lon: 400.65,
            lat: 21.19
          },
          {
            lon: 400.85,
            lat: 21.04
          }
        ],
        [
          {
            lon: 75.57,
            lat: 34.52
          },
          {
            lon: 77.11,
            lat: 34.45
          },
          {
            lon: 77.68,
            lat: 35.91
          },
          {
            lon: 80.23,
            lat: 35.27
          },
          {
            lon: 80.67,
            lat: 35.16
          },
          {
            lon: 84.64,
            lat: 34.09
          },
          {
            lon: 83.95,
            lat: 35.91
          },
          {
            lon: 85.13,
            lat: 36.69
          },
          {
            lon: 87.03,
            lat: 37.57
          },
          {
            lon: 87.55,
            lat: 37.67
          },
          {
            lon: 88.32,
            lat: 38.16
          },
          {
            lon: 87.88,
            lat: 38.61
          },
          {
            lon: 85.37,
            lat: 37.67
          },
          {
            lon: 83.51,
            lat: 36.48
          },
          {
            lon: 83.3,
            lat: 36.44
          },
          {
            lon: 81.64,
            lat: 36.48
          },
          {
            lon: 78.2,
            lat: 37.18
          },
          {
            lon: 76.3,
            lat: 37.25
          },
          {
            lon: 74.96,
            lat: 36.94
          },
          {
            lon: 74.44,
            lat: 35.38
          },
          {
            lon: 75.37,
            lat: 34.73
          },
          {
            lon: 75.61,
            lat: 34.52
          },
          {
            lon: 75.57,
            lat: 34.52
          }
        ],
        [
          {
            lon: 435.57,
            lat: 34.52
          },
          {
            lon: 437.11,
            lat: 34.45
          },
          {
            lon: 437.68,
            lat: 35.91
          },
          {
            lon: 440.23,
            lat: 35.27
          },
          {
            lon: 440.67,
            lat: 35.16
          },
          {
            lon: 444.64,
            lat: 34.09
          },
          {
            lon: 443.95,
            lat: 35.91
          },
          {
            lon: 445.13,
            lat: 36.69
          },
          {
            lon: 447.03,
            lat: 37.57
          },
          {
            lon: 447.55,
            lat: 37.67
          },
          {
            lon: 448.32,
            lat: 38.16
          },
          {
            lon: 447.88,
            lat: 38.61
          },
          {
            lon: 445.37,
            lat: 37.67
          },
          {
            lon: 443.51,
            lat: 36.48
          },
          {
            lon: 443.3,
            lat: 36.44
          },
          {
            lon: 441.64,
            lat: 36.48
          },
          {
            lon: 438.2,
            lat: 37.18
          },
          {
            lon: 436.3,
            lat: 37.25
          },
          {
            lon: 434.96,
            lat: 36.94
          },
          {
            lon: 434.44,
            lat: 35.38
          },
          {
            lon: 435.37,
            lat: 34.73
          },
          {
            lon: 435.61,
            lat: 34.52
          },
          {
            lon: 435.57,
            lat: 34.52
          }
        ],
        [
          {
            lon: 92.42,
            lat: 33.9
          },
          {
            lon: 92.95,
            lat: 33.47
          },
          {
            lon: 91.86,
            lat: 30.33
          },
          {
            lon: 96.88,
            lat: 28.81
          },
          {
            lon: 95.18,
            lat: 31.65
          },
          {
            lon: 98.62,
            lat: 31.43
          },
          {
            lon: 99.83,
            lat: 31.4
          },
          {
            lon: 95.91,
            lat: 33.4
          },
          {
            lon: 100.16,
            lat: 33.51
          },
          {
            lon: 102.14,
            lat: 34.01
          },
          {
            lon: 102.02,
            lat: 36.58
          },
          {
            lon: 100.81,
            lat: 37.21
          },
          {
            lon: 100.12,
            lat: 37.95
          },
          {
            lon: 98.98,
            lat: 37.33
          },
          {
            lon: 97.28,
            lat: 35.44
          },
          {
            lon: 94.25,
            lat: 34.52
          },
          {
            lon: 92.55,
            lat: 34.05
          },
          {
            lon: 92.42,
            lat: 33.9
          }
        ],
        [
          {
            lon: 452.42,
            lat: 33.9
          },
          {
            lon: 452.95,
            lat: 33.47
          },
          {
            lon: 451.86,
            lat: 30.33
          },
          {
            lon: 456.88,
            lat: 28.81
          },
          {
            lon: 455.18,
            lat: 31.65
          },
          {
            lon: 458.62,
            lat: 31.43
          },
          {
            lon: 459.83,
            lat: 31.4
          },
          {
            lon: 455.90999999999997,
            lat: 33.4
          },
          {
            lon: 460.15999999999997,
            lat: 33.51
          },
          {
            lon: 462.14,
            lat: 34.01
          },
          {
            lon: 462.02,
            lat: 36.58
          },
          {
            lon: 460.81,
            lat: 37.21
          },
          {
            lon: 460.12,
            lat: 37.95
          },
          {
            lon: 458.98,
            lat: 37.33
          },
          {
            lon: 457.28,
            lat: 35.44
          },
          {
            lon: 454.25,
            lat: 34.52
          },
          {
            lon: 452.55,
            lat: 34.05
          },
          {
            lon: 452.42,
            lat: 33.9
          }
        ],
        [
          {
            lon: 76.27,
            lat: 30.11
          },
          {
            lon: 75.54,
            lat: 30.92
          },
          {
            lon: 72.51,
            lat: 30.44
          },
          {
            lon: 72.18,
            lat: 27.72
          },
          {
            lon: 73.77,
            lat: 26.37
          },
          {
            lon: 75.87,
            lat: 26.56
          },
          {
            lon: 77.01,
            lat: 27.42
          },
          {
            lon: 73.44,
            lat: 27.61
          },
          {
            lon: 73.15,
            lat: 29.4
          },
          {
            lon: 75.5,
            lat: 29.96
          },
          {
            lon: 76.27,
            lat: 30.11
          }
        ],
        [
          {
            lon: 436.27,
            lat: 30.11
          },
          {
            lon: 435.54,
            lat: 30.92
          },
          {
            lon: 432.51,
            lat: 30.44
          },
          {
            lon: 432.18,
            lat: 27.72
          },
          {
            lon: 433.77,
            lat: 26.37
          },
          {
            lon: 435.87,
            lat: 26.56
          },
          {
            lon: 437.01,
            lat: 27.42
          },
          {
            lon: 433.44,
            lat: 27.61
          },
          {
            lon: 433.15,
            lat: 29.4
          },
          {
            lon: 435.5,
            lat: 29.96
          },
          {
            lon: 436.27,
            lat: 30.11
          }
        ],
        [
          {
            lon: 86.31,
            lat: 27.46
          },
          {
            lon: 85.66,
            lat: 27.16
          },
          {
            lon: 86.15,
            lat: 25.8
          },
          {
            lon: 86.88,
            lat: 23.28
          },
          {
            lon: 89.49,
            lat: 23.85
          },
          {
            lon: 88.34,
            lat: 25.53
          },
          {
            lon: 91.09,
            lat: 25.61
          },
          {
            lon: 90.89,
            lat: 26.33
          },
          {
            lon: 89.23,
            lat: 26.85
          },
          {
            lon: 86.31,
            lat: 27.46
          }
        ],
        [
          {
            lon: 446.31,
            lat: 27.46
          },
          {
            lon: 445.65999999999997,
            lat: 27.16
          },
          {
            lon: 446.15,
            lat: 25.8
          },
          {
            lon: 446.88,
            lat: 23.28
          },
          {
            lon: 449.49,
            lat: 23.85
          },
          {
            lon: 448.34000000000003,
            lat: 25.53
          },
          {
            lon: 451.09000000000003,
            lat: 25.61
          },
          {
            lon: 450.89,
            lat: 26.33
          },
          {
            lon: 449.23,
            lat: 26.85
          },
          {
            lon: 446.31,
            lat: 27.46
          }
        ],
        [
          {
            lon: 123.83,
            lat: 18.66
          },
          {
            lon: 124.16,
            lat: 18.07
          },
          {
            lon: 129.1,
            lat: 18.82
          },
          {
            lon: 133.15,
            lat: 19.72
          },
          {
            lon: 130.43,
            lat: 20.49
          },
          {
            lon: 128.33,
            lat: 19.68
          },
          {
            lon: 123.92,
            lat: 19.13
          },
          {
            lon: 123.83,
            lat: 18.66
          }
        ],
        [
          {
            lon: 483.83,
            lat: 18.66
          },
          {
            lon: 484.15999999999997,
            lat: 18.07
          },
          {
            lon: 489.1,
            lat: 18.82
          },
          {
            lon: 493.15,
            lat: 19.72
          },
          {
            lon: 490.43,
            lat: 20.49
          },
          {
            lon: 488.33000000000004,
            lat: 19.68
          },
          {
            lon: 483.92,
            lat: 19.13
          },
          {
            lon: 483.83,
            lat: 18.66
          }
        ],
        [
          {
            lon: 135.05,
            lat: 18.98
          },
          {
            lon: 135.13,
            lat: 18.47
          },
          {
            lon: 137.2,
            lat: 18.11
          },
          {
            lon: 138.85,
            lat: 16.98
          },
          {
            lon: 141.08,
            lat: 17.76
          },
          {
            lon: 141.12,
            lat: 17.88
          },
          {
            lon: 140.19,
            lat: 18.98
          },
          {
            lon: 135.94,
            lat: 19.17
          },
          {
            lon: 135.54,
            lat: 19.25
          },
          {
            lon: 135.05,
            lat: 18.98
          }
        ],
        [
          {
            lon: 495.05,
            lat: 18.98
          },
          {
            lon: 495.13,
            lat: 18.47
          },
          {
            lon: 497.2,
            lat: 18.11
          },
          {
            lon: 498.85,
            lat: 16.98
          },
          {
            lon: 501.08000000000004,
            lat: 17.76
          },
          {
            lon: 501.12,
            lat: 17.88
          },
          {
            lon: 500.19,
            lat: 18.98
          },
          {
            lon: 495.94,
            lat: 19.17
          },
          {
            lon: 495.53999999999996,
            lat: 19.25
          },
          {
            lon: 495.05,
            lat: 18.98
          }
        ],
        [
          {
            lon: 146.28,
            lat: 20.27
          },
          {
            lon: 147.98,
            lat: 20.73
          },
          {
            lon: 159.19,
            lat: 24.54
          },
          {
            lon: 160.41,
            lat: 25.95
          },
          {
            lon: 160.97,
            lat: 26.67
          },
          {
            lon: 158.46,
            lat: 26.21
          },
          {
            lon: 152.84,
            lat: 23.55
          },
          {
            lon: 148.62,
            lat: 22.36
          },
          {
            lon: 146.28,
            lat: 20.89
          },
          {
            lon: 146.28,
            lat: 20.27
          }
        ],
        [
          {
            lon: 506.28,
            lat: 20.27
          },
          {
            lon: 507.98,
            lat: 20.73
          },
          {
            lon: 519.19,
            lat: 24.54
          },
          {
            lon: 520.41,
            lat: 25.95
          },
          {
            lon: 520.97,
            lat: 26.67
          },
          {
            lon: 518.46,
            lat: 26.21
          },
          {
            lon: 512.84,
            lat: 23.55
          },
          {
            lon: 508.62,
            lat: 22.36
          },
          {
            lon: 506.28,
            lat: 20.89
          },
          {
            lon: 506.28,
            lat: 20.27
          }
        ],
        [
          {
            lon: -108.55,
            lat: 30.92
          },
          {
            lon: -106.89,
            lat: 31.21
          },
          {
            lon: -105.79,
            lat: 31.58
          },
          {
            lon: -104.7,
            lat: 31.21
          },
          {
            lon: -104.05,
            lat: 31.39
          },
          {
            lon: -105.35,
            lat: 32.05
          },
          {
            lon: -107.57,
            lat: 32.35
          },
          {
            lon: -109.68,
            lat: 31.69
          },
          {
            lon: -108.55,
            lat: 30.92
          }
        ],
        [
          {
            lon: 251.45,
            lat: 30.92
          },
          {
            lon: 253.11,
            lat: 31.21
          },
          {
            lon: 254.20999999999998,
            lat: 31.58
          },
          {
            lon: 255.3,
            lat: 31.21
          },
          {
            lon: 255.95,
            lat: 31.39
          },
          {
            lon: 254.65,
            lat: 32.05
          },
          {
            lon: 252.43,
            lat: 32.35
          },
          {
            lon: 250.32,
            lat: 31.69
          },
          {
            lon: 251.45,
            lat: 30.92
          }
        ]
      ];
    }
  }
};
</script>

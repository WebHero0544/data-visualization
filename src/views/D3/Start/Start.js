import * as d3 from 'd3';

export default {
    name: 'd3-start',
    data() {
        return {

        }
    },
    mounted() {
        console.log(d3)
        this.initSvg()
    },

    methods: {
        initSvg() {
            this.svg = d3.select("#box")
                .append("svg")
                .attr("width", 800)
                .attr("height", 400);
            const bg = this.svg.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 800)
                .attr('height', 400)
                .attr('fill', '#eee')

            const dataset = [];

            for (let i = 0, leng = 100; i < 100; i++) {
                dataset.push({
                    x: Math.floor(Math.random() * 801),
                    y: Math.floor(Math.random() * 401),
                })
            }




            this.svg.selectAll('circle')
                .data(dataset)
                .enter()
                .append("circle")
                .style("stroke", "gray")
                .style("fill", "white")
                .attr("r", 40)
                .attr("cx", function (d) { return d.x })
                .attr("cy", function (d) { return d.y })
                .on("mouseover", function () { d3.select(this).style("fill", "aliceblue"); })
                .on("mouseout", function () { d3.select(this).style("fill", "white"); })
                .on("mousedown", animate);

            function animate() {
                d3.select(this)

                    .transition()
                    .duration(1000)
                    .attr("r", 10)
                    .attr("cx", function (d) { return d.x + 100 })
                    .attr("cy", function (d) { return d.y + 100 })

                    .transition()
                    .duration(1000)
                    .attr("r", 40)
                    .attr("cx", function (d) { return d.x + 100 })
                    .attr("cy", function (d) { return d.y + 200 })

                    .transition()
                    .duration(1000)
                    .attr("r", 10)
                    .attr("cx", function (d) { return d.x + 200 })
                    .attr("cy", function (d) { return d.y + 200 })

                    .transition()
                    .duration(1000)
                    .attr("r", 40)
                    .attr("cx", function (d) { return d.x + 200 })
                    .attr("cy", function (d) { return d.y + 100 })

                    .transition()
                    .duration(1000)
                    .attr("r", 10)
                    .attr("cx", function (d) { return d.x + 100 })
                    .attr("cy", function (d) { return d.y + 100 })

                    .transition()
                    .duration(1000)
                    .attr("r", 40)
                    .attr("cx", function (d) { return d.x })
                    .attr("cy", function (d) { return d.y })
            }
        }
    }
}
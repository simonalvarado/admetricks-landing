<template>
  <div class="dollar-graphic">
    <div class="pb-5">
      <div class="dollar-graphic__content col-12 mb-4">
        <h2 class="text-center">Variación diaria del dólar</h2>
        <p class="text-center">(en pesos chilenos, en el último mes)</p>
      </div>
      <div class="dollar-graphic__image pt-4 col-12 text-center">
        <svg class="dollar-graphic__image-desktop" ref="chartDesktop"></svg>
        <svg class="dollar-graphic__image-mobile" ref="chartMobile"></svg>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { getDollarData } from "../api/dollarApi";

export default {
  name: "DollarGraphic",
  data() {
    return {
      dollarData: null,
    };
  },
  async mounted() {
    try {
      this.dollarData = await getDollarData();
      console.log(this.dollarData);
      this.drawChart(this.$refs.chartDesktop, 900, 500);
      this.drawChart(this.$refs.chartMobile, 360, 300);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    drawChart(chartRef, chartWidth, chartHeight) {
      if (!this.dollarData) {
        return;
      }

      // Reverse the data to have the most recent data first.
      const data = [...this.dollarData.serie].reverse();

      // Obtain the dates and variations from the data.
      const { dates, variations } = data.reduce(
        (acc, item, index, array) => {
          if (index === 0) {
            acc.dates.push(new Date(item.fecha));
            acc.variations.push(0);
          } else {
            acc.dates.push(new Date(item.fecha));
            acc.variations.push(item.valor - array[index - 1].valor);
          }
          return acc;
        },
        { dates: [], variations: [] }
      );

      // Declare the chart dimensions and margins.
      const width = chartWidth;
      const height = chartHeight;
      const margin = { top: 20, bottom: 50, left: 30, right: 20 };
      // Declare the x (horizontal position) scale.
      const x = d3
        .scaleTime()
        .domain(d3.extent(dates))
        .range([margin.left, width - margin.right]);

      // Declare the y (vertical position) scale.
      const y = d3
        .scaleLinear()
        .domain(d3.extent(variations))
        .range([height - margin.bottom, margin.top]);

      // Declare the line generator.
      const line = d3
        .line()
        .x((d, i) => x(dates[i]))
        .y((d) => y(d));

      // Create the SVG container.
      const svg = d3
        .select(chartRef)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

      // Add the x-axis.
      svg
        .append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .attr("font-size", "0.8rem");

      // Add the y-axis, remove the domain line, add grid lines and a label.
      svg
        .append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).tickSize(-width + margin.left + margin.right))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .append("text")
            .attr("x", -20)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("Variación [CLP]")
        )
        .attr("font-size", "0.8rem");

      // Append a path for the line.
      svg
        .append("path")
        .datum(variations)
        .attr("fill", "none")
        .attr("stroke", "#3fc3ef")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", line);

      return svg.node();
    },
  },
};
</script>

<style scoped>
.dollar-graphic {
  margin: 80px 0 0px 0;
}
.dollar-graphic__image {
  background-color: #0a2540;
  display: flex;
  justify-content: center;
}
.dollar-graphic__image svg {
  display: none;
}

@media (min-width: 769px) {
  .dollar-graphic__image svg.dollar-graphic__image-desktop {
    display: block;
  }
}
@media (max-width: 768px) {
  .dollar-graphic {
    margin: 40px 0 0px 0;
  }
  .dollar-graphic__image svg.dollar-graphic__image-mobile {
    display: block;
  }
}
@media (max-width: 1068px) {
  .dollar-graphic {
    padding: 0 5px;
  }
}
</style>

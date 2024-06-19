<template>
  <div class="dollar-graphic">
    <div class="dollar-graphic__wrapper pb-5">
      <div class="dollar-graphic__title col-12 mb-4">
        <h2 class="text-center">
          Gráficos de Admetricks: variación del USD en CLP
        </h2>
        <p class="text-center">
          Admetricks Last Month Currency Exchanges Rate Chart
        </p>
      </div>
      <main class="dollar-graphic__content col-12">
        <div class="dollar-graphic__content-wrapper">
          <div class="dollar-graphic__text">
            <div class="dollar-graphic__text__wrapper">
              <div class="dollar-graphic__description">
                <h1>Gráfico de variación del USD en CLP</h1>
                <div class="dollar-graphic__variation">
                  <h1
                    :class="{
                      'positive-variation': lastVariation > 0,
                      'negative-variation': lastVariation < 0,
                    }"
                  >
                    {{ lastVariation }}%
                  </h1>
                  <p>({{ timeRange }})</p>
                </div>
              </div>
              <p>Dólar estadounidense a Peso chileno</p>
            </div>
            <div class="dollar-graphic__exchange-rate">
              <p>
                <b>1 USD = {{ lastValue }} CLP</b>
              </p>
              <p>{{ lastDate }}</p>
            </div>
          </div>
          <div class="dollar-graphic__actions">
            <button
              class="dollar-graphic__button"
              :class="{ 'dollar-graphic__button--active': timeRange === '1W' }"
              @click="handleButtonClick('1W')"
            >
              1W
            </button>
            <button
              class="dollar-graphic__button"
              :class="{ 'dollar-graphic__button--active': timeRange === '1M' }"
              @click="handleButtonClick('1M')"
            >
              1M
            </button>
          </div>
          <div class="dollar-graphic__image pt-4 col-12 text-center">
            <svg ref="chart" class="dollar-graphic__chart"></svg>
          </div>
        </div>
      </main>
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
      filteredData: null,
      width: 0,
      timeRange: "1M",
    };
  },
  async mounted() {
    window.addEventListener("resize", this.updateWidth);

    try {
      this.dollarData = await getDollarData();
      this.filterData();
      this.width = this.$refs.chart.parentNode.offsetWidth;
      this.drawChart();
    } catch (error) {
      console.log(error);
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.width = this.$refs.chart.parentNode.offsetWidth;
      this.drawChart();
    },

    filterData() {
      if (this.timeRange === "1W") {
        this.filteredData = this.dollarData.serie.slice(0, 6);
      } else {
        this.filteredData = this.dollarData.serie;
      }
    },

    handleButtonClick(timeRange) {
      this.timeRange = timeRange;
      this.filterData();
      this.drawChart();
    },

    drawChart() {
      if (!this.filteredData) {
        return;
      }

      // Reverse the data to have the most recent data first.
      const data = [...this.filteredData].reverse();

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
      const width = this.width;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 50, left: 20 };

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
        .select(this.$refs.chart)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

      // Clear the SVG container.
      svg.selectAll("*").remove();

      // Add the x-axis.
      const xAxis = svg
        .append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width < 600 ? 4 : 8)) // Adjust the number of ticks based on width
        .attr("font-size", "0.8rem");

      if (width < 600) {
        // Rotate labels for smaller viewports
        xAxis
          .selectAll("text")
          .attr("transform", "rotate(-45)")
          .style("text-anchor", "end");
      }

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
  computed: {
    lastVariation() {
      if (this.timeRange === "1M") {
        if (!this.dollarData || !this.dollarData.serie.length) return null;
        const lastItem = this.dollarData.serie[0];
        const monthAgoItem =
          this.dollarData.serie[this.dollarData.serie.length - 1];
        const variation =
          ((lastItem.valor - monthAgoItem.valor) / monthAgoItem.valor) * 100;
        return variation.toFixed(2);
      } else {
        if (!this.dollarData || !this.dollarData.serie.length) return null;
        const lastItem = this.dollarData.serie[0];
        const weekAgoItem = this.dollarData.serie[5];
        const variation =
          ((lastItem.valor - weekAgoItem.valor) / weekAgoItem.valor) * 100;
        return variation.toFixed(2);
      }
    },
    lastValue() {
      if (!this.dollarData || !this.dollarData.serie.length) return null;
      return this.dollarData.serie[0].valor;
    },
    lastDate() {
      if (!this.dollarData || !this.dollarData.serie.length) return null;
      const date = new Date(this.dollarData.serie[0].fecha);
      const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
  },
};
</script>

<style scoped>
.dollar-graphic {
  display: flex;
  justify-content: center;
  width: 100%;
}
.dollar-graphic__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 80px 24px 0px 24px;
  width: 100%;
}
.dollar-graphic__description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}
.dollar-graphic__content {
  display: flex;
  justify-content: center;
  background-color: #0b2a49;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 48px;
  width: 100%;
}
.dollar-graphic__content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dollar-graphic__text {
  display: flex;
  justify-content: space-between;
}
.dollar-graphic__text__wrapper p {
  color: #a9b9c7;
  font-size: 14px;
  margin: 0 0 8px 0;
}
.dollar-graphic__description h1 {
  font-size: 24px;
  font-weight: 600;
}
.dollar-graphic__variation {
  display: flex;
  align-items: center;
  gap: 5px;
}
.dollar-graphic__variation h1 {
  font-size: 24px;
  font-weight: 400;
}
.dollar-graphic__variation p {
  margin-bottom: 8px;
}
.positive-variation {
  color: #4fbd7d;
}
.positive-variation::before {
  content: "+";
}
.negative-variation {
  color: #ef5353;
}
.dollar-graphic__exchange-rate {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.dollar-graphic__exchange-rate p {
  color: #a9b9c7;
  font-size: 14px;
}
.dollar-graphic__actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  border-top: 1px solid #bdbdbd24;
  border-bottom: 1px solid #bdbdbd24;
  padding: 20px 0;
}
.dollar-graphic__button {
  background-color: #0b2a49;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
}
.dollar-graphic__button--active {
  background-color: #3fc3ef;
  color: #0b2a49;
}
.dollar-graphic__image {
  display: flex;
  justify-content: center;
}
@media (max-width: 1068px) {
  .dollar-graphic__text {
    flex-direction: column;
  }
  .dollar-graphic__description {
    justify-content: flex-start;
  }
  .dollar-graphic__variation p {
    margin-bottom: 0px;
  }
}
@media (max-width: 768px) {
  .dollar-graphic__title {
    max-width: 345px;
  }
  .dollar-graphic__wrapper {
    padding: 32px 16px;
  }
  .dollar-graphic__content {
    padding: 20px;
  }
  .dollar-graphic__description {
    flex-direction: column;
    gap: 0px;
    margin-bottom: 8px;
  }
  .dollar-graphic__variation h1 {
    font-size: 18px;
    margin-bottom: 2px;
  }
  .dollar-graphic__variation p {
    font-size: 14px;
  }
  .dollar-graphic__exchange-rate {
    flex-direction: column;
    gap: 0px;
    margin-bottom: 8px;
  }
  .dollar-graphic__exchange-rate p {
    font-size: 16px;
    margin-bottom: 0px;
  }
}
</style>

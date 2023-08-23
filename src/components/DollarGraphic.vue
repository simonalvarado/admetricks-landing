<template>
  <div class="dollar-graphic container">
    <div class="row pb-5">
      <div class="dollar-graphic__content col-12 mb-4">
        <h2 class="text-center">Variación diaria del dólar</h2>
        <p class="text-center">(en pesos chilenos, en el último mes)</p>
      </div>
      <div class="dollar-graphic__image pt-4 col-12 text-center">
        <svg ref="chart"></svg>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { getDollarData } from '../api/dollarApi'

export default {
  name: 'DollarGraphic',
  data() {
    return {
      dollarData: null,
    }
  },
  async mounted() {
    try {
      this.dollarData = await getDollarData()
      this.drawChart()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    drawChart() {
      if (!this.dollarData) {
        return
      }

      const data = this.dollarData.serie.reverse()
      const dates = data.map(item => new Date(item.fecha))
      const variations = data.map((item, index) => {
        if (index === 0) {
          return 0
        }
        return item.valor - data[index - 1].valor
      })

      console.log('dates', dates)
      console.log('variations', variations)

      // create a line chart with d3, x axis is dates, y axis is variations

      // 1. declare the chart dimensions and margins
      const width = 900
      const height = 500
      const margin = { top: 20, bottom: 50, left: 50, right: 20 }

      // 2. declare the x (horizontal positon) scale
      const x = d3
        .scaleTime()
        .domain(d3.extent(dates))
        .range([margin.left, width - margin.right])

      // 3. declare the y (vertical positon) scale
      const y = d3
        .scaleLinear()
        .domain(d3.extent(variations))
        .range([height - margin.bottom, margin.top])

      // 4. declare the line generator function
      const line = d3
        .line()
        .x((d, i) => x(dates[i]))
        .y(d => y(d))
      
      // 5. create the svg container
      const svg = d3
        .select(this.$refs.chart)
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height])
        .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')

      // 6. add the x axis
      svg
        .append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .attr('font-size', '1rem')

      // 7. add the y axis, remove the domain line, add grid lines and a label
      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).tickSize(-width + margin.left + margin.right))
        .call(g => g.select('.domain').remove())
        .call(g =>
          g
            .append('text')
            .attr('x', -margin.left)
            .attr('y', 10)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .text('Variación [CLP]')
        )
        .attr('font-size', '0.8rem')

        // 8. append a path for the line
        svg
          .append('path')
          .datum(variations)
          .attr('fill', 'none')
          .attr('stroke', '#3fc3ef')
          .attr('stroke-width', 1.5)
          .attr('stroke-linejoin', 'round')
          .attr('stroke-linecap', 'round')
          .attr('d', line)

        return svg.node()
    }
  }
}
</script>

<style scoped>
.dollar-graphic__image {
  background-color: #0a2540;
  border-radius: 10px;
}
</style>

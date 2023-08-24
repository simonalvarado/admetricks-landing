<template>
    <div class="download-button container pb-5">
        <div class="row">
            <div class="download-button__content col-12 text-center">
                <button class="btn primary-button" @click="generateExcel">Descargar Excel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getDollarData } from '../api/dollarApi'
import * as XLSX from 'xlsx'

export default {
  name: 'DownloadButton',
  data() {
    return {
      dollarData: null,
    }
  },
  methods: {
    async generateExcel() {
        try {
            this.dollarData = await getDollarData()

            const data = this.dollarData.serie.reverse().map((entry, index) => {
                const previousDayValue = index > 0 ? this.dollarData.serie[index - 1].valor : null;
                const variation = previousDayValue !== null ? entry.valor - previousDayValue : null;

                return {
                    Fecha: new Date(entry.fecha).toLocaleDateString(),
                    ValorDolar: entry.valor,
                    Variacion: variation,
                };
            });
            
            this.exportToExcel(data)
        } catch (error) {
            console.log(error)
        }
  },
    exportToExcel(data) {
        
        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Dolar')
        XLSX.writeFile(wb, 'dolar.xlsx')
    }
  },
}
</script>

<style scoped>
.download-button__content button {
    background-color: #3fc3ef;
    color: #091416;
    border-radius: 21px;
    padding: 7px 29px;
    font-size: 13px;
    font-weight: 800;
    margin-right: 15px;
}
</style>
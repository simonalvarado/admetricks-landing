# Admetricks Dollar Quotation App

This project implements a web application for visualizing the daily variation of the dollar exchange rate in Chilean pesos (CLP) over the past month. It consists of three main components: HeroSection, DollarGraphic, and DownloadButton.

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

- Node.js and npm installed (Download and install from [Node.js website](https://nodejs.org/))

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/admetricks-landing.git
    ```
2. Navigate to the project directory:

   ```bash
   cd admetricks-landing
   ```
3. Install the project dependencies:

   ```bash
   npm install
   ```
### Usage

1. Start the development server:

   ```bash
   npm run serve
   ```
    The application will be accessible at http://localhost:8080.
2. Open your browser and go to http://localhost:8080 to access the app.

## Structure

The project is structured as follows:

### Hero Section

The Hero Section component displays introductory content about the Admetricks Dollar Quotation App.

![Hero Section](/example_images/heroSection.png)

### Dollar Graphic

The Dollar Graphic component displays a line chart with the daily variation of the dollar exchange rate in Chilean pesos (CLP) over the past month. The data is obtained from the [mindicador.cl](https://mindicador.cl/) API. It uses D3.js for rendering the chart.

![Dollar Graphic](/example_images/dollarGraphic.png)

### Download Button

The Download Button component provides a button that generates and downloads an Excel file containing the dollar variation data. It contains three columns of data; the first one with the date, the second one with the dollar exchange rate in Chilean pesos (CLP), and the third one with the variation of the dollar exchange rate in Chilean pesos (CLP) with respect to the previous day. It uses the [xlsx](https://www.npmjs.com/package/xlsx) library for generating the Excel file.

![Download Button](/example_images/downloadButton.png)

## Credits

- Data obtained from [mindicador.cl](https://mindicador.cl/)
- D3.js library: [d3js.org](https://d3js.org/)
- xlsx library: [www.npmjs.com/package/xlsx](https://www.npmjs.com/package/xlsx)

## Contributing

Contributions are welcome! If you find any bugs or have any suggestions, please create an issue or a pull request.

## Contact

For any questions or comments, please contact me at my email: simonjesusalvarado@gmail.com
//chart should have a g element corresponding with id='x-axis'
//chart should have a g element corresponding with id='y-axis'
//Both Axes should contain tick lables with class='tick'
//rect for each data point with class='bar'
//each bar should the the props data-date and data-gdp cointaing the info
//mouse over an area to get a tooltip with id='tooltip'

//pull in data
let chartData;
let apiUrl = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";

//create graph
function showData(data){
  chartData = data.data;
  console.log(chartData)
  let width = 600;
  let height = 600;
//start adding d3 elements

}


async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function main() {
    chartData = await getJson(apiUrl);
    showData(chartData);
}


main();



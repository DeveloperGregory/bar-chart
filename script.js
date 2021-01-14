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
  chartData = data.data;                                  //stores only the data portion of the incoming data from the fetch API
  let tempData = chartData.reduce((total, item) => {      //takes the chartData and pulls only the gdp values
    total.push(item[1]);
    return total;
  },[]);
  const scale = d3.scaleLinear();                         //sets up scales
  scale.domain = ([d3.min(tempData), d3.max(tempData)]);  //takes the min and max values to use for domain 
  scale.range = ([100,20000])  
  console.log(chartData)
  let width = 1200;
  let height = 600;
//start adding d3 elements
const svg = d3.select(".visuals")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
 
svg.selectAll("rect")
  .data(chartData)
  .enter()
  .append('rect')
  .attr("width", 5)
  .attr("x", (d, i) => {
    return (d,i*7)
  })
  .attr("y", (d, i) => {
    return (height - d[1] / 10)
  })
  .attr('height', (d,i) => {
    return(d[1]*3)
  })


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



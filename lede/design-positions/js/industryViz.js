


d3.csv('/lede/design-positions/data/job-stats.csv', d=>{
    return {
        jobText: d['job-text'],
        pay: +d.pay,
        jobId: +d['job-id'],
        growth: +d.growth,
        positions: +d.positions
    }
}).then(data => {
    initViz2(data);
    initViz3(data);
    initViz4(data);
});

let margin = {top:0, right:50, bottom:0, left:200};
function initViz2(data){

    console.log(data);

    //sort data
    data.sort(function(a,b) {
        return d3.descending(a.pay, b.pay)
    });

    console.log('initViz2 running');

   
    width = document.getElementById('bls-stat').offsetWidth - margin.left - margin.right;
    height = 300 - margin.top - margin.bottom;


    // X axis
    
    var x = d3.scaleLinear()
        .domain([0,d3.max(data, d=>d.pay)])
        .range([0,width]);

    const xAxis = d3.axisBottom(x)
        .ticks(6)
        .tickSize(0)

    // Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d['jobText']; }))
        .padding(.2);

    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickSize(0)
        .tickPadding(10);



    
    const svg = d3.select('#bls-stat')
        .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .attr('class', 'bls-canvas');

    // Bars

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr('class','bar')
        .attr('y', function(d){return y(d.jobText);})
        .attr('height', y.bandwidth())
        .attr('x', 0)
        .attr('width', function(d){return x(d.pay)})
        .style('fill', 'orange');
    


    // Axis

    // svg.append("g")
    //     .attr('class','x axis')
    //     .attr("transform", "translate(0," +height + ")")
    //     .call(xAxis)
    //     .call(g => g.select(".domain").remove())
    //     .selectAll('text')
    //     .style('font-size','16px');

    svg.append("g")
        .attr('class' , 'y axis')
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .selectAll('text')
        .style('font-size','16px')
        .style('font-weight','600');


    // Add labels
    svg.selectAll(".label")
    .data(data)
    .enter().append("text")
    .attr("x", function(d) {return x(d.pay) -60; })
    .attr("y", function(d) {return y(d.jobText) + y.bandwidth()/2;})
    .attr('dy', '.35em')
    .attr('font-size','14px')
    .attr('font-weight', '600')

    .text(d => `$${Math.round(d.pay/1000)}k`);    

    

    window.addEventListener('resize', resizeCanvas);

}

function initViz3(data){

    console.log(data);

    //sort data
    data.sort(function(a,b) {
        return d3.descending(a.positions, b.positions)
    });

    console.log('initViz3running');

   
    width = document.getElementById('bls-positions').offsetWidth - margin.left - margin.right;
    height = 300 - margin.top - margin.bottom;


    // X axis
    
    var x = d3.scaleLinear()
        .domain([0,d3.max(data, d=>d.positions)])
        .range([0,width]);

    const xAxis = d3.axisBottom(x)
        .ticks(6)
        .tickSize(0)

    // Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d['jobText']; }))
        .padding(.2);

    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickSize(0)
        .tickPadding(10);



    
    const svg = d3.select('#bls-positions')
        .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .attr('class', 'bls-canvas');

    // Bars

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr('class','bar')
        .attr('y', function(d){return y(d.jobText);})
        .attr('height', y.bandwidth())
        .attr('x', 0)
        .attr('width', function(d){return x(d.positions)})
        .style('fill', 'orange');
    


    // Axis

    // svg.append("g")
    //     .attr('class','x axis')
    //     .attr("transform", "translate(0," +height + ")")
    //     .call(xAxis)
    //     .call(g => g.select(".domain").remove())
    //     .selectAll('text')
    //     .style('font-size','16px');

    svg.append("g")
        .attr('class' , 'y axis')
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .selectAll('text')
        .style('font-size','16px')
        .style('font-weight','600');


    // Add labels
    svg.selectAll(".label")
    .data(data)
    .enter().append("text")
    .attr("x", function(d) {return x(d.positions) -60; })
    .attr("y", function(d) {return y(d.jobText) + y.bandwidth()/2;})
    .attr('dy', '.35em')
    .attr('font-size','14px')
    .attr('font-weight', '600')

    .text(d => `${Math.round(d.positions/1000)}k`);    

    

    window.addEventListener('resize', resizeCanvas);

}

function initViz4(data){

    console.log(data);

    //sort data
    data.sort(function(a,b) {
        return d3.descending(a.growth, b.growth)
    });

    console.log('initViz4running');

   
    width = document.getElementById('bls-growth').offsetWidth - margin.left - margin.right;
    height = 300 - margin.top - margin.bottom;


    // X axis
    
    var x = d3.scaleLinear()
        .domain([0,d3.max(data, d=>d.growth)])
        .range([0,width]);

    const xAxis = d3.axisBottom(x)
        .ticks(6)
        .tickSize(0)

    // Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d['jobText']; }))
        .padding(.2);

    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickSize(0)
        .tickPadding(10);



    
    const svg = d3.select('#bls-growth')
        .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .attr('class', 'bls-canvas');

    // Bars

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr('class','bar')
        .attr('y', function(d){return y(d.jobText);})
        .attr('height', y.bandwidth())
        .attr('x', 0)
        .attr('width', function(d){return x(d.growth)})
        .style('fill', 'orange');
    


    // Axis

    // svg.append("g")
    //     .attr('class','x axis')
    //     .attr("transform", "translate(0," +height + ")")
    //     .call(xAxis)
    //     .call(g => g.select(".domain").remove())
    //     .selectAll('text')
    //     .style('font-size','16px');

    svg.append("g")
        .attr('class' , 'y axis')
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .selectAll('text')
        .style('font-size','16px')
        .style('font-weight','600');


    // Add labels
    svg.selectAll(".label")
    .data(data)
    .enter().append("text")
    .attr("x", function(d) {return x(d.growth) -60; })
    .attr("y", function(d) {return y(d.jobText) + y.bandwidth()/2;})
    .attr('dy', '.35em')
    .attr('font-size','14px')
    .attr('font-weight', '600')

    .text(function(d) {if (d.jobText !== 'Craft & Fine Artists')
            return `${Math.round(d.growth*100)}%`});    

    

    window.addEventListener('resize', resizeCanvas);

}
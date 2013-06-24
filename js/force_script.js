/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 6/22/13
 * Time: 4:44 PM
 * To change this template use File | Settings | File Templates.
 */

    var w= 500;
    var h = 500;

  //making svg
var svg = d3.select("#canvas")
            .append("svg")
            .attr({
                 width:window.screen.width-10,
                 height:window.screen.height-10
                  })
            .style("border","solid");


   //dataSet

var dataSet = {
              nodes:[
                  {name:"Ali"},
                  {name:"Junaid"},
                  {name:"Raheel"},
                  {name:"Saad"},
                  {name:"Siraj"},
                  {name:"Sonu"},
                  {name:"Mahmood"},
                  {name:"Shahzad"},
                  {name:"Ayax"},
                  {name:"Yasin"},

              ],
              edges:[
                     {source:0 , target:1 },
                     {source:0 , target:2 },
                     {source:1 , target:2 },
                     {source:1 , target:3 },
                     {source:2 , target:4 },
                     {source:4 , target:5 },
                     {source:1 , target:6 },
                     {source:6 , target:7 },
                     {source:7 , target:8 },
                     {source:6 , target:8 },
                     {source:8 , target:9 },
                     {source:7 , target:9 },
                     {source:1 , target:7 },
                     {source:4 , target:9 }

              ]
};

var color = d3.scale.category20();

 //making force layout

//Initialize a default force layout, using the nodes and edges in dataset
var force = d3.layout.force()
    .nodes(dataSet.nodes)
    .links(dataSet.edges)
    .size([w, h])
    .linkDistance([50])
    .charge([-1000])
    .start();


 // SVG line for each edges

//Create edges as lines
var edges = svg.selectAll("line")
    .data(dataSet.edges)
    .enter()
    .append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);



 // SVG line for each node

       var nodes = svg.selectAll("circle")
                      .data(dataSet.nodes)
                      .enter()
                      .append("circle")
                      .attr("r",10)
                      .style("fill",function(d,i){return color(i);})
                      .call(force.drag);



force.on("tick",function(){
    edges.attr("x1",function(d){return d.source.x})
         .attr("y1",function(d){return d.source.y})
         .attr("x2",function(d){return d.target.x})
         .attr("y2",function(d){return d.target.y});

    nodes.attr("cx",function(d){return d.x;})
         .attr("cy",function(d){return d.y;});
});


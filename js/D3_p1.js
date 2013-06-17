/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/25/13
 * Time: 11:33 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var canvas = d3.select("#canvas");

    // canvas.append("p").text("New Paragraph");

    var dataSet = [5,10,15,20,25,30];

    canvas.selectAll("p")
        .data(dataSet)
        .enter()
        .append("p")

        .text("this is number ")
        .style("color","black")
        .append("span")
         .text(function(d,i){
            return d+"----Index No"+i;
        })
        .style("color",function(d,i){
            if(i<2){return "red";}
            return "green";
        })
})();
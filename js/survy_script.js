/**
 * Created with JetBrains WebStorm.
 * User: Taufiq
 * Date: 5/29/13
 * Time: 3:23 PM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    $("#canvas").hide();

    $("#btn1").bind("click",function(){

   var name =  $("#name").val();
   var income = $("#income").val();
   var e1 = $("#e1").val();
   var e2 = $("#e2").val();
      dataChart(name,income,e1,e2);
   function dataChart(name,income,e1,e2){
      $("#form").hide();
  /* var data = {
       name:name,
       income:income,
       e1:e1,
       e2:e2

   }
      var eData=[];
      eData.push(data.income);
      eData.push(data.e1);
      eData.push(data.e2);
      alert(eData[0]);
    */
       var eData=[];
       eData.push(income);
       eData.push(e1);
       eData.push(e2);
       $("#canvas").show();
       var svg = d3.select("#canvas").append("svg")
                             .attr("width", "500px")
                             .attr("height", "500px")
                             .style("border","solid")

       var color = d3.scale.category20();

       svg.selectAll("circle")
             .data(eData)
             .enter()
             .append("circle")
             .attr({
                 cx:150,
                 cy:150,
                 r:function(d,i){return ((d*2)/10);},
                 fill:function(d,i){return color(i);},
                 opacity:0.5
             })
           .attr("class",function(d,i){return "circle"+i;})



           $("#canvas circle").hover(function(){

               svg.selectAll("line")
                   .data(eData)
                   .enter()
                   .append("line")
                   .attr({
                       x1:function(d,i){return ((d/5)+135);},
                       y1:150,
                       x2:function(d,i){return ((d/3)+150);},
                       y2:function(d,i){return ((d/3)+200);},
                       stroke:"black"
                   })
               svg.selectAll("text")
                  .data(eData)
                  .enter()
                  .append("text")
                  .attr({
                    x:function(d,i){return ((d/3)+110);},
                    y:function(d,i){return ((d/3)+180);},
                   dx:25,
                   dy:30,
                   fill:"red"
                     })
                  .text("done"),function(){
                   alert("asd");
                   //d3.select("#canvas").remove();
               }

           })




    }//dataChart


  })

})

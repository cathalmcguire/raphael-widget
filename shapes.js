    $(document).ready(function(){
      var x = 0;
      var count_up = -20;
      var count_down = 20;

      var paper = Raphael('paper1', 570, 500); 
      var p1 = paper.path("M200,250 L285,295 L285,205 Z")
      var p2 = paper.path("M285,295 L370,250 L285,205 Z")
      p1.attr({"stroke-width": 0, fill: "#706D78"});
      p2.attr({"stroke-width": 0, fill: "#828282"});
      
      var move = function(dx, dy){
        
        if (dy <= count_up && x > -2) {
          count_up -= 30;
          count_down -= 30;
          x--;
          morph(p1, p2, x);
        }
        if (dy >= count_down && x < 2) {
          count_down += 30;
          count_up  += 30;
          x++;
          morph(p1, p2, x)
        }
      }
      var start=function(){
        console.log('start');
        if (x === 0){
          count_up = -20;
          count_down = 20;
        }
        else {
          count_up = -30;
          count_down = 30;
        }
      }
      var up=function(){
        console.log('up');  
      }

      p1.drag(move, start, up); 
      p2.drag(move, start, up); 
    });



    var morph = function(shape1, shape2, count){
      var color1 = '#E3E141';
      var color2 = '#BCDC4D';
      var color3 = '#97CE68';
      var color4 = '#E2A741';
      var color5 = '#FF6766';
      var color;
      if (count === -2) {
        path1 = {path:"M200,250 L285,250 L285,20 Z"}; //up 2
        path2 = {path:"M285,250 L370,250 L285,20 Z"}; //up 2
        color = color3;
      }
      else if (count === -1) {
        path1 = {path:"M200,250 L285,260 L285,130 Z"}; //up 1
        path2 = {path:"M285,260 L370,250 L285,130 Z"}; //up 1
        color = color2;
      }
      else if (count === 0) {
        path1 = {path:"M200,250 L285,295 L285,205 Z"};//even
        path2 = {path:"M285,295 L370,250 L285,205 Z"};//even
        color = color1;
      }
      else if (count === 1) {
        path1 = {path:"M200,250 L285,370 L285,240 Z"};//down 1
        path2 = {path:"M285,370 L370,250 L285,240 Z"};//down 1
        color = color4;
      }
      else if (count === 2) {
        path1 = {path:"M200,250 L285,480 L285,250 Z"};//down 2
        path2 = {path:"M285,480 L370,250 L285,250 Z"};//down 2
        color = color5;
      }


      shape1.animate(path1,300);
      shape2.animate(path2,300);
      $( "#paper1" ).animate({
          backgroundColor: color,
          width: 570
        }, 100 );
    }

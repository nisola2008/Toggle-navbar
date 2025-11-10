/*var i = 1;
 while (i < 5) {
    document.write ("A statement has run");
    i++;
} 
    */
   /*for (var i = 1; i < 5; i++) {
    document.write ("A statement has run");
   } 
*/
   /*function batting (player, distance) {
if (distance <= 350 && distance > 0) {
        document.write(player + "hit the ball");
    } 
    else if (distance <= 0) {
        document.write (player + "STRUCK OUT")
    }
    else {
        document.write(player + "hit a home run")
    }
   }
   batting("steve", 0);
    
  /*var name = "henry";
  function printName () {
    var name2 = "sarah";
     
  } 
  printName();
  document.write(name2);
 */
 /*function batting (player, distance) {
    var more = player + "hit the ball" + distance + "feet";
    document.write(more);
 }
 batting ("steve", 351)
 */

 /*var road = "stone"
 var road2 = "dirt"
 */

 /*var roads = ["stone", "dirt", "cement", "tar",];
 roads[0] = "Watermelon"
  var roadTravelled = roads [0];
 document.write(roadTravelled);
 */
/*var orc = {
    hair: "green",
    age: 26,
    stomachFull: true,
    eat: function() {
    document.write("Yum Yum!");
    }
};
orc.stomachFull = false;
if (orc.stomachFull == true) {
orc.eat();
}
else {
    document.write("not eating");
}
    */
   /*var orc = {
    hair: "green",
    age: 26,
    stomachFull: false,
   };
   orc.hair = "purple";
   orc.hair = 1;
   orc.hair2 = "red";
   delete orc.hair2;
   document.write(orc.hair2);
   */
  /*var hello = "how are you doing"
  hello = hello.italics();
  document.write(hello);
  */
 /*var number = 5.4;
 var newNumber =26 + Math.round(number);

 document.write(newNumber);
 */
//var number = Math.sqrt(16);
//document.write(number);
//var todayDate = new Date ();
//todayDate.setFullYear(2017);
//document.write(todayDate);
/*function changeStyle() {

    //var text = document.getElementById ("para1").style.color = "blue"
    //var text = document.getElementById ("para1").style.backgroundColor = "red"
    //var text = document.getElementById ("para1").style.fontStyle = "italic";
    var paragraph = document.getElementsByTagName("p");
    for {var i = 0; i < paragraph.length; i++} {
        paragraph[2].style.fontStyle = "italic"
    }
}
    /*var changeParaText = paragraph[0].style.fontStyle = "italic"
    var changeParaText = paragraph[2].style.fontStyle = "italic"
    var changeParaText = paragraph[3].style.fontStyle = "italic"*/

    /*function changeColor () {
    document.getElementById("para1").style.color = "red";
    }*/
        /*var paragraph = document.getElementsByClassName("para");
          var firstParaText = paragraph[0].innerHTML;
          var secondParaText = paragraph[1].innerHTML;
          var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;
            var firstParaText = paragraph[0].innerHTML = " ";
          var secondParaText = paragraph[1].innerHTML = " ";*/
   const hamburger = document.querySelector(".hamburger");
   const navMenu = document.querySelector(".nav-menu");

   hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
   })

   document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classLihamburger.classList.remove("active");
   }))



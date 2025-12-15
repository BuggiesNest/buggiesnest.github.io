function Window1Function() {
if (new Date().getDate() >= 14){
{document.getElementById('buggiewindow1').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window1Function2(){
	document.getElementById('buggiewindow1').style.visibility = "hidden"
};

function Window2Function() {
if (new Date().getDate() >= 15){
{document.getElementById('buggiewindow2').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window2Function2(){
	document.getElementById('buggiewindow2').style.visibility = "hidden"
};

function Window3Function() {
if (new Date().getDate() >= 16){
{document.getElementById('buggiewindow3').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window3Function2(){
	document.getElementById('buggiewindow3').style.visibility = "hidden"
};

function Window4Function() {
if (new Date().getDate() >= 17){
{document.getElementById('buggiewindow4').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window4Function2(){
	document.getElementById('buggiewindow4').style.visibility = "hidden"
};

function Window5Function() {
if (new Date().getDate() >= 18){
{document.getElementById('buggiewindow5').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window5Function2(){
	document.getElementById('buggiewindow5').style.visibility = "hidden"
};

function Window6Function() {
if (new Date().getDate() >= 19){
{document.getElementById('buggiewindow6').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window6Function2(){
	document.getElementById('buggiewindow6').style.visibility = "hidden"
};

function Window7Function() {
if (new Date().getDate() >= 20){
{document.getElementById('buggiewindow7').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window7Function2(){
	document.getElementById('buggiewindow7').style.visibility = "hidden"
};

function Window8Function() {
if (new Date().getDate() > 21){
{document.getElementById('buggiewindow8').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window8Function2(){
	document.getElementById('buggiewindow8').style.visibility = "hidden"
};

function Window9Function() {
if (new Date().getDate() >= 22){
{document.getElementById('buggiewindow9').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window9Function2(){
	document.getElementById('buggiewindow9').style.visibility = "hidden"
};

function Window10Function() {
if (new Date().getDate() >= 23){
{document.getElementById('buggiewindow10').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window10Function2(){
	document.getElementById('buggiewindow10').style.visibility = "hidden"
};

function Window11Function() {
if (new Date().getDate() >= 24){
{document.getElementById('buggiewindow11').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window11Function2(){
	document.getElementById('buggiewindow11').style.visibility = "hidden"
};

function Window12Function() {
if (new Date().getDate() >= 25){
{document.getElementById('buggiewindow12').style.visibility = "visible"
}}
else{{document.getElementById('buggiewindowerror').style.visibility = "visible"
}}};
function Window12Function2(){
	document.getElementById('buggiewindow12').style.visibility = "hidden"
};

function WindowErrorFunction2(){
	document.getElementById('buggiewindowerror').style.visibility = "hidden"
};



let slideIndex = [1,1];
let slideId = ["slidesDay2", "slidesDay3", "slidesDay4", "slidesDay5", "slidesDay6", "slidesDay7", "slidesDay8", "slidesDay9", "slidesDay10", "slidesDay11", "slidesDay12"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);

showSlides(slideIndex);
	
	// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}



function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
};


function testLoad(){
	document.getElementById('buggiewindowerror').style.visibility = "visible"
}





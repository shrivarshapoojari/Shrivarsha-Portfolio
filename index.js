 
$(".abttabitems").click(function(){
    $(".abttabitems").removeClass("active-link");
    $(".abttabcontents").removeClass("active-tab");
});
 $(".experience-link").click(function(){
    $(".experience-link").addClass("active-link");
    $(".experience-tab").addClass("active-tab");
 });
 $(".edu-link").click(function(){
    $(".edu-link").addClass("active-link");
    $(".edu-tab").addClass("active-tab");
 });
 $(".skill-link").click(function(){
    $(".skill-link").addClass("active-link");
    $(".skill-tab").addClass("active-tab");
 });
$(".fa-sharp" ).click(function()
{
   $("nav ul").css("right","-200px");
});
$(".fa-bars").click(function()
{

   $("nav ul ").css("right","0px");
});
$(" form .btn.btn2").click(function()
{ 
   $("form .btn.btn2").css("backgroundColor","#2c64f3") ;
   setTimeout(function(){
      $("form .btn.btn2").css("backgroundColor","#ff004f")
  },3000);
});
 
alert("functional!");
$(function(){
  $("p").hover(function(){
    $(this.parentNode).hide();
  },
  function(){
    $(this.parentNode).show();
  });
});


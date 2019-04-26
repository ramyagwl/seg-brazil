function goBack() {
    window.history.back();
}
function shareProduct()
{
  if(window.navigator.onLine == true)
  {
  document.getElementById('shareMessage').innerHTML = "<iframe id='popup' src='user-form.html' width='100%' height='auto' frameborder='0' marginheight='0' marginwidth='0'>Loading...</iframe>";
  }
  if(window.navigator.onLine == false)
    {
  document.getElementById('shareMessage').innerHTML = "<div style='text-align:center'><img src='images/nointernet.svg' width='auto' height='120px' /><div style='font-size:18px'>You are not connected to the internet</div><br></div>";
  
  }
  
}



$(document).ready(function(){
  $('img').on('dragstart', function(event) { event.preventDefault(); });
  $.get( "header.html", function( data ) {
      $( ".header" ).append(data);
  });
  $.get( "header-arrow.html", function( data ) {
      $( ".header-arrow" ).append(data);
  });
  $.get( "header-product.html", function( data ) {
      $( ".header-product" ).append(data);
      $(".strtop .productLink").mouseover(function(){
        $(this).toggleClass('active');
        $(".strtop .submenu").slideToggle();
        $(".strtop .blkbg").toggle();
        // $(this).addClass('active');
        // $(".strtop .submenu").slideDown();
        // $(".strtop .blkbg").show();
        $(".home span").removeClass('active');
      });

      // $(".strtop .submenu").mouseleave(function(){
      //   $(this).slideUp();
      //   $(".strtop .blkbg").hide();
      //   $(".strtop .productLink").removeClass('active');
      // });
      // $(".home").mouseover(function(){
      //   $(".strtop .blkbg").hide();
      //   $(".strtop .productLink").removeClass('active');
      //   $(".strtop .submenu").slideUp();
      // });

      $('.strtop #str').mouseover(function(){
        $('.strtop .sub.starter').slideDown();
        $('.strtop .sub.generator').hide();
        $('.strtop .primary li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.strtop #gen').mouseover(function(){
        $('.strtop .sub.starter').hide();
        $('.strtop .sub.generator').slideDown();
        $('.strtop .primary li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.strtop .closemenu').mouseover(function(){
        $('.strtop .sub.starter').hide();
        $('.strtop .sub.generator').hide();
        $(".strtop .submenu").hide();
        $(".strtop .blkbg").hide();
        $("#gen").removeClass('active');
        $("#str").removeClass('active');
        $(".strtop .productLink").removeClass('active');
      });
      $('.strtop .blkbg').mouseover(function(){
        $('.strtop .sub.starter').hide();
        $('.strtop .sub.generator').hide();
        $(".strtop .submenu").slideUp();
        $("#gen").removeClass('active');
        $("#str").removeClass('active');
        $(this).hide();
        $(".strtop .productLink").removeClass('active');
      });
      
  });
  $.get( "header-product-gen.html", function( data ) {
      $(".header-product-gen" ).append(data);
      $(".gentop .productLink").mouseover(function(){
        
        $(".home span").removeClass('active');
        $(this).toggleClass('active');
        $(".gentop .submenu").slideToggle();
        $(".gentop .blkbg").toggle();
        // $(this).addClass('active');
        // $(".strtop .submenu").slideDown();
        // $(".strtop .blkbg").show();
        $(".home span").removeClass('active');
      });
      // $(".gentop .submenu").mouseleave(function(){
      //   $(this).slideUp();
      //   $(".gentop .blkbg").hide();
      //   $(".gentop .productLink").removeClass('active');
      // });
      // $(".home").mouseover(function(){
      //   $(".gentop .blkbg").hide();
      //   $(".gentop .productLink").removeClass('active');
      //   $(".gentop .submenu").slideUp();
      // });

      $('.gentop #str').mouseover(function(){
        $('.gentop .sub.starter').slideDown();
        $('.gentop .sub.generator').hide();
        $('.gentop .primary li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.gentop #gen').mouseover(function(){
        $('.gentop .sub.starter').hide();
        $('.gentop .sub.generator').slideDown();
        $('.gentop .primary li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.gentop .closemenu').mouseover(function(){
        $('.gentop .sub.starter').hide();
        $('.gentop .sub.generator').hide();
        $(".gentop .submenu").hide();
        $(".gentop .blkbg").hide();
        $("#gen").removeClass('active');
        $("#str").removeClass('active');
        $(".gentop .productLink").removeClass('active');
      });
      $('.gentop .blkbg').mouseover(function(){
        $('.gentop .sub.starter').hide();
        $('.gentop .sub.generator').hide();
        $(".gentop .submenu").slideUp();
        $("#gen").removeClass('active');
        $("#str").removeClass('active');
        $(this).hide();
        $(".gentop .productLink").removeClass('active');
      });
  });
  $.get( "header-main.html", function( data ) {
      $(".header-main" ).append(data);
      $(".gentop .productLink").mouseover(function(){
        // $(this).addClass('active');
        // $(".gentop .submenu").slideDown();
        // $(".gentop .blkbg").show();
        $(".home span").removeClass('active');

        $(this).toggleClass('active');
        $(".gentop .submenu").slideToggle();
        $(".gentop .blkbg").toggle();
      });
      // $(".gentop .submenu").mouseleave(function(){
      //   $(this).slideUp();
      //   $(".gentop .blkbg").hide();
      //   $(".gentop .productLink").removeClass('active');
      //   $(".home span").addClass('active');
      // });
      // $(".home").mouseover(function(){
      //   $(".gentop .blkbg").hide();
      //   $(".gentop .productLink").removeClass('active');
      //   $(".gentop .submenu").slideUp();
      //   $(".home span").addClass('active');
      // });

      $('.gentop #str').mouseover(function(){
        $('.gentop .sub.starter').slideDown();
        $('.gentop .sub.generator').hide();
        $('.gentop .primary li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.gentop #gen').mouseover(function(){
        $('.gentop .sub.starter').hide();
        $('.gentop .sub.generator').slideDown();
        $('.gentop .primary li a').removeClass('active');
        $(this).addClass('active');
      });
      $('.gentop .closemenu').mouseover(function(){
        $(".gentop .submenu").hide();
        $(".gentop .blkbg").hide();
        $('.gentop .sub.starter').hide();
        $('.gentop .sub.generator').hide();
        $("#gen").removeClass('active');
        $("#str").removeClass('active');
        $(".gentop .productLink").removeClass('active');
      });
      $('.gentop .blkbg').mouseover(function(){
        //$(".gentop .submenu").slideUp();
        $('.gentop .sub.starter').hide();
        $('.gentop .sub.generator').hide();
        $("#gen").removeClass('active');
        $("#str").removeClass('active');
        $(this).hide();
        $(".gentop .productLink").removeClass('active');
      });
  });
  $('.carousel.slide').carousel({
    interval: false
  });

});
        

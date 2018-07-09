$(function () {

   $('#current-page').change(function() {
   	var i = $(this).val() -1;
   	activeBook(i);
   });

   $('.book-list').on('click', '.book', function(){
   	activeBook($(this).index());
   });

   function activeBook(i) {
      $('.book').removeClass('active');
      var active = $('.book').eq(i).addClass('active');
      var left = active.position().left;
      var currScroll = $('.cont').scrollLeft();
      var contWidth = $('.cont').width() / 2;
      var activeOuterWidth = active.outerWidth() / 2;
      left = left + currScroll - contWidth + activeOuterWidth;

      $('.cont').animate({
         scrollLeft: left
      }, 'slow');
   }
});
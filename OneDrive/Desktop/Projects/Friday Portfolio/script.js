const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarlinks.classList.toggle('active')
    
})


var $component = 'Timeline';

  function sort() {
    var $itemIndex = 0;

    console.log('reorder');
    
    $('.' + $component).find('.' + $component + '-item').each(function(index) {

      index++;
      $itemIndex = (index < 10) ? '0' + index : index;
      
      $(this).find('.' + $component + '-item-index').text($itemIndex);

      if (index % 2 === 0) {
        $(this).addClass('is-right');
      }
      else {
        $(this).removeClass('is-right');
      }

    });
  }

  $(document).ready(function(){
             sort();

    var el = document.getElementById($component);
      var sortable = Sortable.create(el, {
        draggable: '.' + $component + "-item", 
        handle: '.' + $component + "-item-top",
        animation: 250,
        scroll: true, // or HTMLElement
        scrollSensitivity: 60, // px, how near the mouse must be to an edge to start scrolling.
        scrollSpeed: 10, // px
        ghostClass: "is-dropping",

        onStart: function (event) {
          $('.' + $component).toggleClass('is-dragging');
          console.log('onStart')
        },

        onEnd: function (event) {
          $('.' + $component).toggleClass('is-dragging');
          sort();
        },

      });
  });
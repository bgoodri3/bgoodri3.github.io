$(document).ready(function() {
    // jQuery Plugin 1: Image Slider
    $('.product-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  
    // jQuery Plugin 2: Modal Pop-up
    $('.product').on('click', function() {
      $('#productModal').modal('show');
    });
  
    // jQuery-UI Widget: Date Picker
    $('#datepicker').datepicker();
  
    // Button click event to confirm the selected date
    $('#confirmDate').on('click', function() {
      var selectedDate = $('#datepicker').val();
  
      // Display a message in the confirmation modal
      $('#confirmationMessage').text('Your order is set for ' + selectedDate);
  
      // Show the confirmation modal
      $('#confirmationModal').modal('show');
    });
  });
  
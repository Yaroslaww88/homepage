$( document ).ready(function() {
  /**
   * Modal 
   */
  var button = document.getElementById("question-button");
  var modal = document.getElementById("send-email-modal");
  var btnCloseModal = document.getElementById("send-email-modal-close");

  /**
   * Toggle Modal window
   */  
  button.onclick = function() {
    modal.style.display = "block";
  };

  btnCloseModal.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  /**
   * Input && submit
   */
  var inputEmail = $( "input[name='email']" );
  var inputQuestion = $( "textarea[name='message']" );
  var btnSubmit = document.getElementById("send-button");


  /**
   * Submit form button
   */
  btnSubmit.onclick = function() {
    // Here should be an ajax call, of course, but we dont have backend
    console.log("Form submitted with values: ", inputEmail.val(), inputQuestion.val());
  }
});
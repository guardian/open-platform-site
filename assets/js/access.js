$(document).ready(function() {

  var viewModel = {

    contactName: ko.observable(""),
    email: ko.observable(""),
    productDetails: ko.observable(""),
    company: ko.observable(""),
    acceptedTerms: ko.observable(false),

    registerDeveloper: function(formElement) {
      window.location.href = 'http://guardian.mashery.com/member/register';
    },

    postForm: function(formElement) {
      var self = this;
      contactName = self.contactName();
      email = self.email();
      productDetails = self.productDetails();
      company = self.company();

      $.ajax({
        type: 'POST',
        url: "https://docs.google.com/a/guardian.co.uk/forms/d/17uANiLxLWfX6y3UUrx0MwFGliiCZguT1_Ev7aucgV3I/formResponse",
        data: {
          'entry.308009798':contactName,
          'entry.1638018966':email,
          'entry.344332284':productDetails,
          'entry.2092951118':company,
          'pageHistory': 0
        }
      })
      .done(function(data, textStatus, jqXHR) {
        if (jqXHR.status === 200) {
          submissionSucceed();
        } else {
          submissionFailed();
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.status === 0) {
          /* we receive a CORS error due to missing header a but it works */
          submissionSucceed();
        } else {
          submissionFailed();
        }
      });
    }
  };

  ko.applyBindings(viewModel);

  var developerBox = document.getElementById('developerBox');
  developerBox.addEventListener('click', function() {
    document.getElementById('boxes').style.display = 'none';
    document.getElementById('developer').style.display = 'block';
  });

  var commercialBox = document.getElementById('commercialBox');
  commercialBox.addEventListener('click', function() {
    document.getElementById('boxes').style.display = 'none';
    document.getElementById('commercial').style.display = 'block';
  });

});

function submissionFailed() {
  document.getElementById('commercial-form').style.display = 'none';
  document.getElementById('form-submission-failed').style.display = 'block';
}

function submissionSucceed() {
  document.getElementById('commercial-form').style.display = 'none';
  document.getElementById('form-submission-succeed').style.display = 'block';
}

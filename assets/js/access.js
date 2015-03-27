$(document).ready(function() {

            var viewModel = {

          contactName : ko.observable(""),
          email : ko.observable(""),
          productDetails : ko.observable(""),
          company : ko.observable(""),
          acceptedTerms : ko.observable(false),
          productUrl : ko.observable(""),
          businessArea : ko.observable(""),
          monthlyUsers : ko.observable(""),
          commercialModel : ko.observable(""),
          whatContent : ko.observable(""),
          howManyArticles : ko.observable(""),
  
          registerDeveloper : function(formElement) {
            window.location.href = 'http://guardian.mashery.com/member/register';
          },
          
          postForm : function(formElement) {

          var self = this;
          contactName = self.contactName();
          email = self.email();
          productDetails = self.productDetails();
          company = self.company();

          productUrl = self.productUrl();
          businessArea = self.businessArea();
          monthlyUsers = self.monthlyUsers();
          commercialModel = self.commercialModel();
          whatContent = self.whatContent();
          howManyArticles = self.howManyArticles();

          $.ajax({
            type: 'POST',
            url: "https://docs.google.com/forms/d/1ZERA3871uk83C5-k8Cahg3Nc3JLi3N-5WpbZIC0BnXI/formResponse",
            dataType:"json",
            data: {
                        'entry.308009798':contactName,
                        'entry.1638018966':email,
                        'entry.344332284':productDetails,
                        'entry.403967048':productUrl,
                        'entry.2092951118':company,
                        'entry.148758292':businessArea,
                        'entry.2018472085':monthlyUsers,
                        'entry.1770372627':commercialModel,
                        'entry.1290821522':whatContent,
                        'entry.971566646':howManyArticles,
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

      var developerBox = document.getElementById('developerBox')
      developerBox.addEventListener('click', function(){
          document.getElementById('boxes').style.display = 'none'
          document.getElementById('developer').style.display = 'block'
      });

        var commercialBox = document.getElementById('commercialBox')
        commercialBox.addEventListener('click', function(){
                document.getElementById('boxes').style.display = 'none'
                document.getElementById('commercial').style.display = 'block'
        });
});

function submissionFailed() {
    document.getElementById('commercial-form').style.display = 'none'
    document.getElementById('form-submission-failed').style.display = 'block'
}

function submissionSucceed() {
    document.getElementById('commercial-form').style.display = 'none'
    document.getElementById('form-submission-succeed').style.display = 'block'
}
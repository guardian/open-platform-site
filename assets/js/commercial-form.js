$(document).ready(function() {
	    	var viewModel = {

	    		contactName : ko.observable(""),
	    		email : ko.observable(""),
				productDetails : ko.observable(""),
				company : ko.observable(""),
	
		        postForm : function(formElement) {
		            var self = this;
		            contactName = self.contactName();
		            email = self.email();
					productDetails = self.productDetails();
					company = self.company();
					
					html = 'Please contact the following company for syndicaton access to the Content API ' + 
							'<p>Name: ' + contactName + '</p>' +
							'<p>Email: ' + email + '</p>' +
							'<p>Product details : ' + productDetails + '</p>' +
							'<p>Company: ' + company + '</p>';

					$.ajax({
					  type: 'POST',
					  url: "http://to-do:3000/email",
					  data: {
					    'from': email,
					    'html': html
					    
					  }
					 }).done(function(response) {
					   $('#submitButton').html(response) 
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

        var masheryCheckbox = document.getElementById('mashery')
        var masheryButton = document.getElementById('masheryAccess')
        masheryCheckbox.addEventListener('change', function(){
            if (masheryCheckbox.checked) {
                masheryButton.textContent = 'Sign in'
                masheryButton.onclick = function () {window.location='https://secure.mashery.com/login/guardian.mashery.com/'} 
            } else {
                masheryButton.textContent = 'Register'
                masheryButton.onclick = function () {window.location='http://guardian.mashery.com/member/register'}
            }
        });

		});

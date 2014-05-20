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

    	var developerUse = document.getElementById('developerUse')
    	developerUse.addEventListener('change', function(){
    		if (developerUse.checked) {
    			document.getElementById('commercialInputs').style.display = 'none'
    			document.getElementById('developerInputs').style.display = 'block'
    		} else {
    			document.getElementById('commercialInputs').style.display = 'block'
    			document.getElementById('developerInputs').style.display = 'none'
    		}
    	});

		});

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
					$.ajax({
					  type: 'POST',
					  url: "https://mandrillapp.com/api/1.0/messages/send.json",
					  data: {
					    'key': 'to-do',
					    'message': {
					      'from_email': email,
					      'to': [
					          {
					            'email': 'to-do',
					            'name': 'to-do',
					            'type': 'to'
					          }	
					        ],
					      'autotext': 'true',
					      'subject': 'New syndication request',
					      'html': 'Please contact the following company for rights-managed access to Content API Name: ' + contactName + 'Email:' + email +'Product:' + productDetails + 'Company:' + company
					    }
					  }
					 }).done(function(response) {
					   console.log(response); 
					});

		        }
	    	};
	    
    	ko.applyBindings(viewModel);
		});

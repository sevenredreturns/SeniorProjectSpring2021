import React from 'react';

function Profile() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8">
    	 <!--Cognito JavaScript-->
    	<script src="js/amazon-cognito-identity.min.js"></script>
    	<script src="js/config.js"></script>
      </head>

      <body>
    	<h1 class="h3 mb-3 font-weight-normal" id="signOutSuccessful"> </h1>

    	<div class="container">
          <div>
            <h2>User Profile</h2>
    		<button type="button" onclick="signOut()">Sign out</button>
          </div>

    	<div>

    		<h4>Personal Information</h4>

    		<br>
    		<div>
    			<label>Email <span>(Username)</span></label>
    		</div>
    		<div>
    			<label id="email_value"></label>
    		</div>

        </div>

        <script>
    	var data = {
    		UserPoolId : _config.cognito.userPoolId,
            ClientId : _config.cognito.clientId
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
        var cognitoUser = userPool.getCurrentUser();

    	window.onload = function(){
        if (cognitoUser != null) {
            cognitoUser.getSession(function(err, session) {
                if (err) {
                    alert(err);
                    return;
                }
                console.log('session validity: ' + session.isValid());
    			//Set the profile info
    			cognitoUser.getUserAttributes(function(err, result) {
    				if (err) {
    					console.log(err);
    					return;
    				}
    				console.log(result);
    				document.getElementById("email_value").innerHTML = result[2].getValue();
    			});

            });
        }
    }
    	function signOut(){
    	    if (cognitoUser != null) {
              cognitoUser.signOut();
    		  document.getElementById("signOutSuccessful").innerHTML = "Sign Out Successful";

    		}
    	}
        </script>
      </body>
    </html>
  );
}

export default Profile;

import React from 'react';

function Login() {
  return (
    <html lang="en">
    <head>
      <meta charset="utf-8">

  	<!-- Javascript SDKs-->
  	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  	<script src="js/amazon-cognito-auth.min.js"></script>
  	<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"></script>
  	<script src="js/amazon-cognito-identity.min.js"></script>
  	<script src="js/config.js"></script>


          <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link href='https://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Proxima+Nova' rel=;'stylesheet' type='text/css'>

         <style>
         body{
            margin:0;
            padding:0;
            background: #f0f2f5;
            background:url("trophy.jpg");
            background-size: cover;
            font-family: sans-serif;
             }
        .log{  width:1366px;
            height:696px;

            }
        .loginbox{  width: 320px;
            height: 450px;
            background: #3c3c3c;
            color: #fff;
            top:20%;
            left:36%;
            position:absolute;
            transform: translate{-50%,-50%}
            box-sizing: border-box;
            padding: 70px 30px;

                 }
        .avatar{  width: 100px;
            height: 100px;
            border-radius:50%;
            position:absolute;
            top:-14%;
            left:calc(50% - 50px);
               }
        h1{    margin:0;
            padding: 0 0 20px;
            text-align: center;
            font-size: 30px;
            font-family:Arial, sans-serif;
            color:#ffffff;
          }
        .loginbox p{  margin:0;
            padding: 0;
            font-weight:bold;
                   }
        .loginbox input{width: 100%;
            margin-bottom:20px;
                       }
        .loginbox input[type="text"], input[type="password"]{
            border: none;
            border-bottom: 1px solid #fff;
            background: transparent;
            outline:none;
            height:40px;
            color:#fff;
            font-size:16px;
                }
        .loginbox input[type="submit"]{
            border: none;
            outline:none;
            height:40px;
            background:#fb2525;
            color: #fff;
            font-size:18px;
            border-radius:20px;
                }
        .loginbox input[type="submit"]:hover
        {    cursor:pointer;
            background:#ffc107;
            color:#000;
        }
        .loginbox a{
            text-decoration:none;
            font-size:12px;
            line-height:20px;
            color: darkgrey;
        }
        .loginbox a:hover
        {
          color:#ffc107;
        }
        .active{
          color:#fff;
          background:#e02626;
          border-radius:4px;
        }


        <!-- Below is for button styling -->
        .button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 10px 20px;
          cursor: pointer;
  }

  .button1 {border-radius: 2px;}
  .button2 {border-radius: 4px;}
  .button3 {border-radius: 8px;}
  .button4 {border-radius: 12px;}
  .button5 {border-radius: 50%;}

         </style>

    </head>
    <body>

          <img class="log">
          <div class="loginbox">
          <!-- <img src="avatar1.jpg" class="avatar"> -->
          <h1>ACHIEVEMENT HUNTER</h1>




              <input type="text" id="inputUsername"  placeholder="Email address" name="username" required autofocus>
              <input type="password" id="inputPassword"  placeholder="Password" name="password" required>

              <!-- <button class="button button4"onclick="signInButton()">Sign in</button> -->
              <button class="btn btn-lg btn-primary btn-block" type="button" onclick="signInButton()">Sign in</button>


              <!-- <button class="button button4"onclick="forgotpasswordbutton()">Forgot Password?</button> -->
              <!-- <button type="text" onclick="forgotpasswordbutton()">Forgot Password?</button><br> -->
              <button class="btn btn-sm btn-primary btn-block" onclick="window.location.href='forgotpassword.html'">Forgot Password</button>
              <!-- <button class="button button4"onclick="window.location.href='register.html'">Register</button> -->
              <button class="btn btn-sm btn-primary btn-block" onclick="window.location.href='register.html'">Register</button>

          </div>
          <script src="js/jquery-2.1.4.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/ajax-utils.js"></script>
            <script src="js/script.js"></script>



  <script>

    function signInButton() {

    var authenticationData = {
          Username : document.getElementById("inputUsername").value,
          Password : document.getElementById("inputPassword").value,
      };

      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var poolData = {
          UserPoolId : _config.cognito.userPoolId, // Your user pool id here
          ClientId : _config.cognito.clientId, // Your client id here
      };

      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      var userData = {
          Username : document.getElementById("inputUsername").value,
          Pool : userPool,
      };

      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);
        window.open("profile.html");
          },

          onFailure: function(err) {
              alert(err.message || JSON.stringify(err));
          },
      });
    }

    function forgotpasswordbutton() {
      window.location.replace("http://www.w3schools.com");

    }

  </script>
  </body>
  </html>
  );
}

export default Login;

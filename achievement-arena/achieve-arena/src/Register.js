import React from 'react';

function Register() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8">

      <!-- Javascript SDKs-->
      <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
      <script src="../../../Login/js/amazon-cognito-auth.min.js"></script>
      <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"></script>
      <script src="../../../Login/js/amazon-cognito-identity.min.js"></script>
      <script src="../../../Login/js/config.js"></script>


            <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="../../../Login/css/bootstrap.min.css">
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
            <h1>Register</h1>




                <input type="personalname" class="form-control" id="personalnameRegister" placeholder="Name" pattern=".*" required>
                <input type="email" class="form-control" id="emailInputRegister" placeholder="Email" pattern=".*" required>
                <input type="password" class="form-control" id="passwordInputRegister" placeholder="Password" pattern=".*" required>
                <input type="password" class="form-control" id="confirmationpassword" placeholder="Confirm Password" pattern=".*" required>
                <button id="mainbutton" class="btn btn-lg btn-primary btn-block" type="button" onclick="registerButton()" >Register</button>


            </div>


    <script>

        var username;
        var password;
        var personalname;
        var poolData;

        function registerButton() {

        personalnamename =  document.getElementById("personalnameRegister").value;
        username = document.getElementById("emailInputRegister").value;

        if (document.getElementById("passwordInputRegister").value != document.getElementById("confirmationpassword").value) {
          alert("Passwords Do Not Match!")
          throw "Passwords Do Not Match!"
        } else {
          password =  document.getElementById("passwordInputRegister").value;
        }

        poolData = {
            UserPoolId : _config.cognito.userPoolId, // Your user pool id here
            ClientId : _config.cognito.clientId // Your client id here
          };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var attributeList = [];

        var dataEmail = {
          Name : 'email',
          Value : username, //get from form field
        };

        var dataPersonalName = {
          Name : 'name',
          Value : personalname, //get from form field
        };

        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        var attributePersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(dataPersonalName);


        attributeList.push(attributeEmail);
        attributeList.push(attributePersonalName);

        userPool.signUp(username, password, attributeList, null, function(err, result){
        if (err) {
          alert(err.message);
          return;
        }
        else {
          alert("Check your email for verification link");
        }

          cognitoUser = result.user;
          console.log('user name is ' + cognitoUser.getUsername());
          //change elements of page


        });
        }

      </script>
    </body>
    </html>
  );
}

export default Register;

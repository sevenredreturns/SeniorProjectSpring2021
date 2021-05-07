var LoggedIn = (function(){
    var userID = "";
    var loggedin = false;

    var getUserID = function() {
        return userID;
    };

    var setUserID = function(uid) {
        userID = uid;
    };

    var setLoggedIn = function(loggedIn) {
        loggedin = loggedIn;
    };

    var getLoggedIn = function() {
        return loggedin;
    }

    return {
        getUserID : getUserID,
        setUserID : setUserID,
        setLoggedIn : setLoggedIn,
        getLoggedIn : getLoggedIn
    }
})();

export default LoggedIn;
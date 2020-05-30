/**
 * Sample JavaScript code for youtube.search.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */
function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
        .then(function () { console.log("Sign-in successful"); },
            function (err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("AIzaSyCVnHpsZxm8BHxDzkmRw1m7PZ3j8VmCDHI");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () { console.log("GAPI client loaded for API"); },
            function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    var search = document.getElementById("userInput").value;
    return gapi.client.youtube.search.list({
        "part": "snippet",
        "maxResults": 25,
        "q": search
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "898018842927-tt3o7nse86uvkm42pefmf34hp1hobhnn.apps.googleusercontent.com" });
});

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

//     <body>
//         <div class="g-signin2" data-onsuccess="onSignIn"></div>
//         <a href="#" onclick="signOut();">Sign out</a>
//         <input id="userInput">
//             <button onclick="authenticate().then(loadClient)">authorize and load</button>
//             <button onclick="execute()">execute</button>
// </body>
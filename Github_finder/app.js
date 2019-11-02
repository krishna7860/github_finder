// Search input
const searchUser = document.getElementById("searchUser");
const github = new Github();
const ui = new UI();
// Search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;

  if (userText !== "") {
    //   Make http call
    github.getUser(userText).then(data => {
      if (data["profile"]["message"] === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});

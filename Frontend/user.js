function getUsers() {
  fetch("http://localhost:3000/user/all", {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `
            <table>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
              </tr>`;

          data.forEach((item) => {
              text += `
                  <tr>
                    <td>${item.User_ID}</td>
                    <td>${item.First_Name}</td>
                    <td>${item.Last_Name}</td>
                    <td>${item.Email}</td>
                    <td>${item.Mobile}</td>
                    <td>${item.Gender}</td>
                  </tr>`;
          });
          text += "</table>";
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}

function getUserByUID() {
  var id = document.getElementById("paramId").value;  
  fetch(`http://localhost:3000/user/by-uid?user_id=${id}`, {method: "GET", redirect: "follow"})
      .then((response) => response.json())
      .then((data) => {
          var text = `
            <table>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
              </tr>`;

          data.forEach((item) => {
              text += `
                  <tr>
                    <td>${item.User_ID}</td>
                    <td>${item.First_Name}</td>
                    <td>${item.Last_Name}</td>
                    <td>${item.Email}</td>
                    <td>${item.Mobile}</td>
                    <td>${item.Gender}</td>
                  </tr>`;
          });
          text += "</table>";          
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}
function getUserByUIDindex() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/user/by-uid?user_id=${id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `            
                <p></p>               
              `;
          data.forEach((item) => {
              text += `                  
                    <p class="welcome">Welcome ${item.First_Name} ${item.Last_Name}.
                    <br>
                    Here is your details.
                    <br>                    
                    Email Address: ${item.Email}
                    <br>
                    Contact Number: ${item.Mobile}
                    <br>
                    Gender: ${item.Gender}
                    
                    </p>                    
                  `;
          });
          
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}

// function login() {
//   var uid = document.getElementById("paramId");
//   var pwd = // Wherever the user enters password;
//   fetch(`http://localhost:3000/account/by-aid?user_id=${uid.value}&pwd=${pwd.value}`, {method: "GET"})
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.length == 0){ // Login fail
//       window.location.href("something.html")
//     } else {
//       window.location.href("correctlogin.html")
//     }
//   })

// }
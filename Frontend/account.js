function getAccounts() {
  fetch(`http://localhost:3000/account/all`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `
            <table>
              <tr>
                <th>User ID</th>
                <th>Account Name</th>                
                <th>Account Type</th>
                <th>Subscriber Status</th>
              </tr>`;

          data.forEach((item) => {
              text += `
                  <tr>                    
                    <td>${item.User_ID}</td>
                    <td>${item.Account_Name}</td>
                    <td>${item.Account_Type}</td>
                    <td>${item.Subscriber_Status}</td>
                  </tr>`;
          });

          text += "</table>";
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}

//working fine up to this point

function getAccountByAID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/account/by-aid?user_id=${id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `
            <table>
              <tr>
                
                <th>Account Name</th>                
                <th>Account Type</th>
                <th>Subscriber Status</th>
              </tr>`;

          data.forEach((item) => {
              text += `
                  <tr>
                   
                   <td>${item.Account_Name}</td>
                   <td>${item.Account_Type}</td>
                   <td>${item.Subscriber_Status}</td>
                  </tr>`;
          });

          text += "</table>";
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}

function login() {
  var uid = document.getElementById("paramuid");
  var pwd = document.getElementById("parampwd");
  fetch(`http://localhost:3000/account/login?user_id=${uid.value}&pwd=${pwd.value}`, {method: "GET"})
  .then((response) => response.json())
  .then((data) => {
    if (data.length == 0){ // Login fail
      window.location.href = "index.html"
    } else {
      window.location.href = "profile.html"
    }
  })

}

function getAccountByAIDindex() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/account/by-aid?user_id=${id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `            
                <p></p>               
              `;
          data.forEach((item) => {
              text += `                  
                    <p class="welcome">You are a ${item.Account_Type} subscriber with ${item.Subscriber_Status} plan.
                    <br>
                    Check out our promotion rates!
                    </p>                    
                  `;
          });
          
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}

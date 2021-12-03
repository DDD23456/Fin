function getTransactions() {
    fetch("http://localhost:3000/transaction/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction Date</th>
                  <th>Category</th>
                  <th>User ID</th>
                  <th>Pearls</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.Transaction_ID}</td>
                      <td>${item.Transaction_Date}</td>
                      <td>${item.Category}</td>
                      <td>${item.User_ID}</td>
                      <td>${item.Pearls}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getTransactionByTID() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/transaction/by-tid?transaction_id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction Date</th>
                  <th>Category</th>
                  <th>User ID</th>
                  <th>Pearls</th>
                  </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                     <td>${item.User_ID}</td>
                     <td>${item.Transaction_ID}</td>
                     <td>${item.Transaction_Date}</td>
                     <td>${item.Category}</td>                     
                     <td>${item.Pearls}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}
function getTransactionByUID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/transaction/by-uid?user_id=${id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = `
            <table>
              <tr>
                
                <th>Transaction ID</th>
                <th>Transaction Date</th>
                <th>Category</th>                
                <th>Pearls</th>
                </tr>`;

          data.forEach((item) => {
              text += `
                  <tr>
                   
                   <td>${item.Transaction_ID}</td>
                   <td>${item.Transaction_Date}</td>
                   <td>${item.Category}</td>                   
                   <td>${item.Pearls}</td>
                  </tr>`;
          });
          text += "</table>";
          $(".mypanel").html(text);
      })
      .catch((error) => console.log("error", error));
}


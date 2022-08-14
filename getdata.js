function getAllFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/orders/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (order) {
        text += `<li>
        id: ${order.id} <br>
        customer ID: ${order.customerID} <br>
        item ID: ${order.itemID} <br>
        quantity: ${order.quantity} <br>
        order date: ${order.order_date} <br>
        ship date: ${order.shipping_date}
        </li><br>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

function getOrderFromServer() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/order/id?sid=" + form.sid.value;
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var result = data[0];
      var table = "<table class='table'><thead><th>CustomerID</th><th>ItemID</th><th>ItemName</th><th>Qnty</th><th>Shipping Date</th></thead>";
      table += "<tbody>";
      table += `<tr><td>${result.customerID}</td><td>${result.itemid}</td><td>${result.name}</td><td>${result.quantity}</td><td>${result.shipping_date}</td></tr></tbody>`;
      document.getElementById("mypanel").innerHTML = table;
      console.log(result);
    }).catch((error) => console.log("error", error));
}


function getCustFromServer() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/order/customer?cid=" + form.cid.value;
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      var table = "<table class='table table-bordered table-striped'><thead><th>Order ID</th><th>Item Name</th><th>Qnty</th><th>Shipping Date</th></thead>";
      table += "<tbody>";
      result.forEach(function (data) {
        table += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.quantity}</td><td>${data.shipping_date}</td></tr>`;
      })
      table += "</tbody></table>";
      document.getElementById("mypanel").innerHTML = table;
      console.log(table);})

    .catch((error) => console.log("error", error));
}

// function postData() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   respanel = document.getElementById("mypanel");

//   // Populate this data from e.g. form.
//   var raw = JSON.stringify({
//     name: form.name.value,
//     email: form.email.value,
//   });

//   console.log(raw);
//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//   };

//   fetch("http://localhost:3000/customer/add", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (respanel.innerHTML = result))
//     .catch((error) => console.log("error", error));
// }

// function deleteData() {
//   var requestOptions = {
//     method: "DELETE",
//   };
//   url = "http://localhost:3000/customer/delete?cid=" + form.cid.value;
//   fetch(url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => (document.getElementById("mypanel").innerHTML = result))
//     .catch((error) => console.log("error", error));
// }

// function getCustFromServer() {
//   var requestOptions = {
//     method: "GET",
//     // redirect: "follow",
//   };

//   fetch("http://localhost:3000/customer/id?cid=" + form.cid2.value, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       var text = "<ul>";
//       data.forEach(function (item) {
//         text += `<li>
//         id: ${item.customer_id} <br>
//         name: ${item.customer_name} <br>
//         email: ${item.customer_email}
//         </li>`;
//       });
//       text += "</ul>";
//       document.getElementById("mypanel").innerHTML = text;
//     })
//     .catch((error) => console.log("error", error));
// }



// function updateFromServer() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   respanel = document.getElementById("mypanel");

//   // Populate this data from e.g. form.
//   var raw = JSON.stringify({
//     cid: form.cid3.value,
//     email: form.cemail.value,
//   });

//   console.log(raw);
//   var requestOptions = {
//     method: "PUT",
//     headers: myHeaders,
//     body: raw,
//   };

//   fetch("http://localhost:3000/customer/update", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (respanel.innerHTML = result))
//     .catch((error) => console.log("error", error));
    
// }


// update prof code
// function updateData() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   respanel = document.getElementById("mypanel");

//   // Populate this data from e.g. form.
//   var raw = JSON.stringify({
//     cid: form.cid2.value,
//     cemail: form.cemail.value,
//   });

//   console.log(raw);
//   var requestOptions = {
//     method: "PUT",
//     headers: myHeaders,
//     body: raw,
//   };

//   fetch("http://localhost:3000/customer/change", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (respanel.innerHTML = result))
//     .catch((error) => console.log("error", error));
// }

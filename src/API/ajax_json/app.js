document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

// For Single Customer
function loadCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      console.log(customer);

      const output = `
      <ul>
      <li>Id: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>`;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.onerror = function () {
    console.log("Request error... ");
  };

  xhr.send();
}

// For Customers
function loadCustomers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      console.log(customers);
      let output = "";
      customers.forEach(function (customer) {
        output += `
        <ul>
        <li>Id: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>`;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.onerror = function () {
    console.log("Request error... ");
  };

  xhr.send();
}


// Select the total users and total sales elements
const totalUsersElement = document.getElementById('totalUsers');
const totalSalesElement = document.getElementById('totalSales');

// Select the button
const alertButton = document.getElementById('alertButton');

// Add an event listener to the button
alertButton.addEventListener('click', () => {
  const totalUsers = totalUsersElement.textContent;
  const totalSales = totalSalesElement.textContent;
  const alertMessage = `Total Users: ${totalUsers}, Total Sales: ${totalSales}`;
  alert(alertMessage);
});

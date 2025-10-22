const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'Spetember', 'October', 'November', 'December'];


(function populateMonths(){
  for(let i = 0; i < months.length; i++){
    const option = document.createElement('option');
    option.textContent = months[i];
    monthSelect.appendChild(option);
  }
})();

// function populateYears(){
//   let year = new Date().getFullYear();
//   for(let i = 0; i < 101; year++){
//     const option = document.createElement("option");
//     option.textContent = year - i;
//     yearSelect.appendChild(option);
//   }
// };

// populateYears();
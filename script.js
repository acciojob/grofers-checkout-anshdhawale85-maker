const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

const prices = document.querySelectorAll('.price');
let total = 0;

prices.forEach(p => {
  total += Number(p.textContent);
});

const table = document.querySelector('table');
table.innerHTML += `
  <tr>
    <td colspan="2" data-ns-test="grandTotal">${total}</td>
  </tr>
`;
};

getSumBtn.addEventListener("click", getSum);


//Add your code here

	let price = document.querySelectorAll(".price")

    let total = 0;

    price.forEach(pri => {
        total += Number(pri.textContent);
    })

    let tablee = document.querySelector("table");
    tablee.innerHTML += `
      <tr>
         <td colspan = "2" >${total}</td>
      </tr>
    `
  
};

getSumBtn.addEventListener("click", getSum);


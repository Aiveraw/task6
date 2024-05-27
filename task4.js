const name = document.querySelector(".text-data.arr").value;
const phoneNumber= document.querySelector('[data-form="Номер телефону"]').value;
const dataOfBirth = document.querySelector('[data-form="Дата народження"]').value;
const emailAddress = document.querySelector('[data-form="Електронна пошта"]').value;

console.log(name);
console.log(phoneNumber);
console.log(dataOfBirth);

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
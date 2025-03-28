function myFunction()
{
let name = document.getElementById("input_name")
let surname = document.getElementById("input_name")
let age = document.getElementById("input_age")
let h1_name = document.getElementById()
  
h1_name.innerText = "Hello, "+ name.value; + " " + surname.value;
alert(name.value + "is" + age.value + "y.o.");

if (age.value <= 0) 
{
    alert("Error: incorrect age!");
}
else
{
    alert(name.value);
}


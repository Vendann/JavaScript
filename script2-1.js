let is_raining = false;
let temperature = 22;
let minutes;

if ( is_raining && temperature < 10 && temperature > 35 )
{
  minutes = 0;
}
else if ( temperature >= 10 && temperature < 15)
{
  minutes = 30;
}

else if (temperature >= 15 && temperature < 25)
{
  minutes = 40;
}

else if (temperature >= 25 && temperature <= 35)
{
  minutes = 20;
}

console.log("Макс гуляет " + minutes + " минут");
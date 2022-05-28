let poly = 7897;
let ylop = 0;
let is_palindrome = false;
let number = poly;

let quantity = 0;
let i = 1;
while (poly / i >= 1)
{
  quantity ++;
  i *= 10;
}

for (let i = quantity - 1; i >=0; i --)
{
  ylop += (poly % 10) * Math.pow(10, i);
  poly = Math.floor(poly / 10);
}

if (number === ylop)
{
  is_palindrome = true;
  alert('Число ' + ylop + ' - палиндром');
}
else
{
  alert('Число ' + ylop + ' - не палиндром');
}
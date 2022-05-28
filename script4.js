let last_number = 9;
let multiplication_result = 1;

for (i = 2; i <= last_number; i = i + 2 )
{
  if (i % 2 === 0)
  {
    multiplication_result = multiplication_result * i;
  }
}
alert(multiplication_result)
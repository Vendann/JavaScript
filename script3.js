let time = prompt('Время');

let go_to_dairy = false;
let go_to_store = false;
let go_to_market = false;

if (time >= 8 && time < 13 || time >= 14 && time < 19)
{
  go_to_dairy = true;
  alert('Фабрика: ' + go_to_dairy);
}
else if (time >= 9 && time < 14 || time >= 15 && time < 17)
{
  go_to_store = true;
  alert('Магазин: ' + go_to_store);
}
else if (time >= 7 && time < 20)
{
  go_to_market = true;
  alert('Рынок: ' + go_to_market);
}
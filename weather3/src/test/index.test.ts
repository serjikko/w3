import axios from "axios";

test('Is weather API working', async () => {
  const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&exclude=daily&appid=fc6d2e135db9a7f03442e991e0b72221')
  
  expect(typeof data).toBe('object');
});

test('Is RSS API working', async () => {
  const data = await fetch('https://newsdata.io/api/1/latest?apikey=pub_4903015d7585781a82920cc76ec57546ef1fa&q=weather')
  
  expect(typeof data).toBe('object');
});




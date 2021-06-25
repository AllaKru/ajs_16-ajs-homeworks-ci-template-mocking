
import fetchData from '../http';
import getLevel from '../user';

jest.mock('../http');// имитация модуля htttp/ превращает функции в пустые, ниже заставляем ее возвращать что-то определенное

beforeEach(() => {
  jest.resetAllMocks(); // обнуление моков

  // fetchData.mockReturnValue({}) функция fetchData будет возвращать обькт. не undefined.
  // То есть кидаем заглушку и возвращаем что хотим
  // console.log(getLevel())
});


//  вариант 1
test('тестирование функции', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 500 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 500');
});

test('тестирование функции', () => {
  fetchData.mockReturnValue({ status: 'error', level: 500 });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});

test('тестирование функции', () => {
  fetchData.mockReturnValue({});
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});

//  вариант 2
// test('тестирование функции', () => {
//   getLevel(1); // говорим при вызове гетлевел с аргументом 1 мы ждем, что функция фетчдата должна быть вызвана с аргументом 'https://server/user/1'
//   expect(fetchData).toBeCalledWith('https://server/user/1');
// });

// test('тестирование функции', () => {
//   // fetchData.mockReturnValue({ status: 'ok', level: 500 });
//   // console.log(getLevel());
//   getLevel('alla');
//   expect(fetchData).toBeCalledWith('https://server/user/alla');
// });


// test('тестирование функции', () => {
//   // fetchData.mockReturnValue({ status: 'ok', level: 500 });
//   // console.log(getLevel());
//   getLevel();
//   expect(fetchData).toBeCalledWith('https://server/user/undefined');
// });

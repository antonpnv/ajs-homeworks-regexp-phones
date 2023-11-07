import { modificationPhone } from '../js/modification';

test('Очищает и форматирует номер телефона РФ', () => {
	expect(modificationPhone('8 (926) 000-00-00')).toBe('+79260000000');
	expect(modificationPhone('+7 960 000 00 00')).toBe('+79600000000');
});

test('Очищает и форматирует номер телефона Китая', () => {
	expect(modificationPhone('+861234567890')).toBe('+861234567890');
});

test('Очищает и форматирует номер телефона с кодом 9 и длиной 10', () => {
	expect(modificationPhone('9123456789')).toBe('+79123456789');
	expect(modificationPhone('9234567890')).toBe('+79234567890');
});

test('Очищает и форматирует номеры с разными форматами ввода', () => {
	expect(modificationPhone('12-345-678 90')).toBe('1234567890');
	expect(modificationPhone('1 23 4-567-89 0')).toBe('1234567890');
});

test('Очищает и форматирует номеры с разной длиной', () => {
	expect(modificationPhone('123456789')).toBe('123456789');
	expect(modificationPhone('12345678901')).toBe('12345678901');
	expect(modificationPhone('1234567890123456')).toBe('1234567890123456');
});

test('В других случаях', () => {
	expect(modificationPhone('12345abc6789')).toBe('123456789'); // Удаляет не цифровые символы
	expect(modificationPhone('')).toBe(''); // Пустой ввод приведет к пустому выводу
	expect(modificationPhone('555')).toBe('555'); // Возвращает исходный номер, если ни одно условие не выполняется
});
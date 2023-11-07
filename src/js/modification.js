export function modificationPhone(phoneNumber) {
	const cleanedNumber = phoneNumber.replace(/[^+\d]/g, '');

	if (cleanedNumber.startsWith('7') || cleanedNumber.startsWith('8')) {
		return `+7${cleanedNumber.slice(1)}`;
	}

	if (cleanedNumber.startsWith('9') && cleanedNumber.length === 10) {
		return `+7${cleanedNumber}`;
	}

	return cleanedNumber;
}
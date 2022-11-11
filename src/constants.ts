export enum STATUS_CODES {
	UNPROCESSABLE_ENTITY = 422,
}

export const MESSAGES = {
	USER_ALREADY_EXISTS: 'Такой пользователь уже существует',
	NOT_CORRECT_NAME: 'Не указано имя',
	NOT_CORRECT_PASSWORD: 'Не указан пароль',
	NOT_CORRECT_EMAIL: 'Неверно указан email',
	FILED_READ_ENV: 'Не удалось прочитать файл .env или он отсутствует',
	ENV_LOADED: 'Конфигурация .env загружена',
};

export enum ENV_NAMES {
	SALT = 'SALT',
}

import { IsEmail, IsString } from 'class-validator';
import { MESSAGES } from '../../constants';

export class UserRegisterDto {
	@IsString({ message: MESSAGES.NOT_CORRECT_NAME })
	name: string;

	@IsEmail({}, { message: MESSAGES.NOT_CORRECT_EMAIL })
	email: string;

	@IsString({ message: MESSAGES.NOT_CORRECT_PASSWORD })
	password: string;
}

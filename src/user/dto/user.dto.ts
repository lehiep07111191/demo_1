export class CreateUserDto {
    email: string;
    password: string;
    address: string;
    date_of_birth: string;
    roles: [string];
}
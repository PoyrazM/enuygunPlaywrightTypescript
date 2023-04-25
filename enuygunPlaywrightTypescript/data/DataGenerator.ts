import { faker } from '@faker-js/faker';

export class DataGenerator {
    public static EMAIL: string = faker.internet.email();
    public static PASSWORD: string = faker.internet.password();
    public static IS_ACCEPT: boolean = faker.datatype.boolean();
    public static INVALID_EMAIL: string = faker.internet.userName();
    public static INVALID_PASSWORD: string = "123";
}

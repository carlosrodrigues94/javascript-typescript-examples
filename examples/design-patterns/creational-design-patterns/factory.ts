interface UserModel {
  id: string;
  name: string;
  age: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

interface UsersRepository {
  create(data: Partial<UserModel>): Promise<UserModel>;
  update(data: Partial<UserModel>): Promise<UserModel>;
}

class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(): Promise<UserModel> {
    return await this.usersRepository.create({
      id: "a",
      age: 15,
      name: "John",
    });
  }
}

/** Factory  */
class ConcreteUsersRepository implements UsersRepository {
  create(data: Partial<UserModel>): Promise<UserModel> {
    // Knex
    // Typeorm
    // MongoDb
    // FaunaDb
    // Lucid

    return Promise.resolve(data as UserModel);
  }
  update(data: Partial<UserModel>): Promise<UserModel> {
    // Knex
    // Typeorm
    // MongoDb
    // FaunaDb
    // Lucid

    return Promise.resolve(data as UserModel);
  }
}

const concreteUsersRepository = new ConcreteUsersRepository();

/** Factory implementation */

const usecase = new CreateUserUseCase(concreteUsersRepository);

usecase
  .execute()
  .then((result) =>
    console.log("[Design Patterns] Factory Example => ", result)
  );
/**
 * [Design Patterns] Factory Example =>  { id: 'a', age: 15, name: 'John' }
 */

export {};

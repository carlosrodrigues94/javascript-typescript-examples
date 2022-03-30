class MongoDb {
  create(): Promise<{ schemaName: string }> {
    return Promise.resolve({ schemaName: "users" });
  }
}

class Postgres {
  insert(): Promise<unknown> {
    return Promise.resolve({});
  }
}

interface UsersRepository {
  createUser(): Promise<void>;
}

/**
 * It will have the same result if you use the UsersRepository as a class and extends it but,
 * to test extended class its a little bit difficulty
 */

class MongoDbRepositoryAdapter implements UsersRepository {
  constructor(private mongoDb: MongoDb) {}

  async createUser(): Promise<void> {
    await this.mongoDb.create();

    return;
  }
}

class PostgresRepositoryAdapter implements UsersRepository {
  constructor(private postgres: Postgres) {}

  async createUser(): Promise<void> {
    await this.postgres.insert();

    return;
  }
}

async function clientCode(repository: UsersRepository) {
  await repository.createUser();
}

const postgres = new Postgres();
const mongodb = new MongoDb();

const mongoDbRepositoryAdapter = new MongoDbRepositoryAdapter(mongodb);
const postgresRepositoryAdapter = new PostgresRepositoryAdapter(postgres);

clientCode(mongoDbRepositoryAdapter).then((result) =>
  console.log("Works", result)
);

clientCode(postgresRepositoryAdapter).then((result) =>
  console.log("Works", result)
);

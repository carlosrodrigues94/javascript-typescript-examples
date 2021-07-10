type UpdatePayload = { name: string };
type UpdateResult = { created: boolean };

type RepositoryPayload = { name: string };

/** Cannot create an instance of an abstract class */
abstract class AbstractClass {
  constructor(
    private repository: (data: RepositoryPayload) => RepositoryPayload
  ) {}

  create(data: RepositoryPayload) {
    const result = this.repository(data);

    return result;
  }

  /** Abstract methods can only be used in abstract classes */
  /** Method update cannot have a implementation because its abstract */
  abstract update(data: UpdatePayload): Promise<UpdateResult>;
}

class ExampleAbstract extends AbstractClass {
  execute() {
    const result = this.create({ name: "carlos" });

    console.log("ExampleAbstract (execute) => ", result);

    return result;
  }

  /** implementation of this method its mandatory because,
   *  its a abstract method from extended class
   */
  update(data: UpdatePayload): Promise<UpdateResult> {
    return Promise.resolve({ created: true });
  }
}

const repository = (data: RepositoryPayload) => data;

const exampleAbstract = new ExampleAbstract(repository);

exampleAbstract.execute();
// ExampleAbstract (execute) =>  { name: 'carlos' }

exampleAbstract
  .update({ name: "Carlos" })
  .then((res) => console.log("ExampleAbstract (update) => ", res));

// ExampleAbstract (update) =>  { created: true }

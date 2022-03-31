class UuidService {
  create(): string {
    return "uuid";
  }
}

class NanoIdService {
  generate(): string {
    return "nano-id";
  }
}

interface UniqueIdAdapter {
  generate(): string;
}

/**
 * It will have the same result if you use the UsersRepository as a class and extends it but,
 * to test extended class its a little bit difficulty
 */

class UuidAdapter implements UniqueIdAdapter {
  constructor(private readonly uuidService: UuidService) {}

  generate(): string {
    return this.uuidService.create();
  }
}
class NanoIdAdapter implements UniqueIdAdapter {
  constructor(private readonly nanoIdService: NanoIdService) {}

  generate(): string {
    return this.nanoIdService.generate();
  }
}

async function clientCode(uniqueIdGenerator: UniqueIdAdapter) {
  const id = uniqueIdGenerator.generate();
  return id;
}

const uuidService = new UuidService();
const nanoIdService = new NanoIdService();

const uuidAdapter = new UuidAdapter(uuidService);
const nanoIdAdapter = new NanoIdAdapter(nanoIdService);

const result1 = clientCode(uuidAdapter);
const result2 = clientCode(nanoIdAdapter);

console.log("Uuid => ", result1);
console.log("NanoId => ", result2);

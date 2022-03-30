export class Singleton {
  private static instance: Singleton;

  // constructor should be always private to prevent constructor calls with the "new"
  private constructor() {}

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}

function client() {
  const firstSingleton = Singleton.getInstance();
  const secondSingleton = Singleton.getInstance();

  if (firstSingleton === secondSingleton) {
    console.log("Singleton is working!");
  } else {
    console.log("Singleton failed,");
  }
}

client();

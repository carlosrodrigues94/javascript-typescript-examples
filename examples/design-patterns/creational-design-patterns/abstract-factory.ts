interface Car {
  id: string;
  name: string;
  company: string;
}

interface AbstractFactory {
  createHatchCar(): Car;
  createSuvCar(): Car;
  addCarExtras(
    additional: { soundSystem?: boolean; eletricGlasses?: boolean },
    carId: string
  ): Promise<void>;
}

class ConcreteRenaultFactory implements AbstractFactory {
  createHatchCar(): Car {
    return { id: "1", company: "Renault", name: "Sandero" };
  }
  createSuvCar(): Car {
    return { id: "2", company: "Renault", name: "Duster" };
  }

  addCarExtras(
    additional: { soundSystem: boolean; eletricGlasses: boolean },
    carId: string
  ): Promise<void> {
    return Promise.resolve();
  }
}

class ConcreteChevroletFactory implements AbstractFactory {
  createHatchCar(): Car {
    return { id: "1", company: "Chevrolet", name: "Onix" };
  }
  createSuvCar(): Car {
    return { id: "2", company: "Chevrolet", name: "Tracker" };
  }

  addCarExtras(
    additional: { soundSystem: boolean; eletricGlasses: boolean },
    carId: string
  ): Promise<void> {
    return Promise.resolve();
  }
}

class MakeCarsUsecase {
  constructor(private readonly factory: AbstractFactory) {}

  async execute(): Promise<Car[]> {
    const hatchCar = this.factory.createHatchCar();
    const suvCar = this.factory.createSuvCar();

    await this.factory.addCarExtras({ eletricGlasses: true }, hatchCar.id);

    return [hatchCar, suvCar];
  }
}

/** Abstract Factory */

const concreteRenaultFactory = new ConcreteRenaultFactory();
const concreteChevroletFactory = new ConcreteChevroletFactory();

const usecase = new MakeCarsUsecase(concreteRenaultFactory);

usecase
  .execute()
  .then((result) =>
    console.log("[Design Patterns] Abstract Factory => ", result)
  );

/**
 * [Design Patterns] Abstract Factory =>  [
  { id: '1', company: 'Renault', name: 'Sandero' },
  { id: '2', company: 'Renault', name: 'Duster' }
]
 */

export {};

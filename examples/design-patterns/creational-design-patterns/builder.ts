interface CarSuspension {
  name: string;
  brand: string;
}

interface CarTires {
  brand: string;
  measurement: string;
}

interface CarEngine {
  type: "v4" | "v6" | "v8";
  km: number;
}

interface CarBodywork {
  color: string;
}

interface CarExtras {
  eletricGlasses?: boolean;
  alarm?: boolean;
  xenon?: boolean;
  bluetooth?: boolean;
  autoPilot?: boolean;
}

/** Builder Interface  */
interface Builder {
  createCarSuspension(): CarSuspension;
  createCarEngine(): CarEngine;
  createCarTires(): CarTires;
  addCarExtras(): CarExtras;
  createCarBodywork(): CarBodywork;
}

type CarParts = {
  suspension: CarSuspension;
  tires: CarTires;
  engine: CarEngine;
  bodywork: CarBodywork;
  extras?: CarExtras;
};

class Car {
  public carParts!: CarParts;

  public listCarParts() {
    return this.carParts;
  }
}

class ConcreteBuilderCar implements Builder {
  public car!: Car;

  constructor(private readonly CarClass: new () => Car) {
    this.reset();
  }

  public reset() {
    this.car = new this.CarClass();
  }

  createCarBodywork() {
    const bodywork: CarBodywork = { color: "blue" };
    this.car.carParts = { ...this.car.carParts, bodywork };
    return bodywork;
  }
  createCarTires(): CarTires {
    const tires: CarTires = { brand: "toyo", measurement: "185/70 R15" };
    this.car.carParts = { ...this.car.carParts, tires };

    return tires;
  }

  createCarEngine(): CarEngine {
    const engine: CarEngine = { km: 150_000, type: "v8" };
    this.car.carParts = { ...this.car.carParts, engine };

    return engine;
  }

  createCarSuspension() {
    const suspension: CarSuspension = {
      brand: "series-s",
      name: "performace suspension",
    };
    this.car.carParts = { ...this.car.carParts, suspension };

    return suspension;
  }

  addCarExtras() {
    const extras: CarExtras = {
      eletricGlasses: true,
      alarm: true,
      autoPilot: true,
      bluetooth: true,
      xenon: true,
    };
    this.car.carParts = { ...this.car.carParts, extras };

    return extras;
  }
}

/** Director, used to determinate how builder will be used */
class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalCar(): void {
    this.builder.createCarEngine();
    this.builder.createCarTires();
    this.builder.createCarSuspension();
  }

  public buildCompleteCar(): void {
    this.builder.createCarBodywork();
    this.builder.createCarEngine();
    this.builder.createCarSuspension();
    this.builder.createCarTires();
    this.builder.addCarExtras();
  }
}

/** Logs */
const logger = (logType: string, logData: unknown) => {
  return console.log(`[DESIGN-PATTERS (BUILDER)] - ${logType}`, logData);
};

/** Implementation */
const carBuilder = new ConcreteBuilderCar(Car);

const director = new Director();
director.setBuilder(carBuilder);
director.buildMinimalCar();

logger("MINIMAL CAR", carBuilder.car.listCarParts());
logger("LIST PARTS", carBuilder.car.listCarParts());

carBuilder.reset();
logger("RESETED LIST PARTS", carBuilder.car.listCarParts());

director.buildCompleteCar();
logger("FULL CAR", carBuilder.car.listCarParts());

/**
 * 
  [DESIGN-PATTERS (BUILDER)] - MINIMAL CAR {
    engine: { km: 150000, type: 'v8' },
    tires: { brand: 'toyo', measurement: '185/70 R15' },
    suspension: { brand: 'series-s', name: 'performace suspension' }
  }
  [DESIGN-PATTERS (BUILDER)] - LIST PARTS {
    engine: { km: 150000, type: 'v8' },
    tires: { brand: 'toyo', measurement: '185/70 R15' },
    suspension: { brand: 'series-s', name: 'performace suspension' }
  }
  [DESIGN-PATTERS (BUILDER)] - RESETED LIST PARTS undefined
  [DESIGN-PATTERS (BUILDER)] - FULL CAR {
    bodywork: { color: 'blue' },
    engine: { km: 150000, type: 'v8' },
    suspension: { brand: 'series-s', name: 'performace suspension' },
    tires: { brand: 'toyo', measurement: '185/70 R15' },
    extras: {
      eletricGlasses: true,
      alarm: true,
      autoPilot: true,
      bluetooth: true,
      xenon: true
    }
  }
 */

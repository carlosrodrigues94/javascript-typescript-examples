export function GetOwnPropertyDescriptorExample() {
  const object = { id: 1, name: "Carlos" };

  /** Return the description of property from object */
  const result = Object.getOwnPropertyDescriptor(object, "name");

  console.log("[OBJECT] - ExampleGetOwnPropertyDescriptor => ", result);
  /**
   * [OBJECT] - ExampleGetOwnPropertyDescriptor =>  {
      value: 'Carlos',
      writable: true,
      enumerable: true,
      configurable: true
    }
   */
}

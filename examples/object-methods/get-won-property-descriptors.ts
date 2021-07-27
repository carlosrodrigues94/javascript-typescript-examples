export function GetOwnPropertyDescriptorsExample() {
  const object = { id: 1, name: "Carlos" };

  /** Returns description from all properties of object */
  const result = Object.getOwnPropertyDescriptors(object);

  console.log("[OBJECT] - GetOwnPropertyDescriptorsExample => ", result);
  /**
   * [OBJECT] - GetOwnPropertyDescriptorsExample =>  {
      id: { value: 1, writable: true, enumerable: true, configurable: true },
      name: {
        value: 'Carlos',
        writable: true,
        enumerable: true,
        configurable: true
      }
    }
   */
}

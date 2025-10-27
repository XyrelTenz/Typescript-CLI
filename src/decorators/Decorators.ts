export function Descriptor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: string[]) {
    console.log(propertyKey);

    return originalMethod.apply(this, args);
  };

  return descriptor;
}

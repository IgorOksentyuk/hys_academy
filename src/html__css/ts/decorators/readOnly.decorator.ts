export function ReadOnly(target: Object, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}

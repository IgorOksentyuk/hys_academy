export function ReadOnly(target: Function, key: string, descriptor: any) {
  descriptor.writable = false;
}

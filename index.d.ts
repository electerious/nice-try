declare module "nice-try" {
  export default function niceTry(f: (...args: any) => any): ReturnType<typeof f>;
}

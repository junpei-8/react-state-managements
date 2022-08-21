export type ActionFactory<T extends { [key: string]: any }> = ReturnType<T[keyof T]>;

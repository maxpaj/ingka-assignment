export interface SimpleRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;
}

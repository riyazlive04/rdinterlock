
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model attendance
 * 
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>
/**
 * Model brick_types
 * 
 */
export type brick_types = $Result.DefaultSelection<Prisma.$brick_typesPayload>
/**
 * Model cash_entries
 * 
 */
export type cash_entries = $Result.DefaultSelection<Prisma.$cash_entriesPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model daily_wages
 * 
 */
export type daily_wages = $Result.DefaultSelection<Prisma.$daily_wagesPayload>
/**
 * Model dispatches
 * 
 */
export type dispatches = $Result.DefaultSelection<Prisma.$dispatchesPayload>
/**
 * Model expenses
 * 
 */
export type expenses = $Result.DefaultSelection<Prisma.$expensesPayload>
/**
 * Model machines
 * 
 */
export type machines = $Result.DefaultSelection<Prisma.$machinesPayload>
/**
 * Model material_usages
 * 
 */
export type material_usages = $Result.DefaultSelection<Prisma.$material_usagesPayload>
/**
 * Model production_workers
 * 
 */
export type production_workers = $Result.DefaultSelection<Prisma.$production_workersPayload>
/**
 * Model productions
 * 
 */
export type productions = $Result.DefaultSelection<Prisma.$productionsPayload>
/**
 * Model raw_materials
 * 
 */
export type raw_materials = $Result.DefaultSelection<Prisma.$raw_materialsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model weekly_settlements
 * 
 */
export type weekly_settlements = $Result.DefaultSelection<Prisma.$weekly_settlementsPayload>
/**
 * Model worker_advances
 * 
 */
export type worker_advances = $Result.DefaultSelection<Prisma.$worker_advancesPayload>
/**
 * Model workers
 * 
 */
export type workers = $Result.DefaultSelection<Prisma.$workersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.attendanceDelegate<ExtArgs>;

  /**
   * `prisma.brick_types`: Exposes CRUD operations for the **brick_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brick_types
    * const brick_types = await prisma.brick_types.findMany()
    * ```
    */
  get brick_types(): Prisma.brick_typesDelegate<ExtArgs>;

  /**
   * `prisma.cash_entries`: Exposes CRUD operations for the **cash_entries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cash_entries
    * const cash_entries = await prisma.cash_entries.findMany()
    * ```
    */
  get cash_entries(): Prisma.cash_entriesDelegate<ExtArgs>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs>;

  /**
   * `prisma.daily_wages`: Exposes CRUD operations for the **daily_wages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daily_wages
    * const daily_wages = await prisma.daily_wages.findMany()
    * ```
    */
  get daily_wages(): Prisma.daily_wagesDelegate<ExtArgs>;

  /**
   * `prisma.dispatches`: Exposes CRUD operations for the **dispatches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispatches
    * const dispatches = await prisma.dispatches.findMany()
    * ```
    */
  get dispatches(): Prisma.dispatchesDelegate<ExtArgs>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.expensesDelegate<ExtArgs>;

  /**
   * `prisma.machines`: Exposes CRUD operations for the **machines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machines
    * const machines = await prisma.machines.findMany()
    * ```
    */
  get machines(): Prisma.machinesDelegate<ExtArgs>;

  /**
   * `prisma.material_usages`: Exposes CRUD operations for the **material_usages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Material_usages
    * const material_usages = await prisma.material_usages.findMany()
    * ```
    */
  get material_usages(): Prisma.material_usagesDelegate<ExtArgs>;

  /**
   * `prisma.production_workers`: Exposes CRUD operations for the **production_workers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Production_workers
    * const production_workers = await prisma.production_workers.findMany()
    * ```
    */
  get production_workers(): Prisma.production_workersDelegate<ExtArgs>;

  /**
   * `prisma.productions`: Exposes CRUD operations for the **productions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productions
    * const productions = await prisma.productions.findMany()
    * ```
    */
  get productions(): Prisma.productionsDelegate<ExtArgs>;

  /**
   * `prisma.raw_materials`: Exposes CRUD operations for the **raw_materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_materials
    * const raw_materials = await prisma.raw_materials.findMany()
    * ```
    */
  get raw_materials(): Prisma.raw_materialsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.weekly_settlements`: Exposes CRUD operations for the **weekly_settlements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weekly_settlements
    * const weekly_settlements = await prisma.weekly_settlements.findMany()
    * ```
    */
  get weekly_settlements(): Prisma.weekly_settlementsDelegate<ExtArgs>;

  /**
   * `prisma.worker_advances`: Exposes CRUD operations for the **worker_advances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worker_advances
    * const worker_advances = await prisma.worker_advances.findMany()
    * ```
    */
  get worker_advances(): Prisma.worker_advancesDelegate<ExtArgs>;

  /**
   * `prisma.workers`: Exposes CRUD operations for the **workers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.workers.findMany()
    * ```
    */
  get workers(): Prisma.workersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    attendance: 'attendance',
    brick_types: 'brick_types',
    cash_entries: 'cash_entries',
    customers: 'customers',
    daily_wages: 'daily_wages',
    dispatches: 'dispatches',
    expenses: 'expenses',
    machines: 'machines',
    material_usages: 'material_usages',
    production_workers: 'production_workers',
    productions: 'productions',
    raw_materials: 'raw_materials',
    users: 'users',
    weekly_settlements: 'weekly_settlements',
    worker_advances: 'worker_advances',
    workers: 'workers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "attendance" | "brick_types" | "cash_entries" | "customers" | "daily_wages" | "dispatches" | "expenses" | "machines" | "material_usages" | "production_workers" | "productions" | "raw_materials" | "users" | "weekly_settlements" | "worker_advances" | "workers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>
        fields: Prisma.attendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      brick_types: {
        payload: Prisma.$brick_typesPayload<ExtArgs>
        fields: Prisma.brick_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.brick_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.brick_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>
          }
          findFirst: {
            args: Prisma.brick_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.brick_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>
          }
          findMany: {
            args: Prisma.brick_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>[]
          }
          create: {
            args: Prisma.brick_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>
          }
          createMany: {
            args: Prisma.brick_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.brick_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>[]
          }
          delete: {
            args: Prisma.brick_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>
          }
          update: {
            args: Prisma.brick_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>
          }
          deleteMany: {
            args: Prisma.brick_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.brick_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.brick_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brick_typesPayload>
          }
          aggregate: {
            args: Prisma.Brick_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrick_types>
          }
          groupBy: {
            args: Prisma.brick_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Brick_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.brick_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Brick_typesCountAggregateOutputType> | number
          }
        }
      }
      cash_entries: {
        payload: Prisma.$cash_entriesPayload<ExtArgs>
        fields: Prisma.cash_entriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cash_entriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cash_entriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>
          }
          findFirst: {
            args: Prisma.cash_entriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cash_entriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>
          }
          findMany: {
            args: Prisma.cash_entriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>[]
          }
          create: {
            args: Prisma.cash_entriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>
          }
          createMany: {
            args: Prisma.cash_entriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cash_entriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>[]
          }
          delete: {
            args: Prisma.cash_entriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>
          }
          update: {
            args: Prisma.cash_entriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>
          }
          deleteMany: {
            args: Prisma.cash_entriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cash_entriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cash_entriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cash_entriesPayload>
          }
          aggregate: {
            args: Prisma.Cash_entriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCash_entries>
          }
          groupBy: {
            args: Prisma.cash_entriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cash_entriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.cash_entriesCountArgs<ExtArgs>
            result: $Utils.Optional<Cash_entriesCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      daily_wages: {
        payload: Prisma.$daily_wagesPayload<ExtArgs>
        fields: Prisma.daily_wagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.daily_wagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.daily_wagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>
          }
          findFirst: {
            args: Prisma.daily_wagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.daily_wagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>
          }
          findMany: {
            args: Prisma.daily_wagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>[]
          }
          create: {
            args: Prisma.daily_wagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>
          }
          createMany: {
            args: Prisma.daily_wagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.daily_wagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>[]
          }
          delete: {
            args: Prisma.daily_wagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>
          }
          update: {
            args: Prisma.daily_wagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>
          }
          deleteMany: {
            args: Prisma.daily_wagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.daily_wagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.daily_wagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_wagesPayload>
          }
          aggregate: {
            args: Prisma.Daily_wagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaily_wages>
          }
          groupBy: {
            args: Prisma.daily_wagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Daily_wagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.daily_wagesCountArgs<ExtArgs>
            result: $Utils.Optional<Daily_wagesCountAggregateOutputType> | number
          }
        }
      }
      dispatches: {
        payload: Prisma.$dispatchesPayload<ExtArgs>
        fields: Prisma.dispatchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dispatchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dispatchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>
          }
          findFirst: {
            args: Prisma.dispatchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dispatchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>
          }
          findMany: {
            args: Prisma.dispatchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>[]
          }
          create: {
            args: Prisma.dispatchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>
          }
          createMany: {
            args: Prisma.dispatchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dispatchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>[]
          }
          delete: {
            args: Prisma.dispatchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>
          }
          update: {
            args: Prisma.dispatchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>
          }
          deleteMany: {
            args: Prisma.dispatchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dispatchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dispatchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dispatchesPayload>
          }
          aggregate: {
            args: Prisma.DispatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispatches>
          }
          groupBy: {
            args: Prisma.dispatchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.dispatchesCountArgs<ExtArgs>
            result: $Utils.Optional<DispatchesCountAggregateOutputType> | number
          }
        }
      }
      expenses: {
        payload: Prisma.$expensesPayload<ExtArgs>
        fields: Prisma.expensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findFirst: {
            args: Prisma.expensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findMany: {
            args: Prisma.expensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          create: {
            args: Prisma.expensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          createMany: {
            args: Prisma.expensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          delete: {
            args: Prisma.expensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          update: {
            args: Prisma.expensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          deleteMany: {
            args: Prisma.expensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.expensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.expensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.expensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      machines: {
        payload: Prisma.$machinesPayload<ExtArgs>
        fields: Prisma.machinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.machinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.machinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          findFirst: {
            args: Prisma.machinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.machinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          findMany: {
            args: Prisma.machinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>[]
          }
          create: {
            args: Prisma.machinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          createMany: {
            args: Prisma.machinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.machinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>[]
          }
          delete: {
            args: Prisma.machinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          update: {
            args: Prisma.machinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          deleteMany: {
            args: Prisma.machinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.machinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.machinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          aggregate: {
            args: Prisma.MachinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachines>
          }
          groupBy: {
            args: Prisma.machinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.machinesCountArgs<ExtArgs>
            result: $Utils.Optional<MachinesCountAggregateOutputType> | number
          }
        }
      }
      material_usages: {
        payload: Prisma.$material_usagesPayload<ExtArgs>
        fields: Prisma.material_usagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.material_usagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.material_usagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>
          }
          findFirst: {
            args: Prisma.material_usagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.material_usagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>
          }
          findMany: {
            args: Prisma.material_usagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>[]
          }
          create: {
            args: Prisma.material_usagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>
          }
          createMany: {
            args: Prisma.material_usagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.material_usagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>[]
          }
          delete: {
            args: Prisma.material_usagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>
          }
          update: {
            args: Prisma.material_usagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>
          }
          deleteMany: {
            args: Prisma.material_usagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.material_usagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.material_usagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_usagesPayload>
          }
          aggregate: {
            args: Prisma.Material_usagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial_usages>
          }
          groupBy: {
            args: Prisma.material_usagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Material_usagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.material_usagesCountArgs<ExtArgs>
            result: $Utils.Optional<Material_usagesCountAggregateOutputType> | number
          }
        }
      }
      production_workers: {
        payload: Prisma.$production_workersPayload<ExtArgs>
        fields: Prisma.production_workersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.production_workersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.production_workersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>
          }
          findFirst: {
            args: Prisma.production_workersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.production_workersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>
          }
          findMany: {
            args: Prisma.production_workersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>[]
          }
          create: {
            args: Prisma.production_workersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>
          }
          createMany: {
            args: Prisma.production_workersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.production_workersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>[]
          }
          delete: {
            args: Prisma.production_workersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>
          }
          update: {
            args: Prisma.production_workersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>
          }
          deleteMany: {
            args: Prisma.production_workersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.production_workersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.production_workersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$production_workersPayload>
          }
          aggregate: {
            args: Prisma.Production_workersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduction_workers>
          }
          groupBy: {
            args: Prisma.production_workersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Production_workersGroupByOutputType>[]
          }
          count: {
            args: Prisma.production_workersCountArgs<ExtArgs>
            result: $Utils.Optional<Production_workersCountAggregateOutputType> | number
          }
        }
      }
      productions: {
        payload: Prisma.$productionsPayload<ExtArgs>
        fields: Prisma.productionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>
          }
          findFirst: {
            args: Prisma.productionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>
          }
          findMany: {
            args: Prisma.productionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>[]
          }
          create: {
            args: Prisma.productionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>
          }
          createMany: {
            args: Prisma.productionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>[]
          }
          delete: {
            args: Prisma.productionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>
          }
          update: {
            args: Prisma.productionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>
          }
          deleteMany: {
            args: Prisma.productionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productionsPayload>
          }
          aggregate: {
            args: Prisma.ProductionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductions>
          }
          groupBy: {
            args: Prisma.productionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productionsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionsCountAggregateOutputType> | number
          }
        }
      }
      raw_materials: {
        payload: Prisma.$raw_materialsPayload<ExtArgs>
        fields: Prisma.raw_materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          findFirst: {
            args: Prisma.raw_materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          findMany: {
            args: Prisma.raw_materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>[]
          }
          create: {
            args: Prisma.raw_materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          createMany: {
            args: Prisma.raw_materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.raw_materialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>[]
          }
          delete: {
            args: Prisma.raw_materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          update: {
            args: Prisma.raw_materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          deleteMany: {
            args: Prisma.raw_materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.raw_materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          aggregate: {
            args: Prisma.Raw_materialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_materials>
          }
          groupBy: {
            args: Prisma.raw_materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_materialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_materialsCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_materialsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      weekly_settlements: {
        payload: Prisma.$weekly_settlementsPayload<ExtArgs>
        fields: Prisma.weekly_settlementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.weekly_settlementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.weekly_settlementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>
          }
          findFirst: {
            args: Prisma.weekly_settlementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.weekly_settlementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>
          }
          findMany: {
            args: Prisma.weekly_settlementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>[]
          }
          create: {
            args: Prisma.weekly_settlementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>
          }
          createMany: {
            args: Prisma.weekly_settlementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.weekly_settlementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>[]
          }
          delete: {
            args: Prisma.weekly_settlementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>
          }
          update: {
            args: Prisma.weekly_settlementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>
          }
          deleteMany: {
            args: Prisma.weekly_settlementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.weekly_settlementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.weekly_settlementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weekly_settlementsPayload>
          }
          aggregate: {
            args: Prisma.Weekly_settlementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeekly_settlements>
          }
          groupBy: {
            args: Prisma.weekly_settlementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Weekly_settlementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.weekly_settlementsCountArgs<ExtArgs>
            result: $Utils.Optional<Weekly_settlementsCountAggregateOutputType> | number
          }
        }
      }
      worker_advances: {
        payload: Prisma.$worker_advancesPayload<ExtArgs>
        fields: Prisma.worker_advancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.worker_advancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.worker_advancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>
          }
          findFirst: {
            args: Prisma.worker_advancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.worker_advancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>
          }
          findMany: {
            args: Prisma.worker_advancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>[]
          }
          create: {
            args: Prisma.worker_advancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>
          }
          createMany: {
            args: Prisma.worker_advancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.worker_advancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>[]
          }
          delete: {
            args: Prisma.worker_advancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>
          }
          update: {
            args: Prisma.worker_advancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>
          }
          deleteMany: {
            args: Prisma.worker_advancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.worker_advancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.worker_advancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worker_advancesPayload>
          }
          aggregate: {
            args: Prisma.Worker_advancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker_advances>
          }
          groupBy: {
            args: Prisma.worker_advancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Worker_advancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.worker_advancesCountArgs<ExtArgs>
            result: $Utils.Optional<Worker_advancesCountAggregateOutputType> | number
          }
        }
      }
      workers: {
        payload: Prisma.$workersPayload<ExtArgs>
        fields: Prisma.workersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          findFirst: {
            args: Prisma.workersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          findMany: {
            args: Prisma.workersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>[]
          }
          create: {
            args: Prisma.workersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          createMany: {
            args: Prisma.workersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>[]
          }
          delete: {
            args: Prisma.workersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          update: {
            args: Prisma.workersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          deleteMany: {
            args: Prisma.workersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workersPayload>
          }
          aggregate: {
            args: Prisma.WorkersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkers>
          }
          groupBy: {
            args: Prisma.workersGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkersGroupByOutputType>[]
          }
          count: {
            args: Prisma.workersCountArgs<ExtArgs>
            result: $Utils.Optional<WorkersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Brick_typesCountOutputType
   */

  export type Brick_typesCountOutputType = {
    dispatches: number
    productions: number
  }

  export type Brick_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | Brick_typesCountOutputTypeCountDispatchesArgs
    productions?: boolean | Brick_typesCountOutputTypeCountProductionsArgs
  }

  // Custom InputTypes
  /**
   * Brick_typesCountOutputType without action
   */
  export type Brick_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brick_typesCountOutputType
     */
    select?: Brick_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Brick_typesCountOutputType without action
   */
  export type Brick_typesCountOutputTypeCountDispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dispatchesWhereInput
  }

  /**
   * Brick_typesCountOutputType without action
   */
  export type Brick_typesCountOutputTypeCountProductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productionsWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    dispatches: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | CustomersCountOutputTypeCountDispatchesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountDispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dispatchesWhereInput
  }


  /**
   * Count Type ExpensesCountOutputType
   */

  export type ExpensesCountOutputType = {
    material_usages: number
  }

  export type ExpensesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material_usages?: boolean | ExpensesCountOutputTypeCountMaterial_usagesArgs
  }

  // Custom InputTypes
  /**
   * ExpensesCountOutputType without action
   */
  export type ExpensesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpensesCountOutputType
     */
    select?: ExpensesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpensesCountOutputType without action
   */
  export type ExpensesCountOutputTypeCountMaterial_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_usagesWhereInput
  }


  /**
   * Count Type MachinesCountOutputType
   */

  export type MachinesCountOutputType = {
    productions: number
  }

  export type MachinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | MachinesCountOutputTypeCountProductionsArgs
  }

  // Custom InputTypes
  /**
   * MachinesCountOutputType without action
   */
  export type MachinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachinesCountOutputType
     */
    select?: MachinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MachinesCountOutputType without action
   */
  export type MachinesCountOutputTypeCountProductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productionsWhereInput
  }


  /**
   * Count Type ProductionsCountOutputType
   */

  export type ProductionsCountOutputType = {
    production_workers: number
  }

  export type ProductionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production_workers?: boolean | ProductionsCountOutputTypeCountProduction_workersArgs
  }

  // Custom InputTypes
  /**
   * ProductionsCountOutputType without action
   */
  export type ProductionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionsCountOutputType
     */
    select?: ProductionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductionsCountOutputType without action
   */
  export type ProductionsCountOutputTypeCountProduction_workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: production_workersWhereInput
  }


  /**
   * Count Type Raw_materialsCountOutputType
   */

  export type Raw_materialsCountOutputType = {
    expenses: number
    material_usages: number
  }

  export type Raw_materialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | Raw_materialsCountOutputTypeCountExpensesArgs
    material_usages?: boolean | Raw_materialsCountOutputTypeCountMaterial_usagesArgs
  }

  // Custom InputTypes
  /**
   * Raw_materialsCountOutputType without action
   */
  export type Raw_materialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raw_materialsCountOutputType
     */
    select?: Raw_materialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Raw_materialsCountOutputType without action
   */
  export type Raw_materialsCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * Raw_materialsCountOutputType without action
   */
  export type Raw_materialsCountOutputTypeCountMaterial_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_usagesWhereInput
  }


  /**
   * Count Type WorkersCountOutputType
   */

  export type WorkersCountOutputType = {
    attendance: number
    daily_wages: number
    expenses: number
    production_workers: number
    weekly_settlements: number
    worker_advances: number
  }

  export type WorkersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | WorkersCountOutputTypeCountAttendanceArgs
    daily_wages?: boolean | WorkersCountOutputTypeCountDaily_wagesArgs
    expenses?: boolean | WorkersCountOutputTypeCountExpensesArgs
    production_workers?: boolean | WorkersCountOutputTypeCountProduction_workersArgs
    weekly_settlements?: boolean | WorkersCountOutputTypeCountWeekly_settlementsArgs
    worker_advances?: boolean | WorkersCountOutputTypeCountWorker_advancesArgs
  }

  // Custom InputTypes
  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkersCountOutputType
     */
    select?: WorkersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountDaily_wagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_wagesWhereInput
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountProduction_workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: production_workersWhereInput
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountWeekly_settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weekly_settlementsWhereInput
  }

  /**
   * WorkersCountOutputType without action
   */
  export type WorkersCountOutputTypeCountWorker_advancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: worker_advancesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    workerId: string | null
    date: Date | null
    present: boolean | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    workerId: string | null
    date: Date | null
    present: boolean | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    workerId: number
    date: number
    present: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    workerId?: true
    date?: true
    present?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    workerId?: true
    date?: true
    present?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    workerId?: true
    date?: true
    present?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    workerId: string
    date: Date
    present: boolean
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    date?: boolean
    present?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    date?: boolean
    present?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectScalar = {
    id?: boolean
    workerId?: boolean
    date?: boolean
    present?: boolean
  }

  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }
  export type attendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendance"
    objects: {
      workers: Prisma.$workersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workerId: string
      date: Date
      present: boolean
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<Prisma.$attendancePayload, S>

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<attendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance'], meta: { name: 'attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendanceFindUniqueArgs>(args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendanceFindFirstArgs>(args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendanceFindManyArgs>(args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends attendanceCreateArgs>(args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendanceCreateManyArgs>(args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {attendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, attendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends attendanceDeleteArgs>(args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendanceUpdateArgs>(args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendanceDeleteManyArgs>(args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendanceUpdateManyArgs>(args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends attendanceUpsertArgs>(args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendance model
   */
  readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends workersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workersDefaultArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attendance model
   */ 
  interface attendanceFieldRefs {
    readonly id: FieldRef<"attendance", 'String'>
    readonly workerId: FieldRef<"attendance", 'String'>
    readonly date: FieldRef<"attendance", 'DateTime'>
    readonly present: FieldRef<"attendance", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
  }

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
  }

  /**
   * attendance createManyAndReturn
   */
  export type attendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
  }

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
  }

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput
  }

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
  }


  /**
   * Model brick_types
   */

  export type AggregateBrick_types = {
    _count: Brick_typesCountAggregateOutputType | null
    _avg: Brick_typesAvgAggregateOutputType | null
    _sum: Brick_typesSumAggregateOutputType | null
    _min: Brick_typesMinAggregateOutputType | null
    _max: Brick_typesMaxAggregateOutputType | null
  }

  export type Brick_typesAvgAggregateOutputType = {
    stock: number | null
  }

  export type Brick_typesSumAggregateOutputType = {
    stock: number | null
  }

  export type Brick_typesMinAggregateOutputType = {
    id: string | null
    size: string | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Brick_typesMaxAggregateOutputType = {
    id: string | null
    size: string | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Brick_typesCountAggregateOutputType = {
    id: number
    size: number
    stock: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Brick_typesAvgAggregateInputType = {
    stock?: true
  }

  export type Brick_typesSumAggregateInputType = {
    stock?: true
  }

  export type Brick_typesMinAggregateInputType = {
    id?: true
    size?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Brick_typesMaxAggregateInputType = {
    id?: true
    size?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Brick_typesCountAggregateInputType = {
    id?: true
    size?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Brick_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brick_types to aggregate.
     */
    where?: brick_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brick_types to fetch.
     */
    orderBy?: brick_typesOrderByWithRelationInput | brick_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: brick_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brick_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brick_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned brick_types
    **/
    _count?: true | Brick_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Brick_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Brick_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Brick_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Brick_typesMaxAggregateInputType
  }

  export type GetBrick_typesAggregateType<T extends Brick_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateBrick_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrick_types[P]>
      : GetScalarType<T[P], AggregateBrick_types[P]>
  }




  export type brick_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: brick_typesWhereInput
    orderBy?: brick_typesOrderByWithAggregationInput | brick_typesOrderByWithAggregationInput[]
    by: Brick_typesScalarFieldEnum[] | Brick_typesScalarFieldEnum
    having?: brick_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Brick_typesCountAggregateInputType | true
    _avg?: Brick_typesAvgAggregateInputType
    _sum?: Brick_typesSumAggregateInputType
    _min?: Brick_typesMinAggregateInputType
    _max?: Brick_typesMaxAggregateInputType
  }

  export type Brick_typesGroupByOutputType = {
    id: string
    size: string
    stock: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: Brick_typesCountAggregateOutputType | null
    _avg: Brick_typesAvgAggregateOutputType | null
    _sum: Brick_typesSumAggregateOutputType | null
    _min: Brick_typesMinAggregateOutputType | null
    _max: Brick_typesMaxAggregateOutputType | null
  }

  type GetBrick_typesGroupByPayload<T extends brick_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Brick_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Brick_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Brick_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Brick_typesGroupByOutputType[P]>
        }
      >
    >


  export type brick_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispatches?: boolean | brick_types$dispatchesArgs<ExtArgs>
    productions?: boolean | brick_types$productionsArgs<ExtArgs>
    _count?: boolean | Brick_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brick_types"]>

  export type brick_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brick_types"]>

  export type brick_typesSelectScalar = {
    id?: boolean
    size?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type brick_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | brick_types$dispatchesArgs<ExtArgs>
    productions?: boolean | brick_types$productionsArgs<ExtArgs>
    _count?: boolean | Brick_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type brick_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $brick_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "brick_types"
    objects: {
      dispatches: Prisma.$dispatchesPayload<ExtArgs>[]
      productions: Prisma.$productionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      size: string
      stock: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brick_types"]>
    composites: {}
  }

  type brick_typesGetPayload<S extends boolean | null | undefined | brick_typesDefaultArgs> = $Result.GetResult<Prisma.$brick_typesPayload, S>

  type brick_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<brick_typesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Brick_typesCountAggregateInputType | true
    }

  export interface brick_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['brick_types'], meta: { name: 'brick_types' } }
    /**
     * Find zero or one Brick_types that matches the filter.
     * @param {brick_typesFindUniqueArgs} args - Arguments to find a Brick_types
     * @example
     * // Get one Brick_types
     * const brick_types = await prisma.brick_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends brick_typesFindUniqueArgs>(args: SelectSubset<T, brick_typesFindUniqueArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Brick_types that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {brick_typesFindUniqueOrThrowArgs} args - Arguments to find a Brick_types
     * @example
     * // Get one Brick_types
     * const brick_types = await prisma.brick_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends brick_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, brick_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Brick_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brick_typesFindFirstArgs} args - Arguments to find a Brick_types
     * @example
     * // Get one Brick_types
     * const brick_types = await prisma.brick_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends brick_typesFindFirstArgs>(args?: SelectSubset<T, brick_typesFindFirstArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Brick_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brick_typesFindFirstOrThrowArgs} args - Arguments to find a Brick_types
     * @example
     * // Get one Brick_types
     * const brick_types = await prisma.brick_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends brick_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, brick_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Brick_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brick_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brick_types
     * const brick_types = await prisma.brick_types.findMany()
     * 
     * // Get first 10 Brick_types
     * const brick_types = await prisma.brick_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brick_typesWithIdOnly = await prisma.brick_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends brick_typesFindManyArgs>(args?: SelectSubset<T, brick_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Brick_types.
     * @param {brick_typesCreateArgs} args - Arguments to create a Brick_types.
     * @example
     * // Create one Brick_types
     * const Brick_types = await prisma.brick_types.create({
     *   data: {
     *     // ... data to create a Brick_types
     *   }
     * })
     * 
     */
    create<T extends brick_typesCreateArgs>(args: SelectSubset<T, brick_typesCreateArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Brick_types.
     * @param {brick_typesCreateManyArgs} args - Arguments to create many Brick_types.
     * @example
     * // Create many Brick_types
     * const brick_types = await prisma.brick_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends brick_typesCreateManyArgs>(args?: SelectSubset<T, brick_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brick_types and returns the data saved in the database.
     * @param {brick_typesCreateManyAndReturnArgs} args - Arguments to create many Brick_types.
     * @example
     * // Create many Brick_types
     * const brick_types = await prisma.brick_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brick_types and only return the `id`
     * const brick_typesWithIdOnly = await prisma.brick_types.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends brick_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, brick_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Brick_types.
     * @param {brick_typesDeleteArgs} args - Arguments to delete one Brick_types.
     * @example
     * // Delete one Brick_types
     * const Brick_types = await prisma.brick_types.delete({
     *   where: {
     *     // ... filter to delete one Brick_types
     *   }
     * })
     * 
     */
    delete<T extends brick_typesDeleteArgs>(args: SelectSubset<T, brick_typesDeleteArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Brick_types.
     * @param {brick_typesUpdateArgs} args - Arguments to update one Brick_types.
     * @example
     * // Update one Brick_types
     * const brick_types = await prisma.brick_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends brick_typesUpdateArgs>(args: SelectSubset<T, brick_typesUpdateArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Brick_types.
     * @param {brick_typesDeleteManyArgs} args - Arguments to filter Brick_types to delete.
     * @example
     * // Delete a few Brick_types
     * const { count } = await prisma.brick_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends brick_typesDeleteManyArgs>(args?: SelectSubset<T, brick_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brick_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brick_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brick_types
     * const brick_types = await prisma.brick_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends brick_typesUpdateManyArgs>(args: SelectSubset<T, brick_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brick_types.
     * @param {brick_typesUpsertArgs} args - Arguments to update or create a Brick_types.
     * @example
     * // Update or create a Brick_types
     * const brick_types = await prisma.brick_types.upsert({
     *   create: {
     *     // ... data to create a Brick_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brick_types we want to update
     *   }
     * })
     */
    upsert<T extends brick_typesUpsertArgs>(args: SelectSubset<T, brick_typesUpsertArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Brick_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brick_typesCountArgs} args - Arguments to filter Brick_types to count.
     * @example
     * // Count the number of Brick_types
     * const count = await prisma.brick_types.count({
     *   where: {
     *     // ... the filter for the Brick_types we want to count
     *   }
     * })
    **/
    count<T extends brick_typesCountArgs>(
      args?: Subset<T, brick_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Brick_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brick_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Brick_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Brick_typesAggregateArgs>(args: Subset<T, Brick_typesAggregateArgs>): Prisma.PrismaPromise<GetBrick_typesAggregateType<T>>

    /**
     * Group by Brick_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brick_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends brick_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: brick_typesGroupByArgs['orderBy'] }
        : { orderBy?: brick_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, brick_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrick_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the brick_types model
   */
  readonly fields: brick_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for brick_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__brick_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispatches<T extends brick_types$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, brick_types$dispatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findMany"> | Null>
    productions<T extends brick_types$productionsArgs<ExtArgs> = {}>(args?: Subset<T, brick_types$productionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the brick_types model
   */ 
  interface brick_typesFieldRefs {
    readonly id: FieldRef<"brick_types", 'String'>
    readonly size: FieldRef<"brick_types", 'String'>
    readonly stock: FieldRef<"brick_types", 'Int'>
    readonly isActive: FieldRef<"brick_types", 'Boolean'>
    readonly createdAt: FieldRef<"brick_types", 'DateTime'>
    readonly updatedAt: FieldRef<"brick_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * brick_types findUnique
   */
  export type brick_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * Filter, which brick_types to fetch.
     */
    where: brick_typesWhereUniqueInput
  }

  /**
   * brick_types findUniqueOrThrow
   */
  export type brick_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * Filter, which brick_types to fetch.
     */
    where: brick_typesWhereUniqueInput
  }

  /**
   * brick_types findFirst
   */
  export type brick_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * Filter, which brick_types to fetch.
     */
    where?: brick_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brick_types to fetch.
     */
    orderBy?: brick_typesOrderByWithRelationInput | brick_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brick_types.
     */
    cursor?: brick_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brick_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brick_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brick_types.
     */
    distinct?: Brick_typesScalarFieldEnum | Brick_typesScalarFieldEnum[]
  }

  /**
   * brick_types findFirstOrThrow
   */
  export type brick_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * Filter, which brick_types to fetch.
     */
    where?: brick_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brick_types to fetch.
     */
    orderBy?: brick_typesOrderByWithRelationInput | brick_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brick_types.
     */
    cursor?: brick_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brick_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brick_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brick_types.
     */
    distinct?: Brick_typesScalarFieldEnum | Brick_typesScalarFieldEnum[]
  }

  /**
   * brick_types findMany
   */
  export type brick_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * Filter, which brick_types to fetch.
     */
    where?: brick_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brick_types to fetch.
     */
    orderBy?: brick_typesOrderByWithRelationInput | brick_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing brick_types.
     */
    cursor?: brick_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brick_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brick_types.
     */
    skip?: number
    distinct?: Brick_typesScalarFieldEnum | Brick_typesScalarFieldEnum[]
  }

  /**
   * brick_types create
   */
  export type brick_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a brick_types.
     */
    data: XOR<brick_typesCreateInput, brick_typesUncheckedCreateInput>
  }

  /**
   * brick_types createMany
   */
  export type brick_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many brick_types.
     */
    data: brick_typesCreateManyInput | brick_typesCreateManyInput[]
  }

  /**
   * brick_types createManyAndReturn
   */
  export type brick_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many brick_types.
     */
    data: brick_typesCreateManyInput | brick_typesCreateManyInput[]
  }

  /**
   * brick_types update
   */
  export type brick_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a brick_types.
     */
    data: XOR<brick_typesUpdateInput, brick_typesUncheckedUpdateInput>
    /**
     * Choose, which brick_types to update.
     */
    where: brick_typesWhereUniqueInput
  }

  /**
   * brick_types updateMany
   */
  export type brick_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update brick_types.
     */
    data: XOR<brick_typesUpdateManyMutationInput, brick_typesUncheckedUpdateManyInput>
    /**
     * Filter which brick_types to update
     */
    where?: brick_typesWhereInput
  }

  /**
   * brick_types upsert
   */
  export type brick_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the brick_types to update in case it exists.
     */
    where: brick_typesWhereUniqueInput
    /**
     * In case the brick_types found by the `where` argument doesn't exist, create a new brick_types with this data.
     */
    create: XOR<brick_typesCreateInput, brick_typesUncheckedCreateInput>
    /**
     * In case the brick_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<brick_typesUpdateInput, brick_typesUncheckedUpdateInput>
  }

  /**
   * brick_types delete
   */
  export type brick_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
    /**
     * Filter which brick_types to delete.
     */
    where: brick_typesWhereUniqueInput
  }

  /**
   * brick_types deleteMany
   */
  export type brick_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brick_types to delete
     */
    where?: brick_typesWhereInput
  }

  /**
   * brick_types.dispatches
   */
  export type brick_types$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    where?: dispatchesWhereInput
    orderBy?: dispatchesOrderByWithRelationInput | dispatchesOrderByWithRelationInput[]
    cursor?: dispatchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchesScalarFieldEnum | DispatchesScalarFieldEnum[]
  }

  /**
   * brick_types.productions
   */
  export type brick_types$productionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    where?: productionsWhereInput
    orderBy?: productionsOrderByWithRelationInput | productionsOrderByWithRelationInput[]
    cursor?: productionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionsScalarFieldEnum | ProductionsScalarFieldEnum[]
  }

  /**
   * brick_types without action
   */
  export type brick_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brick_types
     */
    select?: brick_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brick_typesInclude<ExtArgs> | null
  }


  /**
   * Model cash_entries
   */

  export type AggregateCash_entries = {
    _count: Cash_entriesCountAggregateOutputType | null
    _avg: Cash_entriesAvgAggregateOutputType | null
    _sum: Cash_entriesSumAggregateOutputType | null
    _min: Cash_entriesMinAggregateOutputType | null
    _max: Cash_entriesMaxAggregateOutputType | null
  }

  export type Cash_entriesAvgAggregateOutputType = {
    amount: number | null
  }

  export type Cash_entriesSumAggregateOutputType = {
    amount: number | null
  }

  export type Cash_entriesMinAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    amount: number | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cash_entriesMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    amount: number | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cash_entriesCountAggregateOutputType = {
    id: number
    date: number
    type: number
    amount: number
    description: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cash_entriesAvgAggregateInputType = {
    amount?: true
  }

  export type Cash_entriesSumAggregateInputType = {
    amount?: true
  }

  export type Cash_entriesMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    amount?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cash_entriesMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    amount?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cash_entriesCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    amount?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cash_entriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cash_entries to aggregate.
     */
    where?: cash_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cash_entries to fetch.
     */
    orderBy?: cash_entriesOrderByWithRelationInput | cash_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cash_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cash_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cash_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cash_entries
    **/
    _count?: true | Cash_entriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cash_entriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cash_entriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cash_entriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cash_entriesMaxAggregateInputType
  }

  export type GetCash_entriesAggregateType<T extends Cash_entriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCash_entries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCash_entries[P]>
      : GetScalarType<T[P], AggregateCash_entries[P]>
  }




  export type cash_entriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cash_entriesWhereInput
    orderBy?: cash_entriesOrderByWithAggregationInput | cash_entriesOrderByWithAggregationInput[]
    by: Cash_entriesScalarFieldEnum[] | Cash_entriesScalarFieldEnum
    having?: cash_entriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cash_entriesCountAggregateInputType | true
    _avg?: Cash_entriesAvgAggregateInputType
    _sum?: Cash_entriesSumAggregateInputType
    _min?: Cash_entriesMinAggregateInputType
    _max?: Cash_entriesMaxAggregateInputType
  }

  export type Cash_entriesGroupByOutputType = {
    id: string
    date: Date
    type: string
    amount: number
    description: string
    category: string
    createdAt: Date
    updatedAt: Date
    _count: Cash_entriesCountAggregateOutputType | null
    _avg: Cash_entriesAvgAggregateOutputType | null
    _sum: Cash_entriesSumAggregateOutputType | null
    _min: Cash_entriesMinAggregateOutputType | null
    _max: Cash_entriesMaxAggregateOutputType | null
  }

  type GetCash_entriesGroupByPayload<T extends cash_entriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cash_entriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cash_entriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cash_entriesGroupByOutputType[P]>
            : GetScalarType<T[P], Cash_entriesGroupByOutputType[P]>
        }
      >
    >


  export type cash_entriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cash_entries"]>

  export type cash_entriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cash_entries"]>

  export type cash_entriesSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $cash_entriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cash_entries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      type: string
      amount: number
      description: string
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cash_entries"]>
    composites: {}
  }

  type cash_entriesGetPayload<S extends boolean | null | undefined | cash_entriesDefaultArgs> = $Result.GetResult<Prisma.$cash_entriesPayload, S>

  type cash_entriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cash_entriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Cash_entriesCountAggregateInputType | true
    }

  export interface cash_entriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cash_entries'], meta: { name: 'cash_entries' } }
    /**
     * Find zero or one Cash_entries that matches the filter.
     * @param {cash_entriesFindUniqueArgs} args - Arguments to find a Cash_entries
     * @example
     * // Get one Cash_entries
     * const cash_entries = await prisma.cash_entries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cash_entriesFindUniqueArgs>(args: SelectSubset<T, cash_entriesFindUniqueArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cash_entries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cash_entriesFindUniqueOrThrowArgs} args - Arguments to find a Cash_entries
     * @example
     * // Get one Cash_entries
     * const cash_entries = await prisma.cash_entries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cash_entriesFindUniqueOrThrowArgs>(args: SelectSubset<T, cash_entriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cash_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cash_entriesFindFirstArgs} args - Arguments to find a Cash_entries
     * @example
     * // Get one Cash_entries
     * const cash_entries = await prisma.cash_entries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cash_entriesFindFirstArgs>(args?: SelectSubset<T, cash_entriesFindFirstArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cash_entries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cash_entriesFindFirstOrThrowArgs} args - Arguments to find a Cash_entries
     * @example
     * // Get one Cash_entries
     * const cash_entries = await prisma.cash_entries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cash_entriesFindFirstOrThrowArgs>(args?: SelectSubset<T, cash_entriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cash_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cash_entriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cash_entries
     * const cash_entries = await prisma.cash_entries.findMany()
     * 
     * // Get first 10 Cash_entries
     * const cash_entries = await prisma.cash_entries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cash_entriesWithIdOnly = await prisma.cash_entries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cash_entriesFindManyArgs>(args?: SelectSubset<T, cash_entriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cash_entries.
     * @param {cash_entriesCreateArgs} args - Arguments to create a Cash_entries.
     * @example
     * // Create one Cash_entries
     * const Cash_entries = await prisma.cash_entries.create({
     *   data: {
     *     // ... data to create a Cash_entries
     *   }
     * })
     * 
     */
    create<T extends cash_entriesCreateArgs>(args: SelectSubset<T, cash_entriesCreateArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cash_entries.
     * @param {cash_entriesCreateManyArgs} args - Arguments to create many Cash_entries.
     * @example
     * // Create many Cash_entries
     * const cash_entries = await prisma.cash_entries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cash_entriesCreateManyArgs>(args?: SelectSubset<T, cash_entriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cash_entries and returns the data saved in the database.
     * @param {cash_entriesCreateManyAndReturnArgs} args - Arguments to create many Cash_entries.
     * @example
     * // Create many Cash_entries
     * const cash_entries = await prisma.cash_entries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cash_entries and only return the `id`
     * const cash_entriesWithIdOnly = await prisma.cash_entries.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cash_entriesCreateManyAndReturnArgs>(args?: SelectSubset<T, cash_entriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cash_entries.
     * @param {cash_entriesDeleteArgs} args - Arguments to delete one Cash_entries.
     * @example
     * // Delete one Cash_entries
     * const Cash_entries = await prisma.cash_entries.delete({
     *   where: {
     *     // ... filter to delete one Cash_entries
     *   }
     * })
     * 
     */
    delete<T extends cash_entriesDeleteArgs>(args: SelectSubset<T, cash_entriesDeleteArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cash_entries.
     * @param {cash_entriesUpdateArgs} args - Arguments to update one Cash_entries.
     * @example
     * // Update one Cash_entries
     * const cash_entries = await prisma.cash_entries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cash_entriesUpdateArgs>(args: SelectSubset<T, cash_entriesUpdateArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cash_entries.
     * @param {cash_entriesDeleteManyArgs} args - Arguments to filter Cash_entries to delete.
     * @example
     * // Delete a few Cash_entries
     * const { count } = await prisma.cash_entries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cash_entriesDeleteManyArgs>(args?: SelectSubset<T, cash_entriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cash_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cash_entriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cash_entries
     * const cash_entries = await prisma.cash_entries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cash_entriesUpdateManyArgs>(args: SelectSubset<T, cash_entriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cash_entries.
     * @param {cash_entriesUpsertArgs} args - Arguments to update or create a Cash_entries.
     * @example
     * // Update or create a Cash_entries
     * const cash_entries = await prisma.cash_entries.upsert({
     *   create: {
     *     // ... data to create a Cash_entries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cash_entries we want to update
     *   }
     * })
     */
    upsert<T extends cash_entriesUpsertArgs>(args: SelectSubset<T, cash_entriesUpsertArgs<ExtArgs>>): Prisma__cash_entriesClient<$Result.GetResult<Prisma.$cash_entriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cash_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cash_entriesCountArgs} args - Arguments to filter Cash_entries to count.
     * @example
     * // Count the number of Cash_entries
     * const count = await prisma.cash_entries.count({
     *   where: {
     *     // ... the filter for the Cash_entries we want to count
     *   }
     * })
    **/
    count<T extends cash_entriesCountArgs>(
      args?: Subset<T, cash_entriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cash_entriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cash_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cash_entriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cash_entriesAggregateArgs>(args: Subset<T, Cash_entriesAggregateArgs>): Prisma.PrismaPromise<GetCash_entriesAggregateType<T>>

    /**
     * Group by Cash_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cash_entriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cash_entriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cash_entriesGroupByArgs['orderBy'] }
        : { orderBy?: cash_entriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cash_entriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCash_entriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cash_entries model
   */
  readonly fields: cash_entriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cash_entries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cash_entriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cash_entries model
   */ 
  interface cash_entriesFieldRefs {
    readonly id: FieldRef<"cash_entries", 'String'>
    readonly date: FieldRef<"cash_entries", 'DateTime'>
    readonly type: FieldRef<"cash_entries", 'String'>
    readonly amount: FieldRef<"cash_entries", 'Float'>
    readonly description: FieldRef<"cash_entries", 'String'>
    readonly category: FieldRef<"cash_entries", 'String'>
    readonly createdAt: FieldRef<"cash_entries", 'DateTime'>
    readonly updatedAt: FieldRef<"cash_entries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cash_entries findUnique
   */
  export type cash_entriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * Filter, which cash_entries to fetch.
     */
    where: cash_entriesWhereUniqueInput
  }

  /**
   * cash_entries findUniqueOrThrow
   */
  export type cash_entriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * Filter, which cash_entries to fetch.
     */
    where: cash_entriesWhereUniqueInput
  }

  /**
   * cash_entries findFirst
   */
  export type cash_entriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * Filter, which cash_entries to fetch.
     */
    where?: cash_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cash_entries to fetch.
     */
    orderBy?: cash_entriesOrderByWithRelationInput | cash_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cash_entries.
     */
    cursor?: cash_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cash_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cash_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cash_entries.
     */
    distinct?: Cash_entriesScalarFieldEnum | Cash_entriesScalarFieldEnum[]
  }

  /**
   * cash_entries findFirstOrThrow
   */
  export type cash_entriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * Filter, which cash_entries to fetch.
     */
    where?: cash_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cash_entries to fetch.
     */
    orderBy?: cash_entriesOrderByWithRelationInput | cash_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cash_entries.
     */
    cursor?: cash_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cash_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cash_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cash_entries.
     */
    distinct?: Cash_entriesScalarFieldEnum | Cash_entriesScalarFieldEnum[]
  }

  /**
   * cash_entries findMany
   */
  export type cash_entriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * Filter, which cash_entries to fetch.
     */
    where?: cash_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cash_entries to fetch.
     */
    orderBy?: cash_entriesOrderByWithRelationInput | cash_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cash_entries.
     */
    cursor?: cash_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cash_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cash_entries.
     */
    skip?: number
    distinct?: Cash_entriesScalarFieldEnum | Cash_entriesScalarFieldEnum[]
  }

  /**
   * cash_entries create
   */
  export type cash_entriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * The data needed to create a cash_entries.
     */
    data: XOR<cash_entriesCreateInput, cash_entriesUncheckedCreateInput>
  }

  /**
   * cash_entries createMany
   */
  export type cash_entriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cash_entries.
     */
    data: cash_entriesCreateManyInput | cash_entriesCreateManyInput[]
  }

  /**
   * cash_entries createManyAndReturn
   */
  export type cash_entriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many cash_entries.
     */
    data: cash_entriesCreateManyInput | cash_entriesCreateManyInput[]
  }

  /**
   * cash_entries update
   */
  export type cash_entriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * The data needed to update a cash_entries.
     */
    data: XOR<cash_entriesUpdateInput, cash_entriesUncheckedUpdateInput>
    /**
     * Choose, which cash_entries to update.
     */
    where: cash_entriesWhereUniqueInput
  }

  /**
   * cash_entries updateMany
   */
  export type cash_entriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cash_entries.
     */
    data: XOR<cash_entriesUpdateManyMutationInput, cash_entriesUncheckedUpdateManyInput>
    /**
     * Filter which cash_entries to update
     */
    where?: cash_entriesWhereInput
  }

  /**
   * cash_entries upsert
   */
  export type cash_entriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * The filter to search for the cash_entries to update in case it exists.
     */
    where: cash_entriesWhereUniqueInput
    /**
     * In case the cash_entries found by the `where` argument doesn't exist, create a new cash_entries with this data.
     */
    create: XOR<cash_entriesCreateInput, cash_entriesUncheckedCreateInput>
    /**
     * In case the cash_entries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cash_entriesUpdateInput, cash_entriesUncheckedUpdateInput>
  }

  /**
   * cash_entries delete
   */
  export type cash_entriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
    /**
     * Filter which cash_entries to delete.
     */
    where: cash_entriesWhereUniqueInput
  }

  /**
   * cash_entries deleteMany
   */
  export type cash_entriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cash_entries to delete
     */
    where?: cash_entriesWhereInput
  }

  /**
   * cash_entries without action
   */
  export type cash_entriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cash_entries
     */
    select?: cash_entriesSelect<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dispatches?: boolean | customers$dispatchesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | customers$dispatchesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      dispatches: Prisma.$dispatchesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispatches<T extends customers$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, customers$dispatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */ 
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'String'>
    readonly name: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly address: FieldRef<"customers", 'String'>
    readonly createdAt: FieldRef<"customers", 'DateTime'>
    readonly updatedAt: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
  }

  /**
   * customers.dispatches
   */
  export type customers$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    where?: dispatchesWhereInput
    orderBy?: dispatchesOrderByWithRelationInput | dispatchesOrderByWithRelationInput[]
    cursor?: dispatchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchesScalarFieldEnum | DispatchesScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model daily_wages
   */

  export type AggregateDaily_wages = {
    _count: Daily_wagesCountAggregateOutputType | null
    _avg: Daily_wagesAvgAggregateOutputType | null
    _sum: Daily_wagesSumAggregateOutputType | null
    _min: Daily_wagesMinAggregateOutputType | null
    _max: Daily_wagesMaxAggregateOutputType | null
  }

  export type Daily_wagesAvgAggregateOutputType = {
    bricksMade: number | null
    wageAmount: number | null
    advanceUsed: number | null
    netPayable: number | null
  }

  export type Daily_wagesSumAggregateOutputType = {
    bricksMade: number | null
    wageAmount: number | null
    advanceUsed: number | null
    netPayable: number | null
  }

  export type Daily_wagesMinAggregateOutputType = {
    id: string | null
    workerId: string | null
    date: Date | null
    bricksMade: number | null
    wageAmount: number | null
    advanceUsed: number | null
    netPayable: number | null
    isPaid: boolean | null
    createdAt: Date | null
  }

  export type Daily_wagesMaxAggregateOutputType = {
    id: string | null
    workerId: string | null
    date: Date | null
    bricksMade: number | null
    wageAmount: number | null
    advanceUsed: number | null
    netPayable: number | null
    isPaid: boolean | null
    createdAt: Date | null
  }

  export type Daily_wagesCountAggregateOutputType = {
    id: number
    workerId: number
    date: number
    bricksMade: number
    wageAmount: number
    advanceUsed: number
    netPayable: number
    isPaid: number
    createdAt: number
    _all: number
  }


  export type Daily_wagesAvgAggregateInputType = {
    bricksMade?: true
    wageAmount?: true
    advanceUsed?: true
    netPayable?: true
  }

  export type Daily_wagesSumAggregateInputType = {
    bricksMade?: true
    wageAmount?: true
    advanceUsed?: true
    netPayable?: true
  }

  export type Daily_wagesMinAggregateInputType = {
    id?: true
    workerId?: true
    date?: true
    bricksMade?: true
    wageAmount?: true
    advanceUsed?: true
    netPayable?: true
    isPaid?: true
    createdAt?: true
  }

  export type Daily_wagesMaxAggregateInputType = {
    id?: true
    workerId?: true
    date?: true
    bricksMade?: true
    wageAmount?: true
    advanceUsed?: true
    netPayable?: true
    isPaid?: true
    createdAt?: true
  }

  export type Daily_wagesCountAggregateInputType = {
    id?: true
    workerId?: true
    date?: true
    bricksMade?: true
    wageAmount?: true
    advanceUsed?: true
    netPayable?: true
    isPaid?: true
    createdAt?: true
    _all?: true
  }

  export type Daily_wagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_wages to aggregate.
     */
    where?: daily_wagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_wages to fetch.
     */
    orderBy?: daily_wagesOrderByWithRelationInput | daily_wagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: daily_wagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_wages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_wages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned daily_wages
    **/
    _count?: true | Daily_wagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Daily_wagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Daily_wagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Daily_wagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Daily_wagesMaxAggregateInputType
  }

  export type GetDaily_wagesAggregateType<T extends Daily_wagesAggregateArgs> = {
        [P in keyof T & keyof AggregateDaily_wages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaily_wages[P]>
      : GetScalarType<T[P], AggregateDaily_wages[P]>
  }




  export type daily_wagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_wagesWhereInput
    orderBy?: daily_wagesOrderByWithAggregationInput | daily_wagesOrderByWithAggregationInput[]
    by: Daily_wagesScalarFieldEnum[] | Daily_wagesScalarFieldEnum
    having?: daily_wagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Daily_wagesCountAggregateInputType | true
    _avg?: Daily_wagesAvgAggregateInputType
    _sum?: Daily_wagesSumAggregateInputType
    _min?: Daily_wagesMinAggregateInputType
    _max?: Daily_wagesMaxAggregateInputType
  }

  export type Daily_wagesGroupByOutputType = {
    id: string
    workerId: string
    date: Date
    bricksMade: number | null
    wageAmount: number
    advanceUsed: number
    netPayable: number
    isPaid: boolean
    createdAt: Date
    _count: Daily_wagesCountAggregateOutputType | null
    _avg: Daily_wagesAvgAggregateOutputType | null
    _sum: Daily_wagesSumAggregateOutputType | null
    _min: Daily_wagesMinAggregateOutputType | null
    _max: Daily_wagesMaxAggregateOutputType | null
  }

  type GetDaily_wagesGroupByPayload<T extends daily_wagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Daily_wagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Daily_wagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Daily_wagesGroupByOutputType[P]>
            : GetScalarType<T[P], Daily_wagesGroupByOutputType[P]>
        }
      >
    >


  export type daily_wagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    date?: boolean
    bricksMade?: boolean
    wageAmount?: boolean
    advanceUsed?: boolean
    netPayable?: boolean
    isPaid?: boolean
    createdAt?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_wages"]>

  export type daily_wagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    date?: boolean
    bricksMade?: boolean
    wageAmount?: boolean
    advanceUsed?: boolean
    netPayable?: boolean
    isPaid?: boolean
    createdAt?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_wages"]>

  export type daily_wagesSelectScalar = {
    id?: boolean
    workerId?: boolean
    date?: boolean
    bricksMade?: boolean
    wageAmount?: boolean
    advanceUsed?: boolean
    netPayable?: boolean
    isPaid?: boolean
    createdAt?: boolean
  }

  export type daily_wagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }
  export type daily_wagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }

  export type $daily_wagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "daily_wages"
    objects: {
      workers: Prisma.$workersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workerId: string
      date: Date
      bricksMade: number | null
      wageAmount: number
      advanceUsed: number
      netPayable: number
      isPaid: boolean
      createdAt: Date
    }, ExtArgs["result"]["daily_wages"]>
    composites: {}
  }

  type daily_wagesGetPayload<S extends boolean | null | undefined | daily_wagesDefaultArgs> = $Result.GetResult<Prisma.$daily_wagesPayload, S>

  type daily_wagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<daily_wagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Daily_wagesCountAggregateInputType | true
    }

  export interface daily_wagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['daily_wages'], meta: { name: 'daily_wages' } }
    /**
     * Find zero or one Daily_wages that matches the filter.
     * @param {daily_wagesFindUniqueArgs} args - Arguments to find a Daily_wages
     * @example
     * // Get one Daily_wages
     * const daily_wages = await prisma.daily_wages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends daily_wagesFindUniqueArgs>(args: SelectSubset<T, daily_wagesFindUniqueArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Daily_wages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {daily_wagesFindUniqueOrThrowArgs} args - Arguments to find a Daily_wages
     * @example
     * // Get one Daily_wages
     * const daily_wages = await prisma.daily_wages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends daily_wagesFindUniqueOrThrowArgs>(args: SelectSubset<T, daily_wagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Daily_wages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_wagesFindFirstArgs} args - Arguments to find a Daily_wages
     * @example
     * // Get one Daily_wages
     * const daily_wages = await prisma.daily_wages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends daily_wagesFindFirstArgs>(args?: SelectSubset<T, daily_wagesFindFirstArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Daily_wages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_wagesFindFirstOrThrowArgs} args - Arguments to find a Daily_wages
     * @example
     * // Get one Daily_wages
     * const daily_wages = await prisma.daily_wages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends daily_wagesFindFirstOrThrowArgs>(args?: SelectSubset<T, daily_wagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Daily_wages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_wagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daily_wages
     * const daily_wages = await prisma.daily_wages.findMany()
     * 
     * // Get first 10 Daily_wages
     * const daily_wages = await prisma.daily_wages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daily_wagesWithIdOnly = await prisma.daily_wages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends daily_wagesFindManyArgs>(args?: SelectSubset<T, daily_wagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Daily_wages.
     * @param {daily_wagesCreateArgs} args - Arguments to create a Daily_wages.
     * @example
     * // Create one Daily_wages
     * const Daily_wages = await prisma.daily_wages.create({
     *   data: {
     *     // ... data to create a Daily_wages
     *   }
     * })
     * 
     */
    create<T extends daily_wagesCreateArgs>(args: SelectSubset<T, daily_wagesCreateArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Daily_wages.
     * @param {daily_wagesCreateManyArgs} args - Arguments to create many Daily_wages.
     * @example
     * // Create many Daily_wages
     * const daily_wages = await prisma.daily_wages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends daily_wagesCreateManyArgs>(args?: SelectSubset<T, daily_wagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Daily_wages and returns the data saved in the database.
     * @param {daily_wagesCreateManyAndReturnArgs} args - Arguments to create many Daily_wages.
     * @example
     * // Create many Daily_wages
     * const daily_wages = await prisma.daily_wages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Daily_wages and only return the `id`
     * const daily_wagesWithIdOnly = await prisma.daily_wages.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends daily_wagesCreateManyAndReturnArgs>(args?: SelectSubset<T, daily_wagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Daily_wages.
     * @param {daily_wagesDeleteArgs} args - Arguments to delete one Daily_wages.
     * @example
     * // Delete one Daily_wages
     * const Daily_wages = await prisma.daily_wages.delete({
     *   where: {
     *     // ... filter to delete one Daily_wages
     *   }
     * })
     * 
     */
    delete<T extends daily_wagesDeleteArgs>(args: SelectSubset<T, daily_wagesDeleteArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Daily_wages.
     * @param {daily_wagesUpdateArgs} args - Arguments to update one Daily_wages.
     * @example
     * // Update one Daily_wages
     * const daily_wages = await prisma.daily_wages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends daily_wagesUpdateArgs>(args: SelectSubset<T, daily_wagesUpdateArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Daily_wages.
     * @param {daily_wagesDeleteManyArgs} args - Arguments to filter Daily_wages to delete.
     * @example
     * // Delete a few Daily_wages
     * const { count } = await prisma.daily_wages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends daily_wagesDeleteManyArgs>(args?: SelectSubset<T, daily_wagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daily_wages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_wagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daily_wages
     * const daily_wages = await prisma.daily_wages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends daily_wagesUpdateManyArgs>(args: SelectSubset<T, daily_wagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Daily_wages.
     * @param {daily_wagesUpsertArgs} args - Arguments to update or create a Daily_wages.
     * @example
     * // Update or create a Daily_wages
     * const daily_wages = await prisma.daily_wages.upsert({
     *   create: {
     *     // ... data to create a Daily_wages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daily_wages we want to update
     *   }
     * })
     */
    upsert<T extends daily_wagesUpsertArgs>(args: SelectSubset<T, daily_wagesUpsertArgs<ExtArgs>>): Prisma__daily_wagesClient<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Daily_wages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_wagesCountArgs} args - Arguments to filter Daily_wages to count.
     * @example
     * // Count the number of Daily_wages
     * const count = await prisma.daily_wages.count({
     *   where: {
     *     // ... the filter for the Daily_wages we want to count
     *   }
     * })
    **/
    count<T extends daily_wagesCountArgs>(
      args?: Subset<T, daily_wagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Daily_wagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daily_wages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Daily_wagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Daily_wagesAggregateArgs>(args: Subset<T, Daily_wagesAggregateArgs>): Prisma.PrismaPromise<GetDaily_wagesAggregateType<T>>

    /**
     * Group by Daily_wages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_wagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends daily_wagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: daily_wagesGroupByArgs['orderBy'] }
        : { orderBy?: daily_wagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, daily_wagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaily_wagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the daily_wages model
   */
  readonly fields: daily_wagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for daily_wages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__daily_wagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends workersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workersDefaultArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the daily_wages model
   */ 
  interface daily_wagesFieldRefs {
    readonly id: FieldRef<"daily_wages", 'String'>
    readonly workerId: FieldRef<"daily_wages", 'String'>
    readonly date: FieldRef<"daily_wages", 'DateTime'>
    readonly bricksMade: FieldRef<"daily_wages", 'Int'>
    readonly wageAmount: FieldRef<"daily_wages", 'Float'>
    readonly advanceUsed: FieldRef<"daily_wages", 'Float'>
    readonly netPayable: FieldRef<"daily_wages", 'Float'>
    readonly isPaid: FieldRef<"daily_wages", 'Boolean'>
    readonly createdAt: FieldRef<"daily_wages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * daily_wages findUnique
   */
  export type daily_wagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * Filter, which daily_wages to fetch.
     */
    where: daily_wagesWhereUniqueInput
  }

  /**
   * daily_wages findUniqueOrThrow
   */
  export type daily_wagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * Filter, which daily_wages to fetch.
     */
    where: daily_wagesWhereUniqueInput
  }

  /**
   * daily_wages findFirst
   */
  export type daily_wagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * Filter, which daily_wages to fetch.
     */
    where?: daily_wagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_wages to fetch.
     */
    orderBy?: daily_wagesOrderByWithRelationInput | daily_wagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_wages.
     */
    cursor?: daily_wagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_wages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_wages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_wages.
     */
    distinct?: Daily_wagesScalarFieldEnum | Daily_wagesScalarFieldEnum[]
  }

  /**
   * daily_wages findFirstOrThrow
   */
  export type daily_wagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * Filter, which daily_wages to fetch.
     */
    where?: daily_wagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_wages to fetch.
     */
    orderBy?: daily_wagesOrderByWithRelationInput | daily_wagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_wages.
     */
    cursor?: daily_wagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_wages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_wages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_wages.
     */
    distinct?: Daily_wagesScalarFieldEnum | Daily_wagesScalarFieldEnum[]
  }

  /**
   * daily_wages findMany
   */
  export type daily_wagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * Filter, which daily_wages to fetch.
     */
    where?: daily_wagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_wages to fetch.
     */
    orderBy?: daily_wagesOrderByWithRelationInput | daily_wagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing daily_wages.
     */
    cursor?: daily_wagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_wages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_wages.
     */
    skip?: number
    distinct?: Daily_wagesScalarFieldEnum | Daily_wagesScalarFieldEnum[]
  }

  /**
   * daily_wages create
   */
  export type daily_wagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * The data needed to create a daily_wages.
     */
    data: XOR<daily_wagesCreateInput, daily_wagesUncheckedCreateInput>
  }

  /**
   * daily_wages createMany
   */
  export type daily_wagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many daily_wages.
     */
    data: daily_wagesCreateManyInput | daily_wagesCreateManyInput[]
  }

  /**
   * daily_wages createManyAndReturn
   */
  export type daily_wagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many daily_wages.
     */
    data: daily_wagesCreateManyInput | daily_wagesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * daily_wages update
   */
  export type daily_wagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * The data needed to update a daily_wages.
     */
    data: XOR<daily_wagesUpdateInput, daily_wagesUncheckedUpdateInput>
    /**
     * Choose, which daily_wages to update.
     */
    where: daily_wagesWhereUniqueInput
  }

  /**
   * daily_wages updateMany
   */
  export type daily_wagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update daily_wages.
     */
    data: XOR<daily_wagesUpdateManyMutationInput, daily_wagesUncheckedUpdateManyInput>
    /**
     * Filter which daily_wages to update
     */
    where?: daily_wagesWhereInput
  }

  /**
   * daily_wages upsert
   */
  export type daily_wagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * The filter to search for the daily_wages to update in case it exists.
     */
    where: daily_wagesWhereUniqueInput
    /**
     * In case the daily_wages found by the `where` argument doesn't exist, create a new daily_wages with this data.
     */
    create: XOR<daily_wagesCreateInput, daily_wagesUncheckedCreateInput>
    /**
     * In case the daily_wages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<daily_wagesUpdateInput, daily_wagesUncheckedUpdateInput>
  }

  /**
   * daily_wages delete
   */
  export type daily_wagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    /**
     * Filter which daily_wages to delete.
     */
    where: daily_wagesWhereUniqueInput
  }

  /**
   * daily_wages deleteMany
   */
  export type daily_wagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_wages to delete
     */
    where?: daily_wagesWhereInput
  }

  /**
   * daily_wages without action
   */
  export type daily_wagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
  }


  /**
   * Model dispatches
   */

  export type AggregateDispatches = {
    _count: DispatchesCountAggregateOutputType | null
    _avg: DispatchesAvgAggregateOutputType | null
    _sum: DispatchesSumAggregateOutputType | null
    _min: DispatchesMinAggregateOutputType | null
    _max: DispatchesMaxAggregateOutputType | null
  }

  export type DispatchesAvgAggregateOutputType = {
    quantity: number | null
    distanceKm: number | null
    transportCost: number | null
    loadingCost: number | null
    totalAmount: number | null
    paidAmount: number | null
  }

  export type DispatchesSumAggregateOutputType = {
    quantity: number | null
    distanceKm: number | null
    transportCost: number | null
    loadingCost: number | null
    totalAmount: number | null
    paidAmount: number | null
  }

  export type DispatchesMinAggregateOutputType = {
    id: string | null
    date: Date | null
    customerId: string | null
    brickTypeId: string | null
    quantity: number | null
    distanceKm: number | null
    vehicleType: string | null
    transportCost: number | null
    loadingCost: number | null
    paymentStatus: string | null
    totalAmount: number | null
    paidAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DispatchesMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    customerId: string | null
    brickTypeId: string | null
    quantity: number | null
    distanceKm: number | null
    vehicleType: string | null
    transportCost: number | null
    loadingCost: number | null
    paymentStatus: string | null
    totalAmount: number | null
    paidAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DispatchesCountAggregateOutputType = {
    id: number
    date: number
    customerId: number
    brickTypeId: number
    quantity: number
    distanceKm: number
    vehicleType: number
    transportCost: number
    loadingCost: number
    paymentStatus: number
    totalAmount: number
    paidAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DispatchesAvgAggregateInputType = {
    quantity?: true
    distanceKm?: true
    transportCost?: true
    loadingCost?: true
    totalAmount?: true
    paidAmount?: true
  }

  export type DispatchesSumAggregateInputType = {
    quantity?: true
    distanceKm?: true
    transportCost?: true
    loadingCost?: true
    totalAmount?: true
    paidAmount?: true
  }

  export type DispatchesMinAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    brickTypeId?: true
    quantity?: true
    distanceKm?: true
    vehicleType?: true
    transportCost?: true
    loadingCost?: true
    paymentStatus?: true
    totalAmount?: true
    paidAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DispatchesMaxAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    brickTypeId?: true
    quantity?: true
    distanceKm?: true
    vehicleType?: true
    transportCost?: true
    loadingCost?: true
    paymentStatus?: true
    totalAmount?: true
    paidAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DispatchesCountAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    brickTypeId?: true
    quantity?: true
    distanceKm?: true
    vehicleType?: true
    transportCost?: true
    loadingCost?: true
    paymentStatus?: true
    totalAmount?: true
    paidAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DispatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dispatches to aggregate.
     */
    where?: dispatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dispatches to fetch.
     */
    orderBy?: dispatchesOrderByWithRelationInput | dispatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dispatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dispatches
    **/
    _count?: true | DispatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispatchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispatchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispatchesMaxAggregateInputType
  }

  export type GetDispatchesAggregateType<T extends DispatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateDispatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispatches[P]>
      : GetScalarType<T[P], AggregateDispatches[P]>
  }




  export type dispatchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dispatchesWhereInput
    orderBy?: dispatchesOrderByWithAggregationInput | dispatchesOrderByWithAggregationInput[]
    by: DispatchesScalarFieldEnum[] | DispatchesScalarFieldEnum
    having?: dispatchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispatchesCountAggregateInputType | true
    _avg?: DispatchesAvgAggregateInputType
    _sum?: DispatchesSumAggregateInputType
    _min?: DispatchesMinAggregateInputType
    _max?: DispatchesMaxAggregateInputType
  }

  export type DispatchesGroupByOutputType = {
    id: string
    date: Date
    customerId: string
    brickTypeId: string
    quantity: number
    distanceKm: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt: Date
    updatedAt: Date
    _count: DispatchesCountAggregateOutputType | null
    _avg: DispatchesAvgAggregateOutputType | null
    _sum: DispatchesSumAggregateOutputType | null
    _min: DispatchesMinAggregateOutputType | null
    _max: DispatchesMaxAggregateOutputType | null
  }

  type GetDispatchesGroupByPayload<T extends dispatchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispatchesGroupByOutputType[P]>
            : GetScalarType<T[P], DispatchesGroupByOutputType[P]>
        }
      >
    >


  export type dispatchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    brickTypeId?: boolean
    quantity?: boolean
    distanceKm?: boolean
    vehicleType?: boolean
    transportCost?: boolean
    loadingCost?: boolean
    paymentStatus?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatches"]>

  export type dispatchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    brickTypeId?: boolean
    quantity?: boolean
    distanceKm?: boolean
    vehicleType?: boolean
    transportCost?: boolean
    loadingCost?: boolean
    paymentStatus?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatches"]>

  export type dispatchesSelectScalar = {
    id?: boolean
    date?: boolean
    customerId?: boolean
    brickTypeId?: boolean
    quantity?: boolean
    distanceKm?: boolean
    vehicleType?: boolean
    transportCost?: boolean
    loadingCost?: boolean
    paymentStatus?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type dispatchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type dispatchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $dispatchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dispatches"
    objects: {
      brick_types: Prisma.$brick_typesPayload<ExtArgs>
      customers: Prisma.$customersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      customerId: string
      brickTypeId: string
      quantity: number
      distanceKm: number | null
      vehicleType: string
      transportCost: number
      loadingCost: number
      paymentStatus: string
      totalAmount: number
      paidAmount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dispatches"]>
    composites: {}
  }

  type dispatchesGetPayload<S extends boolean | null | undefined | dispatchesDefaultArgs> = $Result.GetResult<Prisma.$dispatchesPayload, S>

  type dispatchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dispatchesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DispatchesCountAggregateInputType | true
    }

  export interface dispatchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dispatches'], meta: { name: 'dispatches' } }
    /**
     * Find zero or one Dispatches that matches the filter.
     * @param {dispatchesFindUniqueArgs} args - Arguments to find a Dispatches
     * @example
     * // Get one Dispatches
     * const dispatches = await prisma.dispatches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dispatchesFindUniqueArgs>(args: SelectSubset<T, dispatchesFindUniqueArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dispatches that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dispatchesFindUniqueOrThrowArgs} args - Arguments to find a Dispatches
     * @example
     * // Get one Dispatches
     * const dispatches = await prisma.dispatches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dispatchesFindUniqueOrThrowArgs>(args: SelectSubset<T, dispatchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dispatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dispatchesFindFirstArgs} args - Arguments to find a Dispatches
     * @example
     * // Get one Dispatches
     * const dispatches = await prisma.dispatches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dispatchesFindFirstArgs>(args?: SelectSubset<T, dispatchesFindFirstArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dispatches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dispatchesFindFirstOrThrowArgs} args - Arguments to find a Dispatches
     * @example
     * // Get one Dispatches
     * const dispatches = await prisma.dispatches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dispatchesFindFirstOrThrowArgs>(args?: SelectSubset<T, dispatchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dispatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dispatchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispatches
     * const dispatches = await prisma.dispatches.findMany()
     * 
     * // Get first 10 Dispatches
     * const dispatches = await prisma.dispatches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispatchesWithIdOnly = await prisma.dispatches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dispatchesFindManyArgs>(args?: SelectSubset<T, dispatchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dispatches.
     * @param {dispatchesCreateArgs} args - Arguments to create a Dispatches.
     * @example
     * // Create one Dispatches
     * const Dispatches = await prisma.dispatches.create({
     *   data: {
     *     // ... data to create a Dispatches
     *   }
     * })
     * 
     */
    create<T extends dispatchesCreateArgs>(args: SelectSubset<T, dispatchesCreateArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dispatches.
     * @param {dispatchesCreateManyArgs} args - Arguments to create many Dispatches.
     * @example
     * // Create many Dispatches
     * const dispatches = await prisma.dispatches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dispatchesCreateManyArgs>(args?: SelectSubset<T, dispatchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispatches and returns the data saved in the database.
     * @param {dispatchesCreateManyAndReturnArgs} args - Arguments to create many Dispatches.
     * @example
     * // Create many Dispatches
     * const dispatches = await prisma.dispatches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispatches and only return the `id`
     * const dispatchesWithIdOnly = await prisma.dispatches.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dispatchesCreateManyAndReturnArgs>(args?: SelectSubset<T, dispatchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dispatches.
     * @param {dispatchesDeleteArgs} args - Arguments to delete one Dispatches.
     * @example
     * // Delete one Dispatches
     * const Dispatches = await prisma.dispatches.delete({
     *   where: {
     *     // ... filter to delete one Dispatches
     *   }
     * })
     * 
     */
    delete<T extends dispatchesDeleteArgs>(args: SelectSubset<T, dispatchesDeleteArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dispatches.
     * @param {dispatchesUpdateArgs} args - Arguments to update one Dispatches.
     * @example
     * // Update one Dispatches
     * const dispatches = await prisma.dispatches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dispatchesUpdateArgs>(args: SelectSubset<T, dispatchesUpdateArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dispatches.
     * @param {dispatchesDeleteManyArgs} args - Arguments to filter Dispatches to delete.
     * @example
     * // Delete a few Dispatches
     * const { count } = await prisma.dispatches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dispatchesDeleteManyArgs>(args?: SelectSubset<T, dispatchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dispatchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispatches
     * const dispatches = await prisma.dispatches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dispatchesUpdateManyArgs>(args: SelectSubset<T, dispatchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispatches.
     * @param {dispatchesUpsertArgs} args - Arguments to update or create a Dispatches.
     * @example
     * // Update or create a Dispatches
     * const dispatches = await prisma.dispatches.upsert({
     *   create: {
     *     // ... data to create a Dispatches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispatches we want to update
     *   }
     * })
     */
    upsert<T extends dispatchesUpsertArgs>(args: SelectSubset<T, dispatchesUpsertArgs<ExtArgs>>): Prisma__dispatchesClient<$Result.GetResult<Prisma.$dispatchesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dispatchesCountArgs} args - Arguments to filter Dispatches to count.
     * @example
     * // Count the number of Dispatches
     * const count = await prisma.dispatches.count({
     *   where: {
     *     // ... the filter for the Dispatches we want to count
     *   }
     * })
    **/
    count<T extends dispatchesCountArgs>(
      args?: Subset<T, dispatchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DispatchesAggregateArgs>(args: Subset<T, DispatchesAggregateArgs>): Prisma.PrismaPromise<GetDispatchesAggregateType<T>>

    /**
     * Group by Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dispatchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dispatchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dispatchesGroupByArgs['orderBy'] }
        : { orderBy?: dispatchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dispatchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dispatches model
   */
  readonly fields: dispatchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dispatches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dispatchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brick_types<T extends brick_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, brick_typesDefaultArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customers<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dispatches model
   */ 
  interface dispatchesFieldRefs {
    readonly id: FieldRef<"dispatches", 'String'>
    readonly date: FieldRef<"dispatches", 'DateTime'>
    readonly customerId: FieldRef<"dispatches", 'String'>
    readonly brickTypeId: FieldRef<"dispatches", 'String'>
    readonly quantity: FieldRef<"dispatches", 'Int'>
    readonly distanceKm: FieldRef<"dispatches", 'Float'>
    readonly vehicleType: FieldRef<"dispatches", 'String'>
    readonly transportCost: FieldRef<"dispatches", 'Float'>
    readonly loadingCost: FieldRef<"dispatches", 'Float'>
    readonly paymentStatus: FieldRef<"dispatches", 'String'>
    readonly totalAmount: FieldRef<"dispatches", 'Float'>
    readonly paidAmount: FieldRef<"dispatches", 'Float'>
    readonly createdAt: FieldRef<"dispatches", 'DateTime'>
    readonly updatedAt: FieldRef<"dispatches", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * dispatches findUnique
   */
  export type dispatchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * Filter, which dispatches to fetch.
     */
    where: dispatchesWhereUniqueInput
  }

  /**
   * dispatches findUniqueOrThrow
   */
  export type dispatchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * Filter, which dispatches to fetch.
     */
    where: dispatchesWhereUniqueInput
  }

  /**
   * dispatches findFirst
   */
  export type dispatchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * Filter, which dispatches to fetch.
     */
    where?: dispatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dispatches to fetch.
     */
    orderBy?: dispatchesOrderByWithRelationInput | dispatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dispatches.
     */
    cursor?: dispatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dispatches.
     */
    distinct?: DispatchesScalarFieldEnum | DispatchesScalarFieldEnum[]
  }

  /**
   * dispatches findFirstOrThrow
   */
  export type dispatchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * Filter, which dispatches to fetch.
     */
    where?: dispatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dispatches to fetch.
     */
    orderBy?: dispatchesOrderByWithRelationInput | dispatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dispatches.
     */
    cursor?: dispatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dispatches.
     */
    distinct?: DispatchesScalarFieldEnum | DispatchesScalarFieldEnum[]
  }

  /**
   * dispatches findMany
   */
  export type dispatchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * Filter, which dispatches to fetch.
     */
    where?: dispatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dispatches to fetch.
     */
    orderBy?: dispatchesOrderByWithRelationInput | dispatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dispatches.
     */
    cursor?: dispatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dispatches.
     */
    skip?: number
    distinct?: DispatchesScalarFieldEnum | DispatchesScalarFieldEnum[]
  }

  /**
   * dispatches create
   */
  export type dispatchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * The data needed to create a dispatches.
     */
    data: XOR<dispatchesCreateInput, dispatchesUncheckedCreateInput>
  }

  /**
   * dispatches createMany
   */
  export type dispatchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dispatches.
     */
    data: dispatchesCreateManyInput | dispatchesCreateManyInput[]
  }

  /**
   * dispatches createManyAndReturn
   */
  export type dispatchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many dispatches.
     */
    data: dispatchesCreateManyInput | dispatchesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dispatches update
   */
  export type dispatchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * The data needed to update a dispatches.
     */
    data: XOR<dispatchesUpdateInput, dispatchesUncheckedUpdateInput>
    /**
     * Choose, which dispatches to update.
     */
    where: dispatchesWhereUniqueInput
  }

  /**
   * dispatches updateMany
   */
  export type dispatchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dispatches.
     */
    data: XOR<dispatchesUpdateManyMutationInput, dispatchesUncheckedUpdateManyInput>
    /**
     * Filter which dispatches to update
     */
    where?: dispatchesWhereInput
  }

  /**
   * dispatches upsert
   */
  export type dispatchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * The filter to search for the dispatches to update in case it exists.
     */
    where: dispatchesWhereUniqueInput
    /**
     * In case the dispatches found by the `where` argument doesn't exist, create a new dispatches with this data.
     */
    create: XOR<dispatchesCreateInput, dispatchesUncheckedCreateInput>
    /**
     * In case the dispatches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dispatchesUpdateInput, dispatchesUncheckedUpdateInput>
  }

  /**
   * dispatches delete
   */
  export type dispatchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
    /**
     * Filter which dispatches to delete.
     */
    where: dispatchesWhereUniqueInput
  }

  /**
   * dispatches deleteMany
   */
  export type dispatchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dispatches to delete
     */
    where?: dispatchesWhereInput
  }

  /**
   * dispatches without action
   */
  export type dispatchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dispatches
     */
    select?: dispatchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dispatchesInclude<ExtArgs> | null
  }


  /**
   * Model expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpensesSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: string | null
    date: Date | null
    category: string | null
    amount: number | null
    notes: string | null
    paymentMode: string | null
    workerId: string | null
    materialId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    category: string | null
    amount: number | null
    notes: string | null
    paymentMode: string | null
    workerId: string | null
    materialId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    date: number
    category: number
    amount: number
    notes: number
    paymentMode: number
    workerId: number
    materialId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    date?: true
    category?: true
    amount?: true
    notes?: true
    paymentMode?: true
    workerId?: true
    materialId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    date?: true
    category?: true
    amount?: true
    notes?: true
    paymentMode?: true
    workerId?: true
    materialId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    date?: true
    category?: true
    amount?: true
    notes?: true
    paymentMode?: true
    workerId?: true
    materialId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to aggregate.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type expensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithAggregationInput | expensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: expensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    id: string
    date: Date
    category: string
    amount: number
    notes: string | null
    paymentMode: string
    workerId: string | null
    materialId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends expensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type expensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    category?: boolean
    amount?: boolean
    notes?: boolean
    paymentMode?: boolean
    workerId?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    raw_materials?: boolean | expenses$raw_materialsArgs<ExtArgs>
    workers?: boolean | expenses$workersArgs<ExtArgs>
    material_usages?: boolean | expenses$material_usagesArgs<ExtArgs>
    _count?: boolean | ExpensesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    category?: boolean
    amount?: boolean
    notes?: boolean
    paymentMode?: boolean
    workerId?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    raw_materials?: boolean | expenses$raw_materialsArgs<ExtArgs>
    workers?: boolean | expenses$workersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectScalar = {
    id?: boolean
    date?: boolean
    category?: boolean
    amount?: boolean
    notes?: boolean
    paymentMode?: boolean
    workerId?: boolean
    materialId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type expensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raw_materials?: boolean | expenses$raw_materialsArgs<ExtArgs>
    workers?: boolean | expenses$workersArgs<ExtArgs>
    material_usages?: boolean | expenses$material_usagesArgs<ExtArgs>
    _count?: boolean | ExpensesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type expensesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raw_materials?: boolean | expenses$raw_materialsArgs<ExtArgs>
    workers?: boolean | expenses$workersArgs<ExtArgs>
  }

  export type $expensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expenses"
    objects: {
      raw_materials: Prisma.$raw_materialsPayload<ExtArgs> | null
      workers: Prisma.$workersPayload<ExtArgs> | null
      material_usages: Prisma.$material_usagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      category: string
      amount: number
      notes: string | null
      paymentMode: string
      workerId: string | null
      materialId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type expensesGetPayload<S extends boolean | null | undefined | expensesDefaultArgs> = $Result.GetResult<Prisma.$expensesPayload, S>

  type expensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<expensesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface expensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expenses'], meta: { name: 'expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {expensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expensesFindUniqueArgs>(args: SelectSubset<T, expensesFindUniqueArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {expensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expensesFindUniqueOrThrowArgs>(args: SelectSubset<T, expensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expensesFindFirstArgs>(args?: SelectSubset<T, expensesFindFirstArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expensesFindFirstOrThrowArgs>(args?: SelectSubset<T, expensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expensesFindManyArgs>(args?: SelectSubset<T, expensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Expenses.
     * @param {expensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends expensesCreateArgs>(args: SelectSubset<T, expensesCreateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Expenses.
     * @param {expensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expensesCreateManyArgs>(args?: SelectSubset<T, expensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {expensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expensesCreateManyAndReturnArgs>(args?: SelectSubset<T, expensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Expenses.
     * @param {expensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends expensesDeleteArgs>(args: SelectSubset<T, expensesDeleteArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Expenses.
     * @param {expensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expensesUpdateArgs>(args: SelectSubset<T, expensesUpdateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {expensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expensesDeleteManyArgs>(args?: SelectSubset<T, expensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expensesUpdateManyArgs>(args: SelectSubset<T, expensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expenses.
     * @param {expensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends expensesUpsertArgs>(args: SelectSubset<T, expensesUpsertArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expensesCountArgs>(
      args?: Subset<T, expensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expensesGroupByArgs['orderBy'] }
        : { orderBy?: expensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expenses model
   */
  readonly fields: expensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    raw_materials<T extends expenses$raw_materialsArgs<ExtArgs> = {}>(args?: Subset<T, expenses$raw_materialsArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    workers<T extends expenses$workersArgs<ExtArgs> = {}>(args?: Subset<T, expenses$workersArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    material_usages<T extends expenses$material_usagesArgs<ExtArgs> = {}>(args?: Subset<T, expenses$material_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expenses model
   */ 
  interface expensesFieldRefs {
    readonly id: FieldRef<"expenses", 'String'>
    readonly date: FieldRef<"expenses", 'DateTime'>
    readonly category: FieldRef<"expenses", 'String'>
    readonly amount: FieldRef<"expenses", 'Float'>
    readonly notes: FieldRef<"expenses", 'String'>
    readonly paymentMode: FieldRef<"expenses", 'String'>
    readonly workerId: FieldRef<"expenses", 'String'>
    readonly materialId: FieldRef<"expenses", 'String'>
    readonly createdAt: FieldRef<"expenses", 'DateTime'>
    readonly updatedAt: FieldRef<"expenses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * expenses findUnique
   */
  export type expensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findUniqueOrThrow
   */
  export type expensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findFirst
   */
  export type expensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findFirstOrThrow
   */
  export type expensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findMany
   */
  export type expensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses create
   */
  export type expensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to create a expenses.
     */
    data: XOR<expensesCreateInput, expensesUncheckedCreateInput>
  }

  /**
   * expenses createMany
   */
  export type expensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
  }

  /**
   * expenses createManyAndReturn
   */
  export type expensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses update
   */
  export type expensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to update a expenses.
     */
    data: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
    /**
     * Choose, which expenses to update.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses updateMany
   */
  export type expensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
  }

  /**
   * expenses upsert
   */
  export type expensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The filter to search for the expenses to update in case it exists.
     */
    where: expensesWhereUniqueInput
    /**
     * In case the expenses found by the `where` argument doesn't exist, create a new expenses with this data.
     */
    create: XOR<expensesCreateInput, expensesUncheckedCreateInput>
    /**
     * In case the expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
  }

  /**
   * expenses delete
   */
  export type expensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter which expenses to delete.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses deleteMany
   */
  export type expensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expensesWhereInput
  }

  /**
   * expenses.raw_materials
   */
  export type expenses$raw_materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    where?: raw_materialsWhereInput
  }

  /**
   * expenses.workers
   */
  export type expenses$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    where?: workersWhereInput
  }

  /**
   * expenses.material_usages
   */
  export type expenses$material_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    where?: material_usagesWhereInput
    orderBy?: material_usagesOrderByWithRelationInput | material_usagesOrderByWithRelationInput[]
    cursor?: material_usagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_usagesScalarFieldEnum | Material_usagesScalarFieldEnum[]
  }

  /**
   * expenses without action
   */
  export type expensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
  }


  /**
   * Model machines
   */

  export type AggregateMachines = {
    _count: MachinesCountAggregateOutputType | null
    _min: MachinesMinAggregateOutputType | null
    _max: MachinesMaxAggregateOutputType | null
  }

  export type MachinesMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachinesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MachinesCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MachinesMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachinesMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MachinesCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MachinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which machines to aggregate.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned machines
    **/
    _count?: true | MachinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachinesMaxAggregateInputType
  }

  export type GetMachinesAggregateType<T extends MachinesAggregateArgs> = {
        [P in keyof T & keyof AggregateMachines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachines[P]>
      : GetScalarType<T[P], AggregateMachines[P]>
  }




  export type machinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: machinesWhereInput
    orderBy?: machinesOrderByWithAggregationInput | machinesOrderByWithAggregationInput[]
    by: MachinesScalarFieldEnum[] | MachinesScalarFieldEnum
    having?: machinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachinesCountAggregateInputType | true
    _min?: MachinesMinAggregateInputType
    _max?: MachinesMaxAggregateInputType
  }

  export type MachinesGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MachinesCountAggregateOutputType | null
    _min: MachinesMinAggregateOutputType | null
    _max: MachinesMaxAggregateOutputType | null
  }

  type GetMachinesGroupByPayload<T extends machinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachinesGroupByOutputType[P]>
            : GetScalarType<T[P], MachinesGroupByOutputType[P]>
        }
      >
    >


  export type machinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productions?: boolean | machines$productionsArgs<ExtArgs>
    _count?: boolean | MachinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machines"]>

  export type machinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["machines"]>

  export type machinesSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type machinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | machines$productionsArgs<ExtArgs>
    _count?: boolean | MachinesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type machinesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $machinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "machines"
    objects: {
      productions: Prisma.$productionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["machines"]>
    composites: {}
  }

  type machinesGetPayload<S extends boolean | null | undefined | machinesDefaultArgs> = $Result.GetResult<Prisma.$machinesPayload, S>

  type machinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<machinesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MachinesCountAggregateInputType | true
    }

  export interface machinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['machines'], meta: { name: 'machines' } }
    /**
     * Find zero or one Machines that matches the filter.
     * @param {machinesFindUniqueArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends machinesFindUniqueArgs>(args: SelectSubset<T, machinesFindUniqueArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Machines that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {machinesFindUniqueOrThrowArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends machinesFindUniqueOrThrowArgs>(args: SelectSubset<T, machinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesFindFirstArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends machinesFindFirstArgs>(args?: SelectSubset<T, machinesFindFirstArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Machines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesFindFirstOrThrowArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends machinesFindFirstOrThrowArgs>(args?: SelectSubset<T, machinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machines
     * const machines = await prisma.machines.findMany()
     * 
     * // Get first 10 Machines
     * const machines = await prisma.machines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machinesWithIdOnly = await prisma.machines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends machinesFindManyArgs>(args?: SelectSubset<T, machinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Machines.
     * @param {machinesCreateArgs} args - Arguments to create a Machines.
     * @example
     * // Create one Machines
     * const Machines = await prisma.machines.create({
     *   data: {
     *     // ... data to create a Machines
     *   }
     * })
     * 
     */
    create<T extends machinesCreateArgs>(args: SelectSubset<T, machinesCreateArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Machines.
     * @param {machinesCreateManyArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machines = await prisma.machines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends machinesCreateManyArgs>(args?: SelectSubset<T, machinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Machines and returns the data saved in the database.
     * @param {machinesCreateManyAndReturnArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machines = await prisma.machines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Machines and only return the `id`
     * const machinesWithIdOnly = await prisma.machines.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends machinesCreateManyAndReturnArgs>(args?: SelectSubset<T, machinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Machines.
     * @param {machinesDeleteArgs} args - Arguments to delete one Machines.
     * @example
     * // Delete one Machines
     * const Machines = await prisma.machines.delete({
     *   where: {
     *     // ... filter to delete one Machines
     *   }
     * })
     * 
     */
    delete<T extends machinesDeleteArgs>(args: SelectSubset<T, machinesDeleteArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Machines.
     * @param {machinesUpdateArgs} args - Arguments to update one Machines.
     * @example
     * // Update one Machines
     * const machines = await prisma.machines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends machinesUpdateArgs>(args: SelectSubset<T, machinesUpdateArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Machines.
     * @param {machinesDeleteManyArgs} args - Arguments to filter Machines to delete.
     * @example
     * // Delete a few Machines
     * const { count } = await prisma.machines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends machinesDeleteManyArgs>(args?: SelectSubset<T, machinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machines
     * const machines = await prisma.machines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends machinesUpdateManyArgs>(args: SelectSubset<T, machinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Machines.
     * @param {machinesUpsertArgs} args - Arguments to update or create a Machines.
     * @example
     * // Update or create a Machines
     * const machines = await prisma.machines.upsert({
     *   create: {
     *     // ... data to create a Machines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machines we want to update
     *   }
     * })
     */
    upsert<T extends machinesUpsertArgs>(args: SelectSubset<T, machinesUpsertArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesCountArgs} args - Arguments to filter Machines to count.
     * @example
     * // Count the number of Machines
     * const count = await prisma.machines.count({
     *   where: {
     *     // ... the filter for the Machines we want to count
     *   }
     * })
    **/
    count<T extends machinesCountArgs>(
      args?: Subset<T, machinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MachinesAggregateArgs>(args: Subset<T, MachinesAggregateArgs>): Prisma.PrismaPromise<GetMachinesAggregateType<T>>

    /**
     * Group by Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends machinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: machinesGroupByArgs['orderBy'] }
        : { orderBy?: machinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, machinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the machines model
   */
  readonly fields: machinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for machines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__machinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productions<T extends machines$productionsArgs<ExtArgs> = {}>(args?: Subset<T, machines$productionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the machines model
   */ 
  interface machinesFieldRefs {
    readonly id: FieldRef<"machines", 'String'>
    readonly name: FieldRef<"machines", 'String'>
    readonly isActive: FieldRef<"machines", 'Boolean'>
    readonly createdAt: FieldRef<"machines", 'DateTime'>
    readonly updatedAt: FieldRef<"machines", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * machines findUnique
   */
  export type machinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines findUniqueOrThrow
   */
  export type machinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines findFirst
   */
  export type machinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for machines.
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of machines.
     */
    distinct?: MachinesScalarFieldEnum | MachinesScalarFieldEnum[]
  }

  /**
   * machines findFirstOrThrow
   */
  export type machinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for machines.
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of machines.
     */
    distinct?: MachinesScalarFieldEnum | MachinesScalarFieldEnum[]
  }

  /**
   * machines findMany
   */
  export type machinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing machines.
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    distinct?: MachinesScalarFieldEnum | MachinesScalarFieldEnum[]
  }

  /**
   * machines create
   */
  export type machinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * The data needed to create a machines.
     */
    data: XOR<machinesCreateInput, machinesUncheckedCreateInput>
  }

  /**
   * machines createMany
   */
  export type machinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many machines.
     */
    data: machinesCreateManyInput | machinesCreateManyInput[]
  }

  /**
   * machines createManyAndReturn
   */
  export type machinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many machines.
     */
    data: machinesCreateManyInput | machinesCreateManyInput[]
  }

  /**
   * machines update
   */
  export type machinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * The data needed to update a machines.
     */
    data: XOR<machinesUpdateInput, machinesUncheckedUpdateInput>
    /**
     * Choose, which machines to update.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines updateMany
   */
  export type machinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update machines.
     */
    data: XOR<machinesUpdateManyMutationInput, machinesUncheckedUpdateManyInput>
    /**
     * Filter which machines to update
     */
    where?: machinesWhereInput
  }

  /**
   * machines upsert
   */
  export type machinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * The filter to search for the machines to update in case it exists.
     */
    where: machinesWhereUniqueInput
    /**
     * In case the machines found by the `where` argument doesn't exist, create a new machines with this data.
     */
    create: XOR<machinesCreateInput, machinesUncheckedCreateInput>
    /**
     * In case the machines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<machinesUpdateInput, machinesUncheckedUpdateInput>
  }

  /**
   * machines delete
   */
  export type machinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
    /**
     * Filter which machines to delete.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines deleteMany
   */
  export type machinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which machines to delete
     */
    where?: machinesWhereInput
  }

  /**
   * machines.productions
   */
  export type machines$productionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    where?: productionsWhereInput
    orderBy?: productionsOrderByWithRelationInput | productionsOrderByWithRelationInput[]
    cursor?: productionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionsScalarFieldEnum | ProductionsScalarFieldEnum[]
  }

  /**
   * machines without action
   */
  export type machinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machinesInclude<ExtArgs> | null
  }


  /**
   * Model material_usages
   */

  export type AggregateMaterial_usages = {
    _count: Material_usagesCountAggregateOutputType | null
    _avg: Material_usagesAvgAggregateOutputType | null
    _sum: Material_usagesSumAggregateOutputType | null
    _min: Material_usagesMinAggregateOutputType | null
    _max: Material_usagesMaxAggregateOutputType | null
  }

  export type Material_usagesAvgAggregateOutputType = {
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
  }

  export type Material_usagesSumAggregateOutputType = {
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
  }

  export type Material_usagesMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
    date: Date | null
    expenseId: string | null
    createdAt: Date | null
  }

  export type Material_usagesMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantity: number | null
    pricePerUnit: number | null
    totalCost: number | null
    date: Date | null
    expenseId: string | null
    createdAt: Date | null
  }

  export type Material_usagesCountAggregateOutputType = {
    id: number
    materialId: number
    quantity: number
    pricePerUnit: number
    totalCost: number
    date: number
    expenseId: number
    createdAt: number
    _all: number
  }


  export type Material_usagesAvgAggregateInputType = {
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
  }

  export type Material_usagesSumAggregateInputType = {
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
  }

  export type Material_usagesMinAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
    date?: true
    expenseId?: true
    createdAt?: true
  }

  export type Material_usagesMaxAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
    date?: true
    expenseId?: true
    createdAt?: true
  }

  export type Material_usagesCountAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    pricePerUnit?: true
    totalCost?: true
    date?: true
    expenseId?: true
    createdAt?: true
    _all?: true
  }

  export type Material_usagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_usages to aggregate.
     */
    where?: material_usagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_usages to fetch.
     */
    orderBy?: material_usagesOrderByWithRelationInput | material_usagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: material_usagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned material_usages
    **/
    _count?: true | Material_usagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Material_usagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Material_usagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Material_usagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Material_usagesMaxAggregateInputType
  }

  export type GetMaterial_usagesAggregateType<T extends Material_usagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial_usages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial_usages[P]>
      : GetScalarType<T[P], AggregateMaterial_usages[P]>
  }




  export type material_usagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_usagesWhereInput
    orderBy?: material_usagesOrderByWithAggregationInput | material_usagesOrderByWithAggregationInput[]
    by: Material_usagesScalarFieldEnum[] | Material_usagesScalarFieldEnum
    having?: material_usagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Material_usagesCountAggregateInputType | true
    _avg?: Material_usagesAvgAggregateInputType
    _sum?: Material_usagesSumAggregateInputType
    _min?: Material_usagesMinAggregateInputType
    _max?: Material_usagesMaxAggregateInputType
  }

  export type Material_usagesGroupByOutputType = {
    id: string
    materialId: string
    quantity: number
    pricePerUnit: number
    totalCost: number
    date: Date
    expenseId: string | null
    createdAt: Date
    _count: Material_usagesCountAggregateOutputType | null
    _avg: Material_usagesAvgAggregateOutputType | null
    _sum: Material_usagesSumAggregateOutputType | null
    _min: Material_usagesMinAggregateOutputType | null
    _max: Material_usagesMaxAggregateOutputType | null
  }

  type GetMaterial_usagesGroupByPayload<T extends material_usagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Material_usagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Material_usagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Material_usagesGroupByOutputType[P]>
            : GetScalarType<T[P], Material_usagesGroupByOutputType[P]>
        }
      >
    >


  export type material_usagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    date?: boolean
    expenseId?: boolean
    createdAt?: boolean
    expenses?: boolean | material_usages$expensesArgs<ExtArgs>
    raw_materials?: boolean | raw_materialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_usages"]>

  export type material_usagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    date?: boolean
    expenseId?: boolean
    createdAt?: boolean
    expenses?: boolean | material_usages$expensesArgs<ExtArgs>
    raw_materials?: boolean | raw_materialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_usages"]>

  export type material_usagesSelectScalar = {
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    totalCost?: boolean
    date?: boolean
    expenseId?: boolean
    createdAt?: boolean
  }

  export type material_usagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | material_usages$expensesArgs<ExtArgs>
    raw_materials?: boolean | raw_materialsDefaultArgs<ExtArgs>
  }
  export type material_usagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | material_usages$expensesArgs<ExtArgs>
    raw_materials?: boolean | raw_materialsDefaultArgs<ExtArgs>
  }

  export type $material_usagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "material_usages"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs> | null
      raw_materials: Prisma.$raw_materialsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      quantity: number
      pricePerUnit: number
      totalCost: number
      date: Date
      expenseId: string | null
      createdAt: Date
    }, ExtArgs["result"]["material_usages"]>
    composites: {}
  }

  type material_usagesGetPayload<S extends boolean | null | undefined | material_usagesDefaultArgs> = $Result.GetResult<Prisma.$material_usagesPayload, S>

  type material_usagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<material_usagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Material_usagesCountAggregateInputType | true
    }

  export interface material_usagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['material_usages'], meta: { name: 'material_usages' } }
    /**
     * Find zero or one Material_usages that matches the filter.
     * @param {material_usagesFindUniqueArgs} args - Arguments to find a Material_usages
     * @example
     * // Get one Material_usages
     * const material_usages = await prisma.material_usages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends material_usagesFindUniqueArgs>(args: SelectSubset<T, material_usagesFindUniqueArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Material_usages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {material_usagesFindUniqueOrThrowArgs} args - Arguments to find a Material_usages
     * @example
     * // Get one Material_usages
     * const material_usages = await prisma.material_usages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends material_usagesFindUniqueOrThrowArgs>(args: SelectSubset<T, material_usagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Material_usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_usagesFindFirstArgs} args - Arguments to find a Material_usages
     * @example
     * // Get one Material_usages
     * const material_usages = await prisma.material_usages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends material_usagesFindFirstArgs>(args?: SelectSubset<T, material_usagesFindFirstArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Material_usages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_usagesFindFirstOrThrowArgs} args - Arguments to find a Material_usages
     * @example
     * // Get one Material_usages
     * const material_usages = await prisma.material_usages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends material_usagesFindFirstOrThrowArgs>(args?: SelectSubset<T, material_usagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Material_usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_usagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_usages
     * const material_usages = await prisma.material_usages.findMany()
     * 
     * // Get first 10 Material_usages
     * const material_usages = await prisma.material_usages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const material_usagesWithIdOnly = await prisma.material_usages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends material_usagesFindManyArgs>(args?: SelectSubset<T, material_usagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Material_usages.
     * @param {material_usagesCreateArgs} args - Arguments to create a Material_usages.
     * @example
     * // Create one Material_usages
     * const Material_usages = await prisma.material_usages.create({
     *   data: {
     *     // ... data to create a Material_usages
     *   }
     * })
     * 
     */
    create<T extends material_usagesCreateArgs>(args: SelectSubset<T, material_usagesCreateArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Material_usages.
     * @param {material_usagesCreateManyArgs} args - Arguments to create many Material_usages.
     * @example
     * // Create many Material_usages
     * const material_usages = await prisma.material_usages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends material_usagesCreateManyArgs>(args?: SelectSubset<T, material_usagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Material_usages and returns the data saved in the database.
     * @param {material_usagesCreateManyAndReturnArgs} args - Arguments to create many Material_usages.
     * @example
     * // Create many Material_usages
     * const material_usages = await prisma.material_usages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Material_usages and only return the `id`
     * const material_usagesWithIdOnly = await prisma.material_usages.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends material_usagesCreateManyAndReturnArgs>(args?: SelectSubset<T, material_usagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Material_usages.
     * @param {material_usagesDeleteArgs} args - Arguments to delete one Material_usages.
     * @example
     * // Delete one Material_usages
     * const Material_usages = await prisma.material_usages.delete({
     *   where: {
     *     // ... filter to delete one Material_usages
     *   }
     * })
     * 
     */
    delete<T extends material_usagesDeleteArgs>(args: SelectSubset<T, material_usagesDeleteArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Material_usages.
     * @param {material_usagesUpdateArgs} args - Arguments to update one Material_usages.
     * @example
     * // Update one Material_usages
     * const material_usages = await prisma.material_usages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends material_usagesUpdateArgs>(args: SelectSubset<T, material_usagesUpdateArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Material_usages.
     * @param {material_usagesDeleteManyArgs} args - Arguments to filter Material_usages to delete.
     * @example
     * // Delete a few Material_usages
     * const { count } = await prisma.material_usages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends material_usagesDeleteManyArgs>(args?: SelectSubset<T, material_usagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_usagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_usages
     * const material_usages = await prisma.material_usages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends material_usagesUpdateManyArgs>(args: SelectSubset<T, material_usagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material_usages.
     * @param {material_usagesUpsertArgs} args - Arguments to update or create a Material_usages.
     * @example
     * // Update or create a Material_usages
     * const material_usages = await prisma.material_usages.upsert({
     *   create: {
     *     // ... data to create a Material_usages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_usages we want to update
     *   }
     * })
     */
    upsert<T extends material_usagesUpsertArgs>(args: SelectSubset<T, material_usagesUpsertArgs<ExtArgs>>): Prisma__material_usagesClient<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Material_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_usagesCountArgs} args - Arguments to filter Material_usages to count.
     * @example
     * // Count the number of Material_usages
     * const count = await prisma.material_usages.count({
     *   where: {
     *     // ... the filter for the Material_usages we want to count
     *   }
     * })
    **/
    count<T extends material_usagesCountArgs>(
      args?: Subset<T, material_usagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Material_usagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_usagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Material_usagesAggregateArgs>(args: Subset<T, Material_usagesAggregateArgs>): Prisma.PrismaPromise<GetMaterial_usagesAggregateType<T>>

    /**
     * Group by Material_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_usagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends material_usagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: material_usagesGroupByArgs['orderBy'] }
        : { orderBy?: material_usagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, material_usagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_usagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the material_usages model
   */
  readonly fields: material_usagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for material_usages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__material_usagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends material_usages$expensesArgs<ExtArgs> = {}>(args?: Subset<T, material_usages$expensesArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    raw_materials<T extends raw_materialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, raw_materialsDefaultArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the material_usages model
   */ 
  interface material_usagesFieldRefs {
    readonly id: FieldRef<"material_usages", 'String'>
    readonly materialId: FieldRef<"material_usages", 'String'>
    readonly quantity: FieldRef<"material_usages", 'Float'>
    readonly pricePerUnit: FieldRef<"material_usages", 'Float'>
    readonly totalCost: FieldRef<"material_usages", 'Float'>
    readonly date: FieldRef<"material_usages", 'DateTime'>
    readonly expenseId: FieldRef<"material_usages", 'String'>
    readonly createdAt: FieldRef<"material_usages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * material_usages findUnique
   */
  export type material_usagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * Filter, which material_usages to fetch.
     */
    where: material_usagesWhereUniqueInput
  }

  /**
   * material_usages findUniqueOrThrow
   */
  export type material_usagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * Filter, which material_usages to fetch.
     */
    where: material_usagesWhereUniqueInput
  }

  /**
   * material_usages findFirst
   */
  export type material_usagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * Filter, which material_usages to fetch.
     */
    where?: material_usagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_usages to fetch.
     */
    orderBy?: material_usagesOrderByWithRelationInput | material_usagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_usages.
     */
    cursor?: material_usagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_usages.
     */
    distinct?: Material_usagesScalarFieldEnum | Material_usagesScalarFieldEnum[]
  }

  /**
   * material_usages findFirstOrThrow
   */
  export type material_usagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * Filter, which material_usages to fetch.
     */
    where?: material_usagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_usages to fetch.
     */
    orderBy?: material_usagesOrderByWithRelationInput | material_usagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_usages.
     */
    cursor?: material_usagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_usages.
     */
    distinct?: Material_usagesScalarFieldEnum | Material_usagesScalarFieldEnum[]
  }

  /**
   * material_usages findMany
   */
  export type material_usagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * Filter, which material_usages to fetch.
     */
    where?: material_usagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_usages to fetch.
     */
    orderBy?: material_usagesOrderByWithRelationInput | material_usagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing material_usages.
     */
    cursor?: material_usagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_usages.
     */
    skip?: number
    distinct?: Material_usagesScalarFieldEnum | Material_usagesScalarFieldEnum[]
  }

  /**
   * material_usages create
   */
  export type material_usagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * The data needed to create a material_usages.
     */
    data: XOR<material_usagesCreateInput, material_usagesUncheckedCreateInput>
  }

  /**
   * material_usages createMany
   */
  export type material_usagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many material_usages.
     */
    data: material_usagesCreateManyInput | material_usagesCreateManyInput[]
  }

  /**
   * material_usages createManyAndReturn
   */
  export type material_usagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many material_usages.
     */
    data: material_usagesCreateManyInput | material_usagesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_usages update
   */
  export type material_usagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * The data needed to update a material_usages.
     */
    data: XOR<material_usagesUpdateInput, material_usagesUncheckedUpdateInput>
    /**
     * Choose, which material_usages to update.
     */
    where: material_usagesWhereUniqueInput
  }

  /**
   * material_usages updateMany
   */
  export type material_usagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update material_usages.
     */
    data: XOR<material_usagesUpdateManyMutationInput, material_usagesUncheckedUpdateManyInput>
    /**
     * Filter which material_usages to update
     */
    where?: material_usagesWhereInput
  }

  /**
   * material_usages upsert
   */
  export type material_usagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * The filter to search for the material_usages to update in case it exists.
     */
    where: material_usagesWhereUniqueInput
    /**
     * In case the material_usages found by the `where` argument doesn't exist, create a new material_usages with this data.
     */
    create: XOR<material_usagesCreateInput, material_usagesUncheckedCreateInput>
    /**
     * In case the material_usages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<material_usagesUpdateInput, material_usagesUncheckedUpdateInput>
  }

  /**
   * material_usages delete
   */
  export type material_usagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    /**
     * Filter which material_usages to delete.
     */
    where: material_usagesWhereUniqueInput
  }

  /**
   * material_usages deleteMany
   */
  export type material_usagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_usages to delete
     */
    where?: material_usagesWhereInput
  }

  /**
   * material_usages.expenses
   */
  export type material_usages$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
  }

  /**
   * material_usages without action
   */
  export type material_usagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
  }


  /**
   * Model production_workers
   */

  export type AggregateProduction_workers = {
    _count: Production_workersCountAggregateOutputType | null
    _avg: Production_workersAvgAggregateOutputType | null
    _sum: Production_workersSumAggregateOutputType | null
    _min: Production_workersMinAggregateOutputType | null
    _max: Production_workersMaxAggregateOutputType | null
  }

  export type Production_workersAvgAggregateOutputType = {
    quantity: number | null
  }

  export type Production_workersSumAggregateOutputType = {
    quantity: number | null
  }

  export type Production_workersMinAggregateOutputType = {
    id: string | null
    productionId: string | null
    workerId: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type Production_workersMaxAggregateOutputType = {
    id: string | null
    productionId: string | null
    workerId: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type Production_workersCountAggregateOutputType = {
    id: number
    productionId: number
    workerId: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type Production_workersAvgAggregateInputType = {
    quantity?: true
  }

  export type Production_workersSumAggregateInputType = {
    quantity?: true
  }

  export type Production_workersMinAggregateInputType = {
    id?: true
    productionId?: true
    workerId?: true
    quantity?: true
    createdAt?: true
  }

  export type Production_workersMaxAggregateInputType = {
    id?: true
    productionId?: true
    workerId?: true
    quantity?: true
    createdAt?: true
  }

  export type Production_workersCountAggregateInputType = {
    id?: true
    productionId?: true
    workerId?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type Production_workersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which production_workers to aggregate.
     */
    where?: production_workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_workers to fetch.
     */
    orderBy?: production_workersOrderByWithRelationInput | production_workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: production_workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned production_workers
    **/
    _count?: true | Production_workersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Production_workersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Production_workersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Production_workersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Production_workersMaxAggregateInputType
  }

  export type GetProduction_workersAggregateType<T extends Production_workersAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction_workers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction_workers[P]>
      : GetScalarType<T[P], AggregateProduction_workers[P]>
  }




  export type production_workersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: production_workersWhereInput
    orderBy?: production_workersOrderByWithAggregationInput | production_workersOrderByWithAggregationInput[]
    by: Production_workersScalarFieldEnum[] | Production_workersScalarFieldEnum
    having?: production_workersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Production_workersCountAggregateInputType | true
    _avg?: Production_workersAvgAggregateInputType
    _sum?: Production_workersSumAggregateInputType
    _min?: Production_workersMinAggregateInputType
    _max?: Production_workersMaxAggregateInputType
  }

  export type Production_workersGroupByOutputType = {
    id: string
    productionId: string
    workerId: string
    quantity: number
    createdAt: Date
    _count: Production_workersCountAggregateOutputType | null
    _avg: Production_workersAvgAggregateOutputType | null
    _sum: Production_workersSumAggregateOutputType | null
    _min: Production_workersMinAggregateOutputType | null
    _max: Production_workersMaxAggregateOutputType | null
  }

  type GetProduction_workersGroupByPayload<T extends production_workersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Production_workersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Production_workersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Production_workersGroupByOutputType[P]>
            : GetScalarType<T[P], Production_workersGroupByOutputType[P]>
        }
      >
    >


  export type production_workersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productionId?: boolean
    workerId?: boolean
    quantity?: boolean
    createdAt?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
    productions?: boolean | productionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production_workers"]>

  export type production_workersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productionId?: boolean
    workerId?: boolean
    quantity?: boolean
    createdAt?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
    productions?: boolean | productionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production_workers"]>

  export type production_workersSelectScalar = {
    id?: boolean
    productionId?: boolean
    workerId?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type production_workersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
    productions?: boolean | productionsDefaultArgs<ExtArgs>
  }
  export type production_workersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
    productions?: boolean | productionsDefaultArgs<ExtArgs>
  }

  export type $production_workersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "production_workers"
    objects: {
      workers: Prisma.$workersPayload<ExtArgs>
      productions: Prisma.$productionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productionId: string
      workerId: string
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["production_workers"]>
    composites: {}
  }

  type production_workersGetPayload<S extends boolean | null | undefined | production_workersDefaultArgs> = $Result.GetResult<Prisma.$production_workersPayload, S>

  type production_workersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<production_workersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Production_workersCountAggregateInputType | true
    }

  export interface production_workersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['production_workers'], meta: { name: 'production_workers' } }
    /**
     * Find zero or one Production_workers that matches the filter.
     * @param {production_workersFindUniqueArgs} args - Arguments to find a Production_workers
     * @example
     * // Get one Production_workers
     * const production_workers = await prisma.production_workers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends production_workersFindUniqueArgs>(args: SelectSubset<T, production_workersFindUniqueArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Production_workers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {production_workersFindUniqueOrThrowArgs} args - Arguments to find a Production_workers
     * @example
     * // Get one Production_workers
     * const production_workers = await prisma.production_workers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends production_workersFindUniqueOrThrowArgs>(args: SelectSubset<T, production_workersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Production_workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_workersFindFirstArgs} args - Arguments to find a Production_workers
     * @example
     * // Get one Production_workers
     * const production_workers = await prisma.production_workers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends production_workersFindFirstArgs>(args?: SelectSubset<T, production_workersFindFirstArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Production_workers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_workersFindFirstOrThrowArgs} args - Arguments to find a Production_workers
     * @example
     * // Get one Production_workers
     * const production_workers = await prisma.production_workers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends production_workersFindFirstOrThrowArgs>(args?: SelectSubset<T, production_workersFindFirstOrThrowArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Production_workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_workersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Production_workers
     * const production_workers = await prisma.production_workers.findMany()
     * 
     * // Get first 10 Production_workers
     * const production_workers = await prisma.production_workers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const production_workersWithIdOnly = await prisma.production_workers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends production_workersFindManyArgs>(args?: SelectSubset<T, production_workersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Production_workers.
     * @param {production_workersCreateArgs} args - Arguments to create a Production_workers.
     * @example
     * // Create one Production_workers
     * const Production_workers = await prisma.production_workers.create({
     *   data: {
     *     // ... data to create a Production_workers
     *   }
     * })
     * 
     */
    create<T extends production_workersCreateArgs>(args: SelectSubset<T, production_workersCreateArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Production_workers.
     * @param {production_workersCreateManyArgs} args - Arguments to create many Production_workers.
     * @example
     * // Create many Production_workers
     * const production_workers = await prisma.production_workers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends production_workersCreateManyArgs>(args?: SelectSubset<T, production_workersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Production_workers and returns the data saved in the database.
     * @param {production_workersCreateManyAndReturnArgs} args - Arguments to create many Production_workers.
     * @example
     * // Create many Production_workers
     * const production_workers = await prisma.production_workers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Production_workers and only return the `id`
     * const production_workersWithIdOnly = await prisma.production_workers.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends production_workersCreateManyAndReturnArgs>(args?: SelectSubset<T, production_workersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Production_workers.
     * @param {production_workersDeleteArgs} args - Arguments to delete one Production_workers.
     * @example
     * // Delete one Production_workers
     * const Production_workers = await prisma.production_workers.delete({
     *   where: {
     *     // ... filter to delete one Production_workers
     *   }
     * })
     * 
     */
    delete<T extends production_workersDeleteArgs>(args: SelectSubset<T, production_workersDeleteArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Production_workers.
     * @param {production_workersUpdateArgs} args - Arguments to update one Production_workers.
     * @example
     * // Update one Production_workers
     * const production_workers = await prisma.production_workers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends production_workersUpdateArgs>(args: SelectSubset<T, production_workersUpdateArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Production_workers.
     * @param {production_workersDeleteManyArgs} args - Arguments to filter Production_workers to delete.
     * @example
     * // Delete a few Production_workers
     * const { count } = await prisma.production_workers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends production_workersDeleteManyArgs>(args?: SelectSubset<T, production_workersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Production_workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_workersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Production_workers
     * const production_workers = await prisma.production_workers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends production_workersUpdateManyArgs>(args: SelectSubset<T, production_workersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Production_workers.
     * @param {production_workersUpsertArgs} args - Arguments to update or create a Production_workers.
     * @example
     * // Update or create a Production_workers
     * const production_workers = await prisma.production_workers.upsert({
     *   create: {
     *     // ... data to create a Production_workers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production_workers we want to update
     *   }
     * })
     */
    upsert<T extends production_workersUpsertArgs>(args: SelectSubset<T, production_workersUpsertArgs<ExtArgs>>): Prisma__production_workersClient<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Production_workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_workersCountArgs} args - Arguments to filter Production_workers to count.
     * @example
     * // Count the number of Production_workers
     * const count = await prisma.production_workers.count({
     *   where: {
     *     // ... the filter for the Production_workers we want to count
     *   }
     * })
    **/
    count<T extends production_workersCountArgs>(
      args?: Subset<T, production_workersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Production_workersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production_workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_workersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Production_workersAggregateArgs>(args: Subset<T, Production_workersAggregateArgs>): Prisma.PrismaPromise<GetProduction_workersAggregateType<T>>

    /**
     * Group by Production_workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_workersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends production_workersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: production_workersGroupByArgs['orderBy'] }
        : { orderBy?: production_workersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, production_workersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduction_workersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the production_workers model
   */
  readonly fields: production_workersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for production_workers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__production_workersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends workersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workersDefaultArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    productions<T extends productionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productionsDefaultArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the production_workers model
   */ 
  interface production_workersFieldRefs {
    readonly id: FieldRef<"production_workers", 'String'>
    readonly productionId: FieldRef<"production_workers", 'String'>
    readonly workerId: FieldRef<"production_workers", 'String'>
    readonly quantity: FieldRef<"production_workers", 'Int'>
    readonly createdAt: FieldRef<"production_workers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * production_workers findUnique
   */
  export type production_workersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * Filter, which production_workers to fetch.
     */
    where: production_workersWhereUniqueInput
  }

  /**
   * production_workers findUniqueOrThrow
   */
  export type production_workersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * Filter, which production_workers to fetch.
     */
    where: production_workersWhereUniqueInput
  }

  /**
   * production_workers findFirst
   */
  export type production_workersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * Filter, which production_workers to fetch.
     */
    where?: production_workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_workers to fetch.
     */
    orderBy?: production_workersOrderByWithRelationInput | production_workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for production_workers.
     */
    cursor?: production_workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of production_workers.
     */
    distinct?: Production_workersScalarFieldEnum | Production_workersScalarFieldEnum[]
  }

  /**
   * production_workers findFirstOrThrow
   */
  export type production_workersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * Filter, which production_workers to fetch.
     */
    where?: production_workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_workers to fetch.
     */
    orderBy?: production_workersOrderByWithRelationInput | production_workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for production_workers.
     */
    cursor?: production_workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of production_workers.
     */
    distinct?: Production_workersScalarFieldEnum | Production_workersScalarFieldEnum[]
  }

  /**
   * production_workers findMany
   */
  export type production_workersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * Filter, which production_workers to fetch.
     */
    where?: production_workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_workers to fetch.
     */
    orderBy?: production_workersOrderByWithRelationInput | production_workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing production_workers.
     */
    cursor?: production_workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_workers.
     */
    skip?: number
    distinct?: Production_workersScalarFieldEnum | Production_workersScalarFieldEnum[]
  }

  /**
   * production_workers create
   */
  export type production_workersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * The data needed to create a production_workers.
     */
    data: XOR<production_workersCreateInput, production_workersUncheckedCreateInput>
  }

  /**
   * production_workers createMany
   */
  export type production_workersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many production_workers.
     */
    data: production_workersCreateManyInput | production_workersCreateManyInput[]
  }

  /**
   * production_workers createManyAndReturn
   */
  export type production_workersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many production_workers.
     */
    data: production_workersCreateManyInput | production_workersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * production_workers update
   */
  export type production_workersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * The data needed to update a production_workers.
     */
    data: XOR<production_workersUpdateInput, production_workersUncheckedUpdateInput>
    /**
     * Choose, which production_workers to update.
     */
    where: production_workersWhereUniqueInput
  }

  /**
   * production_workers updateMany
   */
  export type production_workersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update production_workers.
     */
    data: XOR<production_workersUpdateManyMutationInput, production_workersUncheckedUpdateManyInput>
    /**
     * Filter which production_workers to update
     */
    where?: production_workersWhereInput
  }

  /**
   * production_workers upsert
   */
  export type production_workersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * The filter to search for the production_workers to update in case it exists.
     */
    where: production_workersWhereUniqueInput
    /**
     * In case the production_workers found by the `where` argument doesn't exist, create a new production_workers with this data.
     */
    create: XOR<production_workersCreateInput, production_workersUncheckedCreateInput>
    /**
     * In case the production_workers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<production_workersUpdateInput, production_workersUncheckedUpdateInput>
  }

  /**
   * production_workers delete
   */
  export type production_workersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    /**
     * Filter which production_workers to delete.
     */
    where: production_workersWhereUniqueInput
  }

  /**
   * production_workers deleteMany
   */
  export type production_workersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which production_workers to delete
     */
    where?: production_workersWhereInput
  }

  /**
   * production_workers without action
   */
  export type production_workersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
  }


  /**
   * Model productions
   */

  export type AggregateProductions = {
    _count: ProductionsCountAggregateOutputType | null
    _avg: ProductionsAvgAggregateOutputType | null
    _sum: ProductionsSumAggregateOutputType | null
    _min: ProductionsMinAggregateOutputType | null
    _max: ProductionsMaxAggregateOutputType | null
  }

  export type ProductionsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionsSumAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionsMinAggregateOutputType = {
    id: string | null
    date: Date | null
    machineId: string | null
    shift: string | null
    brickTypeId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionsMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    machineId: string | null
    shift: string | null
    brickTypeId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionsCountAggregateOutputType = {
    id: number
    date: number
    machineId: number
    shift: number
    brickTypeId: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductionsAvgAggregateInputType = {
    quantity?: true
  }

  export type ProductionsSumAggregateInputType = {
    quantity?: true
  }

  export type ProductionsMinAggregateInputType = {
    id?: true
    date?: true
    machineId?: true
    shift?: true
    brickTypeId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionsMaxAggregateInputType = {
    id?: true
    date?: true
    machineId?: true
    shift?: true
    brickTypeId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionsCountAggregateInputType = {
    id?: true
    date?: true
    machineId?: true
    shift?: true
    brickTypeId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productions to aggregate.
     */
    where?: productionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productions to fetch.
     */
    orderBy?: productionsOrderByWithRelationInput | productionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productions
    **/
    _count?: true | ProductionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionsMaxAggregateInputType
  }

  export type GetProductionsAggregateType<T extends ProductionsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductions[P]>
      : GetScalarType<T[P], AggregateProductions[P]>
  }




  export type productionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productionsWhereInput
    orderBy?: productionsOrderByWithAggregationInput | productionsOrderByWithAggregationInput[]
    by: ProductionsScalarFieldEnum[] | ProductionsScalarFieldEnum
    having?: productionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionsCountAggregateInputType | true
    _avg?: ProductionsAvgAggregateInputType
    _sum?: ProductionsSumAggregateInputType
    _min?: ProductionsMinAggregateInputType
    _max?: ProductionsMaxAggregateInputType
  }

  export type ProductionsGroupByOutputType = {
    id: string
    date: Date
    machineId: string
    shift: string
    brickTypeId: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: ProductionsCountAggregateOutputType | null
    _avg: ProductionsAvgAggregateOutputType | null
    _sum: ProductionsSumAggregateOutputType | null
    _min: ProductionsMinAggregateOutputType | null
    _max: ProductionsMaxAggregateOutputType | null
  }

  type GetProductionsGroupByPayload<T extends productionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionsGroupByOutputType[P]>
        }
      >
    >


  export type productionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    machineId?: boolean
    shift?: boolean
    brickTypeId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    production_workers?: boolean | productions$production_workersArgs<ExtArgs>
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    machines?: boolean | machinesDefaultArgs<ExtArgs>
    _count?: boolean | ProductionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productions"]>

  export type productionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    machineId?: boolean
    shift?: boolean
    brickTypeId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    machines?: boolean | machinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productions"]>

  export type productionsSelectScalar = {
    id?: boolean
    date?: boolean
    machineId?: boolean
    shift?: boolean
    brickTypeId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type productionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    production_workers?: boolean | productions$production_workersArgs<ExtArgs>
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    machines?: boolean | machinesDefaultArgs<ExtArgs>
    _count?: boolean | ProductionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brick_types?: boolean | brick_typesDefaultArgs<ExtArgs>
    machines?: boolean | machinesDefaultArgs<ExtArgs>
  }

  export type $productionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productions"
    objects: {
      production_workers: Prisma.$production_workersPayload<ExtArgs>[]
      brick_types: Prisma.$brick_typesPayload<ExtArgs>
      machines: Prisma.$machinesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      machineId: string
      shift: string
      brickTypeId: string
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productions"]>
    composites: {}
  }

  type productionsGetPayload<S extends boolean | null | undefined | productionsDefaultArgs> = $Result.GetResult<Prisma.$productionsPayload, S>

  type productionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductionsCountAggregateInputType | true
    }

  export interface productionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productions'], meta: { name: 'productions' } }
    /**
     * Find zero or one Productions that matches the filter.
     * @param {productionsFindUniqueArgs} args - Arguments to find a Productions
     * @example
     * // Get one Productions
     * const productions = await prisma.productions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productionsFindUniqueArgs>(args: SelectSubset<T, productionsFindUniqueArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Productions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productionsFindUniqueOrThrowArgs} args - Arguments to find a Productions
     * @example
     * // Get one Productions
     * const productions = await prisma.productions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productionsFindUniqueOrThrowArgs>(args: SelectSubset<T, productionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Productions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productionsFindFirstArgs} args - Arguments to find a Productions
     * @example
     * // Get one Productions
     * const productions = await prisma.productions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productionsFindFirstArgs>(args?: SelectSubset<T, productionsFindFirstArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Productions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productionsFindFirstOrThrowArgs} args - Arguments to find a Productions
     * @example
     * // Get one Productions
     * const productions = await prisma.productions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productionsFindFirstOrThrowArgs>(args?: SelectSubset<T, productionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Productions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productions
     * const productions = await prisma.productions.findMany()
     * 
     * // Get first 10 Productions
     * const productions = await prisma.productions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionsWithIdOnly = await prisma.productions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productionsFindManyArgs>(args?: SelectSubset<T, productionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Productions.
     * @param {productionsCreateArgs} args - Arguments to create a Productions.
     * @example
     * // Create one Productions
     * const Productions = await prisma.productions.create({
     *   data: {
     *     // ... data to create a Productions
     *   }
     * })
     * 
     */
    create<T extends productionsCreateArgs>(args: SelectSubset<T, productionsCreateArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Productions.
     * @param {productionsCreateManyArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const productions = await prisma.productions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productionsCreateManyArgs>(args?: SelectSubset<T, productionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productions and returns the data saved in the database.
     * @param {productionsCreateManyAndReturnArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const productions = await prisma.productions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productions and only return the `id`
     * const productionsWithIdOnly = await prisma.productions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productionsCreateManyAndReturnArgs>(args?: SelectSubset<T, productionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Productions.
     * @param {productionsDeleteArgs} args - Arguments to delete one Productions.
     * @example
     * // Delete one Productions
     * const Productions = await prisma.productions.delete({
     *   where: {
     *     // ... filter to delete one Productions
     *   }
     * })
     * 
     */
    delete<T extends productionsDeleteArgs>(args: SelectSubset<T, productionsDeleteArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Productions.
     * @param {productionsUpdateArgs} args - Arguments to update one Productions.
     * @example
     * // Update one Productions
     * const productions = await prisma.productions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productionsUpdateArgs>(args: SelectSubset<T, productionsUpdateArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Productions.
     * @param {productionsDeleteManyArgs} args - Arguments to filter Productions to delete.
     * @example
     * // Delete a few Productions
     * const { count } = await prisma.productions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productionsDeleteManyArgs>(args?: SelectSubset<T, productionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productions
     * const productions = await prisma.productions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productionsUpdateManyArgs>(args: SelectSubset<T, productionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productions.
     * @param {productionsUpsertArgs} args - Arguments to update or create a Productions.
     * @example
     * // Update or create a Productions
     * const productions = await prisma.productions.upsert({
     *   create: {
     *     // ... data to create a Productions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productions we want to update
     *   }
     * })
     */
    upsert<T extends productionsUpsertArgs>(args: SelectSubset<T, productionsUpsertArgs<ExtArgs>>): Prisma__productionsClient<$Result.GetResult<Prisma.$productionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productionsCountArgs} args - Arguments to filter Productions to count.
     * @example
     * // Count the number of Productions
     * const count = await prisma.productions.count({
     *   where: {
     *     // ... the filter for the Productions we want to count
     *   }
     * })
    **/
    count<T extends productionsCountArgs>(
      args?: Subset<T, productionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductionsAggregateArgs>(args: Subset<T, ProductionsAggregateArgs>): Prisma.PrismaPromise<GetProductionsAggregateType<T>>

    /**
     * Group by Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productionsGroupByArgs['orderBy'] }
        : { orderBy?: productionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productions model
   */
  readonly fields: productionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    production_workers<T extends productions$production_workersArgs<ExtArgs> = {}>(args?: Subset<T, productions$production_workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findMany"> | Null>
    brick_types<T extends brick_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, brick_typesDefaultArgs<ExtArgs>>): Prisma__brick_typesClient<$Result.GetResult<Prisma.$brick_typesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    machines<T extends machinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, machinesDefaultArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productions model
   */ 
  interface productionsFieldRefs {
    readonly id: FieldRef<"productions", 'String'>
    readonly date: FieldRef<"productions", 'DateTime'>
    readonly machineId: FieldRef<"productions", 'String'>
    readonly shift: FieldRef<"productions", 'String'>
    readonly brickTypeId: FieldRef<"productions", 'String'>
    readonly quantity: FieldRef<"productions", 'Int'>
    readonly createdAt: FieldRef<"productions", 'DateTime'>
    readonly updatedAt: FieldRef<"productions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productions findUnique
   */
  export type productionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * Filter, which productions to fetch.
     */
    where: productionsWhereUniqueInput
  }

  /**
   * productions findUniqueOrThrow
   */
  export type productionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * Filter, which productions to fetch.
     */
    where: productionsWhereUniqueInput
  }

  /**
   * productions findFirst
   */
  export type productionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * Filter, which productions to fetch.
     */
    where?: productionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productions to fetch.
     */
    orderBy?: productionsOrderByWithRelationInput | productionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productions.
     */
    cursor?: productionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productions.
     */
    distinct?: ProductionsScalarFieldEnum | ProductionsScalarFieldEnum[]
  }

  /**
   * productions findFirstOrThrow
   */
  export type productionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * Filter, which productions to fetch.
     */
    where?: productionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productions to fetch.
     */
    orderBy?: productionsOrderByWithRelationInput | productionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productions.
     */
    cursor?: productionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productions.
     */
    distinct?: ProductionsScalarFieldEnum | ProductionsScalarFieldEnum[]
  }

  /**
   * productions findMany
   */
  export type productionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * Filter, which productions to fetch.
     */
    where?: productionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productions to fetch.
     */
    orderBy?: productionsOrderByWithRelationInput | productionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productions.
     */
    cursor?: productionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productions.
     */
    skip?: number
    distinct?: ProductionsScalarFieldEnum | ProductionsScalarFieldEnum[]
  }

  /**
   * productions create
   */
  export type productionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * The data needed to create a productions.
     */
    data: XOR<productionsCreateInput, productionsUncheckedCreateInput>
  }

  /**
   * productions createMany
   */
  export type productionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productions.
     */
    data: productionsCreateManyInput | productionsCreateManyInput[]
  }

  /**
   * productions createManyAndReturn
   */
  export type productionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many productions.
     */
    data: productionsCreateManyInput | productionsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productions update
   */
  export type productionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * The data needed to update a productions.
     */
    data: XOR<productionsUpdateInput, productionsUncheckedUpdateInput>
    /**
     * Choose, which productions to update.
     */
    where: productionsWhereUniqueInput
  }

  /**
   * productions updateMany
   */
  export type productionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productions.
     */
    data: XOR<productionsUpdateManyMutationInput, productionsUncheckedUpdateManyInput>
    /**
     * Filter which productions to update
     */
    where?: productionsWhereInput
  }

  /**
   * productions upsert
   */
  export type productionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * The filter to search for the productions to update in case it exists.
     */
    where: productionsWhereUniqueInput
    /**
     * In case the productions found by the `where` argument doesn't exist, create a new productions with this data.
     */
    create: XOR<productionsCreateInput, productionsUncheckedCreateInput>
    /**
     * In case the productions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productionsUpdateInput, productionsUncheckedUpdateInput>
  }

  /**
   * productions delete
   */
  export type productionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
    /**
     * Filter which productions to delete.
     */
    where: productionsWhereUniqueInput
  }

  /**
   * productions deleteMany
   */
  export type productionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productions to delete
     */
    where?: productionsWhereInput
  }

  /**
   * productions.production_workers
   */
  export type productions$production_workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    where?: production_workersWhereInput
    orderBy?: production_workersOrderByWithRelationInput | production_workersOrderByWithRelationInput[]
    cursor?: production_workersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Production_workersScalarFieldEnum | Production_workersScalarFieldEnum[]
  }

  /**
   * productions without action
   */
  export type productionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productions
     */
    select?: productionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productionsInclude<ExtArgs> | null
  }


  /**
   * Model raw_materials
   */

  export type AggregateRaw_materials = {
    _count: Raw_materialsCountAggregateOutputType | null
    _avg: Raw_materialsAvgAggregateOutputType | null
    _sum: Raw_materialsSumAggregateOutputType | null
    _min: Raw_materialsMinAggregateOutputType | null
    _max: Raw_materialsMaxAggregateOutputType | null
  }

  export type Raw_materialsAvgAggregateOutputType = {
    stock: number | null
  }

  export type Raw_materialsSumAggregateOutputType = {
    stock: number | null
  }

  export type Raw_materialsMinAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    description: string | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Raw_materialsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    description: string | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Raw_materialsCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    description: number
    stock: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Raw_materialsAvgAggregateInputType = {
    stock?: true
  }

  export type Raw_materialsSumAggregateInputType = {
    stock?: true
  }

  export type Raw_materialsMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    description?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Raw_materialsMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    description?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Raw_materialsCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    description?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Raw_materialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_materials to aggregate.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_materials
    **/
    _count?: true | Raw_materialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Raw_materialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Raw_materialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_materialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_materialsMaxAggregateInputType
  }

  export type GetRaw_materialsAggregateType<T extends Raw_materialsAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_materials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_materials[P]>
      : GetScalarType<T[P], AggregateRaw_materials[P]>
  }




  export type raw_materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_materialsWhereInput
    orderBy?: raw_materialsOrderByWithAggregationInput | raw_materialsOrderByWithAggregationInput[]
    by: Raw_materialsScalarFieldEnum[] | Raw_materialsScalarFieldEnum
    having?: raw_materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_materialsCountAggregateInputType | true
    _avg?: Raw_materialsAvgAggregateInputType
    _sum?: Raw_materialsSumAggregateInputType
    _min?: Raw_materialsMinAggregateInputType
    _max?: Raw_materialsMaxAggregateInputType
  }

  export type Raw_materialsGroupByOutputType = {
    id: string
    name: string
    unit: string
    description: string | null
    stock: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: Raw_materialsCountAggregateOutputType | null
    _avg: Raw_materialsAvgAggregateOutputType | null
    _sum: Raw_materialsSumAggregateOutputType | null
    _min: Raw_materialsMinAggregateOutputType | null
    _max: Raw_materialsMaxAggregateOutputType | null
  }

  type GetRaw_materialsGroupByPayload<T extends raw_materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_materialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_materialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_materialsGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_materialsGroupByOutputType[P]>
        }
      >
    >


  export type raw_materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    description?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expenses?: boolean | raw_materials$expensesArgs<ExtArgs>
    material_usages?: boolean | raw_materials$material_usagesArgs<ExtArgs>
    _count?: boolean | Raw_materialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raw_materials"]>

  export type raw_materialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    description?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["raw_materials"]>

  export type raw_materialsSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    description?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type raw_materialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | raw_materials$expensesArgs<ExtArgs>
    material_usages?: boolean | raw_materials$material_usagesArgs<ExtArgs>
    _count?: boolean | Raw_materialsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type raw_materialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $raw_materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_materials"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      material_usages: Prisma.$material_usagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      unit: string
      description: string | null
      stock: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["raw_materials"]>
    composites: {}
  }

  type raw_materialsGetPayload<S extends boolean | null | undefined | raw_materialsDefaultArgs> = $Result.GetResult<Prisma.$raw_materialsPayload, S>

  type raw_materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<raw_materialsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Raw_materialsCountAggregateInputType | true
    }

  export interface raw_materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_materials'], meta: { name: 'raw_materials' } }
    /**
     * Find zero or one Raw_materials that matches the filter.
     * @param {raw_materialsFindUniqueArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_materialsFindUniqueArgs>(args: SelectSubset<T, raw_materialsFindUniqueArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Raw_materials that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {raw_materialsFindUniqueOrThrowArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Raw_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindFirstArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_materialsFindFirstArgs>(args?: SelectSubset<T, raw_materialsFindFirstArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Raw_materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindFirstOrThrowArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Raw_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_materials
     * const raw_materials = await prisma.raw_materials.findMany()
     * 
     * // Get first 10 Raw_materials
     * const raw_materials = await prisma.raw_materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raw_materialsWithIdOnly = await prisma.raw_materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends raw_materialsFindManyArgs>(args?: SelectSubset<T, raw_materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Raw_materials.
     * @param {raw_materialsCreateArgs} args - Arguments to create a Raw_materials.
     * @example
     * // Create one Raw_materials
     * const Raw_materials = await prisma.raw_materials.create({
     *   data: {
     *     // ... data to create a Raw_materials
     *   }
     * })
     * 
     */
    create<T extends raw_materialsCreateArgs>(args: SelectSubset<T, raw_materialsCreateArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Raw_materials.
     * @param {raw_materialsCreateManyArgs} args - Arguments to create many Raw_materials.
     * @example
     * // Create many Raw_materials
     * const raw_materials = await prisma.raw_materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_materialsCreateManyArgs>(args?: SelectSubset<T, raw_materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raw_materials and returns the data saved in the database.
     * @param {raw_materialsCreateManyAndReturnArgs} args - Arguments to create many Raw_materials.
     * @example
     * // Create many Raw_materials
     * const raw_materials = await prisma.raw_materials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raw_materials and only return the `id`
     * const raw_materialsWithIdOnly = await prisma.raw_materials.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends raw_materialsCreateManyAndReturnArgs>(args?: SelectSubset<T, raw_materialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Raw_materials.
     * @param {raw_materialsDeleteArgs} args - Arguments to delete one Raw_materials.
     * @example
     * // Delete one Raw_materials
     * const Raw_materials = await prisma.raw_materials.delete({
     *   where: {
     *     // ... filter to delete one Raw_materials
     *   }
     * })
     * 
     */
    delete<T extends raw_materialsDeleteArgs>(args: SelectSubset<T, raw_materialsDeleteArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Raw_materials.
     * @param {raw_materialsUpdateArgs} args - Arguments to update one Raw_materials.
     * @example
     * // Update one Raw_materials
     * const raw_materials = await prisma.raw_materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_materialsUpdateArgs>(args: SelectSubset<T, raw_materialsUpdateArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Raw_materials.
     * @param {raw_materialsDeleteManyArgs} args - Arguments to filter Raw_materials to delete.
     * @example
     * // Delete a few Raw_materials
     * const { count } = await prisma.raw_materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_materialsDeleteManyArgs>(args?: SelectSubset<T, raw_materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_materials
     * const raw_materials = await prisma.raw_materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_materialsUpdateManyArgs>(args: SelectSubset<T, raw_materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Raw_materials.
     * @param {raw_materialsUpsertArgs} args - Arguments to update or create a Raw_materials.
     * @example
     * // Update or create a Raw_materials
     * const raw_materials = await prisma.raw_materials.upsert({
     *   create: {
     *     // ... data to create a Raw_materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_materials we want to update
     *   }
     * })
     */
    upsert<T extends raw_materialsUpsertArgs>(args: SelectSubset<T, raw_materialsUpsertArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsCountArgs} args - Arguments to filter Raw_materials to count.
     * @example
     * // Count the number of Raw_materials
     * const count = await prisma.raw_materials.count({
     *   where: {
     *     // ... the filter for the Raw_materials we want to count
     *   }
     * })
    **/
    count<T extends raw_materialsCountArgs>(
      args?: Subset<T, raw_materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_materialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_materialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Raw_materialsAggregateArgs>(args: Subset<T, Raw_materialsAggregateArgs>): Prisma.PrismaPromise<GetRaw_materialsAggregateType<T>>

    /**
     * Group by Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends raw_materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_materialsGroupByArgs['orderBy'] }
        : { orderBy?: raw_materialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, raw_materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_materialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_materials model
   */
  readonly fields: raw_materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends raw_materials$expensesArgs<ExtArgs> = {}>(args?: Subset<T, raw_materials$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany"> | Null>
    material_usages<T extends raw_materials$material_usagesArgs<ExtArgs> = {}>(args?: Subset<T, raw_materials$material_usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_usagesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the raw_materials model
   */ 
  interface raw_materialsFieldRefs {
    readonly id: FieldRef<"raw_materials", 'String'>
    readonly name: FieldRef<"raw_materials", 'String'>
    readonly unit: FieldRef<"raw_materials", 'String'>
    readonly description: FieldRef<"raw_materials", 'String'>
    readonly stock: FieldRef<"raw_materials", 'Float'>
    readonly isActive: FieldRef<"raw_materials", 'Boolean'>
    readonly createdAt: FieldRef<"raw_materials", 'DateTime'>
    readonly updatedAt: FieldRef<"raw_materials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * raw_materials findUnique
   */
  export type raw_materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials findUniqueOrThrow
   */
  export type raw_materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials findFirst
   */
  export type raw_materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials findFirstOrThrow
   */
  export type raw_materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials findMany
   */
  export type raw_materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials create
   */
  export type raw_materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * The data needed to create a raw_materials.
     */
    data: XOR<raw_materialsCreateInput, raw_materialsUncheckedCreateInput>
  }

  /**
   * raw_materials createMany
   */
  export type raw_materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_materials.
     */
    data: raw_materialsCreateManyInput | raw_materialsCreateManyInput[]
  }

  /**
   * raw_materials createManyAndReturn
   */
  export type raw_materialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many raw_materials.
     */
    data: raw_materialsCreateManyInput | raw_materialsCreateManyInput[]
  }

  /**
   * raw_materials update
   */
  export type raw_materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * The data needed to update a raw_materials.
     */
    data: XOR<raw_materialsUpdateInput, raw_materialsUncheckedUpdateInput>
    /**
     * Choose, which raw_materials to update.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials updateMany
   */
  export type raw_materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_materials.
     */
    data: XOR<raw_materialsUpdateManyMutationInput, raw_materialsUncheckedUpdateManyInput>
    /**
     * Filter which raw_materials to update
     */
    where?: raw_materialsWhereInput
  }

  /**
   * raw_materials upsert
   */
  export type raw_materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * The filter to search for the raw_materials to update in case it exists.
     */
    where: raw_materialsWhereUniqueInput
    /**
     * In case the raw_materials found by the `where` argument doesn't exist, create a new raw_materials with this data.
     */
    create: XOR<raw_materialsCreateInput, raw_materialsUncheckedCreateInput>
    /**
     * In case the raw_materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_materialsUpdateInput, raw_materialsUncheckedUpdateInput>
  }

  /**
   * raw_materials delete
   */
  export type raw_materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter which raw_materials to delete.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials deleteMany
   */
  export type raw_materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_materials to delete
     */
    where?: raw_materialsWhereInput
  }

  /**
   * raw_materials.expenses
   */
  export type raw_materials$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * raw_materials.material_usages
   */
  export type raw_materials$material_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_usages
     */
    select?: material_usagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_usagesInclude<ExtArgs> | null
    where?: material_usagesWhereInput
    orderBy?: material_usagesOrderByWithRelationInput | material_usagesOrderByWithRelationInput[]
    cursor?: material_usagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_usagesScalarFieldEnum | Material_usagesScalarFieldEnum[]
  }

  /**
   * raw_materials without action
   */
  export type raw_materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly isActive: FieldRef<"users", 'Boolean'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }


  /**
   * Model weekly_settlements
   */

  export type AggregateWeekly_settlements = {
    _count: Weekly_settlementsCountAggregateOutputType | null
    _avg: Weekly_settlementsAvgAggregateOutputType | null
    _sum: Weekly_settlementsSumAggregateOutputType | null
    _min: Weekly_settlementsMinAggregateOutputType | null
    _max: Weekly_settlementsMaxAggregateOutputType | null
  }

  export type Weekly_settlementsAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type Weekly_settlementsSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type Weekly_settlementsMinAggregateOutputType = {
    id: string | null
    workerId: string | null
    startDate: Date | null
    endDate: Date | null
    totalAmount: number | null
    paymentStatus: string | null
    generatedAt: Date | null
    notes: string | null
  }

  export type Weekly_settlementsMaxAggregateOutputType = {
    id: string | null
    workerId: string | null
    startDate: Date | null
    endDate: Date | null
    totalAmount: number | null
    paymentStatus: string | null
    generatedAt: Date | null
    notes: string | null
  }

  export type Weekly_settlementsCountAggregateOutputType = {
    id: number
    workerId: number
    startDate: number
    endDate: number
    totalAmount: number
    paymentStatus: number
    generatedAt: number
    notes: number
    _all: number
  }


  export type Weekly_settlementsAvgAggregateInputType = {
    totalAmount?: true
  }

  export type Weekly_settlementsSumAggregateInputType = {
    totalAmount?: true
  }

  export type Weekly_settlementsMinAggregateInputType = {
    id?: true
    workerId?: true
    startDate?: true
    endDate?: true
    totalAmount?: true
    paymentStatus?: true
    generatedAt?: true
    notes?: true
  }

  export type Weekly_settlementsMaxAggregateInputType = {
    id?: true
    workerId?: true
    startDate?: true
    endDate?: true
    totalAmount?: true
    paymentStatus?: true
    generatedAt?: true
    notes?: true
  }

  export type Weekly_settlementsCountAggregateInputType = {
    id?: true
    workerId?: true
    startDate?: true
    endDate?: true
    totalAmount?: true
    paymentStatus?: true
    generatedAt?: true
    notes?: true
    _all?: true
  }

  export type Weekly_settlementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weekly_settlements to aggregate.
     */
    where?: weekly_settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weekly_settlements to fetch.
     */
    orderBy?: weekly_settlementsOrderByWithRelationInput | weekly_settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: weekly_settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weekly_settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weekly_settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned weekly_settlements
    **/
    _count?: true | Weekly_settlementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Weekly_settlementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Weekly_settlementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Weekly_settlementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Weekly_settlementsMaxAggregateInputType
  }

  export type GetWeekly_settlementsAggregateType<T extends Weekly_settlementsAggregateArgs> = {
        [P in keyof T & keyof AggregateWeekly_settlements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeekly_settlements[P]>
      : GetScalarType<T[P], AggregateWeekly_settlements[P]>
  }




  export type weekly_settlementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weekly_settlementsWhereInput
    orderBy?: weekly_settlementsOrderByWithAggregationInput | weekly_settlementsOrderByWithAggregationInput[]
    by: Weekly_settlementsScalarFieldEnum[] | Weekly_settlementsScalarFieldEnum
    having?: weekly_settlementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Weekly_settlementsCountAggregateInputType | true
    _avg?: Weekly_settlementsAvgAggregateInputType
    _sum?: Weekly_settlementsSumAggregateInputType
    _min?: Weekly_settlementsMinAggregateInputType
    _max?: Weekly_settlementsMaxAggregateInputType
  }

  export type Weekly_settlementsGroupByOutputType = {
    id: string
    workerId: string
    startDate: Date
    endDate: Date
    totalAmount: number
    paymentStatus: string
    generatedAt: Date
    notes: string | null
    _count: Weekly_settlementsCountAggregateOutputType | null
    _avg: Weekly_settlementsAvgAggregateOutputType | null
    _sum: Weekly_settlementsSumAggregateOutputType | null
    _min: Weekly_settlementsMinAggregateOutputType | null
    _max: Weekly_settlementsMaxAggregateOutputType | null
  }

  type GetWeekly_settlementsGroupByPayload<T extends weekly_settlementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Weekly_settlementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Weekly_settlementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Weekly_settlementsGroupByOutputType[P]>
            : GetScalarType<T[P], Weekly_settlementsGroupByOutputType[P]>
        }
      >
    >


  export type weekly_settlementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    generatedAt?: boolean
    notes?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekly_settlements"]>

  export type weekly_settlementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    generatedAt?: boolean
    notes?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekly_settlements"]>

  export type weekly_settlementsSelectScalar = {
    id?: boolean
    workerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    generatedAt?: boolean
    notes?: boolean
  }

  export type weekly_settlementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }
  export type weekly_settlementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }

  export type $weekly_settlementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "weekly_settlements"
    objects: {
      workers: Prisma.$workersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workerId: string
      startDate: Date
      endDate: Date
      totalAmount: number
      paymentStatus: string
      generatedAt: Date
      notes: string | null
    }, ExtArgs["result"]["weekly_settlements"]>
    composites: {}
  }

  type weekly_settlementsGetPayload<S extends boolean | null | undefined | weekly_settlementsDefaultArgs> = $Result.GetResult<Prisma.$weekly_settlementsPayload, S>

  type weekly_settlementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<weekly_settlementsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Weekly_settlementsCountAggregateInputType | true
    }

  export interface weekly_settlementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['weekly_settlements'], meta: { name: 'weekly_settlements' } }
    /**
     * Find zero or one Weekly_settlements that matches the filter.
     * @param {weekly_settlementsFindUniqueArgs} args - Arguments to find a Weekly_settlements
     * @example
     * // Get one Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends weekly_settlementsFindUniqueArgs>(args: SelectSubset<T, weekly_settlementsFindUniqueArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Weekly_settlements that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {weekly_settlementsFindUniqueOrThrowArgs} args - Arguments to find a Weekly_settlements
     * @example
     * // Get one Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends weekly_settlementsFindUniqueOrThrowArgs>(args: SelectSubset<T, weekly_settlementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Weekly_settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekly_settlementsFindFirstArgs} args - Arguments to find a Weekly_settlements
     * @example
     * // Get one Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends weekly_settlementsFindFirstArgs>(args?: SelectSubset<T, weekly_settlementsFindFirstArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Weekly_settlements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekly_settlementsFindFirstOrThrowArgs} args - Arguments to find a Weekly_settlements
     * @example
     * // Get one Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends weekly_settlementsFindFirstOrThrowArgs>(args?: SelectSubset<T, weekly_settlementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Weekly_settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekly_settlementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.findMany()
     * 
     * // Get first 10 Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekly_settlementsWithIdOnly = await prisma.weekly_settlements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends weekly_settlementsFindManyArgs>(args?: SelectSubset<T, weekly_settlementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Weekly_settlements.
     * @param {weekly_settlementsCreateArgs} args - Arguments to create a Weekly_settlements.
     * @example
     * // Create one Weekly_settlements
     * const Weekly_settlements = await prisma.weekly_settlements.create({
     *   data: {
     *     // ... data to create a Weekly_settlements
     *   }
     * })
     * 
     */
    create<T extends weekly_settlementsCreateArgs>(args: SelectSubset<T, weekly_settlementsCreateArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Weekly_settlements.
     * @param {weekly_settlementsCreateManyArgs} args - Arguments to create many Weekly_settlements.
     * @example
     * // Create many Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends weekly_settlementsCreateManyArgs>(args?: SelectSubset<T, weekly_settlementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weekly_settlements and returns the data saved in the database.
     * @param {weekly_settlementsCreateManyAndReturnArgs} args - Arguments to create many Weekly_settlements.
     * @example
     * // Create many Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weekly_settlements and only return the `id`
     * const weekly_settlementsWithIdOnly = await prisma.weekly_settlements.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends weekly_settlementsCreateManyAndReturnArgs>(args?: SelectSubset<T, weekly_settlementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Weekly_settlements.
     * @param {weekly_settlementsDeleteArgs} args - Arguments to delete one Weekly_settlements.
     * @example
     * // Delete one Weekly_settlements
     * const Weekly_settlements = await prisma.weekly_settlements.delete({
     *   where: {
     *     // ... filter to delete one Weekly_settlements
     *   }
     * })
     * 
     */
    delete<T extends weekly_settlementsDeleteArgs>(args: SelectSubset<T, weekly_settlementsDeleteArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Weekly_settlements.
     * @param {weekly_settlementsUpdateArgs} args - Arguments to update one Weekly_settlements.
     * @example
     * // Update one Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends weekly_settlementsUpdateArgs>(args: SelectSubset<T, weekly_settlementsUpdateArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Weekly_settlements.
     * @param {weekly_settlementsDeleteManyArgs} args - Arguments to filter Weekly_settlements to delete.
     * @example
     * // Delete a few Weekly_settlements
     * const { count } = await prisma.weekly_settlements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends weekly_settlementsDeleteManyArgs>(args?: SelectSubset<T, weekly_settlementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weekly_settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekly_settlementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends weekly_settlementsUpdateManyArgs>(args: SelectSubset<T, weekly_settlementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Weekly_settlements.
     * @param {weekly_settlementsUpsertArgs} args - Arguments to update or create a Weekly_settlements.
     * @example
     * // Update or create a Weekly_settlements
     * const weekly_settlements = await prisma.weekly_settlements.upsert({
     *   create: {
     *     // ... data to create a Weekly_settlements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weekly_settlements we want to update
     *   }
     * })
     */
    upsert<T extends weekly_settlementsUpsertArgs>(args: SelectSubset<T, weekly_settlementsUpsertArgs<ExtArgs>>): Prisma__weekly_settlementsClient<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Weekly_settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekly_settlementsCountArgs} args - Arguments to filter Weekly_settlements to count.
     * @example
     * // Count the number of Weekly_settlements
     * const count = await prisma.weekly_settlements.count({
     *   where: {
     *     // ... the filter for the Weekly_settlements we want to count
     *   }
     * })
    **/
    count<T extends weekly_settlementsCountArgs>(
      args?: Subset<T, weekly_settlementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Weekly_settlementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weekly_settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Weekly_settlementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Weekly_settlementsAggregateArgs>(args: Subset<T, Weekly_settlementsAggregateArgs>): Prisma.PrismaPromise<GetWeekly_settlementsAggregateType<T>>

    /**
     * Group by Weekly_settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weekly_settlementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends weekly_settlementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: weekly_settlementsGroupByArgs['orderBy'] }
        : { orderBy?: weekly_settlementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, weekly_settlementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekly_settlementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the weekly_settlements model
   */
  readonly fields: weekly_settlementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for weekly_settlements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__weekly_settlementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends workersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workersDefaultArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the weekly_settlements model
   */ 
  interface weekly_settlementsFieldRefs {
    readonly id: FieldRef<"weekly_settlements", 'String'>
    readonly workerId: FieldRef<"weekly_settlements", 'String'>
    readonly startDate: FieldRef<"weekly_settlements", 'DateTime'>
    readonly endDate: FieldRef<"weekly_settlements", 'DateTime'>
    readonly totalAmount: FieldRef<"weekly_settlements", 'Float'>
    readonly paymentStatus: FieldRef<"weekly_settlements", 'String'>
    readonly generatedAt: FieldRef<"weekly_settlements", 'DateTime'>
    readonly notes: FieldRef<"weekly_settlements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * weekly_settlements findUnique
   */
  export type weekly_settlementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * Filter, which weekly_settlements to fetch.
     */
    where: weekly_settlementsWhereUniqueInput
  }

  /**
   * weekly_settlements findUniqueOrThrow
   */
  export type weekly_settlementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * Filter, which weekly_settlements to fetch.
     */
    where: weekly_settlementsWhereUniqueInput
  }

  /**
   * weekly_settlements findFirst
   */
  export type weekly_settlementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * Filter, which weekly_settlements to fetch.
     */
    where?: weekly_settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weekly_settlements to fetch.
     */
    orderBy?: weekly_settlementsOrderByWithRelationInput | weekly_settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weekly_settlements.
     */
    cursor?: weekly_settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weekly_settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weekly_settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weekly_settlements.
     */
    distinct?: Weekly_settlementsScalarFieldEnum | Weekly_settlementsScalarFieldEnum[]
  }

  /**
   * weekly_settlements findFirstOrThrow
   */
  export type weekly_settlementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * Filter, which weekly_settlements to fetch.
     */
    where?: weekly_settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weekly_settlements to fetch.
     */
    orderBy?: weekly_settlementsOrderByWithRelationInput | weekly_settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weekly_settlements.
     */
    cursor?: weekly_settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weekly_settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weekly_settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weekly_settlements.
     */
    distinct?: Weekly_settlementsScalarFieldEnum | Weekly_settlementsScalarFieldEnum[]
  }

  /**
   * weekly_settlements findMany
   */
  export type weekly_settlementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * Filter, which weekly_settlements to fetch.
     */
    where?: weekly_settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weekly_settlements to fetch.
     */
    orderBy?: weekly_settlementsOrderByWithRelationInput | weekly_settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing weekly_settlements.
     */
    cursor?: weekly_settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weekly_settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weekly_settlements.
     */
    skip?: number
    distinct?: Weekly_settlementsScalarFieldEnum | Weekly_settlementsScalarFieldEnum[]
  }

  /**
   * weekly_settlements create
   */
  export type weekly_settlementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * The data needed to create a weekly_settlements.
     */
    data: XOR<weekly_settlementsCreateInput, weekly_settlementsUncheckedCreateInput>
  }

  /**
   * weekly_settlements createMany
   */
  export type weekly_settlementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many weekly_settlements.
     */
    data: weekly_settlementsCreateManyInput | weekly_settlementsCreateManyInput[]
  }

  /**
   * weekly_settlements createManyAndReturn
   */
  export type weekly_settlementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many weekly_settlements.
     */
    data: weekly_settlementsCreateManyInput | weekly_settlementsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * weekly_settlements update
   */
  export type weekly_settlementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * The data needed to update a weekly_settlements.
     */
    data: XOR<weekly_settlementsUpdateInput, weekly_settlementsUncheckedUpdateInput>
    /**
     * Choose, which weekly_settlements to update.
     */
    where: weekly_settlementsWhereUniqueInput
  }

  /**
   * weekly_settlements updateMany
   */
  export type weekly_settlementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update weekly_settlements.
     */
    data: XOR<weekly_settlementsUpdateManyMutationInput, weekly_settlementsUncheckedUpdateManyInput>
    /**
     * Filter which weekly_settlements to update
     */
    where?: weekly_settlementsWhereInput
  }

  /**
   * weekly_settlements upsert
   */
  export type weekly_settlementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * The filter to search for the weekly_settlements to update in case it exists.
     */
    where: weekly_settlementsWhereUniqueInput
    /**
     * In case the weekly_settlements found by the `where` argument doesn't exist, create a new weekly_settlements with this data.
     */
    create: XOR<weekly_settlementsCreateInput, weekly_settlementsUncheckedCreateInput>
    /**
     * In case the weekly_settlements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<weekly_settlementsUpdateInput, weekly_settlementsUncheckedUpdateInput>
  }

  /**
   * weekly_settlements delete
   */
  export type weekly_settlementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    /**
     * Filter which weekly_settlements to delete.
     */
    where: weekly_settlementsWhereUniqueInput
  }

  /**
   * weekly_settlements deleteMany
   */
  export type weekly_settlementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weekly_settlements to delete
     */
    where?: weekly_settlementsWhereInput
  }

  /**
   * weekly_settlements without action
   */
  export type weekly_settlementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
  }


  /**
   * Model worker_advances
   */

  export type AggregateWorker_advances = {
    _count: Worker_advancesCountAggregateOutputType | null
    _avg: Worker_advancesAvgAggregateOutputType | null
    _sum: Worker_advancesSumAggregateOutputType | null
    _min: Worker_advancesMinAggregateOutputType | null
    _max: Worker_advancesMaxAggregateOutputType | null
  }

  export type Worker_advancesAvgAggregateOutputType = {
    amount: number | null
  }

  export type Worker_advancesSumAggregateOutputType = {
    amount: number | null
  }

  export type Worker_advancesMinAggregateOutputType = {
    id: string | null
    workerId: string | null
    amount: number | null
    type: string | null
    date: Date | null
    note: string | null
  }

  export type Worker_advancesMaxAggregateOutputType = {
    id: string | null
    workerId: string | null
    amount: number | null
    type: string | null
    date: Date | null
    note: string | null
  }

  export type Worker_advancesCountAggregateOutputType = {
    id: number
    workerId: number
    amount: number
    type: number
    date: number
    note: number
    _all: number
  }


  export type Worker_advancesAvgAggregateInputType = {
    amount?: true
  }

  export type Worker_advancesSumAggregateInputType = {
    amount?: true
  }

  export type Worker_advancesMinAggregateInputType = {
    id?: true
    workerId?: true
    amount?: true
    type?: true
    date?: true
    note?: true
  }

  export type Worker_advancesMaxAggregateInputType = {
    id?: true
    workerId?: true
    amount?: true
    type?: true
    date?: true
    note?: true
  }

  export type Worker_advancesCountAggregateInputType = {
    id?: true
    workerId?: true
    amount?: true
    type?: true
    date?: true
    note?: true
    _all?: true
  }

  export type Worker_advancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which worker_advances to aggregate.
     */
    where?: worker_advancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worker_advances to fetch.
     */
    orderBy?: worker_advancesOrderByWithRelationInput | worker_advancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: worker_advancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worker_advances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worker_advances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned worker_advances
    **/
    _count?: true | Worker_advancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Worker_advancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Worker_advancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Worker_advancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Worker_advancesMaxAggregateInputType
  }

  export type GetWorker_advancesAggregateType<T extends Worker_advancesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker_advances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker_advances[P]>
      : GetScalarType<T[P], AggregateWorker_advances[P]>
  }




  export type worker_advancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: worker_advancesWhereInput
    orderBy?: worker_advancesOrderByWithAggregationInput | worker_advancesOrderByWithAggregationInput[]
    by: Worker_advancesScalarFieldEnum[] | Worker_advancesScalarFieldEnum
    having?: worker_advancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Worker_advancesCountAggregateInputType | true
    _avg?: Worker_advancesAvgAggregateInputType
    _sum?: Worker_advancesSumAggregateInputType
    _min?: Worker_advancesMinAggregateInputType
    _max?: Worker_advancesMaxAggregateInputType
  }

  export type Worker_advancesGroupByOutputType = {
    id: string
    workerId: string
    amount: number
    type: string
    date: Date
    note: string | null
    _count: Worker_advancesCountAggregateOutputType | null
    _avg: Worker_advancesAvgAggregateOutputType | null
    _sum: Worker_advancesSumAggregateOutputType | null
    _min: Worker_advancesMinAggregateOutputType | null
    _max: Worker_advancesMaxAggregateOutputType | null
  }

  type GetWorker_advancesGroupByPayload<T extends worker_advancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Worker_advancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Worker_advancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Worker_advancesGroupByOutputType[P]>
            : GetScalarType<T[P], Worker_advancesGroupByOutputType[P]>
        }
      >
    >


  export type worker_advancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker_advances"]>

  export type worker_advancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerId?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker_advances"]>

  export type worker_advancesSelectScalar = {
    id?: boolean
    workerId?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
  }

  export type worker_advancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }
  export type worker_advancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workers?: boolean | workersDefaultArgs<ExtArgs>
  }

  export type $worker_advancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "worker_advances"
    objects: {
      workers: Prisma.$workersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workerId: string
      amount: number
      type: string
      date: Date
      note: string | null
    }, ExtArgs["result"]["worker_advances"]>
    composites: {}
  }

  type worker_advancesGetPayload<S extends boolean | null | undefined | worker_advancesDefaultArgs> = $Result.GetResult<Prisma.$worker_advancesPayload, S>

  type worker_advancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<worker_advancesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Worker_advancesCountAggregateInputType | true
    }

  export interface worker_advancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['worker_advances'], meta: { name: 'worker_advances' } }
    /**
     * Find zero or one Worker_advances that matches the filter.
     * @param {worker_advancesFindUniqueArgs} args - Arguments to find a Worker_advances
     * @example
     * // Get one Worker_advances
     * const worker_advances = await prisma.worker_advances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends worker_advancesFindUniqueArgs>(args: SelectSubset<T, worker_advancesFindUniqueArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Worker_advances that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {worker_advancesFindUniqueOrThrowArgs} args - Arguments to find a Worker_advances
     * @example
     * // Get one Worker_advances
     * const worker_advances = await prisma.worker_advances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends worker_advancesFindUniqueOrThrowArgs>(args: SelectSubset<T, worker_advancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Worker_advances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worker_advancesFindFirstArgs} args - Arguments to find a Worker_advances
     * @example
     * // Get one Worker_advances
     * const worker_advances = await prisma.worker_advances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends worker_advancesFindFirstArgs>(args?: SelectSubset<T, worker_advancesFindFirstArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Worker_advances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worker_advancesFindFirstOrThrowArgs} args - Arguments to find a Worker_advances
     * @example
     * // Get one Worker_advances
     * const worker_advances = await prisma.worker_advances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends worker_advancesFindFirstOrThrowArgs>(args?: SelectSubset<T, worker_advancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Worker_advances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worker_advancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worker_advances
     * const worker_advances = await prisma.worker_advances.findMany()
     * 
     * // Get first 10 Worker_advances
     * const worker_advances = await prisma.worker_advances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worker_advancesWithIdOnly = await prisma.worker_advances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends worker_advancesFindManyArgs>(args?: SelectSubset<T, worker_advancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Worker_advances.
     * @param {worker_advancesCreateArgs} args - Arguments to create a Worker_advances.
     * @example
     * // Create one Worker_advances
     * const Worker_advances = await prisma.worker_advances.create({
     *   data: {
     *     // ... data to create a Worker_advances
     *   }
     * })
     * 
     */
    create<T extends worker_advancesCreateArgs>(args: SelectSubset<T, worker_advancesCreateArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Worker_advances.
     * @param {worker_advancesCreateManyArgs} args - Arguments to create many Worker_advances.
     * @example
     * // Create many Worker_advances
     * const worker_advances = await prisma.worker_advances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends worker_advancesCreateManyArgs>(args?: SelectSubset<T, worker_advancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worker_advances and returns the data saved in the database.
     * @param {worker_advancesCreateManyAndReturnArgs} args - Arguments to create many Worker_advances.
     * @example
     * // Create many Worker_advances
     * const worker_advances = await prisma.worker_advances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worker_advances and only return the `id`
     * const worker_advancesWithIdOnly = await prisma.worker_advances.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends worker_advancesCreateManyAndReturnArgs>(args?: SelectSubset<T, worker_advancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Worker_advances.
     * @param {worker_advancesDeleteArgs} args - Arguments to delete one Worker_advances.
     * @example
     * // Delete one Worker_advances
     * const Worker_advances = await prisma.worker_advances.delete({
     *   where: {
     *     // ... filter to delete one Worker_advances
     *   }
     * })
     * 
     */
    delete<T extends worker_advancesDeleteArgs>(args: SelectSubset<T, worker_advancesDeleteArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Worker_advances.
     * @param {worker_advancesUpdateArgs} args - Arguments to update one Worker_advances.
     * @example
     * // Update one Worker_advances
     * const worker_advances = await prisma.worker_advances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends worker_advancesUpdateArgs>(args: SelectSubset<T, worker_advancesUpdateArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Worker_advances.
     * @param {worker_advancesDeleteManyArgs} args - Arguments to filter Worker_advances to delete.
     * @example
     * // Delete a few Worker_advances
     * const { count } = await prisma.worker_advances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends worker_advancesDeleteManyArgs>(args?: SelectSubset<T, worker_advancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worker_advances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worker_advancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worker_advances
     * const worker_advances = await prisma.worker_advances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends worker_advancesUpdateManyArgs>(args: SelectSubset<T, worker_advancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Worker_advances.
     * @param {worker_advancesUpsertArgs} args - Arguments to update or create a Worker_advances.
     * @example
     * // Update or create a Worker_advances
     * const worker_advances = await prisma.worker_advances.upsert({
     *   create: {
     *     // ... data to create a Worker_advances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker_advances we want to update
     *   }
     * })
     */
    upsert<T extends worker_advancesUpsertArgs>(args: SelectSubset<T, worker_advancesUpsertArgs<ExtArgs>>): Prisma__worker_advancesClient<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Worker_advances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worker_advancesCountArgs} args - Arguments to filter Worker_advances to count.
     * @example
     * // Count the number of Worker_advances
     * const count = await prisma.worker_advances.count({
     *   where: {
     *     // ... the filter for the Worker_advances we want to count
     *   }
     * })
    **/
    count<T extends worker_advancesCountArgs>(
      args?: Subset<T, worker_advancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Worker_advancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker_advances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Worker_advancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Worker_advancesAggregateArgs>(args: Subset<T, Worker_advancesAggregateArgs>): Prisma.PrismaPromise<GetWorker_advancesAggregateType<T>>

    /**
     * Group by Worker_advances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worker_advancesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends worker_advancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: worker_advancesGroupByArgs['orderBy'] }
        : { orderBy?: worker_advancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, worker_advancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorker_advancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the worker_advances model
   */
  readonly fields: worker_advancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for worker_advances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__worker_advancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workers<T extends workersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workersDefaultArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the worker_advances model
   */ 
  interface worker_advancesFieldRefs {
    readonly id: FieldRef<"worker_advances", 'String'>
    readonly workerId: FieldRef<"worker_advances", 'String'>
    readonly amount: FieldRef<"worker_advances", 'Float'>
    readonly type: FieldRef<"worker_advances", 'String'>
    readonly date: FieldRef<"worker_advances", 'DateTime'>
    readonly note: FieldRef<"worker_advances", 'String'>
  }
    

  // Custom InputTypes
  /**
   * worker_advances findUnique
   */
  export type worker_advancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * Filter, which worker_advances to fetch.
     */
    where: worker_advancesWhereUniqueInput
  }

  /**
   * worker_advances findUniqueOrThrow
   */
  export type worker_advancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * Filter, which worker_advances to fetch.
     */
    where: worker_advancesWhereUniqueInput
  }

  /**
   * worker_advances findFirst
   */
  export type worker_advancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * Filter, which worker_advances to fetch.
     */
    where?: worker_advancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worker_advances to fetch.
     */
    orderBy?: worker_advancesOrderByWithRelationInput | worker_advancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for worker_advances.
     */
    cursor?: worker_advancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worker_advances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worker_advances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of worker_advances.
     */
    distinct?: Worker_advancesScalarFieldEnum | Worker_advancesScalarFieldEnum[]
  }

  /**
   * worker_advances findFirstOrThrow
   */
  export type worker_advancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * Filter, which worker_advances to fetch.
     */
    where?: worker_advancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worker_advances to fetch.
     */
    orderBy?: worker_advancesOrderByWithRelationInput | worker_advancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for worker_advances.
     */
    cursor?: worker_advancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worker_advances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worker_advances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of worker_advances.
     */
    distinct?: Worker_advancesScalarFieldEnum | Worker_advancesScalarFieldEnum[]
  }

  /**
   * worker_advances findMany
   */
  export type worker_advancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * Filter, which worker_advances to fetch.
     */
    where?: worker_advancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worker_advances to fetch.
     */
    orderBy?: worker_advancesOrderByWithRelationInput | worker_advancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing worker_advances.
     */
    cursor?: worker_advancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worker_advances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worker_advances.
     */
    skip?: number
    distinct?: Worker_advancesScalarFieldEnum | Worker_advancesScalarFieldEnum[]
  }

  /**
   * worker_advances create
   */
  export type worker_advancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * The data needed to create a worker_advances.
     */
    data: XOR<worker_advancesCreateInput, worker_advancesUncheckedCreateInput>
  }

  /**
   * worker_advances createMany
   */
  export type worker_advancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many worker_advances.
     */
    data: worker_advancesCreateManyInput | worker_advancesCreateManyInput[]
  }

  /**
   * worker_advances createManyAndReturn
   */
  export type worker_advancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many worker_advances.
     */
    data: worker_advancesCreateManyInput | worker_advancesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * worker_advances update
   */
  export type worker_advancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * The data needed to update a worker_advances.
     */
    data: XOR<worker_advancesUpdateInput, worker_advancesUncheckedUpdateInput>
    /**
     * Choose, which worker_advances to update.
     */
    where: worker_advancesWhereUniqueInput
  }

  /**
   * worker_advances updateMany
   */
  export type worker_advancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update worker_advances.
     */
    data: XOR<worker_advancesUpdateManyMutationInput, worker_advancesUncheckedUpdateManyInput>
    /**
     * Filter which worker_advances to update
     */
    where?: worker_advancesWhereInput
  }

  /**
   * worker_advances upsert
   */
  export type worker_advancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * The filter to search for the worker_advances to update in case it exists.
     */
    where: worker_advancesWhereUniqueInput
    /**
     * In case the worker_advances found by the `where` argument doesn't exist, create a new worker_advances with this data.
     */
    create: XOR<worker_advancesCreateInput, worker_advancesUncheckedCreateInput>
    /**
     * In case the worker_advances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<worker_advancesUpdateInput, worker_advancesUncheckedUpdateInput>
  }

  /**
   * worker_advances delete
   */
  export type worker_advancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    /**
     * Filter which worker_advances to delete.
     */
    where: worker_advancesWhereUniqueInput
  }

  /**
   * worker_advances deleteMany
   */
  export type worker_advancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which worker_advances to delete
     */
    where?: worker_advancesWhereInput
  }

  /**
   * worker_advances without action
   */
  export type worker_advancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
  }


  /**
   * Model workers
   */

  export type AggregateWorkers = {
    _count: WorkersCountAggregateOutputType | null
    _avg: WorkersAvgAggregateOutputType | null
    _sum: WorkersSumAggregateOutputType | null
    _min: WorkersMinAggregateOutputType | null
    _max: WorkersMaxAggregateOutputType | null
  }

  export type WorkersAvgAggregateOutputType = {
    rate: number | null
    advanceBalance: number | null
  }

  export type WorkersSumAggregateOutputType = {
    rate: number | null
    advanceBalance: number | null
  }

  export type WorkersMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    paymentType: string | null
    rate: number | null
    isActive: boolean | null
    advanceBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    paymentType: string | null
    rate: number | null
    isActive: boolean | null
    advanceBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkersCountAggregateOutputType = {
    id: number
    name: number
    role: number
    paymentType: number
    rate: number
    isActive: number
    advanceBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkersAvgAggregateInputType = {
    rate?: true
    advanceBalance?: true
  }

  export type WorkersSumAggregateInputType = {
    rate?: true
    advanceBalance?: true
  }

  export type WorkersMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    paymentType?: true
    rate?: true
    isActive?: true
    advanceBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkersMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    paymentType?: true
    rate?: true
    isActive?: true
    advanceBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkersCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    paymentType?: true
    rate?: true
    isActive?: true
    advanceBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workers to aggregate.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workers
    **/
    _count?: true | WorkersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkersMaxAggregateInputType
  }

  export type GetWorkersAggregateType<T extends WorkersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkers[P]>
      : GetScalarType<T[P], AggregateWorkers[P]>
  }




  export type workersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workersWhereInput
    orderBy?: workersOrderByWithAggregationInput | workersOrderByWithAggregationInput[]
    by: WorkersScalarFieldEnum[] | WorkersScalarFieldEnum
    having?: workersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkersCountAggregateInputType | true
    _avg?: WorkersAvgAggregateInputType
    _sum?: WorkersSumAggregateInputType
    _min?: WorkersMinAggregateInputType
    _max?: WorkersMaxAggregateInputType
  }

  export type WorkersGroupByOutputType = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive: boolean
    advanceBalance: number
    createdAt: Date
    updatedAt: Date
    _count: WorkersCountAggregateOutputType | null
    _avg: WorkersAvgAggregateOutputType | null
    _sum: WorkersSumAggregateOutputType | null
    _min: WorkersMinAggregateOutputType | null
    _max: WorkersMaxAggregateOutputType | null
  }

  type GetWorkersGroupByPayload<T extends workersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkersGroupByOutputType[P]>
            : GetScalarType<T[P], WorkersGroupByOutputType[P]>
        }
      >
    >


  export type workersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    paymentType?: boolean
    rate?: boolean
    isActive?: boolean
    advanceBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendance?: boolean | workers$attendanceArgs<ExtArgs>
    daily_wages?: boolean | workers$daily_wagesArgs<ExtArgs>
    expenses?: boolean | workers$expensesArgs<ExtArgs>
    production_workers?: boolean | workers$production_workersArgs<ExtArgs>
    weekly_settlements?: boolean | workers$weekly_settlementsArgs<ExtArgs>
    worker_advances?: boolean | workers$worker_advancesArgs<ExtArgs>
    _count?: boolean | WorkersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workers"]>

  export type workersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    paymentType?: boolean
    rate?: boolean
    isActive?: boolean
    advanceBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workers"]>

  export type workersSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    paymentType?: boolean
    rate?: boolean
    isActive?: boolean
    advanceBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type workersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | workers$attendanceArgs<ExtArgs>
    daily_wages?: boolean | workers$daily_wagesArgs<ExtArgs>
    expenses?: boolean | workers$expensesArgs<ExtArgs>
    production_workers?: boolean | workers$production_workersArgs<ExtArgs>
    weekly_settlements?: boolean | workers$weekly_settlementsArgs<ExtArgs>
    worker_advances?: boolean | workers$worker_advancesArgs<ExtArgs>
    _count?: boolean | WorkersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workers"
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      daily_wages: Prisma.$daily_wagesPayload<ExtArgs>[]
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      production_workers: Prisma.$production_workersPayload<ExtArgs>[]
      weekly_settlements: Prisma.$weekly_settlementsPayload<ExtArgs>[]
      worker_advances: Prisma.$worker_advancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string
      paymentType: string
      rate: number
      isActive: boolean
      advanceBalance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workers"]>
    composites: {}
  }

  type workersGetPayload<S extends boolean | null | undefined | workersDefaultArgs> = $Result.GetResult<Prisma.$workersPayload, S>

  type workersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkersCountAggregateInputType | true
    }

  export interface workersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workers'], meta: { name: 'workers' } }
    /**
     * Find zero or one Workers that matches the filter.
     * @param {workersFindUniqueArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workersFindUniqueArgs>(args: SelectSubset<T, workersFindUniqueArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {workersFindUniqueOrThrowArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workersFindUniqueOrThrowArgs>(args: SelectSubset<T, workersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersFindFirstArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workersFindFirstArgs>(args?: SelectSubset<T, workersFindFirstArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersFindFirstOrThrowArgs} args - Arguments to find a Workers
     * @example
     * // Get one Workers
     * const workers = await prisma.workers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workersFindFirstOrThrowArgs>(args?: SelectSubset<T, workersFindFirstOrThrowArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.workers.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.workers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workersWithIdOnly = await prisma.workers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workersFindManyArgs>(args?: SelectSubset<T, workersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workers.
     * @param {workersCreateArgs} args - Arguments to create a Workers.
     * @example
     * // Create one Workers
     * const Workers = await prisma.workers.create({
     *   data: {
     *     // ... data to create a Workers
     *   }
     * })
     * 
     */
    create<T extends workersCreateArgs>(args: SelectSubset<T, workersCreateArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workers.
     * @param {workersCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const workers = await prisma.workers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workersCreateManyArgs>(args?: SelectSubset<T, workersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {workersCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const workers = await prisma.workers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `id`
     * const workersWithIdOnly = await prisma.workers.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workersCreateManyAndReturnArgs>(args?: SelectSubset<T, workersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workers.
     * @param {workersDeleteArgs} args - Arguments to delete one Workers.
     * @example
     * // Delete one Workers
     * const Workers = await prisma.workers.delete({
     *   where: {
     *     // ... filter to delete one Workers
     *   }
     * })
     * 
     */
    delete<T extends workersDeleteArgs>(args: SelectSubset<T, workersDeleteArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workers.
     * @param {workersUpdateArgs} args - Arguments to update one Workers.
     * @example
     * // Update one Workers
     * const workers = await prisma.workers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workersUpdateArgs>(args: SelectSubset<T, workersUpdateArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workers.
     * @param {workersDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.workers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workersDeleteManyArgs>(args?: SelectSubset<T, workersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const workers = await prisma.workers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workersUpdateManyArgs>(args: SelectSubset<T, workersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workers.
     * @param {workersUpsertArgs} args - Arguments to update or create a Workers.
     * @example
     * // Update or create a Workers
     * const workers = await prisma.workers.upsert({
     *   create: {
     *     // ... data to create a Workers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workers we want to update
     *   }
     * })
     */
    upsert<T extends workersUpsertArgs>(args: SelectSubset<T, workersUpsertArgs<ExtArgs>>): Prisma__workersClient<$Result.GetResult<Prisma.$workersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.workers.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends workersCountArgs>(
      args?: Subset<T, workersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkersAggregateArgs>(args: Subset<T, WorkersAggregateArgs>): Prisma.PrismaPromise<GetWorkersAggregateType<T>>

    /**
     * Group by Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workersGroupByArgs['orderBy'] }
        : { orderBy?: workersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workers model
   */
  readonly fields: workersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends workers$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, workers$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany"> | Null>
    daily_wages<T extends workers$daily_wagesArgs<ExtArgs> = {}>(args?: Subset<T, workers$daily_wagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_wagesPayload<ExtArgs>, T, "findMany"> | Null>
    expenses<T extends workers$expensesArgs<ExtArgs> = {}>(args?: Subset<T, workers$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany"> | Null>
    production_workers<T extends workers$production_workersArgs<ExtArgs> = {}>(args?: Subset<T, workers$production_workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$production_workersPayload<ExtArgs>, T, "findMany"> | Null>
    weekly_settlements<T extends workers$weekly_settlementsArgs<ExtArgs> = {}>(args?: Subset<T, workers$weekly_settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weekly_settlementsPayload<ExtArgs>, T, "findMany"> | Null>
    worker_advances<T extends workers$worker_advancesArgs<ExtArgs> = {}>(args?: Subset<T, workers$worker_advancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worker_advancesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workers model
   */ 
  interface workersFieldRefs {
    readonly id: FieldRef<"workers", 'String'>
    readonly name: FieldRef<"workers", 'String'>
    readonly role: FieldRef<"workers", 'String'>
    readonly paymentType: FieldRef<"workers", 'String'>
    readonly rate: FieldRef<"workers", 'Float'>
    readonly isActive: FieldRef<"workers", 'Boolean'>
    readonly advanceBalance: FieldRef<"workers", 'Float'>
    readonly createdAt: FieldRef<"workers", 'DateTime'>
    readonly updatedAt: FieldRef<"workers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workers findUnique
   */
  export type workersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers findUniqueOrThrow
   */
  export type workersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers findFirst
   */
  export type workersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workers.
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workers.
     */
    distinct?: WorkersScalarFieldEnum | WorkersScalarFieldEnum[]
  }

  /**
   * workers findFirstOrThrow
   */
  export type workersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workers.
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workers.
     */
    distinct?: WorkersScalarFieldEnum | WorkersScalarFieldEnum[]
  }

  /**
   * workers findMany
   */
  export type workersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workersOrderByWithRelationInput | workersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workers.
     */
    cursor?: workersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    distinct?: WorkersScalarFieldEnum | WorkersScalarFieldEnum[]
  }

  /**
   * workers create
   */
  export type workersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * The data needed to create a workers.
     */
    data: XOR<workersCreateInput, workersUncheckedCreateInput>
  }

  /**
   * workers createMany
   */
  export type workersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workers.
     */
    data: workersCreateManyInput | workersCreateManyInput[]
  }

  /**
   * workers createManyAndReturn
   */
  export type workersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many workers.
     */
    data: workersCreateManyInput | workersCreateManyInput[]
  }

  /**
   * workers update
   */
  export type workersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * The data needed to update a workers.
     */
    data: XOR<workersUpdateInput, workersUncheckedUpdateInput>
    /**
     * Choose, which workers to update.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers updateMany
   */
  export type workersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workers.
     */
    data: XOR<workersUpdateManyMutationInput, workersUncheckedUpdateManyInput>
    /**
     * Filter which workers to update
     */
    where?: workersWhereInput
  }

  /**
   * workers upsert
   */
  export type workersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * The filter to search for the workers to update in case it exists.
     */
    where: workersWhereUniqueInput
    /**
     * In case the workers found by the `where` argument doesn't exist, create a new workers with this data.
     */
    create: XOR<workersCreateInput, workersUncheckedCreateInput>
    /**
     * In case the workers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workersUpdateInput, workersUncheckedUpdateInput>
  }

  /**
   * workers delete
   */
  export type workersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
    /**
     * Filter which workers to delete.
     */
    where: workersWhereUniqueInput
  }

  /**
   * workers deleteMany
   */
  export type workersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workers to delete
     */
    where?: workersWhereInput
  }

  /**
   * workers.attendance
   */
  export type workers$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * workers.daily_wages
   */
  export type workers$daily_wagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_wages
     */
    select?: daily_wagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_wagesInclude<ExtArgs> | null
    where?: daily_wagesWhereInput
    orderBy?: daily_wagesOrderByWithRelationInput | daily_wagesOrderByWithRelationInput[]
    cursor?: daily_wagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Daily_wagesScalarFieldEnum | Daily_wagesScalarFieldEnum[]
  }

  /**
   * workers.expenses
   */
  export type workers$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * workers.production_workers
   */
  export type workers$production_workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_workers
     */
    select?: production_workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: production_workersInclude<ExtArgs> | null
    where?: production_workersWhereInput
    orderBy?: production_workersOrderByWithRelationInput | production_workersOrderByWithRelationInput[]
    cursor?: production_workersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Production_workersScalarFieldEnum | Production_workersScalarFieldEnum[]
  }

  /**
   * workers.weekly_settlements
   */
  export type workers$weekly_settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weekly_settlements
     */
    select?: weekly_settlementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weekly_settlementsInclude<ExtArgs> | null
    where?: weekly_settlementsWhereInput
    orderBy?: weekly_settlementsOrderByWithRelationInput | weekly_settlementsOrderByWithRelationInput[]
    cursor?: weekly_settlementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Weekly_settlementsScalarFieldEnum | Weekly_settlementsScalarFieldEnum[]
  }

  /**
   * workers.worker_advances
   */
  export type workers$worker_advancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker_advances
     */
    select?: worker_advancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worker_advancesInclude<ExtArgs> | null
    where?: worker_advancesWhereInput
    orderBy?: worker_advancesOrderByWithRelationInput | worker_advancesOrderByWithRelationInput[]
    cursor?: worker_advancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Worker_advancesScalarFieldEnum | Worker_advancesScalarFieldEnum[]
  }

  /**
   * workers without action
   */
  export type workersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workers
     */
    select?: workersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    workerId: 'workerId',
    date: 'date',
    present: 'present'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const Brick_typesScalarFieldEnum: {
    id: 'id',
    size: 'size',
    stock: 'stock',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Brick_typesScalarFieldEnum = (typeof Brick_typesScalarFieldEnum)[keyof typeof Brick_typesScalarFieldEnum]


  export const Cash_entriesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    amount: 'amount',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cash_entriesScalarFieldEnum = (typeof Cash_entriesScalarFieldEnum)[keyof typeof Cash_entriesScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Daily_wagesScalarFieldEnum: {
    id: 'id',
    workerId: 'workerId',
    date: 'date',
    bricksMade: 'bricksMade',
    wageAmount: 'wageAmount',
    advanceUsed: 'advanceUsed',
    netPayable: 'netPayable',
    isPaid: 'isPaid',
    createdAt: 'createdAt'
  };

  export type Daily_wagesScalarFieldEnum = (typeof Daily_wagesScalarFieldEnum)[keyof typeof Daily_wagesScalarFieldEnum]


  export const DispatchesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    customerId: 'customerId',
    brickTypeId: 'brickTypeId',
    quantity: 'quantity',
    distanceKm: 'distanceKm',
    vehicleType: 'vehicleType',
    transportCost: 'transportCost',
    loadingCost: 'loadingCost',
    paymentStatus: 'paymentStatus',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DispatchesScalarFieldEnum = (typeof DispatchesScalarFieldEnum)[keyof typeof DispatchesScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    category: 'category',
    amount: 'amount',
    notes: 'notes',
    paymentMode: 'paymentMode',
    workerId: 'workerId',
    materialId: 'materialId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const MachinesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MachinesScalarFieldEnum = (typeof MachinesScalarFieldEnum)[keyof typeof MachinesScalarFieldEnum]


  export const Material_usagesScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    quantity: 'quantity',
    pricePerUnit: 'pricePerUnit',
    totalCost: 'totalCost',
    date: 'date',
    expenseId: 'expenseId',
    createdAt: 'createdAt'
  };

  export type Material_usagesScalarFieldEnum = (typeof Material_usagesScalarFieldEnum)[keyof typeof Material_usagesScalarFieldEnum]


  export const Production_workersScalarFieldEnum: {
    id: 'id',
    productionId: 'productionId',
    workerId: 'workerId',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type Production_workersScalarFieldEnum = (typeof Production_workersScalarFieldEnum)[keyof typeof Production_workersScalarFieldEnum]


  export const ProductionsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    machineId: 'machineId',
    shift: 'shift',
    brickTypeId: 'brickTypeId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductionsScalarFieldEnum = (typeof ProductionsScalarFieldEnum)[keyof typeof ProductionsScalarFieldEnum]


  export const Raw_materialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    description: 'description',
    stock: 'stock',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Raw_materialsScalarFieldEnum = (typeof Raw_materialsScalarFieldEnum)[keyof typeof Raw_materialsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Weekly_settlementsScalarFieldEnum: {
    id: 'id',
    workerId: 'workerId',
    startDate: 'startDate',
    endDate: 'endDate',
    totalAmount: 'totalAmount',
    paymentStatus: 'paymentStatus',
    generatedAt: 'generatedAt',
    notes: 'notes'
  };

  export type Weekly_settlementsScalarFieldEnum = (typeof Weekly_settlementsScalarFieldEnum)[keyof typeof Weekly_settlementsScalarFieldEnum]


  export const Worker_advancesScalarFieldEnum: {
    id: 'id',
    workerId: 'workerId',
    amount: 'amount',
    type: 'type',
    date: 'date',
    note: 'note'
  };

  export type Worker_advancesScalarFieldEnum = (typeof Worker_advancesScalarFieldEnum)[keyof typeof Worker_advancesScalarFieldEnum]


  export const WorkersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    paymentType: 'paymentType',
    rate: 'rate',
    isActive: 'isActive',
    advanceBalance: 'advanceBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkersScalarFieldEnum = (typeof WorkersScalarFieldEnum)[keyof typeof WorkersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    id?: StringFilter<"attendance"> | string
    workerId?: StringFilter<"attendance"> | string
    date?: DateTimeFilter<"attendance"> | Date | string
    present?: BoolFilter<"attendance"> | boolean
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    present?: SortOrder
    workers?: workersOrderByWithRelationInput
  }

  export type attendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workerId_date?: attendanceWorkerIdDateCompoundUniqueInput
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    workerId?: StringFilter<"attendance"> | string
    date?: DateTimeFilter<"attendance"> | Date | string
    present?: BoolFilter<"attendance"> | boolean
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }, "id" | "workerId_date">

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    present?: SortOrder
    _count?: attendanceCountOrderByAggregateInput
    _max?: attendanceMaxOrderByAggregateInput
    _min?: attendanceMinOrderByAggregateInput
  }

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    OR?: attendanceScalarWhereWithAggregatesInput[]
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"attendance"> | string
    workerId?: StringWithAggregatesFilter<"attendance"> | string
    date?: DateTimeWithAggregatesFilter<"attendance"> | Date | string
    present?: BoolWithAggregatesFilter<"attendance"> | boolean
  }

  export type brick_typesWhereInput = {
    AND?: brick_typesWhereInput | brick_typesWhereInput[]
    OR?: brick_typesWhereInput[]
    NOT?: brick_typesWhereInput | brick_typesWhereInput[]
    id?: StringFilter<"brick_types"> | string
    size?: StringFilter<"brick_types"> | string
    stock?: IntFilter<"brick_types"> | number
    isActive?: BoolFilter<"brick_types"> | boolean
    createdAt?: DateTimeFilter<"brick_types"> | Date | string
    updatedAt?: DateTimeFilter<"brick_types"> | Date | string
    dispatches?: DispatchesListRelationFilter
    productions?: ProductionsListRelationFilter
  }

  export type brick_typesOrderByWithRelationInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatches?: dispatchesOrderByRelationAggregateInput
    productions?: productionsOrderByRelationAggregateInput
  }

  export type brick_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    size?: string
    AND?: brick_typesWhereInput | brick_typesWhereInput[]
    OR?: brick_typesWhereInput[]
    NOT?: brick_typesWhereInput | brick_typesWhereInput[]
    stock?: IntFilter<"brick_types"> | number
    isActive?: BoolFilter<"brick_types"> | boolean
    createdAt?: DateTimeFilter<"brick_types"> | Date | string
    updatedAt?: DateTimeFilter<"brick_types"> | Date | string
    dispatches?: DispatchesListRelationFilter
    productions?: ProductionsListRelationFilter
  }, "id" | "size">

  export type brick_typesOrderByWithAggregationInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: brick_typesCountOrderByAggregateInput
    _avg?: brick_typesAvgOrderByAggregateInput
    _max?: brick_typesMaxOrderByAggregateInput
    _min?: brick_typesMinOrderByAggregateInput
    _sum?: brick_typesSumOrderByAggregateInput
  }

  export type brick_typesScalarWhereWithAggregatesInput = {
    AND?: brick_typesScalarWhereWithAggregatesInput | brick_typesScalarWhereWithAggregatesInput[]
    OR?: brick_typesScalarWhereWithAggregatesInput[]
    NOT?: brick_typesScalarWhereWithAggregatesInput | brick_typesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"brick_types"> | string
    size?: StringWithAggregatesFilter<"brick_types"> | string
    stock?: IntWithAggregatesFilter<"brick_types"> | number
    isActive?: BoolWithAggregatesFilter<"brick_types"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"brick_types"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"brick_types"> | Date | string
  }

  export type cash_entriesWhereInput = {
    AND?: cash_entriesWhereInput | cash_entriesWhereInput[]
    OR?: cash_entriesWhereInput[]
    NOT?: cash_entriesWhereInput | cash_entriesWhereInput[]
    id?: StringFilter<"cash_entries"> | string
    date?: DateTimeFilter<"cash_entries"> | Date | string
    type?: StringFilter<"cash_entries"> | string
    amount?: FloatFilter<"cash_entries"> | number
    description?: StringFilter<"cash_entries"> | string
    category?: StringFilter<"cash_entries"> | string
    createdAt?: DateTimeFilter<"cash_entries"> | Date | string
    updatedAt?: DateTimeFilter<"cash_entries"> | Date | string
  }

  export type cash_entriesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cash_entriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cash_entriesWhereInput | cash_entriesWhereInput[]
    OR?: cash_entriesWhereInput[]
    NOT?: cash_entriesWhereInput | cash_entriesWhereInput[]
    date?: DateTimeFilter<"cash_entries"> | Date | string
    type?: StringFilter<"cash_entries"> | string
    amount?: FloatFilter<"cash_entries"> | number
    description?: StringFilter<"cash_entries"> | string
    category?: StringFilter<"cash_entries"> | string
    createdAt?: DateTimeFilter<"cash_entries"> | Date | string
    updatedAt?: DateTimeFilter<"cash_entries"> | Date | string
  }, "id">

  export type cash_entriesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: cash_entriesCountOrderByAggregateInput
    _avg?: cash_entriesAvgOrderByAggregateInput
    _max?: cash_entriesMaxOrderByAggregateInput
    _min?: cash_entriesMinOrderByAggregateInput
    _sum?: cash_entriesSumOrderByAggregateInput
  }

  export type cash_entriesScalarWhereWithAggregatesInput = {
    AND?: cash_entriesScalarWhereWithAggregatesInput | cash_entriesScalarWhereWithAggregatesInput[]
    OR?: cash_entriesScalarWhereWithAggregatesInput[]
    NOT?: cash_entriesScalarWhereWithAggregatesInput | cash_entriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cash_entries"> | string
    date?: DateTimeWithAggregatesFilter<"cash_entries"> | Date | string
    type?: StringWithAggregatesFilter<"cash_entries"> | string
    amount?: FloatWithAggregatesFilter<"cash_entries"> | number
    description?: StringWithAggregatesFilter<"cash_entries"> | string
    category?: StringWithAggregatesFilter<"cash_entries"> | string
    createdAt?: DateTimeWithAggregatesFilter<"cash_entries"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cash_entries"> | Date | string
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    createdAt?: DateTimeFilter<"customers"> | Date | string
    updatedAt?: DateTimeFilter<"customers"> | Date | string
    dispatches?: DispatchesListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dispatches?: dispatchesOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    createdAt?: DateTimeFilter<"customers"> | Date | string
    updatedAt?: DateTimeFilter<"customers"> | Date | string
    dispatches?: DispatchesListRelationFilter
  }, "id">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customers"> | string
    name?: StringWithAggregatesFilter<"customers"> | string
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    address?: StringNullableWithAggregatesFilter<"customers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"customers"> | Date | string
  }

  export type daily_wagesWhereInput = {
    AND?: daily_wagesWhereInput | daily_wagesWhereInput[]
    OR?: daily_wagesWhereInput[]
    NOT?: daily_wagesWhereInput | daily_wagesWhereInput[]
    id?: StringFilter<"daily_wages"> | string
    workerId?: StringFilter<"daily_wages"> | string
    date?: DateTimeFilter<"daily_wages"> | Date | string
    bricksMade?: IntNullableFilter<"daily_wages"> | number | null
    wageAmount?: FloatFilter<"daily_wages"> | number
    advanceUsed?: FloatFilter<"daily_wages"> | number
    netPayable?: FloatFilter<"daily_wages"> | number
    isPaid?: BoolFilter<"daily_wages"> | boolean
    createdAt?: DateTimeFilter<"daily_wages"> | Date | string
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }

  export type daily_wagesOrderByWithRelationInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    bricksMade?: SortOrderInput | SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    workers?: workersOrderByWithRelationInput
  }

  export type daily_wagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: daily_wagesWhereInput | daily_wagesWhereInput[]
    OR?: daily_wagesWhereInput[]
    NOT?: daily_wagesWhereInput | daily_wagesWhereInput[]
    workerId?: StringFilter<"daily_wages"> | string
    date?: DateTimeFilter<"daily_wages"> | Date | string
    bricksMade?: IntNullableFilter<"daily_wages"> | number | null
    wageAmount?: FloatFilter<"daily_wages"> | number
    advanceUsed?: FloatFilter<"daily_wages"> | number
    netPayable?: FloatFilter<"daily_wages"> | number
    isPaid?: BoolFilter<"daily_wages"> | boolean
    createdAt?: DateTimeFilter<"daily_wages"> | Date | string
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }, "id">

  export type daily_wagesOrderByWithAggregationInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    bricksMade?: SortOrderInput | SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    _count?: daily_wagesCountOrderByAggregateInput
    _avg?: daily_wagesAvgOrderByAggregateInput
    _max?: daily_wagesMaxOrderByAggregateInput
    _min?: daily_wagesMinOrderByAggregateInput
    _sum?: daily_wagesSumOrderByAggregateInput
  }

  export type daily_wagesScalarWhereWithAggregatesInput = {
    AND?: daily_wagesScalarWhereWithAggregatesInput | daily_wagesScalarWhereWithAggregatesInput[]
    OR?: daily_wagesScalarWhereWithAggregatesInput[]
    NOT?: daily_wagesScalarWhereWithAggregatesInput | daily_wagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"daily_wages"> | string
    workerId?: StringWithAggregatesFilter<"daily_wages"> | string
    date?: DateTimeWithAggregatesFilter<"daily_wages"> | Date | string
    bricksMade?: IntNullableWithAggregatesFilter<"daily_wages"> | number | null
    wageAmount?: FloatWithAggregatesFilter<"daily_wages"> | number
    advanceUsed?: FloatWithAggregatesFilter<"daily_wages"> | number
    netPayable?: FloatWithAggregatesFilter<"daily_wages"> | number
    isPaid?: BoolWithAggregatesFilter<"daily_wages"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"daily_wages"> | Date | string
  }

  export type dispatchesWhereInput = {
    AND?: dispatchesWhereInput | dispatchesWhereInput[]
    OR?: dispatchesWhereInput[]
    NOT?: dispatchesWhereInput | dispatchesWhereInput[]
    id?: StringFilter<"dispatches"> | string
    date?: DateTimeFilter<"dispatches"> | Date | string
    customerId?: StringFilter<"dispatches"> | string
    brickTypeId?: StringFilter<"dispatches"> | string
    quantity?: IntFilter<"dispatches"> | number
    distanceKm?: FloatNullableFilter<"dispatches"> | number | null
    vehicleType?: StringFilter<"dispatches"> | string
    transportCost?: FloatFilter<"dispatches"> | number
    loadingCost?: FloatFilter<"dispatches"> | number
    paymentStatus?: StringFilter<"dispatches"> | string
    totalAmount?: FloatFilter<"dispatches"> | number
    paidAmount?: FloatFilter<"dispatches"> | number
    createdAt?: DateTimeFilter<"dispatches"> | Date | string
    updatedAt?: DateTimeFilter<"dispatches"> | Date | string
    brick_types?: XOR<Brick_typesRelationFilter, brick_typesWhereInput>
    customers?: XOR<CustomersRelationFilter, customersWhereInput>
  }

  export type dispatchesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    distanceKm?: SortOrderInput | SortOrder
    vehicleType?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brick_types?: brick_typesOrderByWithRelationInput
    customers?: customersOrderByWithRelationInput
  }

  export type dispatchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: dispatchesWhereInput | dispatchesWhereInput[]
    OR?: dispatchesWhereInput[]
    NOT?: dispatchesWhereInput | dispatchesWhereInput[]
    date?: DateTimeFilter<"dispatches"> | Date | string
    customerId?: StringFilter<"dispatches"> | string
    brickTypeId?: StringFilter<"dispatches"> | string
    quantity?: IntFilter<"dispatches"> | number
    distanceKm?: FloatNullableFilter<"dispatches"> | number | null
    vehicleType?: StringFilter<"dispatches"> | string
    transportCost?: FloatFilter<"dispatches"> | number
    loadingCost?: FloatFilter<"dispatches"> | number
    paymentStatus?: StringFilter<"dispatches"> | string
    totalAmount?: FloatFilter<"dispatches"> | number
    paidAmount?: FloatFilter<"dispatches"> | number
    createdAt?: DateTimeFilter<"dispatches"> | Date | string
    updatedAt?: DateTimeFilter<"dispatches"> | Date | string
    brick_types?: XOR<Brick_typesRelationFilter, brick_typesWhereInput>
    customers?: XOR<CustomersRelationFilter, customersWhereInput>
  }, "id">

  export type dispatchesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    distanceKm?: SortOrderInput | SortOrder
    vehicleType?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: dispatchesCountOrderByAggregateInput
    _avg?: dispatchesAvgOrderByAggregateInput
    _max?: dispatchesMaxOrderByAggregateInput
    _min?: dispatchesMinOrderByAggregateInput
    _sum?: dispatchesSumOrderByAggregateInput
  }

  export type dispatchesScalarWhereWithAggregatesInput = {
    AND?: dispatchesScalarWhereWithAggregatesInput | dispatchesScalarWhereWithAggregatesInput[]
    OR?: dispatchesScalarWhereWithAggregatesInput[]
    NOT?: dispatchesScalarWhereWithAggregatesInput | dispatchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"dispatches"> | string
    date?: DateTimeWithAggregatesFilter<"dispatches"> | Date | string
    customerId?: StringWithAggregatesFilter<"dispatches"> | string
    brickTypeId?: StringWithAggregatesFilter<"dispatches"> | string
    quantity?: IntWithAggregatesFilter<"dispatches"> | number
    distanceKm?: FloatNullableWithAggregatesFilter<"dispatches"> | number | null
    vehicleType?: StringWithAggregatesFilter<"dispatches"> | string
    transportCost?: FloatWithAggregatesFilter<"dispatches"> | number
    loadingCost?: FloatWithAggregatesFilter<"dispatches"> | number
    paymentStatus?: StringWithAggregatesFilter<"dispatches"> | string
    totalAmount?: FloatWithAggregatesFilter<"dispatches"> | number
    paidAmount?: FloatWithAggregatesFilter<"dispatches"> | number
    createdAt?: DateTimeWithAggregatesFilter<"dispatches"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"dispatches"> | Date | string
  }

  export type expensesWhereInput = {
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    id?: StringFilter<"expenses"> | string
    date?: DateTimeFilter<"expenses"> | Date | string
    category?: StringFilter<"expenses"> | string
    amount?: FloatFilter<"expenses"> | number
    notes?: StringNullableFilter<"expenses"> | string | null
    paymentMode?: StringFilter<"expenses"> | string
    workerId?: StringNullableFilter<"expenses"> | string | null
    materialId?: StringNullableFilter<"expenses"> | string | null
    createdAt?: DateTimeFilter<"expenses"> | Date | string
    updatedAt?: DateTimeFilter<"expenses"> | Date | string
    raw_materials?: XOR<Raw_materialsNullableRelationFilter, raw_materialsWhereInput> | null
    workers?: XOR<WorkersNullableRelationFilter, workersWhereInput> | null
    material_usages?: Material_usagesListRelationFilter
  }

  export type expensesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    paymentMode?: SortOrder
    workerId?: SortOrderInput | SortOrder
    materialId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    raw_materials?: raw_materialsOrderByWithRelationInput
    workers?: workersOrderByWithRelationInput
    material_usages?: material_usagesOrderByRelationAggregateInput
  }

  export type expensesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    date?: DateTimeFilter<"expenses"> | Date | string
    category?: StringFilter<"expenses"> | string
    amount?: FloatFilter<"expenses"> | number
    notes?: StringNullableFilter<"expenses"> | string | null
    paymentMode?: StringFilter<"expenses"> | string
    workerId?: StringNullableFilter<"expenses"> | string | null
    materialId?: StringNullableFilter<"expenses"> | string | null
    createdAt?: DateTimeFilter<"expenses"> | Date | string
    updatedAt?: DateTimeFilter<"expenses"> | Date | string
    raw_materials?: XOR<Raw_materialsNullableRelationFilter, raw_materialsWhereInput> | null
    workers?: XOR<WorkersNullableRelationFilter, workersWhereInput> | null
    material_usages?: Material_usagesListRelationFilter
  }, "id">

  export type expensesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    paymentMode?: SortOrder
    workerId?: SortOrderInput | SortOrder
    materialId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: expensesCountOrderByAggregateInput
    _avg?: expensesAvgOrderByAggregateInput
    _max?: expensesMaxOrderByAggregateInput
    _min?: expensesMinOrderByAggregateInput
    _sum?: expensesSumOrderByAggregateInput
  }

  export type expensesScalarWhereWithAggregatesInput = {
    AND?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    OR?: expensesScalarWhereWithAggregatesInput[]
    NOT?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expenses"> | string
    date?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
    category?: StringWithAggregatesFilter<"expenses"> | string
    amount?: FloatWithAggregatesFilter<"expenses"> | number
    notes?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    paymentMode?: StringWithAggregatesFilter<"expenses"> | string
    workerId?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    materialId?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
  }

  export type machinesWhereInput = {
    AND?: machinesWhereInput | machinesWhereInput[]
    OR?: machinesWhereInput[]
    NOT?: machinesWhereInput | machinesWhereInput[]
    id?: StringFilter<"machines"> | string
    name?: StringFilter<"machines"> | string
    isActive?: BoolFilter<"machines"> | boolean
    createdAt?: DateTimeFilter<"machines"> | Date | string
    updatedAt?: DateTimeFilter<"machines"> | Date | string
    productions?: ProductionsListRelationFilter
  }

  export type machinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productions?: productionsOrderByRelationAggregateInput
  }

  export type machinesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: machinesWhereInput | machinesWhereInput[]
    OR?: machinesWhereInput[]
    NOT?: machinesWhereInput | machinesWhereInput[]
    isActive?: BoolFilter<"machines"> | boolean
    createdAt?: DateTimeFilter<"machines"> | Date | string
    updatedAt?: DateTimeFilter<"machines"> | Date | string
    productions?: ProductionsListRelationFilter
  }, "id" | "name">

  export type machinesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: machinesCountOrderByAggregateInput
    _max?: machinesMaxOrderByAggregateInput
    _min?: machinesMinOrderByAggregateInput
  }

  export type machinesScalarWhereWithAggregatesInput = {
    AND?: machinesScalarWhereWithAggregatesInput | machinesScalarWhereWithAggregatesInput[]
    OR?: machinesScalarWhereWithAggregatesInput[]
    NOT?: machinesScalarWhereWithAggregatesInput | machinesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"machines"> | string
    name?: StringWithAggregatesFilter<"machines"> | string
    isActive?: BoolWithAggregatesFilter<"machines"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"machines"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"machines"> | Date | string
  }

  export type material_usagesWhereInput = {
    AND?: material_usagesWhereInput | material_usagesWhereInput[]
    OR?: material_usagesWhereInput[]
    NOT?: material_usagesWhereInput | material_usagesWhereInput[]
    id?: StringFilter<"material_usages"> | string
    materialId?: StringFilter<"material_usages"> | string
    quantity?: FloatFilter<"material_usages"> | number
    pricePerUnit?: FloatFilter<"material_usages"> | number
    totalCost?: FloatFilter<"material_usages"> | number
    date?: DateTimeFilter<"material_usages"> | Date | string
    expenseId?: StringNullableFilter<"material_usages"> | string | null
    createdAt?: DateTimeFilter<"material_usages"> | Date | string
    expenses?: XOR<ExpensesNullableRelationFilter, expensesWhereInput> | null
    raw_materials?: XOR<Raw_materialsRelationFilter, raw_materialsWhereInput>
  }

  export type material_usagesOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    date?: SortOrder
    expenseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expenses?: expensesOrderByWithRelationInput
    raw_materials?: raw_materialsOrderByWithRelationInput
  }

  export type material_usagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: material_usagesWhereInput | material_usagesWhereInput[]
    OR?: material_usagesWhereInput[]
    NOT?: material_usagesWhereInput | material_usagesWhereInput[]
    materialId?: StringFilter<"material_usages"> | string
    quantity?: FloatFilter<"material_usages"> | number
    pricePerUnit?: FloatFilter<"material_usages"> | number
    totalCost?: FloatFilter<"material_usages"> | number
    date?: DateTimeFilter<"material_usages"> | Date | string
    expenseId?: StringNullableFilter<"material_usages"> | string | null
    createdAt?: DateTimeFilter<"material_usages"> | Date | string
    expenses?: XOR<ExpensesNullableRelationFilter, expensesWhereInput> | null
    raw_materials?: XOR<Raw_materialsRelationFilter, raw_materialsWhereInput>
  }, "id">

  export type material_usagesOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    date?: SortOrder
    expenseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: material_usagesCountOrderByAggregateInput
    _avg?: material_usagesAvgOrderByAggregateInput
    _max?: material_usagesMaxOrderByAggregateInput
    _min?: material_usagesMinOrderByAggregateInput
    _sum?: material_usagesSumOrderByAggregateInput
  }

  export type material_usagesScalarWhereWithAggregatesInput = {
    AND?: material_usagesScalarWhereWithAggregatesInput | material_usagesScalarWhereWithAggregatesInput[]
    OR?: material_usagesScalarWhereWithAggregatesInput[]
    NOT?: material_usagesScalarWhereWithAggregatesInput | material_usagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"material_usages"> | string
    materialId?: StringWithAggregatesFilter<"material_usages"> | string
    quantity?: FloatWithAggregatesFilter<"material_usages"> | number
    pricePerUnit?: FloatWithAggregatesFilter<"material_usages"> | number
    totalCost?: FloatWithAggregatesFilter<"material_usages"> | number
    date?: DateTimeWithAggregatesFilter<"material_usages"> | Date | string
    expenseId?: StringNullableWithAggregatesFilter<"material_usages"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"material_usages"> | Date | string
  }

  export type production_workersWhereInput = {
    AND?: production_workersWhereInput | production_workersWhereInput[]
    OR?: production_workersWhereInput[]
    NOT?: production_workersWhereInput | production_workersWhereInput[]
    id?: StringFilter<"production_workers"> | string
    productionId?: StringFilter<"production_workers"> | string
    workerId?: StringFilter<"production_workers"> | string
    quantity?: IntFilter<"production_workers"> | number
    createdAt?: DateTimeFilter<"production_workers"> | Date | string
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
    productions?: XOR<ProductionsRelationFilter, productionsWhereInput>
  }

  export type production_workersOrderByWithRelationInput = {
    id?: SortOrder
    productionId?: SortOrder
    workerId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    workers?: workersOrderByWithRelationInput
    productions?: productionsOrderByWithRelationInput
  }

  export type production_workersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: production_workersWhereInput | production_workersWhereInput[]
    OR?: production_workersWhereInput[]
    NOT?: production_workersWhereInput | production_workersWhereInput[]
    productionId?: StringFilter<"production_workers"> | string
    workerId?: StringFilter<"production_workers"> | string
    quantity?: IntFilter<"production_workers"> | number
    createdAt?: DateTimeFilter<"production_workers"> | Date | string
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
    productions?: XOR<ProductionsRelationFilter, productionsWhereInput>
  }, "id">

  export type production_workersOrderByWithAggregationInput = {
    id?: SortOrder
    productionId?: SortOrder
    workerId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: production_workersCountOrderByAggregateInput
    _avg?: production_workersAvgOrderByAggregateInput
    _max?: production_workersMaxOrderByAggregateInput
    _min?: production_workersMinOrderByAggregateInput
    _sum?: production_workersSumOrderByAggregateInput
  }

  export type production_workersScalarWhereWithAggregatesInput = {
    AND?: production_workersScalarWhereWithAggregatesInput | production_workersScalarWhereWithAggregatesInput[]
    OR?: production_workersScalarWhereWithAggregatesInput[]
    NOT?: production_workersScalarWhereWithAggregatesInput | production_workersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"production_workers"> | string
    productionId?: StringWithAggregatesFilter<"production_workers"> | string
    workerId?: StringWithAggregatesFilter<"production_workers"> | string
    quantity?: IntWithAggregatesFilter<"production_workers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"production_workers"> | Date | string
  }

  export type productionsWhereInput = {
    AND?: productionsWhereInput | productionsWhereInput[]
    OR?: productionsWhereInput[]
    NOT?: productionsWhereInput | productionsWhereInput[]
    id?: StringFilter<"productions"> | string
    date?: DateTimeFilter<"productions"> | Date | string
    machineId?: StringFilter<"productions"> | string
    shift?: StringFilter<"productions"> | string
    brickTypeId?: StringFilter<"productions"> | string
    quantity?: IntFilter<"productions"> | number
    createdAt?: DateTimeFilter<"productions"> | Date | string
    updatedAt?: DateTimeFilter<"productions"> | Date | string
    production_workers?: Production_workersListRelationFilter
    brick_types?: XOR<Brick_typesRelationFilter, brick_typesWhereInput>
    machines?: XOR<MachinesRelationFilter, machinesWhereInput>
  }

  export type productionsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    machineId?: SortOrder
    shift?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    production_workers?: production_workersOrderByRelationAggregateInput
    brick_types?: brick_typesOrderByWithRelationInput
    machines?: machinesOrderByWithRelationInput
  }

  export type productionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productionsWhereInput | productionsWhereInput[]
    OR?: productionsWhereInput[]
    NOT?: productionsWhereInput | productionsWhereInput[]
    date?: DateTimeFilter<"productions"> | Date | string
    machineId?: StringFilter<"productions"> | string
    shift?: StringFilter<"productions"> | string
    brickTypeId?: StringFilter<"productions"> | string
    quantity?: IntFilter<"productions"> | number
    createdAt?: DateTimeFilter<"productions"> | Date | string
    updatedAt?: DateTimeFilter<"productions"> | Date | string
    production_workers?: Production_workersListRelationFilter
    brick_types?: XOR<Brick_typesRelationFilter, brick_typesWhereInput>
    machines?: XOR<MachinesRelationFilter, machinesWhereInput>
  }, "id">

  export type productionsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    machineId?: SortOrder
    shift?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: productionsCountOrderByAggregateInput
    _avg?: productionsAvgOrderByAggregateInput
    _max?: productionsMaxOrderByAggregateInput
    _min?: productionsMinOrderByAggregateInput
    _sum?: productionsSumOrderByAggregateInput
  }

  export type productionsScalarWhereWithAggregatesInput = {
    AND?: productionsScalarWhereWithAggregatesInput | productionsScalarWhereWithAggregatesInput[]
    OR?: productionsScalarWhereWithAggregatesInput[]
    NOT?: productionsScalarWhereWithAggregatesInput | productionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"productions"> | string
    date?: DateTimeWithAggregatesFilter<"productions"> | Date | string
    machineId?: StringWithAggregatesFilter<"productions"> | string
    shift?: StringWithAggregatesFilter<"productions"> | string
    brickTypeId?: StringWithAggregatesFilter<"productions"> | string
    quantity?: IntWithAggregatesFilter<"productions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"productions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"productions"> | Date | string
  }

  export type raw_materialsWhereInput = {
    AND?: raw_materialsWhereInput | raw_materialsWhereInput[]
    OR?: raw_materialsWhereInput[]
    NOT?: raw_materialsWhereInput | raw_materialsWhereInput[]
    id?: StringFilter<"raw_materials"> | string
    name?: StringFilter<"raw_materials"> | string
    unit?: StringFilter<"raw_materials"> | string
    description?: StringNullableFilter<"raw_materials"> | string | null
    stock?: FloatFilter<"raw_materials"> | number
    isActive?: BoolFilter<"raw_materials"> | boolean
    createdAt?: DateTimeFilter<"raw_materials"> | Date | string
    updatedAt?: DateTimeFilter<"raw_materials"> | Date | string
    expenses?: ExpensesListRelationFilter
    material_usages?: Material_usagesListRelationFilter
  }

  export type raw_materialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    description?: SortOrderInput | SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expenses?: expensesOrderByRelationAggregateInput
    material_usages?: material_usagesOrderByRelationAggregateInput
  }

  export type raw_materialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: raw_materialsWhereInput | raw_materialsWhereInput[]
    OR?: raw_materialsWhereInput[]
    NOT?: raw_materialsWhereInput | raw_materialsWhereInput[]
    unit?: StringFilter<"raw_materials"> | string
    description?: StringNullableFilter<"raw_materials"> | string | null
    stock?: FloatFilter<"raw_materials"> | number
    isActive?: BoolFilter<"raw_materials"> | boolean
    createdAt?: DateTimeFilter<"raw_materials"> | Date | string
    updatedAt?: DateTimeFilter<"raw_materials"> | Date | string
    expenses?: ExpensesListRelationFilter
    material_usages?: Material_usagesListRelationFilter
  }, "id" | "name">

  export type raw_materialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    description?: SortOrderInput | SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: raw_materialsCountOrderByAggregateInput
    _avg?: raw_materialsAvgOrderByAggregateInput
    _max?: raw_materialsMaxOrderByAggregateInput
    _min?: raw_materialsMinOrderByAggregateInput
    _sum?: raw_materialsSumOrderByAggregateInput
  }

  export type raw_materialsScalarWhereWithAggregatesInput = {
    AND?: raw_materialsScalarWhereWithAggregatesInput | raw_materialsScalarWhereWithAggregatesInput[]
    OR?: raw_materialsScalarWhereWithAggregatesInput[]
    NOT?: raw_materialsScalarWhereWithAggregatesInput | raw_materialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"raw_materials"> | string
    name?: StringWithAggregatesFilter<"raw_materials"> | string
    unit?: StringWithAggregatesFilter<"raw_materials"> | string
    description?: StringNullableWithAggregatesFilter<"raw_materials"> | string | null
    stock?: FloatWithAggregatesFilter<"raw_materials"> | number
    isActive?: BoolWithAggregatesFilter<"raw_materials"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"raw_materials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"raw_materials"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    isActive?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    isActive?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    isActive?: BoolWithAggregatesFilter<"users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type weekly_settlementsWhereInput = {
    AND?: weekly_settlementsWhereInput | weekly_settlementsWhereInput[]
    OR?: weekly_settlementsWhereInput[]
    NOT?: weekly_settlementsWhereInput | weekly_settlementsWhereInput[]
    id?: StringFilter<"weekly_settlements"> | string
    workerId?: StringFilter<"weekly_settlements"> | string
    startDate?: DateTimeFilter<"weekly_settlements"> | Date | string
    endDate?: DateTimeFilter<"weekly_settlements"> | Date | string
    totalAmount?: FloatFilter<"weekly_settlements"> | number
    paymentStatus?: StringFilter<"weekly_settlements"> | string
    generatedAt?: DateTimeFilter<"weekly_settlements"> | Date | string
    notes?: StringNullableFilter<"weekly_settlements"> | string | null
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }

  export type weekly_settlementsOrderByWithRelationInput = {
    id?: SortOrder
    workerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    generatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    workers?: workersOrderByWithRelationInput
  }

  export type weekly_settlementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: weekly_settlementsWhereInput | weekly_settlementsWhereInput[]
    OR?: weekly_settlementsWhereInput[]
    NOT?: weekly_settlementsWhereInput | weekly_settlementsWhereInput[]
    workerId?: StringFilter<"weekly_settlements"> | string
    startDate?: DateTimeFilter<"weekly_settlements"> | Date | string
    endDate?: DateTimeFilter<"weekly_settlements"> | Date | string
    totalAmount?: FloatFilter<"weekly_settlements"> | number
    paymentStatus?: StringFilter<"weekly_settlements"> | string
    generatedAt?: DateTimeFilter<"weekly_settlements"> | Date | string
    notes?: StringNullableFilter<"weekly_settlements"> | string | null
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }, "id">

  export type weekly_settlementsOrderByWithAggregationInput = {
    id?: SortOrder
    workerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    generatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: weekly_settlementsCountOrderByAggregateInput
    _avg?: weekly_settlementsAvgOrderByAggregateInput
    _max?: weekly_settlementsMaxOrderByAggregateInput
    _min?: weekly_settlementsMinOrderByAggregateInput
    _sum?: weekly_settlementsSumOrderByAggregateInput
  }

  export type weekly_settlementsScalarWhereWithAggregatesInput = {
    AND?: weekly_settlementsScalarWhereWithAggregatesInput | weekly_settlementsScalarWhereWithAggregatesInput[]
    OR?: weekly_settlementsScalarWhereWithAggregatesInput[]
    NOT?: weekly_settlementsScalarWhereWithAggregatesInput | weekly_settlementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"weekly_settlements"> | string
    workerId?: StringWithAggregatesFilter<"weekly_settlements"> | string
    startDate?: DateTimeWithAggregatesFilter<"weekly_settlements"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"weekly_settlements"> | Date | string
    totalAmount?: FloatWithAggregatesFilter<"weekly_settlements"> | number
    paymentStatus?: StringWithAggregatesFilter<"weekly_settlements"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"weekly_settlements"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"weekly_settlements"> | string | null
  }

  export type worker_advancesWhereInput = {
    AND?: worker_advancesWhereInput | worker_advancesWhereInput[]
    OR?: worker_advancesWhereInput[]
    NOT?: worker_advancesWhereInput | worker_advancesWhereInput[]
    id?: StringFilter<"worker_advances"> | string
    workerId?: StringFilter<"worker_advances"> | string
    amount?: FloatFilter<"worker_advances"> | number
    type?: StringFilter<"worker_advances"> | string
    date?: DateTimeFilter<"worker_advances"> | Date | string
    note?: StringNullableFilter<"worker_advances"> | string | null
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }

  export type worker_advancesOrderByWithRelationInput = {
    id?: SortOrder
    workerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    workers?: workersOrderByWithRelationInput
  }

  export type worker_advancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: worker_advancesWhereInput | worker_advancesWhereInput[]
    OR?: worker_advancesWhereInput[]
    NOT?: worker_advancesWhereInput | worker_advancesWhereInput[]
    workerId?: StringFilter<"worker_advances"> | string
    amount?: FloatFilter<"worker_advances"> | number
    type?: StringFilter<"worker_advances"> | string
    date?: DateTimeFilter<"worker_advances"> | Date | string
    note?: StringNullableFilter<"worker_advances"> | string | null
    workers?: XOR<WorkersRelationFilter, workersWhereInput>
  }, "id">

  export type worker_advancesOrderByWithAggregationInput = {
    id?: SortOrder
    workerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: worker_advancesCountOrderByAggregateInput
    _avg?: worker_advancesAvgOrderByAggregateInput
    _max?: worker_advancesMaxOrderByAggregateInput
    _min?: worker_advancesMinOrderByAggregateInput
    _sum?: worker_advancesSumOrderByAggregateInput
  }

  export type worker_advancesScalarWhereWithAggregatesInput = {
    AND?: worker_advancesScalarWhereWithAggregatesInput | worker_advancesScalarWhereWithAggregatesInput[]
    OR?: worker_advancesScalarWhereWithAggregatesInput[]
    NOT?: worker_advancesScalarWhereWithAggregatesInput | worker_advancesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"worker_advances"> | string
    workerId?: StringWithAggregatesFilter<"worker_advances"> | string
    amount?: FloatWithAggregatesFilter<"worker_advances"> | number
    type?: StringWithAggregatesFilter<"worker_advances"> | string
    date?: DateTimeWithAggregatesFilter<"worker_advances"> | Date | string
    note?: StringNullableWithAggregatesFilter<"worker_advances"> | string | null
  }

  export type workersWhereInput = {
    AND?: workersWhereInput | workersWhereInput[]
    OR?: workersWhereInput[]
    NOT?: workersWhereInput | workersWhereInput[]
    id?: StringFilter<"workers"> | string
    name?: StringFilter<"workers"> | string
    role?: StringFilter<"workers"> | string
    paymentType?: StringFilter<"workers"> | string
    rate?: FloatFilter<"workers"> | number
    isActive?: BoolFilter<"workers"> | boolean
    advanceBalance?: FloatFilter<"workers"> | number
    createdAt?: DateTimeFilter<"workers"> | Date | string
    updatedAt?: DateTimeFilter<"workers"> | Date | string
    attendance?: AttendanceListRelationFilter
    daily_wages?: Daily_wagesListRelationFilter
    expenses?: ExpensesListRelationFilter
    production_workers?: Production_workersListRelationFilter
    weekly_settlements?: Weekly_settlementsListRelationFilter
    worker_advances?: Worker_advancesListRelationFilter
  }

  export type workersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    paymentType?: SortOrder
    rate?: SortOrder
    isActive?: SortOrder
    advanceBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    daily_wages?: daily_wagesOrderByRelationAggregateInput
    expenses?: expensesOrderByRelationAggregateInput
    production_workers?: production_workersOrderByRelationAggregateInput
    weekly_settlements?: weekly_settlementsOrderByRelationAggregateInput
    worker_advances?: worker_advancesOrderByRelationAggregateInput
  }

  export type workersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workersWhereInput | workersWhereInput[]
    OR?: workersWhereInput[]
    NOT?: workersWhereInput | workersWhereInput[]
    name?: StringFilter<"workers"> | string
    role?: StringFilter<"workers"> | string
    paymentType?: StringFilter<"workers"> | string
    rate?: FloatFilter<"workers"> | number
    isActive?: BoolFilter<"workers"> | boolean
    advanceBalance?: FloatFilter<"workers"> | number
    createdAt?: DateTimeFilter<"workers"> | Date | string
    updatedAt?: DateTimeFilter<"workers"> | Date | string
    attendance?: AttendanceListRelationFilter
    daily_wages?: Daily_wagesListRelationFilter
    expenses?: ExpensesListRelationFilter
    production_workers?: Production_workersListRelationFilter
    weekly_settlements?: Weekly_settlementsListRelationFilter
    worker_advances?: Worker_advancesListRelationFilter
  }, "id">

  export type workersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    paymentType?: SortOrder
    rate?: SortOrder
    isActive?: SortOrder
    advanceBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: workersCountOrderByAggregateInput
    _avg?: workersAvgOrderByAggregateInput
    _max?: workersMaxOrderByAggregateInput
    _min?: workersMinOrderByAggregateInput
    _sum?: workersSumOrderByAggregateInput
  }

  export type workersScalarWhereWithAggregatesInput = {
    AND?: workersScalarWhereWithAggregatesInput | workersScalarWhereWithAggregatesInput[]
    OR?: workersScalarWhereWithAggregatesInput[]
    NOT?: workersScalarWhereWithAggregatesInput | workersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"workers"> | string
    name?: StringWithAggregatesFilter<"workers"> | string
    role?: StringWithAggregatesFilter<"workers"> | string
    paymentType?: StringWithAggregatesFilter<"workers"> | string
    rate?: FloatWithAggregatesFilter<"workers"> | number
    isActive?: BoolWithAggregatesFilter<"workers"> | boolean
    advanceBalance?: FloatWithAggregatesFilter<"workers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"workers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workers"> | Date | string
  }

  export type attendanceCreateInput = {
    id: string
    date: Date | string
    present?: boolean
    workers: workersCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateInput = {
    id: string
    workerId: string
    date: Date | string
    present?: boolean
  }

  export type attendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    workers?: workersUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendanceCreateManyInput = {
    id: string
    workerId: string
    date: Date | string
    present?: boolean
  }

  export type attendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type brick_typesCreateInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    dispatches?: dispatchesCreateNestedManyWithoutBrick_typesInput
    productions?: productionsCreateNestedManyWithoutBrick_typesInput
  }

  export type brick_typesUncheckedCreateInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    dispatches?: dispatchesUncheckedCreateNestedManyWithoutBrick_typesInput
    productions?: productionsUncheckedCreateNestedManyWithoutBrick_typesInput
  }

  export type brick_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: dispatchesUpdateManyWithoutBrick_typesNestedInput
    productions?: productionsUpdateManyWithoutBrick_typesNestedInput
  }

  export type brick_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: dispatchesUncheckedUpdateManyWithoutBrick_typesNestedInput
    productions?: productionsUncheckedUpdateManyWithoutBrick_typesNestedInput
  }

  export type brick_typesCreateManyInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type brick_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type brick_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cash_entriesCreateInput = {
    id: string
    date: Date | string
    type: string
    amount: number
    description: string
    category: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type cash_entriesUncheckedCreateInput = {
    id: string
    date: Date | string
    type: string
    amount: number
    description: string
    category: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type cash_entriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cash_entriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cash_entriesCreateManyInput = {
    id: string
    date: Date | string
    type: string
    amount: number
    description: string
    category: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type cash_entriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cash_entriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersCreateInput = {
    id: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    dispatches?: dispatchesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    id: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    dispatches?: dispatchesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: dispatchesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: dispatchesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    id: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_wagesCreateInput = {
    id: string
    date: Date | string
    bricksMade?: number | null
    wageAmount: number
    advanceUsed?: number
    netPayable: number
    isPaid?: boolean
    createdAt?: Date | string
    workers: workersCreateNestedOneWithoutDaily_wagesInput
  }

  export type daily_wagesUncheckedCreateInput = {
    id: string
    workerId: string
    date: Date | string
    bricksMade?: number | null
    wageAmount: number
    advanceUsed?: number
    netPayable: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type daily_wagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: workersUpdateOneRequiredWithoutDaily_wagesNestedInput
  }

  export type daily_wagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_wagesCreateManyInput = {
    id: string
    workerId: string
    date: Date | string
    bricksMade?: number | null
    wageAmount: number
    advanceUsed?: number
    netPayable: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type daily_wagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_wagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dispatchesCreateInput = {
    id: string
    date: Date | string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
    brick_types: brick_typesCreateNestedOneWithoutDispatchesInput
    customers: customersCreateNestedOneWithoutDispatchesInput
  }

  export type dispatchesUncheckedCreateInput = {
    id: string
    date: Date | string
    customerId: string
    brickTypeId: string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type dispatchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brick_types?: brick_typesUpdateOneRequiredWithoutDispatchesNestedInput
    customers?: customersUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type dispatchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dispatchesCreateManyInput = {
    id: string
    date: Date | string
    customerId: string
    brickTypeId: string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type dispatchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dispatchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    createdAt?: Date | string
    updatedAt: Date | string
    raw_materials?: raw_materialsCreateNestedOneWithoutExpensesInput
    workers?: workersCreateNestedOneWithoutExpensesInput
    material_usages?: material_usagesCreateNestedManyWithoutExpensesInput
  }

  export type expensesUncheckedCreateInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    workerId?: string | null
    materialId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    material_usages?: material_usagesUncheckedCreateNestedManyWithoutExpensesInput
  }

  export type expensesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw_materials?: raw_materialsUpdateOneWithoutExpensesNestedInput
    workers?: workersUpdateOneWithoutExpensesNestedInput
    material_usages?: material_usagesUpdateManyWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material_usages?: material_usagesUncheckedUpdateManyWithoutExpensesNestedInput
  }

  export type expensesCreateManyInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    workerId?: string | null
    materialId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type expensesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type machinesCreateInput = {
    id: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    productions?: productionsCreateNestedManyWithoutMachinesInput
  }

  export type machinesUncheckedCreateInput = {
    id: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    productions?: productionsUncheckedCreateNestedManyWithoutMachinesInput
  }

  export type machinesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: productionsUpdateManyWithoutMachinesNestedInput
  }

  export type machinesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: productionsUncheckedUpdateManyWithoutMachinesNestedInput
  }

  export type machinesCreateManyInput = {
    id: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type machinesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type machinesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesCreateInput = {
    id: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    createdAt?: Date | string
    expenses?: expensesCreateNestedOneWithoutMaterial_usagesInput
    raw_materials: raw_materialsCreateNestedOneWithoutMaterial_usagesInput
  }

  export type material_usagesUncheckedCreateInput = {
    id: string
    materialId: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    expenseId?: string | null
    createdAt?: Date | string
  }

  export type material_usagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expensesUpdateOneWithoutMaterial_usagesNestedInput
    raw_materials?: raw_materialsUpdateOneRequiredWithoutMaterial_usagesNestedInput
  }

  export type material_usagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesCreateManyInput = {
    id: string
    materialId: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    expenseId?: string | null
    createdAt?: Date | string
  }

  export type material_usagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersCreateInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    workers: workersCreateNestedOneWithoutProduction_workersInput
    productions: productionsCreateNestedOneWithoutProduction_workersInput
  }

  export type production_workersUncheckedCreateInput = {
    id: string
    productionId: string
    workerId: string
    quantity: number
    createdAt?: Date | string
  }

  export type production_workersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: workersUpdateOneRequiredWithoutProduction_workersNestedInput
    productions?: productionsUpdateOneRequiredWithoutProduction_workersNestedInput
  }

  export type production_workersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersCreateManyInput = {
    id: string
    productionId: string
    workerId: string
    quantity: number
    createdAt?: Date | string
  }

  export type production_workersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productionsCreateInput = {
    id: string
    date: Date | string
    shift: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    production_workers?: production_workersCreateNestedManyWithoutProductionsInput
    brick_types: brick_typesCreateNestedOneWithoutProductionsInput
    machines: machinesCreateNestedOneWithoutProductionsInput
  }

  export type productionsUncheckedCreateInput = {
    id: string
    date: Date | string
    machineId: string
    shift: string
    brickTypeId: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    production_workers?: production_workersUncheckedCreateNestedManyWithoutProductionsInput
  }

  export type productionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production_workers?: production_workersUpdateManyWithoutProductionsNestedInput
    brick_types?: brick_typesUpdateOneRequiredWithoutProductionsNestedInput
    machines?: machinesUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type productionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    machineId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production_workers?: production_workersUncheckedUpdateManyWithoutProductionsNestedInput
  }

  export type productionsCreateManyInput = {
    id: string
    date: Date | string
    machineId: string
    shift: string
    brickTypeId: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    machineId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsCreateInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    expenses?: expensesCreateNestedManyWithoutRaw_materialsInput
    material_usages?: material_usagesCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsUncheckedCreateInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    expenses?: expensesUncheckedCreateNestedManyWithoutRaw_materialsInput
    material_usages?: material_usagesUncheckedCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expensesUpdateManyWithoutRaw_materialsNestedInput
    material_usages?: material_usagesUpdateManyWithoutRaw_materialsNestedInput
  }

  export type raw_materialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expensesUncheckedUpdateManyWithoutRaw_materialsNestedInput
    material_usages?: material_usagesUncheckedUpdateManyWithoutRaw_materialsNestedInput
  }

  export type raw_materialsCreateManyInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type raw_materialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id: string
    name: string
    email: string
    password: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type weekly_settlementsCreateInput = {
    id: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: number
    paymentStatus: string
    generatedAt?: Date | string
    notes?: string | null
    workers: workersCreateNestedOneWithoutWeekly_settlementsInput
  }

  export type weekly_settlementsUncheckedCreateInput = {
    id: string
    workerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: number
    paymentStatus: string
    generatedAt?: Date | string
    notes?: string | null
  }

  export type weekly_settlementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workers?: workersUpdateOneRequiredWithoutWeekly_settlementsNestedInput
  }

  export type weekly_settlementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type weekly_settlementsCreateManyInput = {
    id: string
    workerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: number
    paymentStatus: string
    generatedAt?: Date | string
    notes?: string | null
  }

  export type weekly_settlementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type weekly_settlementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worker_advancesCreateInput = {
    id: string
    amount: number
    type: string
    date: Date | string
    note?: string | null
    workers: workersCreateNestedOneWithoutWorker_advancesInput
  }

  export type worker_advancesUncheckedCreateInput = {
    id: string
    workerId: string
    amount: number
    type: string
    date: Date | string
    note?: string | null
  }

  export type worker_advancesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    workers?: workersUpdateOneRequiredWithoutWorker_advancesNestedInput
  }

  export type worker_advancesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worker_advancesCreateManyInput = {
    id: string
    workerId: string
    amount: number
    type: string
    date: Date | string
    note?: string | null
  }

  export type worker_advancesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worker_advancesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workersCreateInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesCreateNestedManyWithoutWorkersInput
    expenses?: expensesCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesUncheckedCreateNestedManyWithoutWorkersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersUncheckedCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUncheckedUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type workersCreateManyInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type workersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkersRelationFilter = {
    is?: workersWhereInput
    isNot?: workersWhereInput
  }

  export type attendanceWorkerIdDateCompoundUniqueInput = {
    workerId: string
    date: Date | string
  }

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    present?: SortOrder
  }

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    present?: SortOrder
  }

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    present?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DispatchesListRelationFilter = {
    every?: dispatchesWhereInput
    some?: dispatchesWhereInput
    none?: dispatchesWhereInput
  }

  export type ProductionsListRelationFilter = {
    every?: productionsWhereInput
    some?: productionsWhereInput
    none?: productionsWhereInput
  }

  export type dispatchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type brick_typesCountOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type brick_typesAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type brick_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type brick_typesMinOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type brick_typesSumOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type cash_entriesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cash_entriesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type cash_entriesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cash_entriesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cash_entriesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type daily_wagesCountOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    bricksMade?: SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
  }

  export type daily_wagesAvgOrderByAggregateInput = {
    bricksMade?: SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
  }

  export type daily_wagesMaxOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    bricksMade?: SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
  }

  export type daily_wagesMinOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    date?: SortOrder
    bricksMade?: SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
  }

  export type daily_wagesSumOrderByAggregateInput = {
    bricksMade?: SortOrder
    wageAmount?: SortOrder
    advanceUsed?: SortOrder
    netPayable?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Brick_typesRelationFilter = {
    is?: brick_typesWhereInput
    isNot?: brick_typesWhereInput
  }

  export type CustomersRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type dispatchesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    distanceKm?: SortOrder
    vehicleType?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type dispatchesAvgOrderByAggregateInput = {
    quantity?: SortOrder
    distanceKm?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
  }

  export type dispatchesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    distanceKm?: SortOrder
    vehicleType?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type dispatchesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    distanceKm?: SortOrder
    vehicleType?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    paymentStatus?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type dispatchesSumOrderByAggregateInput = {
    quantity?: SortOrder
    distanceKm?: SortOrder
    transportCost?: SortOrder
    loadingCost?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Raw_materialsNullableRelationFilter = {
    is?: raw_materialsWhereInput | null
    isNot?: raw_materialsWhereInput | null
  }

  export type WorkersNullableRelationFilter = {
    is?: workersWhereInput | null
    isNot?: workersWhereInput | null
  }

  export type Material_usagesListRelationFilter = {
    every?: material_usagesWhereInput
    some?: material_usagesWhereInput
    none?: material_usagesWhereInput
  }

  export type material_usagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expensesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    paymentMode?: SortOrder
    workerId?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expensesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type expensesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    paymentMode?: SortOrder
    workerId?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expensesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    paymentMode?: SortOrder
    workerId?: SortOrder
    materialId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expensesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type machinesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type machinesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type machinesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpensesNullableRelationFilter = {
    is?: expensesWhereInput | null
    isNot?: expensesWhereInput | null
  }

  export type Raw_materialsRelationFilter = {
    is?: raw_materialsWhereInput
    isNot?: raw_materialsWhereInput
  }

  export type material_usagesCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    date?: SortOrder
    expenseId?: SortOrder
    createdAt?: SortOrder
  }

  export type material_usagesAvgOrderByAggregateInput = {
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
  }

  export type material_usagesMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    date?: SortOrder
    expenseId?: SortOrder
    createdAt?: SortOrder
  }

  export type material_usagesMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
    date?: SortOrder
    expenseId?: SortOrder
    createdAt?: SortOrder
  }

  export type material_usagesSumOrderByAggregateInput = {
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    totalCost?: SortOrder
  }

  export type ProductionsRelationFilter = {
    is?: productionsWhereInput
    isNot?: productionsWhereInput
  }

  export type production_workersCountOrderByAggregateInput = {
    id?: SortOrder
    productionId?: SortOrder
    workerId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type production_workersAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type production_workersMaxOrderByAggregateInput = {
    id?: SortOrder
    productionId?: SortOrder
    workerId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type production_workersMinOrderByAggregateInput = {
    id?: SortOrder
    productionId?: SortOrder
    workerId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type production_workersSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type Production_workersListRelationFilter = {
    every?: production_workersWhereInput
    some?: production_workersWhereInput
    none?: production_workersWhereInput
  }

  export type MachinesRelationFilter = {
    is?: machinesWhereInput
    isNot?: machinesWhereInput
  }

  export type production_workersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productionsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    machineId?: SortOrder
    shift?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productionsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type productionsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    machineId?: SortOrder
    shift?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productionsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    machineId?: SortOrder
    shift?: SortOrder
    brickTypeId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productionsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ExpensesListRelationFilter = {
    every?: expensesWhereInput
    some?: expensesWhereInput
    none?: expensesWhereInput
  }

  export type expensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type raw_materialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type raw_materialsAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type raw_materialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type raw_materialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type raw_materialsSumOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type weekly_settlementsCountOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    generatedAt?: SortOrder
    notes?: SortOrder
  }

  export type weekly_settlementsAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type weekly_settlementsMaxOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    generatedAt?: SortOrder
    notes?: SortOrder
  }

  export type weekly_settlementsMinOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    generatedAt?: SortOrder
    notes?: SortOrder
  }

  export type weekly_settlementsSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type worker_advancesCountOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrder
  }

  export type worker_advancesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type worker_advancesMaxOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrder
  }

  export type worker_advancesMinOrderByAggregateInput = {
    id?: SortOrder
    workerId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrder
  }

  export type worker_advancesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput
    some?: attendanceWhereInput
    none?: attendanceWhereInput
  }

  export type Daily_wagesListRelationFilter = {
    every?: daily_wagesWhereInput
    some?: daily_wagesWhereInput
    none?: daily_wagesWhereInput
  }

  export type Weekly_settlementsListRelationFilter = {
    every?: weekly_settlementsWhereInput
    some?: weekly_settlementsWhereInput
    none?: weekly_settlementsWhereInput
  }

  export type Worker_advancesListRelationFilter = {
    every?: worker_advancesWhereInput
    some?: worker_advancesWhereInput
    none?: worker_advancesWhereInput
  }

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type daily_wagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type weekly_settlementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type worker_advancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    paymentType?: SortOrder
    rate?: SortOrder
    isActive?: SortOrder
    advanceBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workersAvgOrderByAggregateInput = {
    rate?: SortOrder
    advanceBalance?: SortOrder
  }

  export type workersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    paymentType?: SortOrder
    rate?: SortOrder
    isActive?: SortOrder
    advanceBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    paymentType?: SortOrder
    rate?: SortOrder
    isActive?: SortOrder
    advanceBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workersSumOrderByAggregateInput = {
    rate?: SortOrder
    advanceBalance?: SortOrder
  }

  export type workersCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<workersCreateWithoutAttendanceInput, workersUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: workersCreateOrConnectWithoutAttendanceInput
    connect?: workersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type workersUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<workersCreateWithoutAttendanceInput, workersUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: workersCreateOrConnectWithoutAttendanceInput
    upsert?: workersUpsertWithoutAttendanceInput
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutAttendanceInput, workersUpdateWithoutAttendanceInput>, workersUncheckedUpdateWithoutAttendanceInput>
  }

  export type dispatchesCreateNestedManyWithoutBrick_typesInput = {
    create?: XOR<dispatchesCreateWithoutBrick_typesInput, dispatchesUncheckedCreateWithoutBrick_typesInput> | dispatchesCreateWithoutBrick_typesInput[] | dispatchesUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutBrick_typesInput | dispatchesCreateOrConnectWithoutBrick_typesInput[]
    createMany?: dispatchesCreateManyBrick_typesInputEnvelope
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
  }

  export type productionsCreateNestedManyWithoutBrick_typesInput = {
    create?: XOR<productionsCreateWithoutBrick_typesInput, productionsUncheckedCreateWithoutBrick_typesInput> | productionsCreateWithoutBrick_typesInput[] | productionsUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutBrick_typesInput | productionsCreateOrConnectWithoutBrick_typesInput[]
    createMany?: productionsCreateManyBrick_typesInputEnvelope
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
  }

  export type dispatchesUncheckedCreateNestedManyWithoutBrick_typesInput = {
    create?: XOR<dispatchesCreateWithoutBrick_typesInput, dispatchesUncheckedCreateWithoutBrick_typesInput> | dispatchesCreateWithoutBrick_typesInput[] | dispatchesUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutBrick_typesInput | dispatchesCreateOrConnectWithoutBrick_typesInput[]
    createMany?: dispatchesCreateManyBrick_typesInputEnvelope
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
  }

  export type productionsUncheckedCreateNestedManyWithoutBrick_typesInput = {
    create?: XOR<productionsCreateWithoutBrick_typesInput, productionsUncheckedCreateWithoutBrick_typesInput> | productionsCreateWithoutBrick_typesInput[] | productionsUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutBrick_typesInput | productionsCreateOrConnectWithoutBrick_typesInput[]
    createMany?: productionsCreateManyBrick_typesInputEnvelope
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type dispatchesUpdateManyWithoutBrick_typesNestedInput = {
    create?: XOR<dispatchesCreateWithoutBrick_typesInput, dispatchesUncheckedCreateWithoutBrick_typesInput> | dispatchesCreateWithoutBrick_typesInput[] | dispatchesUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutBrick_typesInput | dispatchesCreateOrConnectWithoutBrick_typesInput[]
    upsert?: dispatchesUpsertWithWhereUniqueWithoutBrick_typesInput | dispatchesUpsertWithWhereUniqueWithoutBrick_typesInput[]
    createMany?: dispatchesCreateManyBrick_typesInputEnvelope
    set?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    disconnect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    delete?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    update?: dispatchesUpdateWithWhereUniqueWithoutBrick_typesInput | dispatchesUpdateWithWhereUniqueWithoutBrick_typesInput[]
    updateMany?: dispatchesUpdateManyWithWhereWithoutBrick_typesInput | dispatchesUpdateManyWithWhereWithoutBrick_typesInput[]
    deleteMany?: dispatchesScalarWhereInput | dispatchesScalarWhereInput[]
  }

  export type productionsUpdateManyWithoutBrick_typesNestedInput = {
    create?: XOR<productionsCreateWithoutBrick_typesInput, productionsUncheckedCreateWithoutBrick_typesInput> | productionsCreateWithoutBrick_typesInput[] | productionsUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutBrick_typesInput | productionsCreateOrConnectWithoutBrick_typesInput[]
    upsert?: productionsUpsertWithWhereUniqueWithoutBrick_typesInput | productionsUpsertWithWhereUniqueWithoutBrick_typesInput[]
    createMany?: productionsCreateManyBrick_typesInputEnvelope
    set?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    disconnect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    delete?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    update?: productionsUpdateWithWhereUniqueWithoutBrick_typesInput | productionsUpdateWithWhereUniqueWithoutBrick_typesInput[]
    updateMany?: productionsUpdateManyWithWhereWithoutBrick_typesInput | productionsUpdateManyWithWhereWithoutBrick_typesInput[]
    deleteMany?: productionsScalarWhereInput | productionsScalarWhereInput[]
  }

  export type dispatchesUncheckedUpdateManyWithoutBrick_typesNestedInput = {
    create?: XOR<dispatchesCreateWithoutBrick_typesInput, dispatchesUncheckedCreateWithoutBrick_typesInput> | dispatchesCreateWithoutBrick_typesInput[] | dispatchesUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutBrick_typesInput | dispatchesCreateOrConnectWithoutBrick_typesInput[]
    upsert?: dispatchesUpsertWithWhereUniqueWithoutBrick_typesInput | dispatchesUpsertWithWhereUniqueWithoutBrick_typesInput[]
    createMany?: dispatchesCreateManyBrick_typesInputEnvelope
    set?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    disconnect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    delete?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    update?: dispatchesUpdateWithWhereUniqueWithoutBrick_typesInput | dispatchesUpdateWithWhereUniqueWithoutBrick_typesInput[]
    updateMany?: dispatchesUpdateManyWithWhereWithoutBrick_typesInput | dispatchesUpdateManyWithWhereWithoutBrick_typesInput[]
    deleteMany?: dispatchesScalarWhereInput | dispatchesScalarWhereInput[]
  }

  export type productionsUncheckedUpdateManyWithoutBrick_typesNestedInput = {
    create?: XOR<productionsCreateWithoutBrick_typesInput, productionsUncheckedCreateWithoutBrick_typesInput> | productionsCreateWithoutBrick_typesInput[] | productionsUncheckedCreateWithoutBrick_typesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutBrick_typesInput | productionsCreateOrConnectWithoutBrick_typesInput[]
    upsert?: productionsUpsertWithWhereUniqueWithoutBrick_typesInput | productionsUpsertWithWhereUniqueWithoutBrick_typesInput[]
    createMany?: productionsCreateManyBrick_typesInputEnvelope
    set?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    disconnect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    delete?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    update?: productionsUpdateWithWhereUniqueWithoutBrick_typesInput | productionsUpdateWithWhereUniqueWithoutBrick_typesInput[]
    updateMany?: productionsUpdateManyWithWhereWithoutBrick_typesInput | productionsUpdateManyWithWhereWithoutBrick_typesInput[]
    deleteMany?: productionsScalarWhereInput | productionsScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type dispatchesCreateNestedManyWithoutCustomersInput = {
    create?: XOR<dispatchesCreateWithoutCustomersInput, dispatchesUncheckedCreateWithoutCustomersInput> | dispatchesCreateWithoutCustomersInput[] | dispatchesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutCustomersInput | dispatchesCreateOrConnectWithoutCustomersInput[]
    createMany?: dispatchesCreateManyCustomersInputEnvelope
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
  }

  export type dispatchesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<dispatchesCreateWithoutCustomersInput, dispatchesUncheckedCreateWithoutCustomersInput> | dispatchesCreateWithoutCustomersInput[] | dispatchesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutCustomersInput | dispatchesCreateOrConnectWithoutCustomersInput[]
    createMany?: dispatchesCreateManyCustomersInputEnvelope
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type dispatchesUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<dispatchesCreateWithoutCustomersInput, dispatchesUncheckedCreateWithoutCustomersInput> | dispatchesCreateWithoutCustomersInput[] | dispatchesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutCustomersInput | dispatchesCreateOrConnectWithoutCustomersInput[]
    upsert?: dispatchesUpsertWithWhereUniqueWithoutCustomersInput | dispatchesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: dispatchesCreateManyCustomersInputEnvelope
    set?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    disconnect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    delete?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    update?: dispatchesUpdateWithWhereUniqueWithoutCustomersInput | dispatchesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: dispatchesUpdateManyWithWhereWithoutCustomersInput | dispatchesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: dispatchesScalarWhereInput | dispatchesScalarWhereInput[]
  }

  export type dispatchesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<dispatchesCreateWithoutCustomersInput, dispatchesUncheckedCreateWithoutCustomersInput> | dispatchesCreateWithoutCustomersInput[] | dispatchesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: dispatchesCreateOrConnectWithoutCustomersInput | dispatchesCreateOrConnectWithoutCustomersInput[]
    upsert?: dispatchesUpsertWithWhereUniqueWithoutCustomersInput | dispatchesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: dispatchesCreateManyCustomersInputEnvelope
    set?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    disconnect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    delete?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    connect?: dispatchesWhereUniqueInput | dispatchesWhereUniqueInput[]
    update?: dispatchesUpdateWithWhereUniqueWithoutCustomersInput | dispatchesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: dispatchesUpdateManyWithWhereWithoutCustomersInput | dispatchesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: dispatchesScalarWhereInput | dispatchesScalarWhereInput[]
  }

  export type workersCreateNestedOneWithoutDaily_wagesInput = {
    create?: XOR<workersCreateWithoutDaily_wagesInput, workersUncheckedCreateWithoutDaily_wagesInput>
    connectOrCreate?: workersCreateOrConnectWithoutDaily_wagesInput
    connect?: workersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type workersUpdateOneRequiredWithoutDaily_wagesNestedInput = {
    create?: XOR<workersCreateWithoutDaily_wagesInput, workersUncheckedCreateWithoutDaily_wagesInput>
    connectOrCreate?: workersCreateOrConnectWithoutDaily_wagesInput
    upsert?: workersUpsertWithoutDaily_wagesInput
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutDaily_wagesInput, workersUpdateWithoutDaily_wagesInput>, workersUncheckedUpdateWithoutDaily_wagesInput>
  }

  export type brick_typesCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<brick_typesCreateWithoutDispatchesInput, brick_typesUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: brick_typesCreateOrConnectWithoutDispatchesInput
    connect?: brick_typesWhereUniqueInput
  }

  export type customersCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<customersCreateWithoutDispatchesInput, customersUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: customersCreateOrConnectWithoutDispatchesInput
    connect?: customersWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type brick_typesUpdateOneRequiredWithoutDispatchesNestedInput = {
    create?: XOR<brick_typesCreateWithoutDispatchesInput, brick_typesUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: brick_typesCreateOrConnectWithoutDispatchesInput
    upsert?: brick_typesUpsertWithoutDispatchesInput
    connect?: brick_typesWhereUniqueInput
    update?: XOR<XOR<brick_typesUpdateToOneWithWhereWithoutDispatchesInput, brick_typesUpdateWithoutDispatchesInput>, brick_typesUncheckedUpdateWithoutDispatchesInput>
  }

  export type customersUpdateOneRequiredWithoutDispatchesNestedInput = {
    create?: XOR<customersCreateWithoutDispatchesInput, customersUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: customersCreateOrConnectWithoutDispatchesInput
    upsert?: customersUpsertWithoutDispatchesInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutDispatchesInput, customersUpdateWithoutDispatchesInput>, customersUncheckedUpdateWithoutDispatchesInput>
  }

  export type raw_materialsCreateNestedOneWithoutExpensesInput = {
    create?: XOR<raw_materialsCreateWithoutExpensesInput, raw_materialsUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: raw_materialsCreateOrConnectWithoutExpensesInput
    connect?: raw_materialsWhereUniqueInput
  }

  export type workersCreateNestedOneWithoutExpensesInput = {
    create?: XOR<workersCreateWithoutExpensesInput, workersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: workersCreateOrConnectWithoutExpensesInput
    connect?: workersWhereUniqueInput
  }

  export type material_usagesCreateNestedManyWithoutExpensesInput = {
    create?: XOR<material_usagesCreateWithoutExpensesInput, material_usagesUncheckedCreateWithoutExpensesInput> | material_usagesCreateWithoutExpensesInput[] | material_usagesUncheckedCreateWithoutExpensesInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutExpensesInput | material_usagesCreateOrConnectWithoutExpensesInput[]
    createMany?: material_usagesCreateManyExpensesInputEnvelope
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
  }

  export type material_usagesUncheckedCreateNestedManyWithoutExpensesInput = {
    create?: XOR<material_usagesCreateWithoutExpensesInput, material_usagesUncheckedCreateWithoutExpensesInput> | material_usagesCreateWithoutExpensesInput[] | material_usagesUncheckedCreateWithoutExpensesInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutExpensesInput | material_usagesCreateOrConnectWithoutExpensesInput[]
    createMany?: material_usagesCreateManyExpensesInputEnvelope
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
  }

  export type raw_materialsUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<raw_materialsCreateWithoutExpensesInput, raw_materialsUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: raw_materialsCreateOrConnectWithoutExpensesInput
    upsert?: raw_materialsUpsertWithoutExpensesInput
    disconnect?: raw_materialsWhereInput | boolean
    delete?: raw_materialsWhereInput | boolean
    connect?: raw_materialsWhereUniqueInput
    update?: XOR<XOR<raw_materialsUpdateToOneWithWhereWithoutExpensesInput, raw_materialsUpdateWithoutExpensesInput>, raw_materialsUncheckedUpdateWithoutExpensesInput>
  }

  export type workersUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<workersCreateWithoutExpensesInput, workersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: workersCreateOrConnectWithoutExpensesInput
    upsert?: workersUpsertWithoutExpensesInput
    disconnect?: workersWhereInput | boolean
    delete?: workersWhereInput | boolean
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutExpensesInput, workersUpdateWithoutExpensesInput>, workersUncheckedUpdateWithoutExpensesInput>
  }

  export type material_usagesUpdateManyWithoutExpensesNestedInput = {
    create?: XOR<material_usagesCreateWithoutExpensesInput, material_usagesUncheckedCreateWithoutExpensesInput> | material_usagesCreateWithoutExpensesInput[] | material_usagesUncheckedCreateWithoutExpensesInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutExpensesInput | material_usagesCreateOrConnectWithoutExpensesInput[]
    upsert?: material_usagesUpsertWithWhereUniqueWithoutExpensesInput | material_usagesUpsertWithWhereUniqueWithoutExpensesInput[]
    createMany?: material_usagesCreateManyExpensesInputEnvelope
    set?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    disconnect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    delete?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    update?: material_usagesUpdateWithWhereUniqueWithoutExpensesInput | material_usagesUpdateWithWhereUniqueWithoutExpensesInput[]
    updateMany?: material_usagesUpdateManyWithWhereWithoutExpensesInput | material_usagesUpdateManyWithWhereWithoutExpensesInput[]
    deleteMany?: material_usagesScalarWhereInput | material_usagesScalarWhereInput[]
  }

  export type material_usagesUncheckedUpdateManyWithoutExpensesNestedInput = {
    create?: XOR<material_usagesCreateWithoutExpensesInput, material_usagesUncheckedCreateWithoutExpensesInput> | material_usagesCreateWithoutExpensesInput[] | material_usagesUncheckedCreateWithoutExpensesInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutExpensesInput | material_usagesCreateOrConnectWithoutExpensesInput[]
    upsert?: material_usagesUpsertWithWhereUniqueWithoutExpensesInput | material_usagesUpsertWithWhereUniqueWithoutExpensesInput[]
    createMany?: material_usagesCreateManyExpensesInputEnvelope
    set?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    disconnect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    delete?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    update?: material_usagesUpdateWithWhereUniqueWithoutExpensesInput | material_usagesUpdateWithWhereUniqueWithoutExpensesInput[]
    updateMany?: material_usagesUpdateManyWithWhereWithoutExpensesInput | material_usagesUpdateManyWithWhereWithoutExpensesInput[]
    deleteMany?: material_usagesScalarWhereInput | material_usagesScalarWhereInput[]
  }

  export type productionsCreateNestedManyWithoutMachinesInput = {
    create?: XOR<productionsCreateWithoutMachinesInput, productionsUncheckedCreateWithoutMachinesInput> | productionsCreateWithoutMachinesInput[] | productionsUncheckedCreateWithoutMachinesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutMachinesInput | productionsCreateOrConnectWithoutMachinesInput[]
    createMany?: productionsCreateManyMachinesInputEnvelope
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
  }

  export type productionsUncheckedCreateNestedManyWithoutMachinesInput = {
    create?: XOR<productionsCreateWithoutMachinesInput, productionsUncheckedCreateWithoutMachinesInput> | productionsCreateWithoutMachinesInput[] | productionsUncheckedCreateWithoutMachinesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutMachinesInput | productionsCreateOrConnectWithoutMachinesInput[]
    createMany?: productionsCreateManyMachinesInputEnvelope
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
  }

  export type productionsUpdateManyWithoutMachinesNestedInput = {
    create?: XOR<productionsCreateWithoutMachinesInput, productionsUncheckedCreateWithoutMachinesInput> | productionsCreateWithoutMachinesInput[] | productionsUncheckedCreateWithoutMachinesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutMachinesInput | productionsCreateOrConnectWithoutMachinesInput[]
    upsert?: productionsUpsertWithWhereUniqueWithoutMachinesInput | productionsUpsertWithWhereUniqueWithoutMachinesInput[]
    createMany?: productionsCreateManyMachinesInputEnvelope
    set?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    disconnect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    delete?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    update?: productionsUpdateWithWhereUniqueWithoutMachinesInput | productionsUpdateWithWhereUniqueWithoutMachinesInput[]
    updateMany?: productionsUpdateManyWithWhereWithoutMachinesInput | productionsUpdateManyWithWhereWithoutMachinesInput[]
    deleteMany?: productionsScalarWhereInput | productionsScalarWhereInput[]
  }

  export type productionsUncheckedUpdateManyWithoutMachinesNestedInput = {
    create?: XOR<productionsCreateWithoutMachinesInput, productionsUncheckedCreateWithoutMachinesInput> | productionsCreateWithoutMachinesInput[] | productionsUncheckedCreateWithoutMachinesInput[]
    connectOrCreate?: productionsCreateOrConnectWithoutMachinesInput | productionsCreateOrConnectWithoutMachinesInput[]
    upsert?: productionsUpsertWithWhereUniqueWithoutMachinesInput | productionsUpsertWithWhereUniqueWithoutMachinesInput[]
    createMany?: productionsCreateManyMachinesInputEnvelope
    set?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    disconnect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    delete?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    connect?: productionsWhereUniqueInput | productionsWhereUniqueInput[]
    update?: productionsUpdateWithWhereUniqueWithoutMachinesInput | productionsUpdateWithWhereUniqueWithoutMachinesInput[]
    updateMany?: productionsUpdateManyWithWhereWithoutMachinesInput | productionsUpdateManyWithWhereWithoutMachinesInput[]
    deleteMany?: productionsScalarWhereInput | productionsScalarWhereInput[]
  }

  export type expensesCreateNestedOneWithoutMaterial_usagesInput = {
    create?: XOR<expensesCreateWithoutMaterial_usagesInput, expensesUncheckedCreateWithoutMaterial_usagesInput>
    connectOrCreate?: expensesCreateOrConnectWithoutMaterial_usagesInput
    connect?: expensesWhereUniqueInput
  }

  export type raw_materialsCreateNestedOneWithoutMaterial_usagesInput = {
    create?: XOR<raw_materialsCreateWithoutMaterial_usagesInput, raw_materialsUncheckedCreateWithoutMaterial_usagesInput>
    connectOrCreate?: raw_materialsCreateOrConnectWithoutMaterial_usagesInput
    connect?: raw_materialsWhereUniqueInput
  }

  export type expensesUpdateOneWithoutMaterial_usagesNestedInput = {
    create?: XOR<expensesCreateWithoutMaterial_usagesInput, expensesUncheckedCreateWithoutMaterial_usagesInput>
    connectOrCreate?: expensesCreateOrConnectWithoutMaterial_usagesInput
    upsert?: expensesUpsertWithoutMaterial_usagesInput
    disconnect?: expensesWhereInput | boolean
    delete?: expensesWhereInput | boolean
    connect?: expensesWhereUniqueInput
    update?: XOR<XOR<expensesUpdateToOneWithWhereWithoutMaterial_usagesInput, expensesUpdateWithoutMaterial_usagesInput>, expensesUncheckedUpdateWithoutMaterial_usagesInput>
  }

  export type raw_materialsUpdateOneRequiredWithoutMaterial_usagesNestedInput = {
    create?: XOR<raw_materialsCreateWithoutMaterial_usagesInput, raw_materialsUncheckedCreateWithoutMaterial_usagesInput>
    connectOrCreate?: raw_materialsCreateOrConnectWithoutMaterial_usagesInput
    upsert?: raw_materialsUpsertWithoutMaterial_usagesInput
    connect?: raw_materialsWhereUniqueInput
    update?: XOR<XOR<raw_materialsUpdateToOneWithWhereWithoutMaterial_usagesInput, raw_materialsUpdateWithoutMaterial_usagesInput>, raw_materialsUncheckedUpdateWithoutMaterial_usagesInput>
  }

  export type workersCreateNestedOneWithoutProduction_workersInput = {
    create?: XOR<workersCreateWithoutProduction_workersInput, workersUncheckedCreateWithoutProduction_workersInput>
    connectOrCreate?: workersCreateOrConnectWithoutProduction_workersInput
    connect?: workersWhereUniqueInput
  }

  export type productionsCreateNestedOneWithoutProduction_workersInput = {
    create?: XOR<productionsCreateWithoutProduction_workersInput, productionsUncheckedCreateWithoutProduction_workersInput>
    connectOrCreate?: productionsCreateOrConnectWithoutProduction_workersInput
    connect?: productionsWhereUniqueInput
  }

  export type workersUpdateOneRequiredWithoutProduction_workersNestedInput = {
    create?: XOR<workersCreateWithoutProduction_workersInput, workersUncheckedCreateWithoutProduction_workersInput>
    connectOrCreate?: workersCreateOrConnectWithoutProduction_workersInput
    upsert?: workersUpsertWithoutProduction_workersInput
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutProduction_workersInput, workersUpdateWithoutProduction_workersInput>, workersUncheckedUpdateWithoutProduction_workersInput>
  }

  export type productionsUpdateOneRequiredWithoutProduction_workersNestedInput = {
    create?: XOR<productionsCreateWithoutProduction_workersInput, productionsUncheckedCreateWithoutProduction_workersInput>
    connectOrCreate?: productionsCreateOrConnectWithoutProduction_workersInput
    upsert?: productionsUpsertWithoutProduction_workersInput
    connect?: productionsWhereUniqueInput
    update?: XOR<XOR<productionsUpdateToOneWithWhereWithoutProduction_workersInput, productionsUpdateWithoutProduction_workersInput>, productionsUncheckedUpdateWithoutProduction_workersInput>
  }

  export type production_workersCreateNestedManyWithoutProductionsInput = {
    create?: XOR<production_workersCreateWithoutProductionsInput, production_workersUncheckedCreateWithoutProductionsInput> | production_workersCreateWithoutProductionsInput[] | production_workersUncheckedCreateWithoutProductionsInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutProductionsInput | production_workersCreateOrConnectWithoutProductionsInput[]
    createMany?: production_workersCreateManyProductionsInputEnvelope
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
  }

  export type brick_typesCreateNestedOneWithoutProductionsInput = {
    create?: XOR<brick_typesCreateWithoutProductionsInput, brick_typesUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: brick_typesCreateOrConnectWithoutProductionsInput
    connect?: brick_typesWhereUniqueInput
  }

  export type machinesCreateNestedOneWithoutProductionsInput = {
    create?: XOR<machinesCreateWithoutProductionsInput, machinesUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: machinesCreateOrConnectWithoutProductionsInput
    connect?: machinesWhereUniqueInput
  }

  export type production_workersUncheckedCreateNestedManyWithoutProductionsInput = {
    create?: XOR<production_workersCreateWithoutProductionsInput, production_workersUncheckedCreateWithoutProductionsInput> | production_workersCreateWithoutProductionsInput[] | production_workersUncheckedCreateWithoutProductionsInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutProductionsInput | production_workersCreateOrConnectWithoutProductionsInput[]
    createMany?: production_workersCreateManyProductionsInputEnvelope
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
  }

  export type production_workersUpdateManyWithoutProductionsNestedInput = {
    create?: XOR<production_workersCreateWithoutProductionsInput, production_workersUncheckedCreateWithoutProductionsInput> | production_workersCreateWithoutProductionsInput[] | production_workersUncheckedCreateWithoutProductionsInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutProductionsInput | production_workersCreateOrConnectWithoutProductionsInput[]
    upsert?: production_workersUpsertWithWhereUniqueWithoutProductionsInput | production_workersUpsertWithWhereUniqueWithoutProductionsInput[]
    createMany?: production_workersCreateManyProductionsInputEnvelope
    set?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    disconnect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    delete?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    update?: production_workersUpdateWithWhereUniqueWithoutProductionsInput | production_workersUpdateWithWhereUniqueWithoutProductionsInput[]
    updateMany?: production_workersUpdateManyWithWhereWithoutProductionsInput | production_workersUpdateManyWithWhereWithoutProductionsInput[]
    deleteMany?: production_workersScalarWhereInput | production_workersScalarWhereInput[]
  }

  export type brick_typesUpdateOneRequiredWithoutProductionsNestedInput = {
    create?: XOR<brick_typesCreateWithoutProductionsInput, brick_typesUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: brick_typesCreateOrConnectWithoutProductionsInput
    upsert?: brick_typesUpsertWithoutProductionsInput
    connect?: brick_typesWhereUniqueInput
    update?: XOR<XOR<brick_typesUpdateToOneWithWhereWithoutProductionsInput, brick_typesUpdateWithoutProductionsInput>, brick_typesUncheckedUpdateWithoutProductionsInput>
  }

  export type machinesUpdateOneRequiredWithoutProductionsNestedInput = {
    create?: XOR<machinesCreateWithoutProductionsInput, machinesUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: machinesCreateOrConnectWithoutProductionsInput
    upsert?: machinesUpsertWithoutProductionsInput
    connect?: machinesWhereUniqueInput
    update?: XOR<XOR<machinesUpdateToOneWithWhereWithoutProductionsInput, machinesUpdateWithoutProductionsInput>, machinesUncheckedUpdateWithoutProductionsInput>
  }

  export type production_workersUncheckedUpdateManyWithoutProductionsNestedInput = {
    create?: XOR<production_workersCreateWithoutProductionsInput, production_workersUncheckedCreateWithoutProductionsInput> | production_workersCreateWithoutProductionsInput[] | production_workersUncheckedCreateWithoutProductionsInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutProductionsInput | production_workersCreateOrConnectWithoutProductionsInput[]
    upsert?: production_workersUpsertWithWhereUniqueWithoutProductionsInput | production_workersUpsertWithWhereUniqueWithoutProductionsInput[]
    createMany?: production_workersCreateManyProductionsInputEnvelope
    set?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    disconnect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    delete?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    update?: production_workersUpdateWithWhereUniqueWithoutProductionsInput | production_workersUpdateWithWhereUniqueWithoutProductionsInput[]
    updateMany?: production_workersUpdateManyWithWhereWithoutProductionsInput | production_workersUpdateManyWithWhereWithoutProductionsInput[]
    deleteMany?: production_workersScalarWhereInput | production_workersScalarWhereInput[]
  }

  export type expensesCreateNestedManyWithoutRaw_materialsInput = {
    create?: XOR<expensesCreateWithoutRaw_materialsInput, expensesUncheckedCreateWithoutRaw_materialsInput> | expensesCreateWithoutRaw_materialsInput[] | expensesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutRaw_materialsInput | expensesCreateOrConnectWithoutRaw_materialsInput[]
    createMany?: expensesCreateManyRaw_materialsInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type material_usagesCreateNestedManyWithoutRaw_materialsInput = {
    create?: XOR<material_usagesCreateWithoutRaw_materialsInput, material_usagesUncheckedCreateWithoutRaw_materialsInput> | material_usagesCreateWithoutRaw_materialsInput[] | material_usagesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutRaw_materialsInput | material_usagesCreateOrConnectWithoutRaw_materialsInput[]
    createMany?: material_usagesCreateManyRaw_materialsInputEnvelope
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutRaw_materialsInput = {
    create?: XOR<expensesCreateWithoutRaw_materialsInput, expensesUncheckedCreateWithoutRaw_materialsInput> | expensesCreateWithoutRaw_materialsInput[] | expensesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutRaw_materialsInput | expensesCreateOrConnectWithoutRaw_materialsInput[]
    createMany?: expensesCreateManyRaw_materialsInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type material_usagesUncheckedCreateNestedManyWithoutRaw_materialsInput = {
    create?: XOR<material_usagesCreateWithoutRaw_materialsInput, material_usagesUncheckedCreateWithoutRaw_materialsInput> | material_usagesCreateWithoutRaw_materialsInput[] | material_usagesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutRaw_materialsInput | material_usagesCreateOrConnectWithoutRaw_materialsInput[]
    createMany?: material_usagesCreateManyRaw_materialsInputEnvelope
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
  }

  export type expensesUpdateManyWithoutRaw_materialsNestedInput = {
    create?: XOR<expensesCreateWithoutRaw_materialsInput, expensesUncheckedCreateWithoutRaw_materialsInput> | expensesCreateWithoutRaw_materialsInput[] | expensesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutRaw_materialsInput | expensesCreateOrConnectWithoutRaw_materialsInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutRaw_materialsInput | expensesUpsertWithWhereUniqueWithoutRaw_materialsInput[]
    createMany?: expensesCreateManyRaw_materialsInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutRaw_materialsInput | expensesUpdateWithWhereUniqueWithoutRaw_materialsInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutRaw_materialsInput | expensesUpdateManyWithWhereWithoutRaw_materialsInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type material_usagesUpdateManyWithoutRaw_materialsNestedInput = {
    create?: XOR<material_usagesCreateWithoutRaw_materialsInput, material_usagesUncheckedCreateWithoutRaw_materialsInput> | material_usagesCreateWithoutRaw_materialsInput[] | material_usagesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutRaw_materialsInput | material_usagesCreateOrConnectWithoutRaw_materialsInput[]
    upsert?: material_usagesUpsertWithWhereUniqueWithoutRaw_materialsInput | material_usagesUpsertWithWhereUniqueWithoutRaw_materialsInput[]
    createMany?: material_usagesCreateManyRaw_materialsInputEnvelope
    set?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    disconnect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    delete?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    update?: material_usagesUpdateWithWhereUniqueWithoutRaw_materialsInput | material_usagesUpdateWithWhereUniqueWithoutRaw_materialsInput[]
    updateMany?: material_usagesUpdateManyWithWhereWithoutRaw_materialsInput | material_usagesUpdateManyWithWhereWithoutRaw_materialsInput[]
    deleteMany?: material_usagesScalarWhereInput | material_usagesScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutRaw_materialsNestedInput = {
    create?: XOR<expensesCreateWithoutRaw_materialsInput, expensesUncheckedCreateWithoutRaw_materialsInput> | expensesCreateWithoutRaw_materialsInput[] | expensesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutRaw_materialsInput | expensesCreateOrConnectWithoutRaw_materialsInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutRaw_materialsInput | expensesUpsertWithWhereUniqueWithoutRaw_materialsInput[]
    createMany?: expensesCreateManyRaw_materialsInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutRaw_materialsInput | expensesUpdateWithWhereUniqueWithoutRaw_materialsInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutRaw_materialsInput | expensesUpdateManyWithWhereWithoutRaw_materialsInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type material_usagesUncheckedUpdateManyWithoutRaw_materialsNestedInput = {
    create?: XOR<material_usagesCreateWithoutRaw_materialsInput, material_usagesUncheckedCreateWithoutRaw_materialsInput> | material_usagesCreateWithoutRaw_materialsInput[] | material_usagesUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: material_usagesCreateOrConnectWithoutRaw_materialsInput | material_usagesCreateOrConnectWithoutRaw_materialsInput[]
    upsert?: material_usagesUpsertWithWhereUniqueWithoutRaw_materialsInput | material_usagesUpsertWithWhereUniqueWithoutRaw_materialsInput[]
    createMany?: material_usagesCreateManyRaw_materialsInputEnvelope
    set?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    disconnect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    delete?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    connect?: material_usagesWhereUniqueInput | material_usagesWhereUniqueInput[]
    update?: material_usagesUpdateWithWhereUniqueWithoutRaw_materialsInput | material_usagesUpdateWithWhereUniqueWithoutRaw_materialsInput[]
    updateMany?: material_usagesUpdateManyWithWhereWithoutRaw_materialsInput | material_usagesUpdateManyWithWhereWithoutRaw_materialsInput[]
    deleteMany?: material_usagesScalarWhereInput | material_usagesScalarWhereInput[]
  }

  export type workersCreateNestedOneWithoutWeekly_settlementsInput = {
    create?: XOR<workersCreateWithoutWeekly_settlementsInput, workersUncheckedCreateWithoutWeekly_settlementsInput>
    connectOrCreate?: workersCreateOrConnectWithoutWeekly_settlementsInput
    connect?: workersWhereUniqueInput
  }

  export type workersUpdateOneRequiredWithoutWeekly_settlementsNestedInput = {
    create?: XOR<workersCreateWithoutWeekly_settlementsInput, workersUncheckedCreateWithoutWeekly_settlementsInput>
    connectOrCreate?: workersCreateOrConnectWithoutWeekly_settlementsInput
    upsert?: workersUpsertWithoutWeekly_settlementsInput
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutWeekly_settlementsInput, workersUpdateWithoutWeekly_settlementsInput>, workersUncheckedUpdateWithoutWeekly_settlementsInput>
  }

  export type workersCreateNestedOneWithoutWorker_advancesInput = {
    create?: XOR<workersCreateWithoutWorker_advancesInput, workersUncheckedCreateWithoutWorker_advancesInput>
    connectOrCreate?: workersCreateOrConnectWithoutWorker_advancesInput
    connect?: workersWhereUniqueInput
  }

  export type workersUpdateOneRequiredWithoutWorker_advancesNestedInput = {
    create?: XOR<workersCreateWithoutWorker_advancesInput, workersUncheckedCreateWithoutWorker_advancesInput>
    connectOrCreate?: workersCreateOrConnectWithoutWorker_advancesInput
    upsert?: workersUpsertWithoutWorker_advancesInput
    connect?: workersWhereUniqueInput
    update?: XOR<XOR<workersUpdateToOneWithWhereWithoutWorker_advancesInput, workersUpdateWithoutWorker_advancesInput>, workersUncheckedUpdateWithoutWorker_advancesInput>
  }

  export type attendanceCreateNestedManyWithoutWorkersInput = {
    create?: XOR<attendanceCreateWithoutWorkersInput, attendanceUncheckedCreateWithoutWorkersInput> | attendanceCreateWithoutWorkersInput[] | attendanceUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutWorkersInput | attendanceCreateOrConnectWithoutWorkersInput[]
    createMany?: attendanceCreateManyWorkersInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type daily_wagesCreateNestedManyWithoutWorkersInput = {
    create?: XOR<daily_wagesCreateWithoutWorkersInput, daily_wagesUncheckedCreateWithoutWorkersInput> | daily_wagesCreateWithoutWorkersInput[] | daily_wagesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: daily_wagesCreateOrConnectWithoutWorkersInput | daily_wagesCreateOrConnectWithoutWorkersInput[]
    createMany?: daily_wagesCreateManyWorkersInputEnvelope
    connect?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutWorkersInput = {
    create?: XOR<expensesCreateWithoutWorkersInput, expensesUncheckedCreateWithoutWorkersInput> | expensesCreateWithoutWorkersInput[] | expensesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutWorkersInput | expensesCreateOrConnectWithoutWorkersInput[]
    createMany?: expensesCreateManyWorkersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type production_workersCreateNestedManyWithoutWorkersInput = {
    create?: XOR<production_workersCreateWithoutWorkersInput, production_workersUncheckedCreateWithoutWorkersInput> | production_workersCreateWithoutWorkersInput[] | production_workersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutWorkersInput | production_workersCreateOrConnectWithoutWorkersInput[]
    createMany?: production_workersCreateManyWorkersInputEnvelope
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
  }

  export type weekly_settlementsCreateNestedManyWithoutWorkersInput = {
    create?: XOR<weekly_settlementsCreateWithoutWorkersInput, weekly_settlementsUncheckedCreateWithoutWorkersInput> | weekly_settlementsCreateWithoutWorkersInput[] | weekly_settlementsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: weekly_settlementsCreateOrConnectWithoutWorkersInput | weekly_settlementsCreateOrConnectWithoutWorkersInput[]
    createMany?: weekly_settlementsCreateManyWorkersInputEnvelope
    connect?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
  }

  export type worker_advancesCreateNestedManyWithoutWorkersInput = {
    create?: XOR<worker_advancesCreateWithoutWorkersInput, worker_advancesUncheckedCreateWithoutWorkersInput> | worker_advancesCreateWithoutWorkersInput[] | worker_advancesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: worker_advancesCreateOrConnectWithoutWorkersInput | worker_advancesCreateOrConnectWithoutWorkersInput[]
    createMany?: worker_advancesCreateManyWorkersInputEnvelope
    connect?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<attendanceCreateWithoutWorkersInput, attendanceUncheckedCreateWithoutWorkersInput> | attendanceCreateWithoutWorkersInput[] | attendanceUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutWorkersInput | attendanceCreateOrConnectWithoutWorkersInput[]
    createMany?: attendanceCreateManyWorkersInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type daily_wagesUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<daily_wagesCreateWithoutWorkersInput, daily_wagesUncheckedCreateWithoutWorkersInput> | daily_wagesCreateWithoutWorkersInput[] | daily_wagesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: daily_wagesCreateOrConnectWithoutWorkersInput | daily_wagesCreateOrConnectWithoutWorkersInput[]
    createMany?: daily_wagesCreateManyWorkersInputEnvelope
    connect?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<expensesCreateWithoutWorkersInput, expensesUncheckedCreateWithoutWorkersInput> | expensesCreateWithoutWorkersInput[] | expensesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutWorkersInput | expensesCreateOrConnectWithoutWorkersInput[]
    createMany?: expensesCreateManyWorkersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type production_workersUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<production_workersCreateWithoutWorkersInput, production_workersUncheckedCreateWithoutWorkersInput> | production_workersCreateWithoutWorkersInput[] | production_workersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutWorkersInput | production_workersCreateOrConnectWithoutWorkersInput[]
    createMany?: production_workersCreateManyWorkersInputEnvelope
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
  }

  export type weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<weekly_settlementsCreateWithoutWorkersInput, weekly_settlementsUncheckedCreateWithoutWorkersInput> | weekly_settlementsCreateWithoutWorkersInput[] | weekly_settlementsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: weekly_settlementsCreateOrConnectWithoutWorkersInput | weekly_settlementsCreateOrConnectWithoutWorkersInput[]
    createMany?: weekly_settlementsCreateManyWorkersInputEnvelope
    connect?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
  }

  export type worker_advancesUncheckedCreateNestedManyWithoutWorkersInput = {
    create?: XOR<worker_advancesCreateWithoutWorkersInput, worker_advancesUncheckedCreateWithoutWorkersInput> | worker_advancesCreateWithoutWorkersInput[] | worker_advancesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: worker_advancesCreateOrConnectWithoutWorkersInput | worker_advancesCreateOrConnectWithoutWorkersInput[]
    createMany?: worker_advancesCreateManyWorkersInputEnvelope
    connect?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
  }

  export type attendanceUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<attendanceCreateWithoutWorkersInput, attendanceUncheckedCreateWithoutWorkersInput> | attendanceCreateWithoutWorkersInput[] | attendanceUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutWorkersInput | attendanceCreateOrConnectWithoutWorkersInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutWorkersInput | attendanceUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: attendanceCreateManyWorkersInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutWorkersInput | attendanceUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutWorkersInput | attendanceUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type daily_wagesUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<daily_wagesCreateWithoutWorkersInput, daily_wagesUncheckedCreateWithoutWorkersInput> | daily_wagesCreateWithoutWorkersInput[] | daily_wagesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: daily_wagesCreateOrConnectWithoutWorkersInput | daily_wagesCreateOrConnectWithoutWorkersInput[]
    upsert?: daily_wagesUpsertWithWhereUniqueWithoutWorkersInput | daily_wagesUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: daily_wagesCreateManyWorkersInputEnvelope
    set?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    disconnect?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    delete?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    connect?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    update?: daily_wagesUpdateWithWhereUniqueWithoutWorkersInput | daily_wagesUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: daily_wagesUpdateManyWithWhereWithoutWorkersInput | daily_wagesUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: daily_wagesScalarWhereInput | daily_wagesScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<expensesCreateWithoutWorkersInput, expensesUncheckedCreateWithoutWorkersInput> | expensesCreateWithoutWorkersInput[] | expensesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutWorkersInput | expensesCreateOrConnectWithoutWorkersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutWorkersInput | expensesUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: expensesCreateManyWorkersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutWorkersInput | expensesUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutWorkersInput | expensesUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type production_workersUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<production_workersCreateWithoutWorkersInput, production_workersUncheckedCreateWithoutWorkersInput> | production_workersCreateWithoutWorkersInput[] | production_workersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutWorkersInput | production_workersCreateOrConnectWithoutWorkersInput[]
    upsert?: production_workersUpsertWithWhereUniqueWithoutWorkersInput | production_workersUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: production_workersCreateManyWorkersInputEnvelope
    set?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    disconnect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    delete?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    update?: production_workersUpdateWithWhereUniqueWithoutWorkersInput | production_workersUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: production_workersUpdateManyWithWhereWithoutWorkersInput | production_workersUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: production_workersScalarWhereInput | production_workersScalarWhereInput[]
  }

  export type weekly_settlementsUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<weekly_settlementsCreateWithoutWorkersInput, weekly_settlementsUncheckedCreateWithoutWorkersInput> | weekly_settlementsCreateWithoutWorkersInput[] | weekly_settlementsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: weekly_settlementsCreateOrConnectWithoutWorkersInput | weekly_settlementsCreateOrConnectWithoutWorkersInput[]
    upsert?: weekly_settlementsUpsertWithWhereUniqueWithoutWorkersInput | weekly_settlementsUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: weekly_settlementsCreateManyWorkersInputEnvelope
    set?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    disconnect?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    delete?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    connect?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    update?: weekly_settlementsUpdateWithWhereUniqueWithoutWorkersInput | weekly_settlementsUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: weekly_settlementsUpdateManyWithWhereWithoutWorkersInput | weekly_settlementsUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: weekly_settlementsScalarWhereInput | weekly_settlementsScalarWhereInput[]
  }

  export type worker_advancesUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<worker_advancesCreateWithoutWorkersInput, worker_advancesUncheckedCreateWithoutWorkersInput> | worker_advancesCreateWithoutWorkersInput[] | worker_advancesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: worker_advancesCreateOrConnectWithoutWorkersInput | worker_advancesCreateOrConnectWithoutWorkersInput[]
    upsert?: worker_advancesUpsertWithWhereUniqueWithoutWorkersInput | worker_advancesUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: worker_advancesCreateManyWorkersInputEnvelope
    set?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    disconnect?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    delete?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    connect?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    update?: worker_advancesUpdateWithWhereUniqueWithoutWorkersInput | worker_advancesUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: worker_advancesUpdateManyWithWhereWithoutWorkersInput | worker_advancesUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: worker_advancesScalarWhereInput | worker_advancesScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<attendanceCreateWithoutWorkersInput, attendanceUncheckedCreateWithoutWorkersInput> | attendanceCreateWithoutWorkersInput[] | attendanceUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutWorkersInput | attendanceCreateOrConnectWithoutWorkersInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutWorkersInput | attendanceUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: attendanceCreateManyWorkersInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutWorkersInput | attendanceUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutWorkersInput | attendanceUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<daily_wagesCreateWithoutWorkersInput, daily_wagesUncheckedCreateWithoutWorkersInput> | daily_wagesCreateWithoutWorkersInput[] | daily_wagesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: daily_wagesCreateOrConnectWithoutWorkersInput | daily_wagesCreateOrConnectWithoutWorkersInput[]
    upsert?: daily_wagesUpsertWithWhereUniqueWithoutWorkersInput | daily_wagesUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: daily_wagesCreateManyWorkersInputEnvelope
    set?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    disconnect?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    delete?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    connect?: daily_wagesWhereUniqueInput | daily_wagesWhereUniqueInput[]
    update?: daily_wagesUpdateWithWhereUniqueWithoutWorkersInput | daily_wagesUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: daily_wagesUpdateManyWithWhereWithoutWorkersInput | daily_wagesUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: daily_wagesScalarWhereInput | daily_wagesScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<expensesCreateWithoutWorkersInput, expensesUncheckedCreateWithoutWorkersInput> | expensesCreateWithoutWorkersInput[] | expensesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutWorkersInput | expensesCreateOrConnectWithoutWorkersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutWorkersInput | expensesUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: expensesCreateManyWorkersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutWorkersInput | expensesUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutWorkersInput | expensesUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type production_workersUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<production_workersCreateWithoutWorkersInput, production_workersUncheckedCreateWithoutWorkersInput> | production_workersCreateWithoutWorkersInput[] | production_workersUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: production_workersCreateOrConnectWithoutWorkersInput | production_workersCreateOrConnectWithoutWorkersInput[]
    upsert?: production_workersUpsertWithWhereUniqueWithoutWorkersInput | production_workersUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: production_workersCreateManyWorkersInputEnvelope
    set?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    disconnect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    delete?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    connect?: production_workersWhereUniqueInput | production_workersWhereUniqueInput[]
    update?: production_workersUpdateWithWhereUniqueWithoutWorkersInput | production_workersUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: production_workersUpdateManyWithWhereWithoutWorkersInput | production_workersUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: production_workersScalarWhereInput | production_workersScalarWhereInput[]
  }

  export type weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<weekly_settlementsCreateWithoutWorkersInput, weekly_settlementsUncheckedCreateWithoutWorkersInput> | weekly_settlementsCreateWithoutWorkersInput[] | weekly_settlementsUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: weekly_settlementsCreateOrConnectWithoutWorkersInput | weekly_settlementsCreateOrConnectWithoutWorkersInput[]
    upsert?: weekly_settlementsUpsertWithWhereUniqueWithoutWorkersInput | weekly_settlementsUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: weekly_settlementsCreateManyWorkersInputEnvelope
    set?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    disconnect?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    delete?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    connect?: weekly_settlementsWhereUniqueInput | weekly_settlementsWhereUniqueInput[]
    update?: weekly_settlementsUpdateWithWhereUniqueWithoutWorkersInput | weekly_settlementsUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: weekly_settlementsUpdateManyWithWhereWithoutWorkersInput | weekly_settlementsUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: weekly_settlementsScalarWhereInput | weekly_settlementsScalarWhereInput[]
  }

  export type worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput = {
    create?: XOR<worker_advancesCreateWithoutWorkersInput, worker_advancesUncheckedCreateWithoutWorkersInput> | worker_advancesCreateWithoutWorkersInput[] | worker_advancesUncheckedCreateWithoutWorkersInput[]
    connectOrCreate?: worker_advancesCreateOrConnectWithoutWorkersInput | worker_advancesCreateOrConnectWithoutWorkersInput[]
    upsert?: worker_advancesUpsertWithWhereUniqueWithoutWorkersInput | worker_advancesUpsertWithWhereUniqueWithoutWorkersInput[]
    createMany?: worker_advancesCreateManyWorkersInputEnvelope
    set?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    disconnect?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    delete?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    connect?: worker_advancesWhereUniqueInput | worker_advancesWhereUniqueInput[]
    update?: worker_advancesUpdateWithWhereUniqueWithoutWorkersInput | worker_advancesUpdateWithWhereUniqueWithoutWorkersInput[]
    updateMany?: worker_advancesUpdateManyWithWhereWithoutWorkersInput | worker_advancesUpdateManyWithWhereWithoutWorkersInput[]
    deleteMany?: worker_advancesScalarWhereInput | worker_advancesScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type workersCreateWithoutAttendanceInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    daily_wages?: daily_wagesCreateNestedManyWithoutWorkersInput
    expenses?: expensesCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutAttendanceInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    daily_wages?: daily_wagesUncheckedCreateNestedManyWithoutWorkersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersUncheckedCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutAttendanceInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutAttendanceInput, workersUncheckedCreateWithoutAttendanceInput>
  }

  export type workersUpsertWithoutAttendanceInput = {
    update: XOR<workersUpdateWithoutAttendanceInput, workersUncheckedUpdateWithoutAttendanceInput>
    create: XOR<workersCreateWithoutAttendanceInput, workersUncheckedCreateWithoutAttendanceInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutAttendanceInput, workersUncheckedUpdateWithoutAttendanceInput>
  }

  export type workersUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_wages?: daily_wagesUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_wages?: daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUncheckedUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type dispatchesCreateWithoutBrick_typesInput = {
    id: string
    date: Date | string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
    customers: customersCreateNestedOneWithoutDispatchesInput
  }

  export type dispatchesUncheckedCreateWithoutBrick_typesInput = {
    id: string
    date: Date | string
    customerId: string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type dispatchesCreateOrConnectWithoutBrick_typesInput = {
    where: dispatchesWhereUniqueInput
    create: XOR<dispatchesCreateWithoutBrick_typesInput, dispatchesUncheckedCreateWithoutBrick_typesInput>
  }

  export type dispatchesCreateManyBrick_typesInputEnvelope = {
    data: dispatchesCreateManyBrick_typesInput | dispatchesCreateManyBrick_typesInput[]
  }

  export type productionsCreateWithoutBrick_typesInput = {
    id: string
    date: Date | string
    shift: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    production_workers?: production_workersCreateNestedManyWithoutProductionsInput
    machines: machinesCreateNestedOneWithoutProductionsInput
  }

  export type productionsUncheckedCreateWithoutBrick_typesInput = {
    id: string
    date: Date | string
    machineId: string
    shift: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    production_workers?: production_workersUncheckedCreateNestedManyWithoutProductionsInput
  }

  export type productionsCreateOrConnectWithoutBrick_typesInput = {
    where: productionsWhereUniqueInput
    create: XOR<productionsCreateWithoutBrick_typesInput, productionsUncheckedCreateWithoutBrick_typesInput>
  }

  export type productionsCreateManyBrick_typesInputEnvelope = {
    data: productionsCreateManyBrick_typesInput | productionsCreateManyBrick_typesInput[]
  }

  export type dispatchesUpsertWithWhereUniqueWithoutBrick_typesInput = {
    where: dispatchesWhereUniqueInput
    update: XOR<dispatchesUpdateWithoutBrick_typesInput, dispatchesUncheckedUpdateWithoutBrick_typesInput>
    create: XOR<dispatchesCreateWithoutBrick_typesInput, dispatchesUncheckedCreateWithoutBrick_typesInput>
  }

  export type dispatchesUpdateWithWhereUniqueWithoutBrick_typesInput = {
    where: dispatchesWhereUniqueInput
    data: XOR<dispatchesUpdateWithoutBrick_typesInput, dispatchesUncheckedUpdateWithoutBrick_typesInput>
  }

  export type dispatchesUpdateManyWithWhereWithoutBrick_typesInput = {
    where: dispatchesScalarWhereInput
    data: XOR<dispatchesUpdateManyMutationInput, dispatchesUncheckedUpdateManyWithoutBrick_typesInput>
  }

  export type dispatchesScalarWhereInput = {
    AND?: dispatchesScalarWhereInput | dispatchesScalarWhereInput[]
    OR?: dispatchesScalarWhereInput[]
    NOT?: dispatchesScalarWhereInput | dispatchesScalarWhereInput[]
    id?: StringFilter<"dispatches"> | string
    date?: DateTimeFilter<"dispatches"> | Date | string
    customerId?: StringFilter<"dispatches"> | string
    brickTypeId?: StringFilter<"dispatches"> | string
    quantity?: IntFilter<"dispatches"> | number
    distanceKm?: FloatNullableFilter<"dispatches"> | number | null
    vehicleType?: StringFilter<"dispatches"> | string
    transportCost?: FloatFilter<"dispatches"> | number
    loadingCost?: FloatFilter<"dispatches"> | number
    paymentStatus?: StringFilter<"dispatches"> | string
    totalAmount?: FloatFilter<"dispatches"> | number
    paidAmount?: FloatFilter<"dispatches"> | number
    createdAt?: DateTimeFilter<"dispatches"> | Date | string
    updatedAt?: DateTimeFilter<"dispatches"> | Date | string
  }

  export type productionsUpsertWithWhereUniqueWithoutBrick_typesInput = {
    where: productionsWhereUniqueInput
    update: XOR<productionsUpdateWithoutBrick_typesInput, productionsUncheckedUpdateWithoutBrick_typesInput>
    create: XOR<productionsCreateWithoutBrick_typesInput, productionsUncheckedCreateWithoutBrick_typesInput>
  }

  export type productionsUpdateWithWhereUniqueWithoutBrick_typesInput = {
    where: productionsWhereUniqueInput
    data: XOR<productionsUpdateWithoutBrick_typesInput, productionsUncheckedUpdateWithoutBrick_typesInput>
  }

  export type productionsUpdateManyWithWhereWithoutBrick_typesInput = {
    where: productionsScalarWhereInput
    data: XOR<productionsUpdateManyMutationInput, productionsUncheckedUpdateManyWithoutBrick_typesInput>
  }

  export type productionsScalarWhereInput = {
    AND?: productionsScalarWhereInput | productionsScalarWhereInput[]
    OR?: productionsScalarWhereInput[]
    NOT?: productionsScalarWhereInput | productionsScalarWhereInput[]
    id?: StringFilter<"productions"> | string
    date?: DateTimeFilter<"productions"> | Date | string
    machineId?: StringFilter<"productions"> | string
    shift?: StringFilter<"productions"> | string
    brickTypeId?: StringFilter<"productions"> | string
    quantity?: IntFilter<"productions"> | number
    createdAt?: DateTimeFilter<"productions"> | Date | string
    updatedAt?: DateTimeFilter<"productions"> | Date | string
  }

  export type dispatchesCreateWithoutCustomersInput = {
    id: string
    date: Date | string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
    brick_types: brick_typesCreateNestedOneWithoutDispatchesInput
  }

  export type dispatchesUncheckedCreateWithoutCustomersInput = {
    id: string
    date: Date | string
    brickTypeId: string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type dispatchesCreateOrConnectWithoutCustomersInput = {
    where: dispatchesWhereUniqueInput
    create: XOR<dispatchesCreateWithoutCustomersInput, dispatchesUncheckedCreateWithoutCustomersInput>
  }

  export type dispatchesCreateManyCustomersInputEnvelope = {
    data: dispatchesCreateManyCustomersInput | dispatchesCreateManyCustomersInput[]
  }

  export type dispatchesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: dispatchesWhereUniqueInput
    update: XOR<dispatchesUpdateWithoutCustomersInput, dispatchesUncheckedUpdateWithoutCustomersInput>
    create: XOR<dispatchesCreateWithoutCustomersInput, dispatchesUncheckedCreateWithoutCustomersInput>
  }

  export type dispatchesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: dispatchesWhereUniqueInput
    data: XOR<dispatchesUpdateWithoutCustomersInput, dispatchesUncheckedUpdateWithoutCustomersInput>
  }

  export type dispatchesUpdateManyWithWhereWithoutCustomersInput = {
    where: dispatchesScalarWhereInput
    data: XOR<dispatchesUpdateManyMutationInput, dispatchesUncheckedUpdateManyWithoutCustomersInput>
  }

  export type workersCreateWithoutDaily_wagesInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceCreateNestedManyWithoutWorkersInput
    expenses?: expensesCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutDaily_wagesInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutWorkersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersUncheckedCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutDaily_wagesInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutDaily_wagesInput, workersUncheckedCreateWithoutDaily_wagesInput>
  }

  export type workersUpsertWithoutDaily_wagesInput = {
    update: XOR<workersUpdateWithoutDaily_wagesInput, workersUncheckedUpdateWithoutDaily_wagesInput>
    create: XOR<workersCreateWithoutDaily_wagesInput, workersUncheckedCreateWithoutDaily_wagesInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutDaily_wagesInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutDaily_wagesInput, workersUncheckedUpdateWithoutDaily_wagesInput>
  }

  export type workersUpdateWithoutDaily_wagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutDaily_wagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUncheckedUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type brick_typesCreateWithoutDispatchesInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    productions?: productionsCreateNestedManyWithoutBrick_typesInput
  }

  export type brick_typesUncheckedCreateWithoutDispatchesInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    productions?: productionsUncheckedCreateNestedManyWithoutBrick_typesInput
  }

  export type brick_typesCreateOrConnectWithoutDispatchesInput = {
    where: brick_typesWhereUniqueInput
    create: XOR<brick_typesCreateWithoutDispatchesInput, brick_typesUncheckedCreateWithoutDispatchesInput>
  }

  export type customersCreateWithoutDispatchesInput = {
    id: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type customersUncheckedCreateWithoutDispatchesInput = {
    id: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type customersCreateOrConnectWithoutDispatchesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutDispatchesInput, customersUncheckedCreateWithoutDispatchesInput>
  }

  export type brick_typesUpsertWithoutDispatchesInput = {
    update: XOR<brick_typesUpdateWithoutDispatchesInput, brick_typesUncheckedUpdateWithoutDispatchesInput>
    create: XOR<brick_typesCreateWithoutDispatchesInput, brick_typesUncheckedCreateWithoutDispatchesInput>
    where?: brick_typesWhereInput
  }

  export type brick_typesUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: brick_typesWhereInput
    data: XOR<brick_typesUpdateWithoutDispatchesInput, brick_typesUncheckedUpdateWithoutDispatchesInput>
  }

  export type brick_typesUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: productionsUpdateManyWithoutBrick_typesNestedInput
  }

  export type brick_typesUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: productionsUncheckedUpdateManyWithoutBrick_typesNestedInput
  }

  export type customersUpsertWithoutDispatchesInput = {
    update: XOR<customersUpdateWithoutDispatchesInput, customersUncheckedUpdateWithoutDispatchesInput>
    create: XOR<customersCreateWithoutDispatchesInput, customersUncheckedCreateWithoutDispatchesInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutDispatchesInput, customersUncheckedUpdateWithoutDispatchesInput>
  }

  export type customersUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsCreateWithoutExpensesInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    material_usages?: material_usagesCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsUncheckedCreateWithoutExpensesInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    material_usages?: material_usagesUncheckedCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsCreateOrConnectWithoutExpensesInput = {
    where: raw_materialsWhereUniqueInput
    create: XOR<raw_materialsCreateWithoutExpensesInput, raw_materialsUncheckedCreateWithoutExpensesInput>
  }

  export type workersCreateWithoutExpensesInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutExpensesInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesUncheckedCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersUncheckedCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutExpensesInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutExpensesInput, workersUncheckedCreateWithoutExpensesInput>
  }

  export type material_usagesCreateWithoutExpensesInput = {
    id: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    createdAt?: Date | string
    raw_materials: raw_materialsCreateNestedOneWithoutMaterial_usagesInput
  }

  export type material_usagesUncheckedCreateWithoutExpensesInput = {
    id: string
    materialId: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type material_usagesCreateOrConnectWithoutExpensesInput = {
    where: material_usagesWhereUniqueInput
    create: XOR<material_usagesCreateWithoutExpensesInput, material_usagesUncheckedCreateWithoutExpensesInput>
  }

  export type material_usagesCreateManyExpensesInputEnvelope = {
    data: material_usagesCreateManyExpensesInput | material_usagesCreateManyExpensesInput[]
  }

  export type raw_materialsUpsertWithoutExpensesInput = {
    update: XOR<raw_materialsUpdateWithoutExpensesInput, raw_materialsUncheckedUpdateWithoutExpensesInput>
    create: XOR<raw_materialsCreateWithoutExpensesInput, raw_materialsUncheckedCreateWithoutExpensesInput>
    where?: raw_materialsWhereInput
  }

  export type raw_materialsUpdateToOneWithWhereWithoutExpensesInput = {
    where?: raw_materialsWhereInput
    data: XOR<raw_materialsUpdateWithoutExpensesInput, raw_materialsUncheckedUpdateWithoutExpensesInput>
  }

  export type raw_materialsUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material_usages?: material_usagesUpdateManyWithoutRaw_materialsNestedInput
  }

  export type raw_materialsUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material_usages?: material_usagesUncheckedUpdateManyWithoutRaw_materialsNestedInput
  }

  export type workersUpsertWithoutExpensesInput = {
    update: XOR<workersUpdateWithoutExpensesInput, workersUncheckedUpdateWithoutExpensesInput>
    create: XOR<workersCreateWithoutExpensesInput, workersUncheckedCreateWithoutExpensesInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutExpensesInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutExpensesInput, workersUncheckedUpdateWithoutExpensesInput>
  }

  export type workersUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUncheckedUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type material_usagesUpsertWithWhereUniqueWithoutExpensesInput = {
    where: material_usagesWhereUniqueInput
    update: XOR<material_usagesUpdateWithoutExpensesInput, material_usagesUncheckedUpdateWithoutExpensesInput>
    create: XOR<material_usagesCreateWithoutExpensesInput, material_usagesUncheckedCreateWithoutExpensesInput>
  }

  export type material_usagesUpdateWithWhereUniqueWithoutExpensesInput = {
    where: material_usagesWhereUniqueInput
    data: XOR<material_usagesUpdateWithoutExpensesInput, material_usagesUncheckedUpdateWithoutExpensesInput>
  }

  export type material_usagesUpdateManyWithWhereWithoutExpensesInput = {
    where: material_usagesScalarWhereInput
    data: XOR<material_usagesUpdateManyMutationInput, material_usagesUncheckedUpdateManyWithoutExpensesInput>
  }

  export type material_usagesScalarWhereInput = {
    AND?: material_usagesScalarWhereInput | material_usagesScalarWhereInput[]
    OR?: material_usagesScalarWhereInput[]
    NOT?: material_usagesScalarWhereInput | material_usagesScalarWhereInput[]
    id?: StringFilter<"material_usages"> | string
    materialId?: StringFilter<"material_usages"> | string
    quantity?: FloatFilter<"material_usages"> | number
    pricePerUnit?: FloatFilter<"material_usages"> | number
    totalCost?: FloatFilter<"material_usages"> | number
    date?: DateTimeFilter<"material_usages"> | Date | string
    expenseId?: StringNullableFilter<"material_usages"> | string | null
    createdAt?: DateTimeFilter<"material_usages"> | Date | string
  }

  export type productionsCreateWithoutMachinesInput = {
    id: string
    date: Date | string
    shift: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    production_workers?: production_workersCreateNestedManyWithoutProductionsInput
    brick_types: brick_typesCreateNestedOneWithoutProductionsInput
  }

  export type productionsUncheckedCreateWithoutMachinesInput = {
    id: string
    date: Date | string
    shift: string
    brickTypeId: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    production_workers?: production_workersUncheckedCreateNestedManyWithoutProductionsInput
  }

  export type productionsCreateOrConnectWithoutMachinesInput = {
    where: productionsWhereUniqueInput
    create: XOR<productionsCreateWithoutMachinesInput, productionsUncheckedCreateWithoutMachinesInput>
  }

  export type productionsCreateManyMachinesInputEnvelope = {
    data: productionsCreateManyMachinesInput | productionsCreateManyMachinesInput[]
  }

  export type productionsUpsertWithWhereUniqueWithoutMachinesInput = {
    where: productionsWhereUniqueInput
    update: XOR<productionsUpdateWithoutMachinesInput, productionsUncheckedUpdateWithoutMachinesInput>
    create: XOR<productionsCreateWithoutMachinesInput, productionsUncheckedCreateWithoutMachinesInput>
  }

  export type productionsUpdateWithWhereUniqueWithoutMachinesInput = {
    where: productionsWhereUniqueInput
    data: XOR<productionsUpdateWithoutMachinesInput, productionsUncheckedUpdateWithoutMachinesInput>
  }

  export type productionsUpdateManyWithWhereWithoutMachinesInput = {
    where: productionsScalarWhereInput
    data: XOR<productionsUpdateManyMutationInput, productionsUncheckedUpdateManyWithoutMachinesInput>
  }

  export type expensesCreateWithoutMaterial_usagesInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    createdAt?: Date | string
    updatedAt: Date | string
    raw_materials?: raw_materialsCreateNestedOneWithoutExpensesInput
    workers?: workersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutMaterial_usagesInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    workerId?: string | null
    materialId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type expensesCreateOrConnectWithoutMaterial_usagesInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutMaterial_usagesInput, expensesUncheckedCreateWithoutMaterial_usagesInput>
  }

  export type raw_materialsCreateWithoutMaterial_usagesInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    expenses?: expensesCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsUncheckedCreateWithoutMaterial_usagesInput = {
    id: string
    name: string
    unit: string
    description?: string | null
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    expenses?: expensesUncheckedCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsCreateOrConnectWithoutMaterial_usagesInput = {
    where: raw_materialsWhereUniqueInput
    create: XOR<raw_materialsCreateWithoutMaterial_usagesInput, raw_materialsUncheckedCreateWithoutMaterial_usagesInput>
  }

  export type expensesUpsertWithoutMaterial_usagesInput = {
    update: XOR<expensesUpdateWithoutMaterial_usagesInput, expensesUncheckedUpdateWithoutMaterial_usagesInput>
    create: XOR<expensesCreateWithoutMaterial_usagesInput, expensesUncheckedCreateWithoutMaterial_usagesInput>
    where?: expensesWhereInput
  }

  export type expensesUpdateToOneWithWhereWithoutMaterial_usagesInput = {
    where?: expensesWhereInput
    data: XOR<expensesUpdateWithoutMaterial_usagesInput, expensesUncheckedUpdateWithoutMaterial_usagesInput>
  }

  export type expensesUpdateWithoutMaterial_usagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw_materials?: raw_materialsUpdateOneWithoutExpensesNestedInput
    workers?: workersUpdateOneWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutMaterial_usagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_materialsUpsertWithoutMaterial_usagesInput = {
    update: XOR<raw_materialsUpdateWithoutMaterial_usagesInput, raw_materialsUncheckedUpdateWithoutMaterial_usagesInput>
    create: XOR<raw_materialsCreateWithoutMaterial_usagesInput, raw_materialsUncheckedCreateWithoutMaterial_usagesInput>
    where?: raw_materialsWhereInput
  }

  export type raw_materialsUpdateToOneWithWhereWithoutMaterial_usagesInput = {
    where?: raw_materialsWhereInput
    data: XOR<raw_materialsUpdateWithoutMaterial_usagesInput, raw_materialsUncheckedUpdateWithoutMaterial_usagesInput>
  }

  export type raw_materialsUpdateWithoutMaterial_usagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expensesUpdateManyWithoutRaw_materialsNestedInput
  }

  export type raw_materialsUncheckedUpdateWithoutMaterial_usagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expensesUncheckedUpdateManyWithoutRaw_materialsNestedInput
  }

  export type workersCreateWithoutProduction_workersInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesCreateNestedManyWithoutWorkersInput
    expenses?: expensesCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutProduction_workersInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesUncheckedCreateNestedManyWithoutWorkersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutProduction_workersInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutProduction_workersInput, workersUncheckedCreateWithoutProduction_workersInput>
  }

  export type productionsCreateWithoutProduction_workersInput = {
    id: string
    date: Date | string
    shift: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
    brick_types: brick_typesCreateNestedOneWithoutProductionsInput
    machines: machinesCreateNestedOneWithoutProductionsInput
  }

  export type productionsUncheckedCreateWithoutProduction_workersInput = {
    id: string
    date: Date | string
    machineId: string
    shift: string
    brickTypeId: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productionsCreateOrConnectWithoutProduction_workersInput = {
    where: productionsWhereUniqueInput
    create: XOR<productionsCreateWithoutProduction_workersInput, productionsUncheckedCreateWithoutProduction_workersInput>
  }

  export type workersUpsertWithoutProduction_workersInput = {
    update: XOR<workersUpdateWithoutProduction_workersInput, workersUncheckedUpdateWithoutProduction_workersInput>
    create: XOR<workersCreateWithoutProduction_workersInput, workersUncheckedCreateWithoutProduction_workersInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutProduction_workersInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutProduction_workersInput, workersUncheckedUpdateWithoutProduction_workersInput>
  }

  export type workersUpdateWithoutProduction_workersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutProduction_workersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type productionsUpsertWithoutProduction_workersInput = {
    update: XOR<productionsUpdateWithoutProduction_workersInput, productionsUncheckedUpdateWithoutProduction_workersInput>
    create: XOR<productionsCreateWithoutProduction_workersInput, productionsUncheckedCreateWithoutProduction_workersInput>
    where?: productionsWhereInput
  }

  export type productionsUpdateToOneWithWhereWithoutProduction_workersInput = {
    where?: productionsWhereInput
    data: XOR<productionsUpdateWithoutProduction_workersInput, productionsUncheckedUpdateWithoutProduction_workersInput>
  }

  export type productionsUpdateWithoutProduction_workersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brick_types?: brick_typesUpdateOneRequiredWithoutProductionsNestedInput
    machines?: machinesUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type productionsUncheckedUpdateWithoutProduction_workersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    machineId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersCreateWithoutProductionsInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    workers: workersCreateNestedOneWithoutProduction_workersInput
  }

  export type production_workersUncheckedCreateWithoutProductionsInput = {
    id: string
    workerId: string
    quantity: number
    createdAt?: Date | string
  }

  export type production_workersCreateOrConnectWithoutProductionsInput = {
    where: production_workersWhereUniqueInput
    create: XOR<production_workersCreateWithoutProductionsInput, production_workersUncheckedCreateWithoutProductionsInput>
  }

  export type production_workersCreateManyProductionsInputEnvelope = {
    data: production_workersCreateManyProductionsInput | production_workersCreateManyProductionsInput[]
  }

  export type brick_typesCreateWithoutProductionsInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    dispatches?: dispatchesCreateNestedManyWithoutBrick_typesInput
  }

  export type brick_typesUncheckedCreateWithoutProductionsInput = {
    id: string
    size: string
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    dispatches?: dispatchesUncheckedCreateNestedManyWithoutBrick_typesInput
  }

  export type brick_typesCreateOrConnectWithoutProductionsInput = {
    where: brick_typesWhereUniqueInput
    create: XOR<brick_typesCreateWithoutProductionsInput, brick_typesUncheckedCreateWithoutProductionsInput>
  }

  export type machinesCreateWithoutProductionsInput = {
    id: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type machinesUncheckedCreateWithoutProductionsInput = {
    id: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type machinesCreateOrConnectWithoutProductionsInput = {
    where: machinesWhereUniqueInput
    create: XOR<machinesCreateWithoutProductionsInput, machinesUncheckedCreateWithoutProductionsInput>
  }

  export type production_workersUpsertWithWhereUniqueWithoutProductionsInput = {
    where: production_workersWhereUniqueInput
    update: XOR<production_workersUpdateWithoutProductionsInput, production_workersUncheckedUpdateWithoutProductionsInput>
    create: XOR<production_workersCreateWithoutProductionsInput, production_workersUncheckedCreateWithoutProductionsInput>
  }

  export type production_workersUpdateWithWhereUniqueWithoutProductionsInput = {
    where: production_workersWhereUniqueInput
    data: XOR<production_workersUpdateWithoutProductionsInput, production_workersUncheckedUpdateWithoutProductionsInput>
  }

  export type production_workersUpdateManyWithWhereWithoutProductionsInput = {
    where: production_workersScalarWhereInput
    data: XOR<production_workersUpdateManyMutationInput, production_workersUncheckedUpdateManyWithoutProductionsInput>
  }

  export type production_workersScalarWhereInput = {
    AND?: production_workersScalarWhereInput | production_workersScalarWhereInput[]
    OR?: production_workersScalarWhereInput[]
    NOT?: production_workersScalarWhereInput | production_workersScalarWhereInput[]
    id?: StringFilter<"production_workers"> | string
    productionId?: StringFilter<"production_workers"> | string
    workerId?: StringFilter<"production_workers"> | string
    quantity?: IntFilter<"production_workers"> | number
    createdAt?: DateTimeFilter<"production_workers"> | Date | string
  }

  export type brick_typesUpsertWithoutProductionsInput = {
    update: XOR<brick_typesUpdateWithoutProductionsInput, brick_typesUncheckedUpdateWithoutProductionsInput>
    create: XOR<brick_typesCreateWithoutProductionsInput, brick_typesUncheckedCreateWithoutProductionsInput>
    where?: brick_typesWhereInput
  }

  export type brick_typesUpdateToOneWithWhereWithoutProductionsInput = {
    where?: brick_typesWhereInput
    data: XOR<brick_typesUpdateWithoutProductionsInput, brick_typesUncheckedUpdateWithoutProductionsInput>
  }

  export type brick_typesUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: dispatchesUpdateManyWithoutBrick_typesNestedInput
  }

  export type brick_typesUncheckedUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: dispatchesUncheckedUpdateManyWithoutBrick_typesNestedInput
  }

  export type machinesUpsertWithoutProductionsInput = {
    update: XOR<machinesUpdateWithoutProductionsInput, machinesUncheckedUpdateWithoutProductionsInput>
    create: XOR<machinesCreateWithoutProductionsInput, machinesUncheckedCreateWithoutProductionsInput>
    where?: machinesWhereInput
  }

  export type machinesUpdateToOneWithWhereWithoutProductionsInput = {
    where?: machinesWhereInput
    data: XOR<machinesUpdateWithoutProductionsInput, machinesUncheckedUpdateWithoutProductionsInput>
  }

  export type machinesUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type machinesUncheckedUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateWithoutRaw_materialsInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    createdAt?: Date | string
    updatedAt: Date | string
    workers?: workersCreateNestedOneWithoutExpensesInput
    material_usages?: material_usagesCreateNestedManyWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutRaw_materialsInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    workerId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    material_usages?: material_usagesUncheckedCreateNestedManyWithoutExpensesInput
  }

  export type expensesCreateOrConnectWithoutRaw_materialsInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutRaw_materialsInput, expensesUncheckedCreateWithoutRaw_materialsInput>
  }

  export type expensesCreateManyRaw_materialsInputEnvelope = {
    data: expensesCreateManyRaw_materialsInput | expensesCreateManyRaw_materialsInput[]
  }

  export type material_usagesCreateWithoutRaw_materialsInput = {
    id: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    createdAt?: Date | string
    expenses?: expensesCreateNestedOneWithoutMaterial_usagesInput
  }

  export type material_usagesUncheckedCreateWithoutRaw_materialsInput = {
    id: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    expenseId?: string | null
    createdAt?: Date | string
  }

  export type material_usagesCreateOrConnectWithoutRaw_materialsInput = {
    where: material_usagesWhereUniqueInput
    create: XOR<material_usagesCreateWithoutRaw_materialsInput, material_usagesUncheckedCreateWithoutRaw_materialsInput>
  }

  export type material_usagesCreateManyRaw_materialsInputEnvelope = {
    data: material_usagesCreateManyRaw_materialsInput | material_usagesCreateManyRaw_materialsInput[]
  }

  export type expensesUpsertWithWhereUniqueWithoutRaw_materialsInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutRaw_materialsInput, expensesUncheckedUpdateWithoutRaw_materialsInput>
    create: XOR<expensesCreateWithoutRaw_materialsInput, expensesUncheckedCreateWithoutRaw_materialsInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutRaw_materialsInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutRaw_materialsInput, expensesUncheckedUpdateWithoutRaw_materialsInput>
  }

  export type expensesUpdateManyWithWhereWithoutRaw_materialsInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutRaw_materialsInput>
  }

  export type expensesScalarWhereInput = {
    AND?: expensesScalarWhereInput | expensesScalarWhereInput[]
    OR?: expensesScalarWhereInput[]
    NOT?: expensesScalarWhereInput | expensesScalarWhereInput[]
    id?: StringFilter<"expenses"> | string
    date?: DateTimeFilter<"expenses"> | Date | string
    category?: StringFilter<"expenses"> | string
    amount?: FloatFilter<"expenses"> | number
    notes?: StringNullableFilter<"expenses"> | string | null
    paymentMode?: StringFilter<"expenses"> | string
    workerId?: StringNullableFilter<"expenses"> | string | null
    materialId?: StringNullableFilter<"expenses"> | string | null
    createdAt?: DateTimeFilter<"expenses"> | Date | string
    updatedAt?: DateTimeFilter<"expenses"> | Date | string
  }

  export type material_usagesUpsertWithWhereUniqueWithoutRaw_materialsInput = {
    where: material_usagesWhereUniqueInput
    update: XOR<material_usagesUpdateWithoutRaw_materialsInput, material_usagesUncheckedUpdateWithoutRaw_materialsInput>
    create: XOR<material_usagesCreateWithoutRaw_materialsInput, material_usagesUncheckedCreateWithoutRaw_materialsInput>
  }

  export type material_usagesUpdateWithWhereUniqueWithoutRaw_materialsInput = {
    where: material_usagesWhereUniqueInput
    data: XOR<material_usagesUpdateWithoutRaw_materialsInput, material_usagesUncheckedUpdateWithoutRaw_materialsInput>
  }

  export type material_usagesUpdateManyWithWhereWithoutRaw_materialsInput = {
    where: material_usagesScalarWhereInput
    data: XOR<material_usagesUpdateManyMutationInput, material_usagesUncheckedUpdateManyWithoutRaw_materialsInput>
  }

  export type workersCreateWithoutWeekly_settlementsInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesCreateNestedManyWithoutWorkersInput
    expenses?: expensesCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutWeekly_settlementsInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesUncheckedCreateNestedManyWithoutWorkersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersUncheckedCreateNestedManyWithoutWorkersInput
    worker_advances?: worker_advancesUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutWeekly_settlementsInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutWeekly_settlementsInput, workersUncheckedCreateWithoutWeekly_settlementsInput>
  }

  export type workersUpsertWithoutWeekly_settlementsInput = {
    update: XOR<workersUpdateWithoutWeekly_settlementsInput, workersUncheckedUpdateWithoutWeekly_settlementsInput>
    create: XOR<workersCreateWithoutWeekly_settlementsInput, workersUncheckedCreateWithoutWeekly_settlementsInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutWeekly_settlementsInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutWeekly_settlementsInput, workersUncheckedUpdateWithoutWeekly_settlementsInput>
  }

  export type workersUpdateWithoutWeekly_settlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutWeekly_settlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUncheckedUpdateManyWithoutWorkersNestedInput
    worker_advances?: worker_advancesUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type workersCreateWithoutWorker_advancesInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesCreateNestedManyWithoutWorkersInput
    expenses?: expensesCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsCreateNestedManyWithoutWorkersInput
  }

  export type workersUncheckedCreateWithoutWorker_advancesInput = {
    id: string
    name: string
    role: string
    paymentType: string
    rate: number
    isActive?: boolean
    advanceBalance?: number
    createdAt?: Date | string
    updatedAt: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutWorkersInput
    daily_wages?: daily_wagesUncheckedCreateNestedManyWithoutWorkersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutWorkersInput
    production_workers?: production_workersUncheckedCreateNestedManyWithoutWorkersInput
    weekly_settlements?: weekly_settlementsUncheckedCreateNestedManyWithoutWorkersInput
  }

  export type workersCreateOrConnectWithoutWorker_advancesInput = {
    where: workersWhereUniqueInput
    create: XOR<workersCreateWithoutWorker_advancesInput, workersUncheckedCreateWithoutWorker_advancesInput>
  }

  export type workersUpsertWithoutWorker_advancesInput = {
    update: XOR<workersUpdateWithoutWorker_advancesInput, workersUncheckedUpdateWithoutWorker_advancesInput>
    create: XOR<workersCreateWithoutWorker_advancesInput, workersUncheckedCreateWithoutWorker_advancesInput>
    where?: workersWhereInput
  }

  export type workersUpdateToOneWithWhereWithoutWorker_advancesInput = {
    where?: workersWhereInput
    data: XOR<workersUpdateWithoutWorker_advancesInput, workersUncheckedUpdateWithoutWorker_advancesInput>
  }

  export type workersUpdateWithoutWorker_advancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUpdateManyWithoutWorkersNestedInput
  }

  export type workersUncheckedUpdateWithoutWorker_advancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    paymentType?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    advanceBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutWorkersNestedInput
    daily_wages?: daily_wagesUncheckedUpdateManyWithoutWorkersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutWorkersNestedInput
    production_workers?: production_workersUncheckedUpdateManyWithoutWorkersNestedInput
    weekly_settlements?: weekly_settlementsUncheckedUpdateManyWithoutWorkersNestedInput
  }

  export type attendanceCreateWithoutWorkersInput = {
    id: string
    date: Date | string
    present?: boolean
  }

  export type attendanceUncheckedCreateWithoutWorkersInput = {
    id: string
    date: Date | string
    present?: boolean
  }

  export type attendanceCreateOrConnectWithoutWorkersInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutWorkersInput, attendanceUncheckedCreateWithoutWorkersInput>
  }

  export type attendanceCreateManyWorkersInputEnvelope = {
    data: attendanceCreateManyWorkersInput | attendanceCreateManyWorkersInput[]
  }

  export type daily_wagesCreateWithoutWorkersInput = {
    id: string
    date: Date | string
    bricksMade?: number | null
    wageAmount: number
    advanceUsed?: number
    netPayable: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type daily_wagesUncheckedCreateWithoutWorkersInput = {
    id: string
    date: Date | string
    bricksMade?: number | null
    wageAmount: number
    advanceUsed?: number
    netPayable: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type daily_wagesCreateOrConnectWithoutWorkersInput = {
    where: daily_wagesWhereUniqueInput
    create: XOR<daily_wagesCreateWithoutWorkersInput, daily_wagesUncheckedCreateWithoutWorkersInput>
  }

  export type daily_wagesCreateManyWorkersInputEnvelope = {
    data: daily_wagesCreateManyWorkersInput | daily_wagesCreateManyWorkersInput[]
  }

  export type expensesCreateWithoutWorkersInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    createdAt?: Date | string
    updatedAt: Date | string
    raw_materials?: raw_materialsCreateNestedOneWithoutExpensesInput
    material_usages?: material_usagesCreateNestedManyWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutWorkersInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    materialId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    material_usages?: material_usagesUncheckedCreateNestedManyWithoutExpensesInput
  }

  export type expensesCreateOrConnectWithoutWorkersInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutWorkersInput, expensesUncheckedCreateWithoutWorkersInput>
  }

  export type expensesCreateManyWorkersInputEnvelope = {
    data: expensesCreateManyWorkersInput | expensesCreateManyWorkersInput[]
  }

  export type production_workersCreateWithoutWorkersInput = {
    id: string
    quantity: number
    createdAt?: Date | string
    productions: productionsCreateNestedOneWithoutProduction_workersInput
  }

  export type production_workersUncheckedCreateWithoutWorkersInput = {
    id: string
    productionId: string
    quantity: number
    createdAt?: Date | string
  }

  export type production_workersCreateOrConnectWithoutWorkersInput = {
    where: production_workersWhereUniqueInput
    create: XOR<production_workersCreateWithoutWorkersInput, production_workersUncheckedCreateWithoutWorkersInput>
  }

  export type production_workersCreateManyWorkersInputEnvelope = {
    data: production_workersCreateManyWorkersInput | production_workersCreateManyWorkersInput[]
  }

  export type weekly_settlementsCreateWithoutWorkersInput = {
    id: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: number
    paymentStatus: string
    generatedAt?: Date | string
    notes?: string | null
  }

  export type weekly_settlementsUncheckedCreateWithoutWorkersInput = {
    id: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: number
    paymentStatus: string
    generatedAt?: Date | string
    notes?: string | null
  }

  export type weekly_settlementsCreateOrConnectWithoutWorkersInput = {
    where: weekly_settlementsWhereUniqueInput
    create: XOR<weekly_settlementsCreateWithoutWorkersInput, weekly_settlementsUncheckedCreateWithoutWorkersInput>
  }

  export type weekly_settlementsCreateManyWorkersInputEnvelope = {
    data: weekly_settlementsCreateManyWorkersInput | weekly_settlementsCreateManyWorkersInput[]
  }

  export type worker_advancesCreateWithoutWorkersInput = {
    id: string
    amount: number
    type: string
    date: Date | string
    note?: string | null
  }

  export type worker_advancesUncheckedCreateWithoutWorkersInput = {
    id: string
    amount: number
    type: string
    date: Date | string
    note?: string | null
  }

  export type worker_advancesCreateOrConnectWithoutWorkersInput = {
    where: worker_advancesWhereUniqueInput
    create: XOR<worker_advancesCreateWithoutWorkersInput, worker_advancesUncheckedCreateWithoutWorkersInput>
  }

  export type worker_advancesCreateManyWorkersInputEnvelope = {
    data: worker_advancesCreateManyWorkersInput | worker_advancesCreateManyWorkersInput[]
  }

  export type attendanceUpsertWithWhereUniqueWithoutWorkersInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutWorkersInput, attendanceUncheckedUpdateWithoutWorkersInput>
    create: XOR<attendanceCreateWithoutWorkersInput, attendanceUncheckedCreateWithoutWorkersInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutWorkersInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutWorkersInput, attendanceUncheckedUpdateWithoutWorkersInput>
  }

  export type attendanceUpdateManyWithWhereWithoutWorkersInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutWorkersInput>
  }

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    OR?: attendanceScalarWhereInput[]
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    id?: StringFilter<"attendance"> | string
    workerId?: StringFilter<"attendance"> | string
    date?: DateTimeFilter<"attendance"> | Date | string
    present?: BoolFilter<"attendance"> | boolean
  }

  export type daily_wagesUpsertWithWhereUniqueWithoutWorkersInput = {
    where: daily_wagesWhereUniqueInput
    update: XOR<daily_wagesUpdateWithoutWorkersInput, daily_wagesUncheckedUpdateWithoutWorkersInput>
    create: XOR<daily_wagesCreateWithoutWorkersInput, daily_wagesUncheckedCreateWithoutWorkersInput>
  }

  export type daily_wagesUpdateWithWhereUniqueWithoutWorkersInput = {
    where: daily_wagesWhereUniqueInput
    data: XOR<daily_wagesUpdateWithoutWorkersInput, daily_wagesUncheckedUpdateWithoutWorkersInput>
  }

  export type daily_wagesUpdateManyWithWhereWithoutWorkersInput = {
    where: daily_wagesScalarWhereInput
    data: XOR<daily_wagesUpdateManyMutationInput, daily_wagesUncheckedUpdateManyWithoutWorkersInput>
  }

  export type daily_wagesScalarWhereInput = {
    AND?: daily_wagesScalarWhereInput | daily_wagesScalarWhereInput[]
    OR?: daily_wagesScalarWhereInput[]
    NOT?: daily_wagesScalarWhereInput | daily_wagesScalarWhereInput[]
    id?: StringFilter<"daily_wages"> | string
    workerId?: StringFilter<"daily_wages"> | string
    date?: DateTimeFilter<"daily_wages"> | Date | string
    bricksMade?: IntNullableFilter<"daily_wages"> | number | null
    wageAmount?: FloatFilter<"daily_wages"> | number
    advanceUsed?: FloatFilter<"daily_wages"> | number
    netPayable?: FloatFilter<"daily_wages"> | number
    isPaid?: BoolFilter<"daily_wages"> | boolean
    createdAt?: DateTimeFilter<"daily_wages"> | Date | string
  }

  export type expensesUpsertWithWhereUniqueWithoutWorkersInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutWorkersInput, expensesUncheckedUpdateWithoutWorkersInput>
    create: XOR<expensesCreateWithoutWorkersInput, expensesUncheckedCreateWithoutWorkersInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutWorkersInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutWorkersInput, expensesUncheckedUpdateWithoutWorkersInput>
  }

  export type expensesUpdateManyWithWhereWithoutWorkersInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutWorkersInput>
  }

  export type production_workersUpsertWithWhereUniqueWithoutWorkersInput = {
    where: production_workersWhereUniqueInput
    update: XOR<production_workersUpdateWithoutWorkersInput, production_workersUncheckedUpdateWithoutWorkersInput>
    create: XOR<production_workersCreateWithoutWorkersInput, production_workersUncheckedCreateWithoutWorkersInput>
  }

  export type production_workersUpdateWithWhereUniqueWithoutWorkersInput = {
    where: production_workersWhereUniqueInput
    data: XOR<production_workersUpdateWithoutWorkersInput, production_workersUncheckedUpdateWithoutWorkersInput>
  }

  export type production_workersUpdateManyWithWhereWithoutWorkersInput = {
    where: production_workersScalarWhereInput
    data: XOR<production_workersUpdateManyMutationInput, production_workersUncheckedUpdateManyWithoutWorkersInput>
  }

  export type weekly_settlementsUpsertWithWhereUniqueWithoutWorkersInput = {
    where: weekly_settlementsWhereUniqueInput
    update: XOR<weekly_settlementsUpdateWithoutWorkersInput, weekly_settlementsUncheckedUpdateWithoutWorkersInput>
    create: XOR<weekly_settlementsCreateWithoutWorkersInput, weekly_settlementsUncheckedCreateWithoutWorkersInput>
  }

  export type weekly_settlementsUpdateWithWhereUniqueWithoutWorkersInput = {
    where: weekly_settlementsWhereUniqueInput
    data: XOR<weekly_settlementsUpdateWithoutWorkersInput, weekly_settlementsUncheckedUpdateWithoutWorkersInput>
  }

  export type weekly_settlementsUpdateManyWithWhereWithoutWorkersInput = {
    where: weekly_settlementsScalarWhereInput
    data: XOR<weekly_settlementsUpdateManyMutationInput, weekly_settlementsUncheckedUpdateManyWithoutWorkersInput>
  }

  export type weekly_settlementsScalarWhereInput = {
    AND?: weekly_settlementsScalarWhereInput | weekly_settlementsScalarWhereInput[]
    OR?: weekly_settlementsScalarWhereInput[]
    NOT?: weekly_settlementsScalarWhereInput | weekly_settlementsScalarWhereInput[]
    id?: StringFilter<"weekly_settlements"> | string
    workerId?: StringFilter<"weekly_settlements"> | string
    startDate?: DateTimeFilter<"weekly_settlements"> | Date | string
    endDate?: DateTimeFilter<"weekly_settlements"> | Date | string
    totalAmount?: FloatFilter<"weekly_settlements"> | number
    paymentStatus?: StringFilter<"weekly_settlements"> | string
    generatedAt?: DateTimeFilter<"weekly_settlements"> | Date | string
    notes?: StringNullableFilter<"weekly_settlements"> | string | null
  }

  export type worker_advancesUpsertWithWhereUniqueWithoutWorkersInput = {
    where: worker_advancesWhereUniqueInput
    update: XOR<worker_advancesUpdateWithoutWorkersInput, worker_advancesUncheckedUpdateWithoutWorkersInput>
    create: XOR<worker_advancesCreateWithoutWorkersInput, worker_advancesUncheckedCreateWithoutWorkersInput>
  }

  export type worker_advancesUpdateWithWhereUniqueWithoutWorkersInput = {
    where: worker_advancesWhereUniqueInput
    data: XOR<worker_advancesUpdateWithoutWorkersInput, worker_advancesUncheckedUpdateWithoutWorkersInput>
  }

  export type worker_advancesUpdateManyWithWhereWithoutWorkersInput = {
    where: worker_advancesScalarWhereInput
    data: XOR<worker_advancesUpdateManyMutationInput, worker_advancesUncheckedUpdateManyWithoutWorkersInput>
  }

  export type worker_advancesScalarWhereInput = {
    AND?: worker_advancesScalarWhereInput | worker_advancesScalarWhereInput[]
    OR?: worker_advancesScalarWhereInput[]
    NOT?: worker_advancesScalarWhereInput | worker_advancesScalarWhereInput[]
    id?: StringFilter<"worker_advances"> | string
    workerId?: StringFilter<"worker_advances"> | string
    amount?: FloatFilter<"worker_advances"> | number
    type?: StringFilter<"worker_advances"> | string
    date?: DateTimeFilter<"worker_advances"> | Date | string
    note?: StringNullableFilter<"worker_advances"> | string | null
  }

  export type dispatchesCreateManyBrick_typesInput = {
    id: string
    date: Date | string
    customerId: string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productionsCreateManyBrick_typesInput = {
    id: string
    date: Date | string
    machineId: string
    shift: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type dispatchesUpdateWithoutBrick_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: customersUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type dispatchesUncheckedUpdateWithoutBrick_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dispatchesUncheckedUpdateManyWithoutBrick_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productionsUpdateWithoutBrick_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production_workers?: production_workersUpdateManyWithoutProductionsNestedInput
    machines?: machinesUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type productionsUncheckedUpdateWithoutBrick_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    machineId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production_workers?: production_workersUncheckedUpdateManyWithoutProductionsNestedInput
  }

  export type productionsUncheckedUpdateManyWithoutBrick_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    machineId?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dispatchesCreateManyCustomersInput = {
    id: string
    date: Date | string
    brickTypeId: string
    quantity: number
    distanceKm?: number | null
    vehicleType: string
    transportCost: number
    loadingCost: number
    paymentStatus: string
    totalAmount: number
    paidAmount: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type dispatchesUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brick_types?: brick_typesUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type dispatchesUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dispatchesUncheckedUpdateManyWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: StringFieldUpdateOperationsInput | string
    transportCost?: FloatFieldUpdateOperationsInput | number
    loadingCost?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesCreateManyExpensesInput = {
    id: string
    materialId: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type material_usagesUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw_materials?: raw_materialsUpdateOneRequiredWithoutMaterial_usagesNestedInput
  }

  export type material_usagesUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesUncheckedUpdateManyWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productionsCreateManyMachinesInput = {
    id: string
    date: Date | string
    shift: string
    brickTypeId: string
    quantity: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productionsUpdateWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production_workers?: production_workersUpdateManyWithoutProductionsNestedInput
    brick_types?: brick_typesUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type productionsUncheckedUpdateWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    production_workers?: production_workersUncheckedUpdateManyWithoutProductionsNestedInput
  }

  export type productionsUncheckedUpdateManyWithoutMachinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: StringFieldUpdateOperationsInput | string
    brickTypeId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersCreateManyProductionsInput = {
    id: string
    workerId: string
    quantity: number
    createdAt?: Date | string
  }

  export type production_workersUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: workersUpdateOneRequiredWithoutProduction_workersNestedInput
  }

  export type production_workersUncheckedUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersUncheckedUpdateManyWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateManyRaw_materialsInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    workerId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type material_usagesCreateManyRaw_materialsInput = {
    id: string
    quantity: number
    pricePerUnit?: number
    totalCost?: number
    date: Date | string
    expenseId?: string | null
    createdAt?: Date | string
  }

  export type expensesUpdateWithoutRaw_materialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workers?: workersUpdateOneWithoutExpensesNestedInput
    material_usages?: material_usagesUpdateManyWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutRaw_materialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material_usages?: material_usagesUncheckedUpdateManyWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateManyWithoutRaw_materialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    workerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesUpdateWithoutRaw_materialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expensesUpdateOneWithoutMaterial_usagesNestedInput
  }

  export type material_usagesUncheckedUpdateWithoutRaw_materialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_usagesUncheckedUpdateManyWithoutRaw_materialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendanceCreateManyWorkersInput = {
    id: string
    date: Date | string
    present?: boolean
  }

  export type daily_wagesCreateManyWorkersInput = {
    id: string
    date: Date | string
    bricksMade?: number | null
    wageAmount: number
    advanceUsed?: number
    netPayable: number
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type expensesCreateManyWorkersInput = {
    id: string
    date: Date | string
    category: string
    amount: number
    notes?: string | null
    paymentMode: string
    materialId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type production_workersCreateManyWorkersInput = {
    id: string
    productionId: string
    quantity: number
    createdAt?: Date | string
  }

  export type weekly_settlementsCreateManyWorkersInput = {
    id: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: number
    paymentStatus: string
    generatedAt?: Date | string
    notes?: string | null
  }

  export type worker_advancesCreateManyWorkersInput = {
    id: string
    amount: number
    type: string
    date: Date | string
    note?: string | null
  }

  export type attendanceUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendanceUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendanceUncheckedUpdateManyWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type daily_wagesUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_wagesUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_wagesUncheckedUpdateManyWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bricksMade?: NullableIntFieldUpdateOperationsInput | number | null
    wageAmount?: FloatFieldUpdateOperationsInput | number
    advanceUsed?: FloatFieldUpdateOperationsInput | number
    netPayable?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw_materials?: raw_materialsUpdateOneWithoutExpensesNestedInput
    material_usages?: material_usagesUpdateManyWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    material_usages?: material_usagesUncheckedUpdateManyWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateManyWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: productionsUpdateOneRequiredWithoutProduction_workersNestedInput
  }

  export type production_workersUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type production_workersUncheckedUpdateManyWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type weekly_settlementsUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type weekly_settlementsUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type weekly_settlementsUncheckedUpdateManyWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worker_advancesUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worker_advancesUncheckedUpdateWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worker_advancesUncheckedUpdateManyWithoutWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Brick_typesCountOutputTypeDefaultArgs instead
     */
    export type Brick_typesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Brick_typesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomersCountOutputTypeDefaultArgs instead
     */
    export type CustomersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpensesCountOutputTypeDefaultArgs instead
     */
    export type ExpensesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpensesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MachinesCountOutputTypeDefaultArgs instead
     */
    export type MachinesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MachinesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductionsCountOutputTypeDefaultArgs instead
     */
    export type ProductionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Raw_materialsCountOutputTypeDefaultArgs instead
     */
    export type Raw_materialsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Raw_materialsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkersCountOutputTypeDefaultArgs instead
     */
    export type WorkersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use attendanceDefaultArgs instead
     */
    export type attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = attendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use brick_typesDefaultArgs instead
     */
    export type brick_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = brick_typesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cash_entriesDefaultArgs instead
     */
    export type cash_entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cash_entriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use customersDefaultArgs instead
     */
    export type customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = customersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use daily_wagesDefaultArgs instead
     */
    export type daily_wagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = daily_wagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dispatchesDefaultArgs instead
     */
    export type dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dispatchesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use expensesDefaultArgs instead
     */
    export type expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = expensesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use machinesDefaultArgs instead
     */
    export type machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = machinesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use material_usagesDefaultArgs instead
     */
    export type material_usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = material_usagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use production_workersDefaultArgs instead
     */
    export type production_workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = production_workersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productionsDefaultArgs instead
     */
    export type productionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use raw_materialsDefaultArgs instead
     */
    export type raw_materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = raw_materialsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use weekly_settlementsDefaultArgs instead
     */
    export type weekly_settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = weekly_settlementsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use worker_advancesDefaultArgs instead
     */
    export type worker_advancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = worker_advancesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workersDefaultArgs instead
     */
    export type workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
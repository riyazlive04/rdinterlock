
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  workerId: 'workerId',
  date: 'date',
  present: 'present'
};

exports.Prisma.Brick_typesScalarFieldEnum = {
  id: 'id',
  size: 'size',
  stock: 'stock',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Cash_entriesScalarFieldEnum = {
  id: 'id',
  date: 'date',
  type: 'type',
  amount: 'amount',
  description: 'description',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phone: 'phone',
  address: 'address',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Daily_wagesScalarFieldEnum = {
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

exports.Prisma.DispatchesScalarFieldEnum = {
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

exports.Prisma.ExpensesScalarFieldEnum = {
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

exports.Prisma.MachinesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Material_usagesScalarFieldEnum = {
  id: 'id',
  materialId: 'materialId',
  quantity: 'quantity',
  pricePerUnit: 'pricePerUnit',
  totalCost: 'totalCost',
  date: 'date',
  expenseId: 'expenseId',
  createdAt: 'createdAt'
};

exports.Prisma.Production_workersScalarFieldEnum = {
  id: 'id',
  productionId: 'productionId',
  workerId: 'workerId',
  quantity: 'quantity',
  createdAt: 'createdAt'
};

exports.Prisma.ProductionsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  machineId: 'machineId',
  shift: 'shift',
  brickTypeId: 'brickTypeId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Raw_materialsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  unit: 'unit',
  description: 'description',
  stock: 'stock',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Weekly_settlementsScalarFieldEnum = {
  id: 'id',
  workerId: 'workerId',
  startDate: 'startDate',
  endDate: 'endDate',
  totalAmount: 'totalAmount',
  paymentStatus: 'paymentStatus',
  generatedAt: 'generatedAt',
  notes: 'notes'
};

exports.Prisma.Worker_advancesScalarFieldEnum = {
  id: 'id',
  workerId: 'workerId',
  amount: 'amount',
  type: 'type',
  date: 'date',
  note: 'note'
};

exports.Prisma.WorkersScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

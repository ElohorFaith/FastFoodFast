import createOrdersTable from './orders';
import createUsersTable from './users';
import createMenuTable from './menu';

const createTables = async () => {
  try {
    await createOrdersTable();
    console.log('Order Table Created');
    await createMenuTable();
    console.log('Menu Table Created');
    await createUsersTable();
    console.log('Users Table Created');
  } catch (err) {
    throw err;
  }
};
export default createTables;

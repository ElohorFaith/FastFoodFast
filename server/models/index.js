import createOrdersTable from './orders';
import createUsersTable from './users';
import createMenuTable from './menu';

const createTables = async () => {
  try {
    const usersTable = await createUsersTable();
    console.log('Users Table Created');
    const menuTable = await createMenuTable();
    console.log('Menu Table Created');
    const ordersTable = await createOrdersTable();
    console.log('Order Table Created');
  } catch (err) {
    throw err;
  }
};
export default createTables;

import createOrdersTable from './orders';
import createUsersTable from './users';
import createMenuTable from './menu';

const createTables = async () => {
  try {
   
    const ordersTable = await createOrdersTable();
    console.log('Order Table Created');
    const menuTable = await createMenuTable();
    console.log('Menu Table Created');
    const usersTable = await createUsersTable();
    console.log('Users Table Created');

  } catch (err) {
    throw err;
  }
};
export default createTables;

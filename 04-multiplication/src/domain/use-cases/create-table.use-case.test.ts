
import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {
    test('should create multiplication table with default values ', () => {


        const createTable = new CreateTable();
        const table = createTable.execute({ base: 5 });
        const rows = table.split('\n').length;

        // should create an instance of CreateTable
        expect(createTable).toBeInstanceOf(CreateTable);

        expect(table).toContain('5 x 1 = 5');

        expect(rows).toBe(10);
    });

    test('should create talbe with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        }
        const createTable = new CreateTable();

        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect(table).toContain('3 x 20 = 60');
        expect(rows).toBe(options.limit);
    });
});
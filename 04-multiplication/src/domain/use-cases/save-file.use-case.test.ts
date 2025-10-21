import { SaveFile } from './save-file.use-case';
import * as fs from 'fs';


describe('SaveFile Use Case', () => {
    const customOptions = {
        fileContent: 'Custom Content',
        // fileDestination: 'custom-outputs', // not wotk cause the interface has destination not fileDestination
        destination: 'custom-outputs',
        fileName: 'custom-table-name'
    }

    const customFilePath = `${customOptions.destination}/tabla-${customOptions.fileName}.txt`;
    afterEach(() => {
        const outputFolderExists = fs.existsSync('outputs');
        if (outputFolderExists) {
            fs.rmdirSync('outputs', { recursive: true });
        }
        const customOutputFolderExists = fs.existsSync('custom-outputs');
        if (customOutputFolderExists) {
            fs.rmdirSync('custom-outputs', { recursive: true });
        }
    });



    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/tabla-table.txt';
        const options = {
            fileContent: 'Test Content',
        }
        const result = saveFile.execute(options);

        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should save file with custom destination and fileName', () => {

        const saveFile = new SaveFile();
        const result = saveFile.execute(customOptions);
        const fileExist = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, 'utf-8');

        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);

    });

    // test('should return false if directory could not be created', () => {

    //     // const saveFile = new SaveFile();
    //     // const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementationOnce(() => {
    //     //     throw new Error('This is a custom error message, failed to create directory'); //sobreescribo el comportamiento para que lance un error
    //     // });
    //     // mkdirSpy.mockRestore(); //restauro el comportamiento original del metodo

    //     /* CON SPY ON NO FUNCIONA CREAR CON MOCK*/
    //     jest.mock('fs', () => ({
    //         mkdirSync: jest.fn(() => { throw new Error('Simulated mkdirSync error'); }),
    //         writeFileSync: jest.fn()
    //     }));
    //     const { SaveFile } = require('./save-file.use-case');
    //     const saveFile = new SaveFile();
    //     const result = saveFile.execute(customOptions);
    //     expect(result).toBe(false);

    //     jest.unmock('fs'); // Restaurar el módulo original después del test

    // });
});

describe('SaveFile with fs mocked', () => {
    beforeAll(() => {
        jest.resetModules(); // Limpia el cache de módulos
        jest.mock('fs', () => ({
            mkdirSync: jest.fn(() => { throw new Error('Simulated mkdir error'); }),
            writeFileSync: jest.fn()
        }));
    });

    afterAll(() => {
        jest.unmock('fs');
    });

    test('should return false if mkdirSync fails', () => {
        const { SaveFile } = require('./save-file.use-case'); // Importa después del mock
        const saveFile = new SaveFile();
        const result = saveFile.execute({
            fileContent: 'some content',
            destination: 'fail-folder',
            fileName: 'test'
        });

        expect(result).toBe(false);
    });
});
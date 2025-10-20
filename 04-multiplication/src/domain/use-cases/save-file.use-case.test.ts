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
});
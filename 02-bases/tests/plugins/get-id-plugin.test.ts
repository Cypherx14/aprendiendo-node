import { getUUID } from '../../src/plugins/get-id-plugin';


describe('plugins/get-id.test.ts', () => {
    test('getUUID should return a UUID', () => {
        
        
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');
        expect(uuid).toHaveLength(36);
    });
});

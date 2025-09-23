import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe('js-foundation/05-factory', () => {
    const getUUID = () => '1234'
    const getAge = (birthDate: string) => 30
    test('buildMakePerson should return a function ', () => {

        const makePerson = buildMakePerson({
            getUUID, getAge
        });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should create a person object', () => {

        const makePerson = buildMakePerson({
            getUUID, getAge
        });
        const person = makePerson({ name: 'John', birthDate: '1990-01-01' });
        expect(person).toEqual({
            id: '1234',
            name: 'JOHN',
            birthDate: '1990-01-01',
            age: 30
        });
    });

});
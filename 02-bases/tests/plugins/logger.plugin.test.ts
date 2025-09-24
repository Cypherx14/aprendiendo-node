import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';



describe('logger plugin', () => {
    test('buildLogger should return function logger ', () => {

        const logger = buildLogger('test-service');
        expect(typeof logger.log ).toBe('function');
        expect(typeof logger.error ).toBe('function');
    });

    test('logger.log should log info message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

        const message = 'This is an info message';
        const service = 'test service';
        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining(
                { 
                level: 'info',
                message,
                service
                })
            );
    });
});
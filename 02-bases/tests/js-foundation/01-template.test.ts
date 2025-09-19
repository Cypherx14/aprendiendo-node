import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
    test('emailTemplate should contain the correct HTML structure', () => {
        expect(emailTemplate).toContain('<div>');
        expect(emailTemplate).toContain('<h1>Hi, {{name}} </h1>');
        expect(emailTemplate).toContain('<p> Thank you for your order.</p>');
        expect(emailTemplate).toContain('</div>');
    })
});
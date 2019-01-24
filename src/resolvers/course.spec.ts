import { course } from './course';

describe('course', () => {
    it('return my awesome book', async () => {
        const res = course({ id: 1 });
        expect(res).toEqual({
            id: 1,
            title: 'My Awesome Book',
            author: 'Bill Cheng',
            description: 'This is my awesome book',
            topic: 'Lambda Node.js',
            url: 'https://'
        });
    });
});
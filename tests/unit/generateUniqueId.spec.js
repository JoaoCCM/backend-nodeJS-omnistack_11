const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate an unique ID', () => {
    it('should generate an unique id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
})
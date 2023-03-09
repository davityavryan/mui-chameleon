import { getUnit, toUnitless } from './cssUtils';

describe('cssUtils unit tests', () => {
    it('should test getUnit', () => {
        expect(getUnit('14px')).toBe('px');
    });

    it('should test getUnit with empty string', () => {
        expect(getUnit('')).toBe('');
    });

    it('should test toUnitless with number unit', () => {
        expect(toUnitless('14px')).toBe(14);
    });
});

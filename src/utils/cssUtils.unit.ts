import { getUnit, makeConvertValueFromUnitToUnit, toUnitless } from './cssUtils';
import { TUnit } from '../types';

const MOCK_BASE_FONT_SIZE = 14;
describe('cssUtils unit tests', () => {
    const convertValueFromUnitToUnit = makeConvertValueFromUnitToUnit(MOCK_BASE_FONT_SIZE);

    it('should convert from px to rem', () => {
        const value = convertValueFromUnitToUnit(15, 'px', 'rem');
        expect(value).toBe(`1.0714285714285714rem`);
    });

    it('should convert from rem to px', () => {
        const value = convertValueFromUnitToUnit(1.07143, 'rem', 'px');
        expect(value).toBe('15.000020000000001px');
    });

    it('should convert from px to em', () => {
        const value = convertValueFromUnitToUnit(15, 'px', 'em');
        expect(value).toBe(`1.0714285714285714em`);
    });

    it('should convert from rem to px', () => {
        const value = convertValueFromUnitToUnit(1.07143, 'em', 'px');
        expect(value).toBe('15.000020000000001px');
    });

    it('should convert from px to px', () => {
        const value = convertValueFromUnitToUnit(14, 'px', 'px');
        expect(value).toBe('14px');
    });

    it('should convert from px to unhandled unit', () => {
        const value = convertValueFromUnitToUnit(14, 'px', 'pc' as unknown as TUnit);
        expect(value).toBe('14px');
    });

    it('should return empty string', () => {
        const value = convertValueFromUnitToUnit('', 'px', 'px');
        expect(value).toBe('');
    });

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

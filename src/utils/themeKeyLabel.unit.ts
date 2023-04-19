import { expect, test } from 'test-utils';

import { themeKeyLabel } from './themeKeyLabel';

test('themeKeyLabel returns correct label', () => {
    expect(themeKeyLabel('')).toEqual('');
    expect(themeKeyLabel('abc.def')).toEqual('Def');
    expect(themeKeyLabel('abc.def.ghi')).toEqual('Ghi');
});

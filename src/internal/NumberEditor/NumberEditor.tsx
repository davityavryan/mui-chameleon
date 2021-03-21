import React, { memo } from 'react';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

type TProps = TFieldEditorProps & {
    formatter?: (value: string) => number;
};

function NumberEditor(props: TProps) {
    return <FieldEditor {...props} type="number" formatter={(newValue) => Number(newValue)} />;
}

export default memo(NumberEditor);

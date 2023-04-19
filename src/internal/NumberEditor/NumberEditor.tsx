import React from 'react';

import FieldEditor, { FieldEditorProps } from '../FieldEditor/FieldEditor';

type Props = FieldEditorProps & {
    formatter?: (value: string) => number;
};

function NumberEditor(props: Props) {
    return <FieldEditor {...props} type="number" formatter={(newValue) => Number(newValue)} />;
}

export default NumberEditor;

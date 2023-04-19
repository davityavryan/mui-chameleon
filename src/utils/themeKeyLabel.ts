export function themeKeyLabel(label: string) {
    let labelText = label.replace(/.*\.([^.]+)$/, '$1');

    labelText = `${labelText.substring(0, 1).toUpperCase()}${labelText.substring(1)}`;

    return labelText;
}

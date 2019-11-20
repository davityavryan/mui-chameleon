function themeKeyLabel(label) {
    let labelText = label.replace(/.*\.([^.]+)$/, '$1');

    labelText = `${labelText.substr(0, 1).toUpperCase()}${labelText.substr(1)}`;

    return labelText;
}

export default themeKeyLabel;

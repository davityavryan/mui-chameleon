// Jest changed timer functionality in v27 and it is failing now because of missing functionality.
// TODO: revisit after updating jest dependent packages
global.setImmediate = (callback) => setTimeout(callback, 0);

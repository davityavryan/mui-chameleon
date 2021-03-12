<p align="center">
    <a href="https://davityavryan.github.io/material-ui-chameleon" rel="noopener" target="_blank">
        <img width="256" src="https://raw.githubusercontent.com/davityavryan/material-ui-chameleon/master/docs/src/static/img/logo.svg?sanitize=true" alt="Material-UI Chameleon">
    </a>
</p>

<h1 align="center">Material-UI Chameleon</h1>

<div align="center">

## Warning: [WIP] This is not yet ready for production

[Material-UI](https://material-ui.com/) theme editor.

[![npm package](https://img.shields.io/npm/v/material-ui-chameleon/latest.svg)](https://www.npmjs.com/package/material-ui-chameleon)
[![npm downloads](https://img.shields.io/npm/dm/material-ui-chameleon.svg)](https://www.npmjs.com/package/material-ui-chameleon)
[![Dependencies](https://img.shields.io/david/davityavryan/material-ui-chameleon)](https://david-dm.org/davityavryan/material-ui-chameleon/master)
[![DevDependencies](https://img.shields.io/david/dev/davityavryan/material-ui-chameleon)](https://david-dm.org/davityavryan/material-ui-chameleon/master?type=dev)
[![PeerDependencies](https://img.shields.io/david/peer/davityavryan/material-ui-chameleon)](https://david-dm.org/davityavryan/material-ui-chameleon/master?type=peer)
[![BundlePhobia](https://badgen.net/bundlephobia/minzip/material-ui-chameleon)](https://bundlephobia.com/result?p=material-ui-chameleon)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/davityavryan/material-ui-chameleon.svg)](https://isitmaintained.com/project/davityavryan/material-ui-chameleon 'Average time to resolve an issue')

[![Github Action build](https://github.com/davityavryan/material-ui-chameleon/actions/workflows/build.yml/badge.svg)](https://github.com/davityavryan/material-ui-chameleon/actions/workflows/build.yml)
[![Github Action test](https://github.com/davityavryan/material-ui-chameleon/actions/workflows/test.yml/badge.svg)](https://github.com/davityavryan/material-ui-chameleon/actions/workflows/test.yml)
[![Cypress dashboard](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/99caai/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/99caai/runs)

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/davityavryan)

</div>

## Installation

Material-UI Chameleon is available as an [npm package](https://www.npmjs.com/package/material-ui-chameleon).

```sh
// with npm
npm install material-ui-chameleon

// with yarn
yarn add material-ui-chameleon
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'material-ui-chameleon/ThemeProvider';
import SideBarEditor from 'material-ui-chameleon/SideBarEditor';

// import { ThemeProvider, SideBarEditor } from 'material-ui-chameleon';

function App() {
    const showEditor = true; // of course

    return (
        <ThemeProvider theme={yourInitialTheme}>
            <CssBaseline />

            {/* rest of the app */}

            {showEditor && <SideBarEditor />}
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Acknowledgments

-   Logo Design by Zara Magumyan. See her [Dribbble](https://dribbble.com/zmagumyan) for more awesome designs.
-   Some bundling Tools and scripts are used from [Material-UI](https://github.com/mui-org/material-ui) packages. This
    makes my job easier, faster and compatibility of this package better with Material-UI packages.

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).

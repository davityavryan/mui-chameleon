<p align="center">
    <a href="https://davityavryan.github.io/mui-chameleon" rel="noopener" target="_blank">
        <img width="256" src="https://raw.githubusercontent.com/davityavryan/mui-chameleon/master/docs/src/static/img/logo.svg?sanitize=true" alt="MUI Chameleon">
    </a>
</p>

<h1 align="center">MUI Chameleon</h1>

<div align="center">

## Warning: [WIP] This is not yet ready for production

[MUI](https://mui.com/) theme editor.

[![npm package](https://img.shields.io/npm/v/mui-chameleon/latest.svg)](https://www.npmjs.com/package/mui-chameleon)
[![npm downloads](https://img.shields.io/npm/dm/mui-chameleon.svg)](https://www.npmjs.com/package/mui-chameleon)
[![BundlePhobia](https://badgen.net/bundlephobia/minzip/mui-chameleon)](https://bundlephobia.com/result?p=mui-chameleon)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/davityavryan/mui-chameleon.svg)](https://isitmaintained.com/project/davityavryan/mui-chameleon 'Average time to resolve an issue')

[![Github Action build](https://github.com/davityavryan/mui-chameleon/actions/workflows/build.yml/badge.svg)](https://github.com/davityavryan/mui-chameleon/actions/workflows/build.yml?branch=master&event=push)
[![Github Action test](https://github.com/davityavryan/mui-chameleon/actions/workflows/test.yml/badge.svg)](https://github.com/davityavryan/mui-chameleon/actions/workflows/test.yml?branch=master&event=push)
[![codecov](https://codecov.io/gh/davityavryan/mui-chameleon/branch/master/graph/badge.svg?token=FCLZL0XTXM)](https://codecov.io/gh/davityavryan/mui-chameleon)

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/davityavryan)

</div>

## Installation

MUI Chameleon is available as an [npm package](https://www.npmjs.com/package/mui-chameleon).

```sh
// with npm
npm install mui-chameleon

// with yarn
yarn add mui-chameleon
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'mui-chameleon/ThemeProvider';
import SideBarEditor from 'mui-chameleon/SideBarEditor';

// import { ThemeProvider, SideBarEditor } from 'mui-chameleon';

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
-   Some bundling Tools and scripts are used from [MUI](https://github.com/mui-org/mui) packages. This makes my job
    easier, faster and compatibility of this package better with MUI packages.

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).

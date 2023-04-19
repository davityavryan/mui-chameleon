declare module '*.svg' {
    const value: React.ComponentType<React.SVGProps>;
    export default value;
}

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';

        TEST_BROWSER: 'chromium' | 'firefox' | 'webkit';
    }
}

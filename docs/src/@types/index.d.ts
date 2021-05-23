declare module '*.svg' {
    const value: React.ComponentType<React.SVGProps>;
    export default value;
}

declare const process: {
    env: {
        NODE_ENV: 'development' | 'production' | 'test';

        TEST_BROWSER: 'chromium' | 'firefox' | 'webkit';
    };
} & NodeJS.Process;

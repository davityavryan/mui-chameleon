declare module '*.svg' {
    const value: React.ComponentType<React.SVGProps>;
    export default value;
}

declare const process: NodeJS.Process = {
    NODE_ENV: 'development' | 'production',
};

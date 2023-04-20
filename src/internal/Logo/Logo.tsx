import React, { useCallback, useEffect, useRef } from 'react';

import { Theme } from '@mui/material';

interface Props {
    palette: Theme['palette'];
}

function Logo({ palette }: Props) {
    const eyeRef = useRef<SVGGElement>(null);

    const mouseMoveHandler = useCallback((event: MouseEvent) => {
        if (eyeRef.current !== null) {
            const rect = eyeRef.current.getBoundingClientRect();

            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            const initialAngle = 110;
            const rad = Math.atan2(event.pageX - window.scrollX - x, event.pageY - window.scrollY - y);
            const rotation = rad * (180 / Math.PI) * -1 + 180 - initialAngle;

            eyeRef.current.style.transform = `rotate(${rotation}deg)`;
        }
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [mouseMoveHandler]);

    return (
        <svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                    <stop stopColor={palette.warning.light} offset="0%" />
                    <stop stopColor={palette.secondary.main} offset="100%" />
                </linearGradient>
                <linearGradient x1="0" y1="50%" x2="100%" y2="50%" id="b">
                    <stop stopColor={palette.error.main} offset="0%" />
                    <stop stopColor={palette.secondary.dark} offset="100%" />
                </linearGradient>
                <linearGradient x1="25%" y1="10%" x2="75%" y2="125%" id="c">
                    <stop stopColor={palette.warning.light} offset="0%" />
                    <stop stopColor={palette.warning.light} offset="30%" />
                    <stop stopColor={palette.secondary.main} offset="100%" />
                </linearGradient>
                <linearGradient x1="12.5%" y1="40%" x2="60%" y2="50%" id="d">
                    <stop stopColor={palette.info.main} offset="0%" />
                    <stop stopColor={palette.info.dark} offset="50%" />
                    <stop stopColor={palette.primary.main} offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="-25%" x2="50%" y2="125%" id="e">
                    <stop stopColor={palette.error.main} offset="0%" />
                    <stop stopColor={palette.warning.light} stopOpacity=".8" offset="100%" />
                </linearGradient>
                <linearGradient x1="75%" y1="25%" x2="25%" y2="50%" id="f">
                    <stop stopColor={palette.warning.light} offset="0%" />
                    <stop stopColor={palette.common.white} offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="25%" y2="75%" id="g">
                    <stop stopColor={palette.primary.main} offset="0%" />
                    <stop stopColor={palette.primary.main} stopOpacity="0" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="125%" id="h">
                    <stop stopColor={palette.error.main} offset="0%" />
                    <stop stopColor={palette.secondary.light} offset="25%" />
                    <stop stopColor={palette.secondary.dark} offset="50%" />
                    <stop stopColor={palette.primary.main} offset="75%" />
                    <stop stopColor={palette.primary.dark} offset="100%" />
                </linearGradient>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="25%" id="i">
                    <stop stopColor={palette.primary.dark} offset="0%" />
                    <stop stopColor={palette.secondary.dark} offset="50%" />
                    <stop stopColor={palette.error.main} offset="100%" />
                </linearGradient>
                <linearGradient x1="0%" y1="50%" x2="125%" y2="50%" id="j">
                    <stop stopColor={palette.info.dark} offset="0%" />
                    <stop stopColor={palette.info.light} offset="100%" />
                </linearGradient>
            </defs>
            <g transform="translate(58)">
                <ellipse fill="url(#a)" cx="57.34" cy="153.379" rx="57.34" ry="57.509" />
                <path
                    d="M47.834 96.666a190.4 190.4 0 00-44.438 76.133A57.602 57.602 0 0030.63 204.25l4.634.525c1.143-37.326 4.333-72.216 13.68-108.237l-1.11.127z"
                    fill="url(#b)"
                />
                <path
                    d="M230.566 86.033l20.362-63.749a17.01 17.01 0 00-2.223-15.08A16.905 16.905 0 00235.312 0h-6.11C109.506.732 11.236 98.019 8.95 217.972v4.25c0 2.865 0 5.714.159 8.547a30.265 30.265 0 0013.109 24.004 182.751 182.751 0 00103.253 31.835c74.337-5.174 161.228-75.672 175.163-127.896v-.207c-10.776-33.618-37.185-60.263-70.069-72.472z"
                    fill="url(#c)"
                />
                <path
                    d="M340.762 186.79S193.62 297.654 120.203 286.512c-19.965 4.202-33.138 6.908-46.024 9.327a8.21 8.21 0 00-5.999 4.783 8.25 8.25 0 00.555 7.665c7.935 12.972 24.488 32.996 49.199 31.389a109.043 109.043 0 00-19.045 80.557c8.094 53.005 54.404 91.684 107.92 91.684 104.316 0 190.445-83.868 191.146-188.509.194-34.263-18.87-79.803-57.193-136.618zm-79.566 220.964c-9.157 13.498-23.805 23.399-38.85 29.495-15.046 6.096-33.217 5.858-46.945-2.945-13.728-8.802-21.68-26.82-16.696-42.356 4.983-15.535 24.028-25.674 38.93-19.1 12.316 5.411 19.045 19.435 31.25 25.133 14.283 6.638 33.422.955 43.913-10.967a149.747 149.747 0 01-11.602 20.74z"
                    fill="url(#d)"
                />
                <ellipse fill="url(#e)" cx="145.136" cy="158.664" rx="79.606" ry="79.841" />
                <g ref={eyeRef} style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}>
                    <ellipse fill={palette.common.white} cx="145.136" cy="158.664" rx="58.975" ry="59.149" />
                    <ellipse fill={palette.success.main} cx="165.609" cy="168.58" rx="16.934" ry="16.984" />
                    <ellipse
                        fill={palette.common.white}
                        opacity=".74"
                        cx="160.943"
                        cy="152.249"
                        rx="11.665"
                        ry="11.699"
                    />
                </g>
                <path
                    d="M18.505 157.582C74.909 64.417 145.612 24.91 246.945 34.588l3.951-12.304A16.994 16.994 0 00248.682 7.2 16.889 16.889 0 00235.28 0h-6.11C130.424.605 46.183 66.996 18.505 157.582z"
                    fill="url(#f)"
                    opacity=".8"
                />
                <path
                    d="M96.208 335.264c6.466 3.206 13.746 4.821 20.943 4.484 14.008-20.677 39.892-43.381 56.091-47.729-28.25 3.677-58.243 20.817-77.034 43.245z"
                    fill={palette.primary.dark}
                    opacity=".56"
                />
                <path
                    d="M175.448 457.814c3.492-6.367 4.285-13.673 4.27-21.027a43.353 43.353 0 01-4.032-2.244c-13.712-8.802-21.679-26.805-16.695-42.356 4.983-15.551 24.027-25.675 38.93-19.1 4.92 2.164 12.442 9.343 12.807 9.55-30.71-32.456-93.826-29.511-108.205 17.875a58.27 58.27 0 003.65 42.53c6 11.923 9.824 21.41 19.378 30.721 9.618-.127 17.902 3.2 27.155.573 9.252-2.626 18.092-8.086 22.742-16.522z"
                    fill="url(#g)"
                />
                <path
                    d="M300.635 487.44c48.971-28.117 91.77-78.587 96.918-152.894 5.149-74.307-33.602-134.443-78.758-165.904l-73.834 80.496c34.994 22.922 57.685 60.571 61.657 102.302 3.971 41.73-11.209 83.004-41.248 112.152-30.36 29.463-69.18 41.533-110.936 35.071 41.768 25.488 110.828 9.087 146.2-11.223z"
                    fill="url(#h)"
                />
                <path
                    d="M300.24 157.29c-13.934 52.224-105.7 124.097-180.037 129.27 60.737 13.617 169.53-27.128 220.56-99.77-12-11.652-25.939-21.357-40.523-29.5z"
                    fill="url(#i)"
                />
                <path
                    d="M253.928 426.807a10.938 10.938 0 006.015.971c9.522-.684 17.79-7.48 22.742-15.678 7.935-13.1 12.252-32.185 11.633-47.418a75.252 75.252 0 00-18.172-45.762 73.437 73.437 0 00-41.898-24.672c19.045 6.733 57.864 33.729 41.168 85.333a87.692 87.692 0 01-2.92 7.72l.286-.287a149.746 149.746 0 01-11.601 20.692 66.193 66.193 0 01-7.095 8.691l-.079.096c-1.047 1.4-3.301 3.565-3.364 5.332a5.635 5.635 0 003.285 4.982z"
                    fill={palette.primary.dark}
                    opacity=".56"
                />
                <path
                    d="M223.639 291.053c26.728 6.062 43.852 22.748 52.441 43.878 4.323 10.634 2.69 24.443-6.515 31.287-10.903 8.086-25.064 2.157-35.221-6.932-11.49-10.203-19.426-25.34-32.694-33.172-14.124-8.325-33.597-7.48-48.468-1.958-18.034 6.83-35.335 21.615-47.179 37.071-.163.213-.129.145-.129.145 2.9-6.08 9.141-27.857 44.039-56.428 20.458-16.925 46.997-19.953 73.726-13.89z"
                    fill="url(#j)"
                />
            </g>
        </svg>
    );
}

export default Logo;

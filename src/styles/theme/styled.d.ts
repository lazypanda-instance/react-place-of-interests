import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        themeType: string;

        colors: {
            background: string,
            text: string
        };

        section: {
            background: string;
        }
    }
}
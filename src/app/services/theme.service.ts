import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

export enum ThemeType {
    Light = 'Light',
    Dark = 'Dark'
}

@Injectable({ providedIn: 'root' })
export class ThemeService {

    constructor(private overlayContainer: OverlayContainer) {
        this.addTheme(this.theme);
    }

    get theme(): ThemeType {
        const theme = ThemeType[localStorage.getItem('theme')];

        if (typeof theme !== 'undefined') {
            return theme;
        }

        return ThemeType.Light;
    }

    set theme(theme: ThemeType) {
        localStorage.setItem('theme', theme);
    }

    private addTheme(theme: ThemeType): void {
        const overlayclassList = this.overlayContainer.getContainerElement().classList;
        const themesRemove = Array.from(overlayclassList).filter((i: string) => i.includes('-theme'));

        if (themesRemove.length) {
            overlayclassList.remove(...themesRemove);
            document.body.classList.remove(...themesRemove);
        }

        overlayclassList.add(theme.toLowerCase() + '-theme');
        document.body.classList.add(theme.toLowerCase() + '-theme');

        this.theme = theme;
    }

    addThemeLight = (): void => this.addTheme(ThemeType.Light);

    addThemeDark = (): void => this.addTheme(ThemeType.Dark);

}

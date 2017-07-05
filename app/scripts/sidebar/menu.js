import { MenuBar } from './menu-bar';
import { MenuConfig } from './menu-config';

export class Menu {
    constructor() {
        this.menuBar = new MenuBar();
        this.menuConfig = new MenuConfig();
        this.menuContent = document.getElementById('menuContent');
        this.mapContent = document.getElementById('map');
    }

    init() {
        this.menuBar.render();
        this.menuConfig.render();
        this.mapContent.addEventListener('click', (e) => {
            if (!this.menuContent.contains(e.target) && this.menuContent.classList.contains('show')) {
                this.closeSettings();
            }
        });
        document.getElementById('menuItem').addEventListener('click', () => {
            if (!this.menuContent.classList.contains('show')) {
                this.openSettings();
            } else {
                this.closeSettings();
            }
        })
    }

    openSettings() {
        document.getElementById('menuItem').classList.add('active');
        this.menuContent.classList.add('show');
        this.mapContent.classList.add('menu-open');
    }

    closeSettings() {
        document.getElementById('menuItem').classList.remove('active');
        this.menuContent.classList.remove('show');
        this.mapContent.classList.remove('menu-open');
    }
}
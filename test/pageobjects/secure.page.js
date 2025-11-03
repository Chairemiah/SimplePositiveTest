import { $ } from '@wdio/globals'
import WebPage from './web.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends WebPage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('.title');
    }
}

export default new SecurePage();

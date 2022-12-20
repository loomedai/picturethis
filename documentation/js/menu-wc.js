'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">picturethis documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' : 'data-target="#xs-components-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' :
                                            'id="xs-components-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatepostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatepostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' : 'data-target="#xs-injectables-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' :
                                        'id="xs-injectables-links-module-AppModule-63f991419025152d615da5a04bd914ffe6a330dbb9c520d243e5e9d81d541da814504e3e415406f1800697f3e78e74a6763b58ac47e403b4579aea5d15078494"' }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreatePagePageModule.html" data-type="entity-link" >CreatePagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreatePagePageModule-7fc2af554a501ef3cb10e810cfc688e9c0f7aedbe1bbb2142054019b459f392e7bb7906f33a0effd71d49acf7de4a2b6a3acf659f331e2a78be60abf87d68af6"' : 'data-target="#xs-components-links-module-CreatePagePageModule-7fc2af554a501ef3cb10e810cfc688e9c0f7aedbe1bbb2142054019b459f392e7bb7906f33a0effd71d49acf7de4a2b6a3acf659f331e2a78be60abf87d68af6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreatePagePageModule-7fc2af554a501ef3cb10e810cfc688e9c0f7aedbe1bbb2142054019b459f392e7bb7906f33a0effd71d49acf7de4a2b6a3acf659f331e2a78be60abf87d68af6"' :
                                            'id="xs-components-links-module-CreatePagePageModule-7fc2af554a501ef3cb10e810cfc688e9c0f7aedbe1bbb2142054019b459f392e7bb7906f33a0effd71d49acf7de4a2b6a3acf659f331e2a78be60abf87d68af6"' }>
                                            <li class="link">
                                                <a href="components/CreatePagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreatePagePageRoutingModule.html" data-type="entity-link" >CreatePagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritePagePageModule.html" data-type="entity-link" >FavoritePagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoritePagePageModule-03956e814d159391ed6f3a744259a502b43872184e6788f27aa2d32e29c1d7f2c18f277a43561e0b270d2fd6d9643d50c2f36c852508b529b4050b2571a1a9bd"' : 'data-target="#xs-components-links-module-FavoritePagePageModule-03956e814d159391ed6f3a744259a502b43872184e6788f27aa2d32e29c1d7f2c18f277a43561e0b270d2fd6d9643d50c2f36c852508b529b4050b2571a1a9bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritePagePageModule-03956e814d159391ed6f3a744259a502b43872184e6788f27aa2d32e29c1d7f2c18f277a43561e0b270d2fd6d9643d50c2f36c852508b529b4050b2571a1a9bd"' :
                                            'id="xs-components-links-module-FavoritePagePageModule-03956e814d159391ed6f3a744259a502b43872184e6788f27aa2d32e29c1d7f2c18f277a43561e0b270d2fd6d9643d50c2f36c852508b529b4050b2571a1a9bd"' }>
                                            <li class="link">
                                                <a href="components/FavoritePagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritePagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritePagePageRoutingModule.html" data-type="entity-link" >FavoritePagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostPagePageModule.html" data-type="entity-link" >PostPagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostPagePageModule-ebf995033327a7bfd1cd161ded63bde75611bd9673f8f231bfe282337b075bb01c1da9b422208aa9e7cbf0b9da8e7cb5ba0c6bfb457b2b9a68b58f621267f664"' : 'data-target="#xs-components-links-module-PostPagePageModule-ebf995033327a7bfd1cd161ded63bde75611bd9673f8f231bfe282337b075bb01c1da9b422208aa9e7cbf0b9da8e7cb5ba0c6bfb457b2b9a68b58f621267f664"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostPagePageModule-ebf995033327a7bfd1cd161ded63bde75611bd9673f8f231bfe282337b075bb01c1da9b422208aa9e7cbf0b9da8e7cb5ba0c6bfb457b2b9a68b58f621267f664"' :
                                            'id="xs-components-links-module-PostPagePageModule-ebf995033327a7bfd1cd161ded63bde75611bd9673f8f231bfe282337b075bb01c1da9b422208aa9e7cbf0b9da8e7cb5ba0c6bfb457b2b9a68b58f621267f664"' }>
                                            <li class="link">
                                                <a href="components/PostPagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostPagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostPagePageRoutingModule.html" data-type="entity-link" >PostPagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-31132f6849536d25eb665692c7c375969564eab3e5ce2541b31f8f4dd977878b42584963289b067a5f23b929fa716116c4c916421b51b50e73cc0473c6f2cec9"' : 'data-target="#xs-components-links-module-ProfilePageModule-31132f6849536d25eb665692c7c375969564eab3e5ce2541b31f8f4dd977878b42584963289b067a5f23b929fa716116c4c916421b51b50e73cc0473c6f2cec9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-31132f6849536d25eb665692c7c375969564eab3e5ce2541b31f8f4dd977878b42584963289b067a5f23b929fa716116c4c916421b51b50e73cc0473c6f2cec9"' :
                                            'id="xs-components-links-module-ProfilePageModule-31132f6849536d25eb665692c7c375969564eab3e5ce2541b31f8f4dd977878b42584963289b067a5f23b929fa716116c4c916421b51b50e73cc0473c6f2cec9"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-0931c31d898d59f482ccac5a01eae705234e8479dda7282d2aaee0ce8cdaa2fd4a6b2d6399cd4c3eb88523b68da0ec698d49db5f4301871d8079f67969fde468"' : 'data-target="#xs-components-links-module-Tab1PageModule-0931c31d898d59f482ccac5a01eae705234e8479dda7282d2aaee0ce8cdaa2fd4a6b2d6399cd4c3eb88523b68da0ec698d49db5f4301871d8079f67969fde468"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-0931c31d898d59f482ccac5a01eae705234e8479dda7282d2aaee0ce8cdaa2fd4a6b2d6399cd4c3eb88523b68da0ec698d49db5f4301871d8079f67969fde468"' :
                                            'id="xs-components-links-module-Tab1PageModule-0931c31d898d59f482ccac5a01eae705234e8479dda7282d2aaee0ce8cdaa2fd4a6b2d6399cd4c3eb88523b68da0ec698d49db5f4301871d8079f67969fde468"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomepostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-85a5a364825edf63744bc4e2c8e7542006257d4e0d07298670caad5d4134a3936bd70f2e90a22227f52ea1fb3515291f1900439bd2fbbcb150724222b0092f4f"' : 'data-target="#xs-components-links-module-Tab2PageModule-85a5a364825edf63744bc4e2c8e7542006257d4e0d07298670caad5d4134a3936bd70f2e90a22227f52ea1fb3515291f1900439bd2fbbcb150724222b0092f4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-85a5a364825edf63744bc4e2c8e7542006257d4e0d07298670caad5d4134a3936bd70f2e90a22227f52ea1fb3515291f1900439bd2fbbcb150724222b0092f4f"' :
                                            'id="xs-components-links-module-Tab2PageModule-85a5a364825edf63744bc4e2c8e7542006257d4e0d07298670caad5d4134a3936bd70f2e90a22227f52ea1fb3515291f1900439bd2fbbcb150724222b0092f4f"' }>
                                            <li class="link">
                                                <a href="components/ReadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-54b1c0f84b6ea6a4bb7263f9d3b22675a24901432281e5720b96f29c06ffa60a59a6391f8b0bc46776d3997c0570d8cca849458209228b40aee3615000344a28"' : 'data-target="#xs-components-links-module-Tab3PageModule-54b1c0f84b6ea6a4bb7263f9d3b22675a24901432281e5720b96f29c06ffa60a59a6391f8b0bc46776d3997c0570d8cca849458209228b40aee3615000344a28"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-54b1c0f84b6ea6a4bb7263f9d3b22675a24901432281e5720b96f29c06ffa60a59a6391f8b0bc46776d3997c0570d8cca849458209228b40aee3615000344a28"' :
                                            'id="xs-components-links-module-Tab3PageModule-54b1c0f84b6ea6a4bb7263f9d3b22675a24901432281e5720b96f29c06ffa60a59a6391f8b0bc46776d3997c0570d8cca849458209228b40aee3615000344a28"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsLoggedInPageModule.html" data-type="entity-link" >TabsLoggedInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsLoggedInPageModule-c703ee64a22253db417e8306f7fa744c7aff3c91355386f1f8d28c4c0b9870a044a9d1cba6372660583bf8c8829f792f721e74774dd5e63d4573a4c33316fb64"' : 'data-target="#xs-components-links-module-TabsLoggedInPageModule-c703ee64a22253db417e8306f7fa744c7aff3c91355386f1f8d28c4c0b9870a044a9d1cba6372660583bf8c8829f792f721e74774dd5e63d4573a4c33316fb64"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsLoggedInPageModule-c703ee64a22253db417e8306f7fa744c7aff3c91355386f1f8d28c4c0b9870a044a9d1cba6372660583bf8c8829f792f721e74774dd5e63d4573a4c33316fb64"' :
                                            'id="xs-components-links-module-TabsLoggedInPageModule-c703ee64a22253db417e8306f7fa744c7aff3c91355386f1f8d28c4c0b9870a044a9d1cba6372660583bf8c8829f792f721e74774dd5e63d4573a4c33316fb64"' }>
                                            <li class="link">
                                                <a href="components/TabsLoggedInPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsLoggedInPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsLoggedInPageRoutingModule.html" data-type="entity-link" >TabsLoggedInPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-27902ffbacfcfa25872d7a7d1751a24853b3cdd9e5558d2d1c0f623742c643eb340271bf5ca6978d18960eef2102f3c76387a7358c6aefa9a8f679d374828d44"' : 'data-target="#xs-components-links-module-TabsPageModule-27902ffbacfcfa25872d7a7d1751a24853b3cdd9e5558d2d1c0f623742c643eb340271bf5ca6978d18960eef2102f3c76387a7358c6aefa9a8f679d374828d44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-27902ffbacfcfa25872d7a7d1751a24853b3cdd9e5558d2d1c0f623742c643eb340271bf5ca6978d18960eef2102f3c76387a7358c6aefa9a8f679d374828d44"' :
                                            'id="xs-components-links-module-TabsPageModule-27902ffbacfcfa25872d7a7d1751a24853b3cdd9e5558d2d1c0f623742c643eb340271bf5ca6978d18960eef2102f3c76387a7358c6aefa9a8f679d374828d44"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CookieComponent.html" data-type="entity-link" >CookieComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
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
                    <a href="index.html" data-type="index-link">ng-multi-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
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
                                            'data-target="#components-links-module-AppModule-f37e08a8fa8eedcaac5010bc844634f03bae26420eace1b73dcc06e07005fc0dd5353bd52ebb1566b4fe29aa7e2d6fc816554e0540f0d755c09a60ef4a672eab"' : 'data-target="#xs-components-links-module-AppModule-f37e08a8fa8eedcaac5010bc844634f03bae26420eace1b73dcc06e07005fc0dd5353bd52ebb1566b4fe29aa7e2d6fc816554e0540f0d755c09a60ef4a672eab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f37e08a8fa8eedcaac5010bc844634f03bae26420eace1b73dcc06e07005fc0dd5353bd52ebb1566b4fe29aa7e2d6fc816554e0540f0d755c09a60ef4a672eab"' :
                                            'id="xs-components-links-module-AppModule-f37e08a8fa8eedcaac5010bc844634f03bae26420eace1b73dcc06e07005fc0dd5353bd52ebb1566b4fe29aa7e2d6fc816554e0540f0d755c09a60ef4a672eab"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChatAppModule.html" data-type="entity-link" >ChatAppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChatAppModule-15441a8f6877c825e27f606a98c99d141ce1d0891b10f3bc9a6277e8b2048694628c858b57f0b1fbcb8f8d4f202856a270064d07fd180a59a0170271463f010b"' : 'data-target="#xs-components-links-module-ChatAppModule-15441a8f6877c825e27f606a98c99d141ce1d0891b10f3bc9a6277e8b2048694628c858b57f0b1fbcb8f8d4f202856a270064d07fd180a59a0170271463f010b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatAppModule-15441a8f6877c825e27f606a98c99d141ce1d0891b10f3bc9a6277e8b2048694628c858b57f0b1fbcb8f8d4f202856a270064d07fd180a59a0170271463f010b"' :
                                            'id="xs-components-links-module-ChatAppModule-15441a8f6877c825e27f606a98c99d141ce1d0891b10f3bc9a6277e8b2048694628c858b57f0b1fbcb8f8d4f202856a270064d07fd180a59a0170271463f010b"' }>
                                            <li class="link">
                                                <a href="components/ChatAppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatAppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatAppRoutingModule.html" data-type="entity-link" >ChatAppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationAppModule.html" data-type="entity-link" >NotificationAppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotificationAppModule-981e7f6768cb0b99a9428a17feac5229fae6818cee4104d74cc5a5be8148755b9952aa7d500f1c2d1b8ff49219d7fa8d1d45ce6ba005646fb2fdeb90efb48b3f"' : 'data-target="#xs-components-links-module-NotificationAppModule-981e7f6768cb0b99a9428a17feac5229fae6818cee4104d74cc5a5be8148755b9952aa7d500f1c2d1b8ff49219d7fa8d1d45ce6ba005646fb2fdeb90efb48b3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationAppModule-981e7f6768cb0b99a9428a17feac5229fae6818cee4104d74cc5a5be8148755b9952aa7d500f1c2d1b8ff49219d7fa8d1d45ce6ba005646fb2fdeb90efb48b3f"' :
                                            'id="xs-components-links-module-NotificationAppModule-981e7f6768cb0b99a9428a17feac5229fae6818cee4104d74cc5a5be8148755b9952aa7d500f1c2d1b8ff49219d7fa8d1d45ce6ba005646fb2fdeb90efb48b3f"' }>
                                            <li class="link">
                                                <a href="components/NotificationAppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationAppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationAppRoutingModule.html" data-type="entity-link" >NotificationAppRoutingModule</a>
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
                                <a href="components/ChatPopupComponent.html" data-type="entity-link" >ChatPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotificationPopupComponent.html" data-type="entity-link" >NotificationPopupComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DynamicComponentDirective.html" data-type="entity-link" >DynamicComponentDirective</a>
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
                                    <a href="injectables/CommonPlatformService.html" data-type="entity-link" >CommonPlatformService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChatQuery.html" data-type="entity-link" >ChatQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationList.html" data-type="entity-link" >NotificationList</a>
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
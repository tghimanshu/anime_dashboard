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
                    <a href="index.html" data-type="index-link">anime-dashboard documentation</a>
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
                                            'data-target="#components-links-module-AppModule-670370b4a7357cd0e32424e559f07a3e12b84e9c3617c63d89152367a15004141ecfd8faef81d8ccd95966ff2088cbd8f64509a2b33fd8c7e0a890094aa585e0"' : 'data-target="#xs-components-links-module-AppModule-670370b4a7357cd0e32424e559f07a3e12b84e9c3617c63d89152367a15004141ecfd8faef81d8ccd95966ff2088cbd8f64509a2b33fd8c7e0a890094aa585e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-670370b4a7357cd0e32424e559f07a3e12b84e9c3617c63d89152367a15004141ecfd8faef81d8ccd95966ff2088cbd8f64509a2b33fd8c7e0a890094aa585e0"' :
                                            'id="xs-components-links-module-AppModule-670370b4a7357cd0e32424e559f07a3e12b84e9c3617c63d89152367a15004141ecfd8faef81d8ccd95966ff2088cbd8f64509a2b33fd8c7e0a890094aa585e0"' }>
                                            <li class="link">
                                                <a href="components/AddBookmarkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddBookmarkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddNoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddTodoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTodoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookmarkTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookmarkTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookmarksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookmarksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBookmarkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBookmarkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditNoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditNoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditTodoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditTodoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GoogleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoBgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoBgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageBookmarksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageBookmarksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YoutubeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YoutubeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Bookmark.html" data-type="entity-link" >Bookmark</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/Todo.html" data-type="entity-link" >Todo</a>
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
                                    <a href="injectables/BookmarkService.html" data-type="entity-link" >BookmarkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteService.html" data-type="entity-link" >NoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoService.html" data-type="entity-link" >TodoService</a>
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
                                <a href="interfaces/YoutubeSearch.html" data-type="entity-link" >YoutubeSearch</a>
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
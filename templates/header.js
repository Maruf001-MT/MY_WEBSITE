class HeaderTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <div data-animation="default" class="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="500" data-doc-height="1">
            <div class="container nav-container">
                <div class="nav-menu-container"><a href="/" aria-current="page" class="brand show-mobile w-nav-brand w--current"><img src="assets/img/logo.svg" loading="lazy" alt="" class="brand-image"/></a>
                    <nav
                        role="navigation" class="nav-menu w-nav-menu">
                        <div class="nav-link">
                            <div class="nav-link-wrapper">
                                <a href="/work" class="nav-link-text-holder w-inline-block">
                                    <div class="nav-link-text">Work</div>
                                    <div class="nav-link-underline-holder">
                                        <div class="nav-link-underline-02"></div>
                                        <div class="nav-link-underline-01"></div>
                                    </div>
                                </a>
                                <a href="/about.html" class="nav-link-text-holder w-inline-block">
                                    <div class="nav-link-text">About</div>
                                    <div class="nav-link-underline-holder">
                                        <div class="nav-link-underline-02"></div>
                                        <div class="nav-link-underline-01"></div>
                                    </div>
                                </a>
                                <a href="/shop" class="nav-link-text-holder w-inline-block">
                                    <div class="nav-link-text">Shop</div>
                                    <div class="nav-link-underline-holder">
                                        <div class="nav-link-underline-02"></div>
                                        <div class="nav-link-underline-01"></div>
                                    </div>
                                </a>
                            </div><a href="/" aria-current="page" class="brand hide-mobile w-nav-brand w--current"><img src="assets/img/logo.svg" loading="lazy" alt="" class="brand-image"/></a>
                            <div
                                class="nav-link-wrapper right">
                                <a href="https://blog.prozukty.com/profile/mi_blog" target="_blank" class="nav-link-text-holder w-inline-block">
                                    <div class="nav-link-text">Blog</div>
                                    <div class="nav-link-underline-holder">
                                        <div class="nav-link-underline-02"></div>
                                        <div class="nav-link-underline-01"></div>
                                    </div>
                                </a>
                                <a href="/contact" class="nav-link-text-holder w-inline-block">
                                    <div class="nav-link-text">Contact</div>
                                    <div class="nav-link-underline-holder">
                                        <div class="nav-link-underline-02"></div>
                                        <div class="nav-link-underline-01"></div>
                                    </div>
                                </a>
                        </div>
                </div>
            </nav>
              
        <div class="menu-button w-nav-button"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63c93fa82477dd6f2e518a3d_menu.svg" loading="lazy" alt="" class="menu-icon" /></div>
    </div>
    </div>
        </div>
  
  `;
    }
  }

  customElements.define('header-template', HeaderTemplate);
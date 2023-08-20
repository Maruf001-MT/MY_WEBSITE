class FooterTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <div class="footer">
        <div class="container">
            <div class="footer-top-holder"><a href="/" aria-current="page" class="footer-logo-holder w-inline-block w--current"><img src="assets/img/logo.svg" loading="lazy" alt="" class="footer-logo"/></a>
                <div
                    class="footer-link-holder"><a href="/work" class="footer-link">Projects</a><a href="/about" class="footer-link">About</a><a href="/blog" class="footer-link">Blog</a><a href="/contact" class="footer-link">Contact</a><a href="/template/change-log" class="footer-link">Change Log</a>
                    <a
                        href="/template/style-guide" class="footer-link">Style Guide</a><a href="/template/licensing" class="footer-link">Licensing</a><a href="/template/instructions" class="footer-link">Instructions</a></div>
        </div>
        <div class="footer-copyright-section-holder">
            <div class="footer-copyright-section">
                <div class="footer-copyright-text-holder">
                    <div class="footer-text">Crafted with ♥ by <a href="https://azwedo.com?ref=losangeles-template" target="_blank" class="footer-link">Azwedo</a> &amp; <a href="https://wedoflow.com?ref=losangeles-template" target="_blank" class="footer-link">Wedoflow</a></div>
                </div>
                <div id="w-node-_91250ff7-389c-eb5e-d4ae-7ae07af74cf4-0a144c54" class="footer-social-media-icon-holder"><a href="http://discord.com" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb0636296de35077ad9_Discord.svg" loading="lazy" alt="" class="footer-social-media-icon"/></a>
                    <a
                        href="https://www.instagram.com/wedoflow/" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb02bb75d70f9e9d87f_Insta.svg" loading="lazy" alt="" class="footer-social-media-icon" /></a><a href="https://twitter.com/wedoflow" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb088b7bd1c834d5876_Twitter.svg" loading="lazy" alt="" class="footer-social-media-icon"/></a>
                        <a
                            href="https://www.youtube.com/channel/UC2FWFwbfxsWbxUayV1-6Gzg" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb0ff4ee8b468fb0f78_YT.svg" loading="lazy" alt="" class="footer-social-media-icon" /></a><a href="https://www.facebook.com/wedoflow/" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb0b74cb664169b997f_FB.svg" loading="lazy" alt="" class="footer-social-media-icon"/></a></div>
                <div
                    class="footer-copyright-text-holder">
                    <div class="footer-text">Powered by <a href="https://webflow.com?ref=wedoflow.com" target="_blank" class="footer-link">Webflow</a></div>
            </div>
        </div>
    </div>
    </div>
    </div>
  
  `
    }
  }

  customElements.define('footer-template', FooterTemplate);
class FooterTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <div class="footer">
        <div class="container">
            <div class="footer-top-holder"><a href="/" aria-current="page" class="footer-logo-holder w-inline-block w--current"><img src="https://drive.prozukty.com/share/UGgw6NqfnDwnVtN7" loading="lazy" alt="" class="footer-logo"/></a>
                <div
                    class="footer-link-holder"><a href="/work" class="footer-link">Projects</a><a href="/about" class="footer-link">About</a><a href="/blog" class="footer-link">Blog</a><a href="/contact" class="footer-link">Contact</a>
                    </div>
        </div>
        <div class="footer-copyright-section-holder">
            <div class="footer-copyright-section">
                <div class="footer-copyright-text-holder">
                    <div class="footer-text">Crafted with ♥ by <a href="https://prozukty.com/" target="_blank" class="footer-link">Prozukty</a> &amp; <a href="/" class="footer-link">Maruf</a></div>
                </div>
                <div id="w-node-_91250ff7-389c-eb5e-d4ae-7ae07af74cf4-0a144c54" class="footer-social-media-icon-holder"><a href="https://discord.com/users/maruf_biz" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb0636296de35077ad9_Discord.svg" loading="lazy" alt="" class="footer-social-media-icon"/></a>
                    <a
                        href="https://www.instagram.com/maruf_islam_404/" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb02bb75d70f9e9d87f_Insta.svg" loading="lazy" alt="" class="footer-social-media-icon" /></a>
                        
                        <a
                            href="https://www.youtube.com/channel/UC2FWFwbfxsWbxUayV1-6Gzg" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb0ff4ee8b468fb0f78_YT.svg" loading="lazy" alt="" class="footer-social-media-icon" /></a><a href="https://www.facebook.com/wedoflow/" target="_blank" class="footer-social-media-icon-container w-inline-block"><img src="https://assets.website-files.com/63c93fa82477dd4783518a35/63d13cb0b74cb664169b997f_FB.svg" loading="lazy" alt="" class="footer-social-media-icon"/></a></div>
                <div
                    class="footer-copyright-text-holder">
                    <div class="footer-text"><a href="/" class="footer-link">©2023</a>, All rights reserved</div>
            </div>
        </div>
    </div>
    </div>
    </div>
  
  `
    }
  }

  customElements.define('footer-template', FooterTemplate);
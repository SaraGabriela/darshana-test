import Head from "next/head"

export default function Layout({children, title, description}) {
  return (
    <div>
      <Head>
      <title>Darshana</title>
        <meta charset="utf-8" />
        <meta name="description" content="A web3 community that empowers talent to get jobs at great companies"/>
        <meta property="og:title" content="Darshana"/>
        <meta property="description" content="A web3 community that empowers talent to get jobs at great companies"/>
        <meta property="og:image" content="https://ratalie.github.io/LandingDarshana/images/SEO_share.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        
        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery.scrollex.min.js"></script>
        <script src="/js/jquery.scrolly.min.js"></script>
        <script src="/js/browser.min.js"></script>
        <script src="/js/breakpoints.min.js"></script>
        <script src="/js/util.js"></script>
        <script src="/js/main.js"></script>
      </Head>

        {/*  Sidebar */}
        <section id="sidebar">
          <div className="inner">
            <nav>
              <ul>
                <li><a href="#intro">Welcome</a></li>
                <li><a href="#one">How it works</a></li>
                <li><a href="#two">Questions & Answers</a></li>
                <li><a href="#three">Get to know web3</a></li>
                <li><a href="#four">About</a></li>
                <li className="menu_flags">
                  {/* GTranslate: https://gtranslate.io/ 
                  <a href="#" onclick="doGTranslate('en|en');return false;" title="English" className="gflag nturl" style="border-bottom:none !important; background-position:-0px -0px;"><img src="https://gtranslate.net/flags/blank.png" height="24" width="24" alt="English"/></a>
                  <a href="#" onclick="doGTranslate('en|es');return false;" title="Spanish" className="gflag nturl" style="border-bottom:none !important; background-position:-600px -200px;"><img src="https://gtranslate.net/flags/blank.png" height="24" width="24" alt="Spanish"/></a>
                  */}
                </li>
              </ul>
            </nav>
          </div>
        </section>

      <div  id = "wrapper" >

        <main className = "inner">{children}</main>

      </div>

      {/*footer*/}  

        <footer id="footer" className="wrapper style1-alt">
          <div className="inner">
            <img src="images/negative.png" className="imageresize"/>
            <a target="_blank" rel="noopener noreferrer" href="https://algorand.foundation/news/darshana-grant-award"><p>Built with the support of  <img className="imageresize" src="images/algorand.png" /></p></a>
            <ul className="menu">
              <li>&copy; 2022 Darshana Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              {/*<li>
                <!-- GTranslate: https://gtranslate.io/ -->
                <a href="#" onclick="doGTranslate('en|en');return false;" title="English" className="gflag nturl" style="border-bottom:none !important; background-position:-0px -0px;"><img src="https://gtranslate.net/flags/blank.png" height="24" width="24" alt="English"/></a>
              </li>
              <li>
                <a href="#" onclick="doGTranslate('en|es');return false;" title="Spanish" className="gflag nturl" style="border-bottom:none !important; background-position:-600px -200px;"><img src="https://gtranslate.net/flags/blank.png" height="24" width="24" alt="Spanish"/></a>
                </li>*/}
            </ul>
          </div>
        </footer>
    </div>
  )
}

import Layout from "../../components/Layout"


export default function index({qaBoxes, partnerships}) {
  const heart = "<3";

  return (
    <Layout>
      {/* Intro */}
					<section id="intro" className="wrapper style1 fullscreen fade-up">
						<div className="inner">
							<img src='/images/DarshanaWhite.gif' className="imageresize"/>
							<p className="algo_banner">Built with the support of <a target="_blank" rel="noopener noreferrer" className="icon" href="https://algorand.foundation/news/darshana-grant-award"><b>Algorand Foundation</b></a></p>
							<br/>
							<p>A web3 based community that empowers<br />
							great talent to find jobs at great companies.</p>
							<ul className="actions">
								<li><a href="https://discord.gg/darshana" className="button scrolly" target="_blank" rel="noopener noreferrer"> Join our Discord</a><a href="https://app.darshana.io" className="button scrolly" target="_blank" rel="noopener noreferrer"> Launch the app&nbsp;</a></li>
							</ul>
						</div>
					</section>

          {/* One */}
					<section id="one" className="wrapper style2 spotlights">
						<section>	
						<a href="#" className="image"><img src="images/Talent.gif" alt="" data-position="25% 25%" /></a>
							<div className="content">
								<div className="inner">
									<h2>I am looking for a job</h2>
									<p>Create your profile (it's free!), join the community, get help to get a job, help others, help build Darshana, earn rewards.</p>
									<ul className="actions">
										<li><a href="https://youtu.be/i2uxrKtXkss" className="button" target="_blank" rel="noopener noreferrer">  Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="#" className="image"><img src="images/Company.gif" alt="" data-position="75% 25%" /></a>
							<div className="content">
								<div className="inner">
									<h2>I am looking for talent</h2>
									<p>Create your profile, join the community, get help to get the best talent, help talent and others, help build Darshana, earn rewards.</p>
									<ul className="actions">
										<li><a href="https://youtu.be/6LWxfeLZous" className="button" target="_blank" rel="noopener noreferrer"> Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="#" className="image"><img src="images/Curious.gif" alt="" data-position="25% 25%" /></a>	
							<div className="content">
							<div className="inner">
									<h2>I'm just curious</h2>
									<p>Create your profile, join the community, help others, help build Darshana, earn rewards. An investor? <a href="https://paperstreet.vc/darshana-inc/subscribe" target="_blank" rel="noopener noreferrer"> Subscribe to our updates</a> or <a href="mailto:hi@darshana.io?Subject=Pitch%20request">request us</a> to pitch.</p>
									<ul className="actions">
										<li><a href="https://youtu.be/71vV4-W-XKA" className="button" target="_blank" rel="noopener noreferrer"> Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
					</section>

          {/* Two */}
          <section id="two" className="wrapper style3 fade-up">
						<div className="inner">
              <h2>DARSHANA Q&A</h2>
              <div className="features">
            {qaBoxes.data.map(({id, question, answer, icon, status}) => (
              status === "published" &&
              <section key={id}>
                <span className={"icon solid major fa-"+ icon}></span>
                <h3>{question}</h3>
                <p>{answer}</p>
              </section>
            ))
            }
            </div>
          </div>
      </section>

      {/* Three */}
				<section id="three" className="wrapper style3 fade-up">
					<div className="inner">
						<h2>What is Web3</h2>
						<p>A topic with a hype, but also with a lot of benefits for everybody if implemented right.  Learn more about incentives for participation and tokens <a href="tokens.html">here</a></p>
						<div className="features">
							<section>
								<span className="icon solid major fa-code"></span>
								<h3>What does web3 means for Darshana?</h3>
								<p>It means that we have decentralized elements, both in our technology stack, the way we operate, and how we help facilitate the collaboration of the community. You check our <a href="https://mirror.xyz/darshana.eth/KzkyGdIVcMjVF7vdL9JvXykZ9CSXC1NZb_BH9chy3C4">manifesto, it's actually published as an NFT;</a> and our <a href="https://mirror.xyz/darshana.eth/cUyL5wn7gTmjOrvmRJtSovGnrb5mI2haDLbJeDA9spA">roadmap</a>. </p>
							</section>
							<section>
								<span className="icon solid major fa-lock"></span>
								<h3>What is blockchain?</h3>
								<p><a href="https://www.youtube.com/watch?v=hYip_Vuv8J0" target="_blank" rel="noopener noreferrer"> Blockchain</a> is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a  network.</p>
							</section>
							<section>
								<span className="icon solid major fa-cog"></span>
								<h3>What is a cryptocurrency?</h3>
								<p><a href="https://www.forbes.com/advisor/investing/what-is-cryptocurrency/" target="_blank" rel="noopener noreferrer"> Cryptocurrency</a> is decentralized digital money that’s based on blockchain technology.</p>
							</section>
							<section>
								<span className="icon solid major fa-desktop"></span>
								<h3>What is an NFT?</h3>
								<p>Non-fungible Token is one that is unique and can’t be replaced with something else. But another token like a Bitcoin can be traded for another without another, because they are the same, like FIAT money, one dollar is like another dollar. The NFTs cannot be traded because they are unique, yes, like art.</p>
							</section>
							<section>
								<span className="icon solid major fa-link"></span>
								<h3>Why do I need to educate myself?</h3>
								<p>Because as there any other new thing, it has good and bad elements. People that want to do good and harm. Technology that is, or not designed to help us protect our assets. Since the environment is rapidly changing, we can go into the rabbit hole--exactly like the expression and might take time to understand everything.</p>
							</section>
							<section>
								<span className="icon major fa-gem"></span>
								<h3>Where can I find more material?</h3>
								<p>We will share material in English and Spanish here and on our <a href="https://discord.gg/darshana/" target="_blank" rel="noopener noreferrer"> Discord.</a></p>
							</section>
						</div>
					</div>
				</section>

				{/* Four */}
					<section id="four" className="wrapper style1 fade-up">
						<div className="inner">
							<h2>About us</h2>
							<p>Our team and our community can help you at Discord, you can also open a Support Ticket from our <a href="https://discord.gg/5QYX3MDAy9">#support-bugs channel</a>.</p>
							<h2>What is Darshana?</h2>
							<p>Darshana is Hindi for vision. We found an inspiration there. We are Natalie Gil and Silvana Lopez, co-founders, we incubated this idea at MIT. Annalisa Caballero, Caroline Dennis, Sara Diaz Oporto and Ursula Irribarren the team leading Darshana with {heart} </p>
							<div className="split style1">
								<section>
										<ul className="actions">
											<li><a href="https://discord.gg/darshana" target="_blank" rel="noopener noreferrer" className="button submit">Join Discord</a></li>
										</ul>
										<ul className="actions">
											<li><a href="https://app.darshana.io" target="_blank" rel="noopener noreferrer" className="button submit">Launch App&nbsp;</a></li>	
										</ul>
										<ul className="actions">
											<li><a href="https://mirror.xyz/darshana.eth" target="_blank" rel="noopener noreferrer" className="button submit">&nbsp;&nbsp;mirror.xyz&nbsp;</a></li>
										</ul>													
								</section>
								<section>
									<ul className="contact">
										<li>
											<h3>Address</h3>
											<span>90 Canal St<br />
											Boston, MA 02114<br />
											USA</span>
										</li>
										<li>
											<h3>Email</h3>
											<a href="#">hi@darshana.io</a>
										</li>
										<li>
											<h3>Social</h3>
											<ul className="icons">
												<li><a href="https://twitter.com/darshanaio" target="_blank" rel="noopener noreferrer"> 
													<img src="images/twitter.png" className="icon brands fa-twitter"/>
												</a></li>
												<li><a href="https://facebook.com/darshanaio"  target="_blank" rel="noopener noreferrer"> 
													<img src="images/facebook.png" className="icon brands fa-facebook-f"/>
												</a></li>
												<li><a href="https://instagram.com/darshanaio" target="_blank" rel="noopener noreferrer"> 
													<img src="images/instagram.png" className="icon brands fa-instagram"/>
												</a></li>
												<li><a href="https://www.linkedin.com/company/darshanaio/" target="_blank" rel="noopener noreferrer"> 
													<img src="images/linkedin.png" className="icon brands fa-linkedin-in"/>
												</a></li>
												<li><a href="https://medium.com/darshanaio" target="_blank" rel="noopener noreferrer"> 
													<img src="images/medium.png" className="icon brands fa-medium"/>
												</a></li>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>

          {/* Partnerships */}
			<section id="partnership" className="wrapper style1 fade-up" >
				<div className="inner">
					<h2>Our Partnerships</h2>
					<div className="partnership row">
						<a href="https://algorand.foundation/news/darshana-grant-award" target="_blank" rel="noopener noreferrer" className="col-2">
							<img src="images/part_algorand.png" />
						</a>
						<a href="https://aws.amazon.com/startups/" target="_blank" rel="noopener noreferrer" className="col-1">
							<img src="images/part_aws.png" />
						</a>
						<a href="https://hypehustlers.io/" target="_blank" rel="noopener noreferrer" className="col-2">
							<img src="images/part_hypeHHTransparentlogo.png" />
						</a>
						<a href="https://www.talent-network.org/en/home/" target="_blank" rel="noopener noreferrer" className="col-3">
							<img src="images/part_talentn.png" />
						</a>
						<a href="https://launch.wilmerhale.com/" target="_blank" rel="noopener noreferrer" className="col-3">
							<img src="images/partner_WHLAUNCH.png" />
						</a>
					</div>
					
				</div>														
			</section>

      {/* Partnerships */}
			<section id="partnership" className="wrapper style1 fade-up" >
				<div className="inner">
					<h2>Our Partnershipsss</h2>
					<div className="partnership row">
						<a href="https://algorand.foundation/news/darshana-grant-award" target="_blank" rel="noopener noreferrer" className="col-2">
							<img src="images/part_algorand.png" />
						</a>
						{partnerships.data.map(({id, image, link, name, status}) => (
              status === 'published' &&
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="col-2">
							<img src={"http://localhost:8055/assets/"+ image} />
						</a>
            ))
            }
					</div>
					
				</div>														
			</section>  

  </Layout>
  )
}

export async function getStaticProps() {
  try {
    /*const result = await fetch("http://localhost:8055/items/QA_boxes");
    const data = await result.json();
    return {
      props: {
        data
      }
    }*/

    const [qaRes, partnershipsRes] = await Promise.all([
      fetch("http://localhost:8055/items/QA_boxes"), 
      fetch("http://localhost:8055/items/partnerships")
    ]);

    const [qaBoxes, partnerships] = await Promise.all([
      qaRes.json(), 
      partnershipsRes.json()
    ]);
    return { props: { qaBoxes, partnerships } };

  }
  catch (error){
    console.log(error)
  }

}
import React  from 'react'
import {Helmet } from 'react-helmet'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Funnel from './Funnel'

function Blockchain() {
    
    return (
        <>
             <Helmet>
             <meta name='keyword' content='nft crypto blockchain bitcoin smart contract'/>
                <meta name='description' 
                content='A leader in successful NFT launches on all blockchains with a reliable, 
                U.S.-based team.
                Design. Smart Contracts. Blockchain Selection. Sales. Marketing. Social Media. Pricing.'
                />
                <title>NFT Development Company Solutions - Blockchain App Factory</title>
            </Helmet>
            <div  className="mainsection_container"  style= {{ background :"url('blockchain.jpg') center center",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            } }>
                <div className="submainsection_container">
                    <h2 className='submainsection_title'>NFT DEVELOPMENT &amp; BLOCKCHAIN WEB SERVICES</h2>
                    <div className="submainsection_items">
                        <p> Our Experts delivers best Infrastructure for blockchain applications. </p>
                        <Fade bottom>
                            <div className="submainsection_list">
                                <li> <Link   to="/contact"> Join Discord</Link> </li>
                                <li> <Link   to="/contact">   Developers</Link> </li>
                                <li> <Link   to="/contact">  For Miners</Link> </li>
                            </div>
                        </Fade > 
                        <div className='submainsection_link'>
                            <Link   to="/contact">  
                                Ready for your Blockchain startup?Contact us.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainsection_otherscontainer">
                <div className="fixed_link">
                    <Link to='/contact'>Get In Touch</Link>
                </div>
                <div className="mainsub_contents">
                    <div className="mainsub_otheritems nft ">
                        <img src="nft1.png" alt="online classes" />
                        <div className="item_description_nft">
                            <h2>Our Inventory For  <span className='headin_span'>NFT development</span> </h2>
                            <div className="description_nft">
                                <h3>N F T</h3>
                                <p>
                                Non-Fungible tokens are trending in the market for their unique features and fantasy which
                                empowers the creativity gifted by nature. The attraction towards collectibles revolving around the
                                luxury community for their extravaganza which is also a business. The curiosity in collectibles
                                brings a wide range of audiences to the NFT market for its signature creations.
                                Art &amp; games are the attention-seeking industries in the NFT market place which boosts the NFT
                                development. The NFT market on Ethereum grew tremendously in January 2021 with its ability to
                                Create, sell and exchange various digital items, like games, arts, sculptures, lands, characters,
                                videos, music which attracts a large number of collectors, traders, and creative projects.
                                </p>
                                <Link  to="/contact"> Talk to Us </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mainsub_items nft">
                        <img src="nft3.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>Our <span className='headin_span'>NFT Development Offers</span> </h2>
                            <div className="description_nft">
                                <h3>Services</h3>
                                <div>
                                    <p ><a href="#nftplace"> NFT Marketplace</a> </p>
                                    <p ><a href="#nftexchange">NFT Exchange</a></p>
                                    <p><a href="#nftutility">Utility Based NFT Marketplace</a></p>
                                </div>
                                <div>
                                    <p ><a href="#nftplatform">NFT Multiverse Platform </a></p>
                                    <p><a href="#nftgames">Play-To-Earn NFT Games</a></p>
                                    <p ><a href="#nftart">NFT Art Tokenization</a></p>
                                </div>
                                <p ><a href="#nftfractionalized">Fractionalized NFT</a></p>
                            </div>
                        </div>
                    </div>
                    <div id='nftplace' className="mainsub_items nft">
                        <img src="nft2.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>NFT <span className='headin_span'>Market Place</span> </h2>
                            <div className="description_nft">
                                <h3>Join the NFT Market</h3>
                                <p>
                                    NFT marketplace is a profitable niche for business development in the crypto world.
                                    NFT's unique features and specifications benefit vast industries to  be a successor in 
                                    the market NFT marketplace offers NFT tokkens for unique collectibles like art, games assets, virtual land 
                                    , that attracts a huge audience towards a virtual environment.Fantasy lovers and games are the 
                                    huge audiences for this unique token market
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='nftexchange' className="mainsub_items nft">
                        <img src="nft7.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>NFT <span className='headin_span'>Exchange</span> </h2>
                            <div className="description_nft">
                                <h3>Start a NFT Exchange</h3>
                                <p>
                                    Our NFT exchange platform offers a myriad of options that enables users to trade and exchange their 
                                    NFT tokens.The platform is secured under blockchain technology which suggests a awide range of NFT tokens 
                                    available in the market.The platform offer third party integraton of marketplaces for an unlimited 
                                    variety of tokens trending in the market at the best price value.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='nftutility' className="mainsub_items nft">
                        <img src="nft6.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>Utility Based <span className='headin_span'> NFT Marketplace</span> </h2>
                            <div className="description_nft">
                                <h3>Future of commerce</h3>
                                <p>
                                    Are you ready to lead the future of commerce? shape your own utility-based NFT marketplace to make the NFT's 
                                    useful to the consumers in the most unique and incredible ways. atttaching real world utilities will 
                                    provide high liquidity and circulation of NFT's ,thereby making it beneficial for the consumers.Be it a voucher
                                    ,discount, or any unique item, utilities will definitely add special value to the NFT's
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mainsub_items nft">
                        <img src="nft4.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2><span className='headin_span'>Fractionalized NFT</span> </h2>
                            <div className="description_nft">
                                <h3>ERC-721 Token</h3>
                                <p>
                                    Fractionalized NFT brings in the liberty of letting in even the smalll investors own the NFT's. In
                                    the fractionalised NFT, the non-fungible ERC-721 is fractionalized into an ERC-20 token.the
                                    fractionalized NFT can completely evolutionalize the NFT space where the lesser the affordability
                                    ,the higher the traffic will be.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='nftplatform' className="mainsub_items nft">
                        <img src="nft8.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>NFT Multiverse<span className='headin_span'>Platform Development</span> </h2>
                            <div className="description_nft">
                                <h3>Metaverse Bridge</h3>
                                <p>
                                    Multiverse NFTs are a bridge that connects the metaverse to the real verse.The user of the multiverse platform 
                                    can use the NFT assests acquired in the platform to convert them into real physical assets.Multiverse 
                                    made this possible with an extensive acquitance.Multiverse will be the real game-changer 
                                    for being a bridge to connect the real world and the metaverse .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='nftgames' className="mainsub_items nft">
                        <img src="nft5.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>Play-To-Earn <span className='headin_span'> NFT Games</span> </h2>
                            <div className="description_nft">
                                <h3>Gaming NFT's</h3>
                                <p>
                                    Play-To-Earn NFT games provide the user the ability to earn rewards by simply participating in the 
                                    game and also by advancing to higher levels of the game.for every achievement they reach, the players are 
                                    rewarded with crypotocurencies or in-game assests such as accessories and avatars in the form of 
                                    NFT's which could be traded on secondary marketplaces .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='nftart' className="mainsub_items nft">
                        <img src="nft10.jpg" alt="nft" />
                        <div className="item_description_nft">
                            <h2>NFT <span className='headin_span'>Art Tokenization</span> </h2>
                            <div className="description_nft">
                                <h3>Artist Role</h3>
                                <p>
                                    The artists play a vital role in NFT art tokenization with their signatures creations . Digital arts are 
                                    trending in NFT's marketplace by enabling the cretaion of AR/VR .this technology makes the art unique 
                                    to acquire a position in the marketplace.these digital arts are trending in the industry and act as  a key 
                                    point to levitate NFT market place .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Funnel
                heading = 'More Nft development awaits... Fill out the form to get started!'
                buttonText='TALK TO A DEVELOPER'
                />
            </div>
        </>
    )
}

export default Blockchain

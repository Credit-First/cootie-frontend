import * as React from 'react';

function footerSection() {
    return (
        <>
            <footer id='footer' className='footer mb-8'>
                <div className='footer-container flex justify-between items-center mt-16 m-12 '>
                    <div className='infos'>
                        <img className='w-[280px]' src={'/images/logo.png'} />
                    </div>
                    <div className="right flex items-center justify-center ">
                        <div className="social flex">
                            <div className="link border border-main border-solid w-16 h-16 mr-8 drop-shadow shadow-main ease-linear transition-all">
                                <a href="https://www.instagram.com/cootie_nft" rel="noopener noreferrer" target="_blank" className="insta row">.</a>
                            </div>
                            <div className="link border border-main border-solid w-16 h-16 mr-8 drop-shadow shadow-main ease-linear transition-all">
                                <a href="https://twitter.com/CootiesNFTs" target="_blank" rel="noopener noreferrer" className="twitter row">.</a>
                            </div>
                            <div className="link border border-main border-solid w-16 h-16 mr-8 drop-shadow shadow-main ease-linear transition-all">
                                <a href="https://discord.com/invite/XzHc5M93B4" target="_blank" rel="noopener noreferrer" className="discord row">.</a>
                            </div>
                            <div className="link border border-main border-solid w-16 h-16 mr-8 drop-shadow shadow-main ease-linear transition-all"><a href="https://t.me/cootiesNFTs" target="_blank" rel="noopener noreferrer" className="tele row">.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default footerSection;
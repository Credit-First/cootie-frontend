import * as React from 'react';

function RoadmapSection() {

    return (
        <>
            <div id='roadmap' className='roadmap flex flex-col items-center my-20 px-10'>
                <div className='header w-full flex justify-center items-center mb-14 aos-animate' data-aos="fade-up">
                    <div className='text-6xl text-white'>RoadMap</div>
                </div>
                <div className='timeline flex mx-24'>
                    <div className='timeline-left w-3/6'>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Laying the Groundwork
                                </div>
                                <ul>
                                    <li>Team formation</li>
                                    <li>Conceptualization</li>
                                    <li>Cootie design</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Starting of Ops
                                </div>
                                <ul>
                                    <li>Marketing strategies</li>
                                    <li>Social media set-up</li>
                                    <li>Discord creation</li>
                                    <li>Telegram creation</li>
                                    <li>Partnerships</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Whitelist Presale
                                </div>
                                <ul>
                                    <li>500 whitelist Spots</li>
                                    <li> Marketplace Development</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Public Sale
                                </div>
                                <ul>
                                    <li>4444 NFTs to mint on each blockchain</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Marketplace
                                </div>
                                <ul>
                                    <li>We have built our own marketplace to view and sell your Cootie NFTs This makes our Non-Fungible Tokens stand out from all the others In our market place you will also be able to spend your CootieCoins on other NFTs and Real-life items including merch and special promotions</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Fractionalization
                                </div>
                                <ul>
                                    <li>Begin metaverse development</li>
                                </ul>
                            </div>
                        </div>
                        <div className='container-map relative text-white pt-8 pb-6'>
                            <div className='content ' data-aos="fade-up">
                                <div className='roadmap-section-heading relative pl-8 text-3xl font-bold'>
                                    Merch Drop
                                </div>
                                <ul>
                                    <li>Release The Cootie merch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='timeline-right w-3/6 flex flex-col items-center'>
                        <img className="roadmap-image w-full rounded m-8 max-w-[380px] min-w-[300px]" loading="lazy" data-aos="fade-up" src="/images/roadmaps/roadmap1.png" alt="The Cootie" />
                        <img className="roadmap-image w-full rounded m-8 max-w-[380px] min-w-[300px]" loading="lazy" data-aos="fade-up" src="/images/roadmaps/roadmap2.png" alt="The Cootie" />
                        <img className="roadmap-image w-full rounded m-8 max-w-[380px] min-w-[300px]" loading="lazy" data-aos="fade-up" src="/images/roadmaps/roadmap3.png" alt="The Cootie" />
                        <img className="roadmap-image w-full rounded m-8 max-w-[380px] min-w-[300px]" loading="lazy" data-aos="fade-up" src="/images/roadmaps/roadmap4.png" alt="The Cootie" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default RoadmapSection;
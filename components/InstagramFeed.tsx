import Image from 'next/image'


export function InstagramFeed({ instagramPosts }) {

    return (
        <>
            <div className="w-11/12 lg:w-9/12 mt-9 md:mt-5 xxl:mt-0 xxl:w-3/5 mb-16 items-center flex flex-row">
                <a target="blank" href="https://www.instagram.com/contadoinsta/"  rel="noopener noreferrer"  aria-label="Me siga no Instagram">
                    <h1 className="section-title font-extrabold nav-link"> Me siga no Instagram</h1>
                </a>
                <span className="colored-line flex ml-1 md:ml-3"></span>
            </div>

            <div className="w-11/12 lg:w-9/12  xxl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8  font-medium color-primary mb-3 md:mb-20">


                {instagramPosts.map(({ node }, i) => {
                    return (

                        <div className="instagram-card mb-0 text-center" key={i}>
                            <a
                                href={`https://www.instagram.com/p/${node.shortcode}`}
                                key={i}
                                aria-label="ver no Instagram"
                                rel="noopener noreferrer"
                            >
                            {/* <Image src={node.thumbnail_src}  alt="Imagem de um post do Instagram" width={353} height={353} quality={100} /> */}
                            <img
                                    src={node.thumbnail_src}
                                    alt="Imagem de um post do Instagram" 
                                 /> 
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )

}
import Image from 'next/image'

interface ServiceCardProps {
    children: any;
    title_1:string
    title_2:string
    image: string;
    imageAlt:string
}

export function ServiceCard(props:ServiceCardProps) {

    return (
        <div className="rounded-2xl p-6 shadow-md bg-white mb-16 md:mb-0">
            <div className=" service-card-img">
                <Image src={props.image} alt={props.imageAlt}
                    className="w-full h-auto" width={600} height={525}></Image>
            </div>
            <div className="text-center mt-9">
                <h2 className="font-bold color-primary text-2xl" >{props.title_1}<br></br>{props.title_2}</h2>
            </div>
            {props.children}
        </div>

    );

}
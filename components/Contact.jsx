/* eslint-disable @next/next/no-img-element */

const Contact = (props) => {
    return(
        <div className="flex items-center">
            <img className="w-8 fill-red-500" src={props.img} alt="img_contact" />
            <a target="_blank" href={props.link} rel="noreferrer" className="mx-4 hover:text-mycyan truncate">{props.detail}</a>
        </div>
    )
}

export default Contact;
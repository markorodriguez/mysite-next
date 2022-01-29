
const Contact = (props) => {
    return(
        <div className="flex items-center">
            <img className="w-10 animate-pulse" src={props.img} alt="img_contact" />
            <a target="_blank" href={props.link} rel="noreferrer" className="mx-4">{props.detail}</a>
        </div>
    )
}

export default Contact;
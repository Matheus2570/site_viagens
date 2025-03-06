import './FooterProps2.css'

function FooterProps(props) {
    return (
        <>
        <footer className='footer1'>
       <p>{props.texto1}</p>
       <p>{props.texto2}</p>
        </footer>
        
        </>
    )
}

export default FooterProps;
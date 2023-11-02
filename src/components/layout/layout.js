import PropTypes from 'prop-types';
import Header from './header';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import PhoneWidget from '../callwidget';


function Layout({ children }) {
    return (
        <>
            <Header />
            
            <main>{children}</main>
            <WhatsAppWidget
                phoneNumber="+34647376782"
                message="Hola! 👋🏼 ¿En qué podemos ayudarte?"
                sendButton="Enviar"
                companyName="Desatascos Pociten"
                textReplyTime="En breve te responderemos. Muchas gracias"
            />
            
            <PhoneWidget />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;

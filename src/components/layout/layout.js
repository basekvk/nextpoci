import PropTypes from 'prop-types';
import Header from './header';
import 'react-whatsapp-widget/dist/index.css';
import dynamic from 'next/dynamic';


// Importar WhatsAppWidget y PhoneWidget dinámicamente sin SSR
const WhatsAppWidget = dynamic(() => import('react-whatsapp-widget').then((mod) => mod.WhatsAppWidget),
{ ssr: false }
);
  
  const PhoneWidget = dynamic(() => import('../callwidget'), {
    ssr: false,
  });
  
  function Layout({ children }) {
      return (
          <>
              <Header />
              
              <main>{children}</main>
              
              {/* Estos componentes solo se montarán en el cliente */}
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
      children: PropTypes.node.isRequired,
  };
  
  export default Layout;
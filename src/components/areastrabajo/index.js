import classes from './index.module.scss';
import Link from 'next/link';

function Areastrabajo() {
    return (
        <>
            
                <div className="banner">
                    <img className="img-full" priority />
                    <h3 className={classes.title}>Otras Áreas de Trabajo</h3>
                    <div className={classes.containerlocalidades}>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-boadilla"><h3>Boadilla</h3></Link> </div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-alcobendas"><h3>Alcobendas</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-ciempozuelos"><h3>Ciempozuelos</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-coslada"><h3>Coslada</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-lasrozas"><h3>Las Rozas</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-majadahonda"><h3>Majadahonda</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-pinto"><h3>Pinto</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-rivas-vaciamadrid"><h3>Rivas Vaciamadrid</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-sansebastian-delosreyes"><h3>San Sebastián de los Reyes</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-torrejon-de-ardoz"><h3>Torrejón de Ardoz</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-torrejon-de-velasco"><h3>Torrejón de Velasco</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-usera"><h3>Usera</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-vallecas"><h3>Vallecas</h3></Link></div>
                        <div className={classes.localidad}><Link href="/desatascos/desatascos-carabanchel"><h3>Carabanchel</h3></Link></div>
                    </div>
                    </div>
                
           
        </>
    );
}

export default Areastrabajo;

import classes from './index.module.scss';

function Blockquote({quote}) {
    return (
        <div className={classes.area}>
            <p className={classes.desc}>
                {quote}
            </p>
        </div>
    );
}

export default Blockquote;

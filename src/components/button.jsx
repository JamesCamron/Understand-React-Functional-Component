

const variant = {
    primary:{
        backgroundColor:'#2196f3',
        color:'#fff'
    },
    sucess:{
        backgroundColor:'#4caf50',
        color:'#000'
    },
    error:{
        backgroundColor:'#f44336',
        color:'#fff'
    },
    warning:{
        backgroundColor:'#ff9800',
        color:'#000',
    },
    info:{
        backgroundColor:'#80d8ff',
        color:'#000'
    }

};


const sizes = {
    small:{padding:'0.5rem 1rem'},
    medium:{padding: '1rem 2rem'},
    large:{padding: '1.5rem 3rem'}
}

const button  = (props)=>{
    const userVariant = variant[props.variant];
    const userSize = sizes[props.size];
    return (
    <>
        <button style={{
            padding:'1rem 2rem',
            fontSize:'0.9rem',
            fontWeight:'700',
            letterSpacing:'1px',
            textTransform:'uppercase',
            border:'none',
            marginRight:'1rem',
            cursor:'pointer',
            borderRadius:'0.15rem',
            ...userVariant,
            ...userSize
        }}
        type={props.type}>{props.text}</button>
    </>
		
    )
};

export default button;
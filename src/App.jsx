import InputGroup from "./components/inputGroup";
import Button from "./components/button";

const App = ()=>{
    return (
        <div style={{
            width:'55%',
           margin:'2rem auto',
           backgroundColor:'#fff',
           padding:'2rem'
        }}>
            <div style={{
                textAlign:'center',
                display:'flex',
                flexDirection:'column',
                gap:'0.5rem',
                marginBottom:'1rem'
            }}>
                <h3 style={{
                    fontFamily:'Arial',
                    fontSize:'2rem',
                    color:'#222'
                    
                }}>Sign Up</h3>
                <p style={{
                    fontFamily:'Arial',
                    fontSize:'1rem',
                    color:'#666'
                }}>Lorem ipsum dolor sit amet</p>
            </div>
            <form>
				<InputGroup label='What is your name'type='text'/>
				<InputGroup label='what is your email'type='email'/>
				<InputGroup label='what is your password'type='password'/>

                <Button type='reset'text='Reset'variant='warning'size='small'/>
                <Button type='submit'text='Submit' variant='primary'size='medium'/>
                <Button type='button'text='Cancel' variant='error'size='large'/>
				
			</form>
        </div>
    )
};


export default App;
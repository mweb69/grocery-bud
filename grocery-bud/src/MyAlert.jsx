import React from 'react';
import { useEffect , useState } from 'react';
import './MyAlert.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function MyAlert(props) {
    const [progress, setProgress] = useState(0);
    const [processProgress,setProcessProgress] = useState(true);

    const {variant,message,setItem} = props;

    useEffect(() => {
        setTimeout(() => {
            setItem(false);
        }, 6000);
    }, []);

    const changeProgress = () => {
        if(progress < 100){
            setProgress((pro)=> pro + 0.1)
        }
        console.log(progress)
    }

    const processProgressTest = () =>{
        setTimeout(()=>{
            if(processProgress){
                processProgressTest()
            }
            else{
                changeProgress()
            }
        },1000)
    }

    useEffect(()=>{
        if(processProgress){
            setTimeout(()=>{
                changeProgress()
            }, 3)
        }
        else{
            processProgressTest()
        }
    },[progress])

    return (
        <div className={`alert alert-${variant}`} 
            role="alert" 
            onClick={()=>setProcessProgress(!processProgress)}>
            {message}
            <ProgressBar now={progress} />
        </div>
    );
}

export default MyAlert;

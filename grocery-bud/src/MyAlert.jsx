import React from 'react';
import { useEffect , useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function MyAlert(props) {
    const [progress, setProgress] = useState(0);
    const [processProgress,setProcessProgress] = useState(true);
    const [number,setNumber] = useState(0)

    const {variant,message,setItem} = props;
    const clickVerification = () => {
            if(!processProgress){
                setTimeout(()=>{
                    console.log('c')
                    clickVerification()
                }, 1000)
            }
            else{
                console.log('d')
                setNumber(number+1)
                timeNumber()
            }
    }

    const timeNumber = () => {
        if(number<6){        
            setTimeout(()=>{
                console.log(number)
                clickVerification()
            },1000)
        }
        else{
            setItem(false);
            console.log('b')
        }
    }
    
    useEffect(() => {
        timeNumber()
    }, [number]);

    const changeProgress = () => {
        if(progress < 100){
            setProgress((pro)=> pro + 0.1)
        }
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
    },[progress,processProgress])

    return (
        <div className={`alert alert-${variant}`} 
            role="alert" 
            onClick={()=>{
                setProcessProgress(!processProgress)
                console.log(processProgress)
            }}
        >
            {message}
            <ProgressBar now={progress} />
        </div>
    );
}

export default MyAlert;

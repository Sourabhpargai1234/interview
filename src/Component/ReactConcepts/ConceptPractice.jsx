import { useState } from "react";
export default function Practice() {
    const[answer, setAnswer]=useState('');
    const[error, setError]=useState(null);
    const[status, setStatus]=useState('typing');
    if(status==='success'){
        return <h1>That's right</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting')
        try {
            await submitForm(answer);
            setStatus('success');
          } catch (err) {
            setStatus('typing');
            setError(err);
          }
    }

    return(
        <>
            <div>This is for practice</div>
            <form onSubmit={handleSubmit}>
                <textarea name="" id="" value={answer} onChange={(e)=>setAnswer(e.target.value)}></textarea>
                <br />
                <button disabled={
                    answer.length===0 || status ==='submitting'
                }>Submit</button>

                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }
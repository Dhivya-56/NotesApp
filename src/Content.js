import React, { useEffect } from 'react'
import {useState} from 'react'
const Content = () => {
    const [count, setCount] = useState(99)
    const[name, setName] = useState(suji())
  useEffect(() => {
    console.log(name)
  }, [name])
    function suji() { 
        return console.log('this is sujitha')
    }
    function Handlechange(){
          const names=['earn','grow','give']
         var int= Math.floor(Math.random()*3)
        return names[int]
        }
        function handleClick(e){
            console.log(e.target.innerText)
        }
        const handleClick2 = (name) =>{
            console.log(`This is ${name}`)
        }
        function incrementCount(){
            setCount(count+1)
        }
      function decrementCount(){
        setCount(count-1)
      }
        // return(
        //   <div>
        //     <p>Subscribe my channle</p>
        //     <p>Let's {Handlechange()} money</p>
        //     </div>
        // )
  return (
    <main className='maincls'> 
    <p>Let's {Handlechange()} money</p>
    <button onClick={handleClick}>Subscribe</button>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </main>
  )
}

export default Content

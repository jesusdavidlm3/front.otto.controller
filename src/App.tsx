import { useEffect, useState } from 'react'
import { DownOutlined, UpOutlined, RedoOutlined, UndoOutlined, StopOutlined, LoadingOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios'

const App = () => {

  const address = "http://localhost:8000/otto"
  const [status, setStatus] = useState<string>('Conectando')
  const [action, setAction] = useState<string>("Otto esperando instrucciones")
  const [conected, setConected] = useState<boolean>(false)

  const iconStyles = {
    fontSize: '65px'
  }

  const buttonStyles = {
    width: '100px',
    height: '100px'
  }

  const testConnection = async() => {
    try{
      const res = await axios.get(`${address}/testConnection`, {timeout: 1000})
      if(res.status == 200){
        setConected(true)
        setStatus("En linea")
      }
    }catch(err){
      setConected(false)
      setStatus("Conectando")
    }
  }

  useEffect(() => {
    setInterval(testConnection, 3000)
  }, [])

  const frontButton = async() => {
    const res = await axios.get(`${address}/fordward`)
    if(res.status == 200){
      setAction("Avanzando")
    }
  }

  const backButton = async() => {
    const res = await axios.get(`${address}/backward`)
    if(res.status == 200){
      setAction("Retrocediendo")
    }
  }

  const leftButton = async() => {
    const res = await axios.get(`${address}/left`)
    if(res.status == 200){
      setAction("Girando a la izquierda")
    }
  }

  const rightButton = async() => {
    const res = await axios.get(`${address}/right`)
    if(res.status == 200){
      setAction("Girando a la derecha")
    }
  }

  const stopButton = async() => {
    const res = await axios.get(`${address}/stop`)
    if(res.status == 200){
      setAction("Otto esperando instrucciones")
    }
  }

  return (
    <div className='App'>
      <div className='info'>
        <h1>{status}{ !conected && <LoadingOutlined />}</h1>
        <h3>{conected && action}</h3>
      </div>

      <div className='sectionOne'>
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<UpOutlined style={iconStyles}/>}
          onClick={frontButton}
          disabled={!conected}
          />
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<DownOutlined style={iconStyles}/>}
          onClick={backButton}
          disabled={!conected}
        />
      </div>
      <div className='sectionTwo'>
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<UndoOutlined style={iconStyles}/>}
          onClick={leftButton}
          disabled={!conected}
        />
        <Button
          variant='solid'
          color='primary'
          style={buttonStyles}
          icon={<RedoOutlined style={iconStyles}/>}
          onClick={rightButton}
          disabled={!conected}
        />
      </div>
      <Button
        variant='solid'
        color='danger'
        style={buttonStyles}
        icon={<StopOutlined style={iconStyles}/>}
        onClick={stopButton}
        disabled={!conected}
      />
    </div>
  )
}

export default App

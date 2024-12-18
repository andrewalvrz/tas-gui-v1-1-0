const Controls = ({connectionState, openSerialport, setCOMPort, COMPort, setInformation, setfilepath, filepath,cancelRead}) => {
  function setPort (setCOMPort, COMPort) {
  console.log('old port')
  console.log(COMPort)
  setCOMPort(document.getElementById('UserInput').value)
  console.log(document.getElementById('UserInput').value)
  console.log('New port')
  console.log(COMPort)
  setInformation(COMPort)
  }
  function setpath(setfilepath, filepath) {
    setfilepath(document.getElementById('UserPathInput').value)
    setInformation(filepath)
  }
  return (
    <div className='flex-1'>
      <div className="divider uppercase">controls</div>
      <div className='card flex-1 flex flex-col gap-2'>
        <div className='flex-1'>
          <div className="input-group w-full">
            <input type="text" placeholder="set frequency" className="w-full input input-bordered uppercase" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M6.043 17.496l-1.483 1.505c-2.79-2.201-4.56-5.413-4.56-9.001s1.77-6.8 4.561-9l1.483 1.504c-2.327 1.835-3.805 4.512-3.805 7.496s1.478 5.661 3.804 7.496zm8.957-7.496c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816v10.184h2v-10.184c1.162-.413 2-1.512 2-2.816zm-8.282 0c0-1.791.887-3.398 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.1-2.282-2.707-2.282-4.498zm12.722-9l-1.483 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.483 1.505c2.79-2.201 4.56-5.413 4.56-9.001s-1.77-6.8-4.56-9zm-2.959 3l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.398-2.282 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z" /></svg>
            </button>
          </div>
          <div className="input-group w-full">
            <input id="UserInput" type="text" placeholder="set COM Port" className="w-full input input-bordered uppercase" />
            <button className="btn btn-square" onClick={()=>setPort(setCOMPort, COMPort)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M6.043 17.496l-1.483 1.505c-2.79-2.201-4.56-5.413-4.56-9.001s1.77-6.8 4.561-9l1.483 1.504c-2.327 1.835-3.805 4.512-3.805 7.496s1.478 5.661 3.804 7.496zm8.957-7.496c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816v10.184h2v-10.184c1.162-.413 2-1.512 2-2.816zm-8.282 0c0-1.791.887-3.398 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.1-2.282-2.707-2.282-4.498zm12.722-9l-1.483 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.483 1.505c2.79-2.201 4.56-5.413 4.56-9.001s-1.77-6.8-4.56-9zm-2.959 3l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.398-2.282 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z" /></svg>
            </button>
          </div>
          <div className="input-group w-full">
            <input id="UserPathInput" type="text" placeholder="set file path" className="w-full input input-bordered uppercase" />
            <button className="btn btn-square" onClick={()=>setpath(setfilepath, filepath)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M6.043 17.496l-1.483 1.505c-2.79-2.201-4.56-5.413-4.56-9.001s1.77-6.8 4.561-9l1.483 1.504c-2.327 1.835-3.805 4.512-3.805 7.496s1.478 5.661 3.804 7.496zm8.957-7.496c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816v10.184h2v-10.184c1.162-.413 2-1.512 2-2.816zm-8.282 0c0-1.791.887-3.398 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.1-2.282-2.707-2.282-4.498zm12.722-9l-1.483 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.483 1.505c2.79-2.201 4.56-5.413 4.56-9.001s-1.77-6.8-4.56-9zm-2.959 3l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.398-2.282 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z" /></svg>
            </button>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2 flex-1'>
            <button className="btn btn-outline btn-info uppercase">replay from file</button>
            <button className="btn btn-outline btn-warning uppercase">flush memory</button>
          </div>
          <div className='flex flex-col gap-2 flex-1'>
            <button className="btn btn-outline btn-warning uppercase">mpu reset</button>
            <button className="btn btn-outline btn-warning uppercase">reset clock</button>
          </div>
        </div>
        <button className={"btn btn-outline btn-error uppercase"} onClick={cancelRead}>shutdown</button>
        <button className={"btn btn-outline btn-success uppercase "} onClick={openSerialport}>connect</button>
      </div>
    </div>
  );
}

export default Controls;

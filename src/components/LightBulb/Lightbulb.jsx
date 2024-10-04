function LightSwitch({isLightOn='Not Known'}){
    return (
        <p>{isLightOn=src/light_off.jpg}</p>
    )
}
export default LightSwitch

const changeImageSrc = () => {
    setImageSrc('light_on.png');
  }

  return (
    <div>
      <img src={imageSrc} alt="Example" />
      <button onClick={changeImageSrc}>Change Image</button>
    </div>
  );
}

export default App;
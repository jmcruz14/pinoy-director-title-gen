const Main = () => {
  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={mainStyle}>
      <h2>Coming soon:</h2>
      <ul style={{
        padding: '0px',
      }}>
        <li>Tailwind Integration</li>
        <li>DaisyUI integration</li>
        <li>Reference to dev portfolio</li>
        <li>Additional remarks</li>
      </ul>
    </div>
  );
}
 
export default Main;
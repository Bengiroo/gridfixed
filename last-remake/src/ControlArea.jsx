export default function ControlArea({ mode, toggleMode }) {
  // Button color: blue for offense, red for defense mode
  const btnColor = mode === 'defense' ? '#3d40ff' : '#ff2400'; // fire red!
  const btnText = mode === 'defense' ? 'OFFENSE' : 'DEFENSE';

  return (
    <div className="control-panel-content">
      <button
        className="mode-btn"
        style={{
          background: btnColor,
          color: "#fff"
        }}
        onClick={toggleMode}
      >
        {btnText}
      </button>
      {/* The rest of your controls go here */}
      <div
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Control Panel
      </div>
    </div>
  );
}
const RootHeader = () => {
  const headerStyle = {
    padding: "10px",
    marginBottom: '20px',
    border: "2px solid black",
    borderRadius: "10px",
  };

  return (
    <div style={headerStyle}>
      <div>
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          eveniet?
        </p>
      </div>
    </div>
  );
};

export default RootHeader;

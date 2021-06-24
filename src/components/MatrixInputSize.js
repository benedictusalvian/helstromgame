import React from "react";

export default function MatrixInputSize(props) {
  const { setMatrixSize } = props;
  return (
    <div>
      <input
        type="number"
        defaultValue={2}
        onChange={(e) => {
          const rows = parseInt(e.target.value);
          // if we only want matrix of size between 2 and 8
          if (2 <= rows && rows <= 8) {
            setMatrixSize((prevSize) => ({
              // ...prevSize,
              rows: rows,
              columns: rows,
            }));
          }
        }}
      />
    </div>
  );
}

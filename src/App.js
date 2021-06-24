import "./App.css";
// import Matrix from "./components/react-matrix";
import { useEffect, useState } from "react";
import MatrixInputSize from "./components/MatrixInputSize";
import MatrixInput from "./components/MatrixInput";
import { BlockMath } from "react-katex";
import renderLatexMatrix from "./renderLatexMatrix";
import "katex/dist/katex.min.css";
import { getByPlaceholderText } from "@testing-library/react";

function App() {
  const [matrixSize, setMatrixSize] = useState({
    rows: 2,
    columns: 2,
  });
  // or, if it's a square matrix :
  // const [squareMatrixSize, setSquareMatrixSize] = useState(2);
  const [matrix0, setMatrix0] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [matrix1, setMatrix1] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [latexMatrix0, setLatexMatrix0] = useState(
    "\\begin{pmatrix}\n 0 & 0\\\\\n 0 & 0\n \\end{pmatrix}"
  );

  const [latexMatrix1, setLatexMatrix1] = useState(
    "\\begin{pmatrix}\n 0 & 0\\\\\n 0 & 0\n \\end{pmatrix}"
  );

  useEffect(() => {
    setLatexMatrix0(renderLatexMatrix(matrix0));
    setLatexMatrix1(renderLatexMatrix(matrix1));
    // + do any action you want on the matrix
  }, [matrix0, matrix1]);

  return (
    <div className="App" style={styles.container}>
      <div className="Wrapper" style={styles.wrapper}>
        <text style={styles.title}>Helstrom Calculator</text>
        <div style={styles.inputSize}>
          <text style={styles.sectionTitle}>Select dimension:</text>
          <MatrixInputSize setMatrixSize={(object) => setMatrixSize(object)} />
        </div>
        <div className="MatrixInput" style={styles.MatrixInput}>
          <MatrixInput
            matrixSize={matrixSize}
            setMatrix={(matrix0) => setMatrix0(matrix0)}
            index={0}
          />
          <MatrixInput
            matrixSize={matrixSize}
            setMatrix={(matrix1) => setMatrix1(matrix1)}
            index={1}
          />
        </div>
        <div className="blockMath" style={styles.BlockMath}>
          <BlockMath math={"\\rho_{0} = " + latexMatrix0} />
          <BlockMath math={"\\rho_{1} = " + latexMatrix1} />
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    height: "100vh",
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 50,
  },
  inputSize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  MatrixInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  BlockMath: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
};

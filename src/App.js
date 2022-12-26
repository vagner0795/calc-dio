import { Container, Content, Row } from "./styles";

import { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const convertNumber = () => {
    setCurrentNumber((prev) => `${prev}` * -1);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSubtractNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation("");
    }
  };

  const handleDivisionNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation("");
    }
  };

  const handlePercentageNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const percent = Number(firstNumber) * (Number(currentNumber) / 100);
      setCurrentNumber(String(percent));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();

          break;
        case "-":
          handleSubtractNumbers();

          break;
        case "*":
          handleMultiplyNumbers();

          break;
        case "/":
          handleDivisionNumbers();

          break;
        case "%":
          handlePercentageNumbers();

          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" onClick={() => handleOnClear()} />
          <Button label="+/-" onClick={() => convertNumber()} />
          <Button label="%" onClick={handlePercentageNumbers} />
          <Button label="/" onClick={handleDivisionNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleSubtractNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;

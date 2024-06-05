function testLogic() {
    let inputA = document.getElementById('inputA').checked;
    let inputB = document.getElementById('inputB').checked;

    // Операція NOR: !(A || B)
    let result = !(inputA || inputB);

    document.getElementById('result').innerText = `Результат: ${result}`;
}
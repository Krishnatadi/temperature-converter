function handleInput(inputType) {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = document.getElementById('fahrenheit').value;

    if (inputType === 'celsius') {
        document.getElementById('fahrenheit').disabled = !!celsius;
        if (!celsius) {
            document.getElementById('fahrenheit').value = '';
            document.getElementById('fahrenheit').disabled = false;
        }
    } else if (inputType === 'fahrenheit') {
        document.getElementById('celsius').disabled = !!fahrenheit;
        if (!fahrenheit) {
            document.getElementById('celsius').value = '';
            document.getElementById('celsius').disabled = false;
        }
    }

    if (!celsius && !fahrenheit) {
        document.getElementById('celsius').disabled = false;
        document.getElementById('fahrenheit').disabled = false;
    }

    document.getElementById('convertButton').disabled = false;
    document.getElementById('result').innerHTML = '';
    document.getElementById('retryMessage').innerHTML = '';
}

function convert() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    if (isNaN(celsius) && isNaN(fahrenheit)) {
        alertify.error("Please enter a valid temperature");
        return;
    }

    if (!isNaN(celsius)) {
        let result = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = result.toFixed(2);
        document.getElementById("result").innerHTML = `${celsius.toFixed(2)} &#8451; = ${result.toFixed(2)} &#8457;`;
        alertify.success("Conversion successful");
    }

    if (!isNaN(fahrenheit)) {
        let result = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = result.toFixed(2);
        document.getElementById("result").innerHTML = `${fahrenheit.toFixed(2)} &#8457; = ${result.toFixed(2)} &#8451;`;
        alertify.success("Conversion successful");
    }

    document.getElementById('convertButton').disabled = true;
    document.getElementById('retryMessage').innerHTML = 'Clear the values to retry.';
}
function generateCommand() {
    const startX = document.getElementById('startX').value;
    const startY = document.getElementById('startY').value;
    const startZ = document.getElementById('startZ').value;
    const endX = document.getElementById('endX').value;
    const endY = document.getElementById('endY').value;
    const endZ = document.getElementById('endZ').value;
    const block = document.getElementById('block').value;

    const volume = (Math.abs(endX - startX) + 1) * (Math.abs(endY - startY) + 1) * (Math.abs(endZ - startZ) + 1);

    if (volume > 20000) {
        document.getElementById('errorMessage').innerText = "Error: The volume exceeds 20,000 blocks.";
        document.getElementById('commandOutput').innerText = "";
        document.getElementById('copyButton').style.display = "none";
    } else {
        const command = `/fill ${startX} ${startY} ${startZ} ${endX} ${endY} ${endZ} ${block}`;
        document.getElementById('errorMessage').innerText = "";
        document.getElementById('commandOutput').innerText = command;
        document.getElementById('copyButton').style.display = "inline";
    }
}

function copyCommand() {
    const command = document.getElementById('commandOutput').innerText;
    navigator.clipboard.writeText(command).then(() => {
        alert("Command copied to clipboard!");
    });
}
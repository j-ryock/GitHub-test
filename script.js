document.getElementById('calculateBtn').addEventListener('click', () => {
    const size = parseFloat(document.getElementById('fileSize').value);
    const unit = document.getElementById('unit').value;
    let bytes;

    switch (unit) {
        case 'bytes':
            bytes = size;
            break;
        case 'kilobytes':
            bytes = size * 1024;
            break;
        case 'megabytes':
            bytes = size * 1024 * 1024;
            break;
        case 'gigabytes':
            bytes = size * 1024 * 1024 * 1024;
            break;
    }

    const kilobytes = bytes / 1024;
    const megabytes = kilobytes / 1024;
    const gigabytes = megabytes / 1024;

    document.getElementById('outputBytes').innerText = `${formatNumber(bytes)} Bytes`;
    document.getElementById('outputKilobytes').innerText = `${formatNumber(kilobytes)} Kilobytes`;
    document.getElementById('outputMegabytes').innerText = `${formatNumber(megabytes)} Megabytes`;
    document.getElementById('outputGigabytes').innerText = `${formatNumber(gigabytes)} Gigabytes`;
});

document.getElementById('toggleDarkMode').addEventListener('change', (event) => {
    document.body.classList.toggle('dark-mode', event.target.checked);
});

function formatNumber(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
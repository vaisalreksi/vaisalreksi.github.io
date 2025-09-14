document.addEventListener('DOMContentLoaded', function () {
    const container = document.body;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // between 2 and 5 seconds
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';

        container.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Keep snowflake for 5 seconds
    }

    setInterval(createSnowflake, 100);
});


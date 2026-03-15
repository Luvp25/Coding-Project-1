document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const display = document.createElement('div');
    display.id = 'feedback-display';
    document.body.appendChild(display);

    form.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            e.target.style.backgroundColor = '#f0f8ff';
        }
    });

    form.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            e.target.style.backgroundColor = '';
        }
    });

    form.addEventListener('input', (e) => {
        if (e.target.id === 'comments') {
            const count = e.target.value.length;
            document.getElementById('status-message').innerText = `Characters: ${count}`;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('comments').value.trim();

        if (!name || !email || !msg) {
            alert("Fill all Fields.");
            return;
        }

        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.innerHTML = `<strong>${name}</strong> (${email}): <p>${msg}</p>`;
        display.appendChild(entry);

        form.reset();
        document.getElementById('status-message').innerText = "";
    });

    form.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
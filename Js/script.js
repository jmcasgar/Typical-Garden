document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value;
        userInput.value = '';

        // Mostrar el mensaje del usuario en el chat
        showMessage(userMessage, 'user');

        // Simular la respuesta del chatbot (redirección al agente de ventas en WhatsApp)
        const botResponse = "¡Claro! Te estoy redirigiendo a nuestro agente de ventas en WhatsApp. Por favor, espera un momento...";
        showMessage(botResponse, 'bot');

        // Simular la redirección al agente de ventas en WhatsApp (enlace simulado)
        setTimeout(function() {
            window.open('https://wa.me/XXXXXXXXXX', '_blank');
        }, 2000);
    });

    function showMessage(message, sender) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add(sender);
        chatMessages.appendChild(messageElement);
    }
});

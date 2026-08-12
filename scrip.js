* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    max-width: 100vw;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

header {
    background-color: #0056b3; /* Azul principal */
    color: #ffffff;
    text-align: center;
    margin: 0 auto;
    padding: 24px 16px;
}

header h1 {
    margin-bottom: 8px;
}

main {
    background-color: #ffffff;
    color: #000000; /* Preto secundário */
    margin: 0 auto;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

article {
    display: flex;
    border: 2px solid #000000; /* Detalhe em preto */
    margin: 16px;
    gap: 16px;
    padding: 16px;
    flex: 1 1 280px;
    max-width: 350px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
}

.artigo-autor {
    font-weight: bold;
    margin: 8px 0;
    color: #0056b3;
}

.artigo-fonte {
    font-size: 0.85em;
    color: #555555;
    margin-top: 6px;
}

button {
    background-color: #0056b3;
    color: #ffffff;
    border: 1px solid #000000;
    padding: 6px 12px;
    margin: 8px 4px 0 4px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 0.9em;
}

button:hover {
    background-color: #003d80;
}

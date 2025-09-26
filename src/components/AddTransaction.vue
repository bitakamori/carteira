<template>
    <h3>Adicionar uma nova transação</h3>
    <form if="form">
        <div>
            <label for="text"> Descrição</label>
            <input type="text" placeholder="Descrição" />
        </div>
        <div>
            <label for="amount">Valor</label>
            <input type="number" placeholder="Adicione o valor (para valores negativo adicione - na frente do numero)">
        </div>
        <button>Adicionar transação</button>
    </form>
</template>
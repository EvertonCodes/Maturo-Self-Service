function formatarTelefone(telefone) {
    let valor = telefone.value;

    valor = valor.replace(/\D/g, "");

    const cursorPosition = telefone.selectionStart;
    const tamanhoAnterior = valor.length;

    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    } else if (valor.length > 0) {
        valor = valor.replace(/^(\d{0,2})/, "($1");
    }

    telefone.value = valor;

    const tamanhoAtual = valor.length;
    telefone.setSelectionRange(cursorPosition + (tamanhoAtual - tamanhoAnterior), cursorPosition + (tamanhoAtual - tamanhoAnterior));
}
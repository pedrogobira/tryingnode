export async function obterTodosCursos() {

    const response = await fetch('http://localhost:8000/api/courses/list');
    return await response.json();
}

export async function criarCurso(data) {

    const response = await fetch('http://localhost:8000/api/courses/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"name": data})
      })
    return await response.json();
}

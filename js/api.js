const URL_BASE = "http://localhost:3000"

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`)
      return await response.data;
    }
    catch {
      alert('Erro ao buscar pensamentos')
      throw error
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
      return await response.data
    }
    catch {
      alert('Erro ao salvar pensamento')
      throw error
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      return await response.data;
    }
    catch {
      alert('Erro ao buscar pensamento')
      throw error
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
      return await response.data
    }
    catch {
      alert('Erro ao editar pensamento')
      throw error
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
    }
    catch {
      alert('Erro ao excluir um pensamento')
      throw error
    }
  },

  async buscarPensamentoPorTermo(termo) {

    try {
      const pensamentos = await this.buscarPensamentos();
      const termoEmMinuscula = termo.toLowerCase();

      const pensamentosFiltrados = pensamentos.filter((e) => {
        return e.conteudo.toLowerCase().includes(termoEmMinuscula) || e.autoria.toLowerCase().includes(termoEmMinuscula);
      });

      return pensamentosFiltrados;

    } catch (error) {
      alert("Erro ao buscar pensamentos por termo");
      console.log(error);
    }

  },

  async atualizarFavorito(id, favorito) {
    try {
      const res = await axios.patch(`${URL_BASE}/pensamentos/${id}`, {
        favorito:favorito
      })

      return res.data;

    } catch (error) {
      alert("Erro ao atualizar favorito");
      console.log(error);
    }
  }
}

export default api
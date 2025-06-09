import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(true);

  function incrementar() {
    if (!activo) return;
    setContador(contador + 1);
  }

  function decrementar() {
    if (!activo) return;
    setContador(contador - 1);
  }

  function reiniciar() {
    if (!activo) return;
    setContador(0);
  }

  function toggleActivo() {
    setActivo(!activo);
  }

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
      }}
    >
      <h2>Contador</h2>
      <h3 style={{ fontSize: '2.5rem', margin: '10px 0' }}>{contador}</h3>
      <div>
        <button onClick={incrementar} style={{ margin: '5px' }} disabled={!activo}>
          Incrementar
        </button>
        <button onClick={decrementar} style={{ margin: '5px' }} disabled={!activo}>
          Decrementar
        </button>
        <button onClick={reiniciar} style={{ margin: '5px' }} disabled={!activo}>
          Reiniciar
        </button>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button onClick={toggleActivo} style={{ margin: '5px' }}>
          {activo ? 'Apagar' : 'Encender'}
        </button>
      </div>
    </div>
  );
}

export default Contador;

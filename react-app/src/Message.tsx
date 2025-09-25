function Message() {
  const nome = "";

  if (!nome) {
    return <h1>HELLO WORLD!</h1>;
  }

  return <h1>Olá meu amigo {nome}</h1>;
}
export default Message;

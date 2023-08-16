import { Divider, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Divider orientation="horizontal" border="2px solid black" />
      <div className="home">
        <Heading>Bienvenido a Mi Aplicación de Tareas</Heading>
        <Text>
          Administra tus tareas de manera eficiente y mantén todo bajo control.
        </Text>
      </div>
    </>
  );
}
export default Home;

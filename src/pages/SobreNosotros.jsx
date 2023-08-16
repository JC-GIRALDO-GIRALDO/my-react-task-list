import {
  Divider,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

function SobreNosotros() {
  return (
    <>
      <Divider orientation="horizontal" border="2px solid black" />
      <div className="sobreNosotros">
        <Heading>Sobre Nosotros</Heading>
        <Text>
          Bienvenido a nuestra aplicación de administración de tareas. Esta
          aplicación está diseñada para ayudarte a mantener un registro
          organizado de tus tareas diarias, permitiéndote gestionar
          eficientemente tu tiempo y aumentar tu productividad.
        </Text>

        <List spacing={3}>
          <Heading>Funcionalidades destacadas:</Heading>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Creación y edición de listas de tareas personalizadas.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Marca tareas como completadas o pendientes.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Elimina tareas y listas cuando ya no sean necesarias.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Guarda automáticamente tus datos utilizando almacenamiento local.
          </ListItem>
        </List>

        <List spacing={3}>
          <Heading>Tecnologías Utilizadas:</Heading>

          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            React: Biblioteca de JavaScript para construir interfaces de
            usuario.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            React Router: Para gestionar la navegación entre diferentes páginas.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            LocalStorage: Para almacenar los datos de las tareas localmente en
            el navegador.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            CSS: Estilos personalizados para mejorar la apariencia de la
            aplicación.
          </ListItem>
        </List>
      </div>
    </>
  );
}
export default SobreNosotros;

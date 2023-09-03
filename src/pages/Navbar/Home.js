import { Link } from "react-router-dom";
import logo from "./logo.png";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "../../components/styled.components/Button";
import { ButtonUsage, RatingUsage } from "./mui";
import { DarkButton } from "../../components/Button.styles";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

const GlobalStyle = createGlobalStyle`
button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
`;

export function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ButtonUsage />
      <RatingUsage />

      <h1>Witamy serdecznie na naszej stronie</h1>

      <StyledButton type="submit">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <br />
      <br />
      <FancyButton as="a">FancyButton</FancyButton>
      <br />
      <br />
      <SubmitButton>SubmitButton</SubmitButton>
      <br />
      <br />
      <DarkButton>DarkButton</DarkButton>
      <p>
        Poniżej znajdą Państwo wszystkie informacje o naszej ofercie eduakcyjnej
      </p>
      <img src={logo} alt="logo" width={300} height={150} />
      <ul>
        <li>
          <Link to="/offert/piano">Fortepian (Pianino)</Link>
        </li>
        <li>
          <Link to="/offert/organ">Organy</Link>
        </li>
        <li>
          <Link to="/offert/theory">Teoria muzyki, kształcenie słuchu</Link>
        </li>
        <li>
          <Link to="/offert/violin">Skrzypce</Link>
        </li>
        <li>
          <Link to="/offert/clarnet">Klarnet</Link>
        </li>
        <li>
          <Link to="/offert/concertos">
            Organizacja koncertów edukacyjnych dla dzieci i dorosłych
          </Link>
        </li>
      </ul>
    </ThemeProvider>
  );
}

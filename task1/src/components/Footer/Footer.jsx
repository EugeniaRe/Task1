import "./Footer.css";
import { useResize } from "../../hooks/useResize";
export function Footer() {
  const { width, height } = useResize();
  return <footer>{`width: ${width}, height: ${height}`}</footer>;
}

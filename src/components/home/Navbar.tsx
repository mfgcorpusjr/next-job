import Container from "@/components/home/Container";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <Container className="py-8">
        <Logo />
      </Container>
    </nav>
  );
}

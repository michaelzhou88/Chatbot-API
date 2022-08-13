import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class="text-center text-white">
            Copyright &copy; Michael Zhou <div>{(new Date().getFullYear())}</div>
            </p>
        </Container>
    </footer>
)
}

export default Footer
import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <div className="footer">
        <footer class="py-5 my-5 bg-dark">
            <Container className="px-4">
            <p class="text-center text-white">
                Copyright &copy; Michael Zhou <div>{(new Date().getFullYear())}</div>
                </p>
            </Container>
        </footer>
    </div>
)
}

export default Footer
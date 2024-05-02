import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Students from './components/Students';
import Header from './components/Header'
import Footer from './components/Footer'
import IndividualStudent from './components/IndividualStudent'

const date = new Date();
const year = date.getFullYear();

it("Header text and image displays", () => {
    render(<Header />);
    const headerMessage = screen.getByText(/student records/i)
    const headerImg = screen.getByRole('img', { name: 'school logo' })
    expect(headerMessage).toBeVisible();
    expect(headerImg).toBeVisible();
})

it("Footer text displays", () => {
    render(<Footer />);
    const footerMessage = screen.getByText(/Copyright Wilson College/i)
    const footerYear = screen.getByText(year)
    expect(footerMessage).toBeVisible();
    expect(footerYear).toBeVisible();
})


it("When page is Loading, loading text displays", () => {
    render(<Students />);
    const loadingMessage = screen.getByText(/loading/i)
    waitFor(() => expect(loadingMessage).toBeVisible());
})



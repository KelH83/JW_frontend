import { render, screen, waitFor } from '@testing-library/react'
import Students from './components/Students';
import Header from './components/Header'
import IndividualStudent from './components/IndividualStudent'
import '@testing-library/jest-dom'
import { getStudents } from './firebase';


it("When page is Loading, loading text displays", () => {
    render(<Students />);
    const loadingMessage = screen.getByText(/loading/i)
    waitFor(() => expect(loadingMessage).toBeVisible());
})

it("Header text displays", () => {
    render(<Header />);
    const headerMessage = screen.getByText(/student records/i)
    waitFor(() => expect(headerMessage).toBeVisible());
})


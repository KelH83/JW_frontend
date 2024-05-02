import { render, screen } from '@testing-library/react'
import Students from './components/Students';
import '@testing-library/jest-dom'
import { waitFor } from "@testing-library/react";
import { getStudents } from './firebase';



it("Should say student records", () => {
    render(<Students />);
    const headerMessage = screen.queryByText(/student records/i)
    waitFor(() => expect(headerMessage).toBeVisible());
})

it("Should return all students", () => {
    const allStudents = getStudents()
    waitFor(() => expect(allStudents).toBe(typeof 'array'));
})
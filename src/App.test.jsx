import { render, screen, waitFor } from '@testing-library/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Students from './components/Students';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'



describe("Header component", () => {
  it("Displays header text and image", () => {
    render(<Header />);
    const headerMessage = screen.getByText(/student records/i)
    const headerImg = screen.getByRole('img', { name: 'school logo' })
    expect(headerMessage).toBeVisible();
    expect(headerImg).toBeVisible();
  })
})

describe("Footer component", () => {
  const date = new Date();
  const year = date.getFullYear();
  it("Displays footer text", () => {
      render(<Footer />);
      const footerMessage = screen.getByText(/copyright wilson college/i)
      const footerYear = screen.getByText(year)
      expect(footerMessage).toBeVisible();
      expect(footerYear).toBeVisible();
  })
})


describe("Students component", () => {
  it("Displays loading text when page is still loading", () => {
      render(<Students />);
      const loadingMessage = screen.getByText(/loading/i)
      expect(loadingMessage).toBeVisible();
  })
  
  const MockStudents = () => {
    return (
      <BrowserRouter>
        <Students />
      </BrowserRouter>
    )
  }
  
  it("Has an add student button on the students page", async () => {
      render(<MockStudents />)
      const addButton = await screen.findByTestId('add-button')
      expect(addButton).toBeInTheDocument()
  })

  it("Retrieves a students details", async () => {
    render(<MockStudents />)
    const student = await screen.findByTestId('student-0')
    expect(student).toBeInTheDocument()
})

  it("has a see more button", async () => {
   render(<MockStudents />)
   const seeMoreButton = await screen.findByTestId('see-more-1')
   expect(seeMoreButton).toBeInTheDocument()
  })
})






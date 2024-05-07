import { render, screen } from '@testing-library/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Students from './components/Students';
import React from 'react';
import { BrowserRouter, Routes, Route, MemoryRouter} from 'react-router-dom'
import IndividualStudent from './components/IndividualStudent';
import userEvent from '@testing-library/user-event'



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

  it("Retrieves a single student", async () => {
    render(<MockStudents />)
    const student = await screen.findByTestId('student-0')
    expect(student).toBeInTheDocument()
  })

  it("Retrieves all students", async () => {
    render(<MockStudents />)
    const allStudents = await screen.findAllByTestId(/student-/i)
    expect(allStudents.length).toBe(5)
  })

  it("has a see more button", async () => {
   render(<MockStudents />)
   const seeMoreButton = await screen.findByTestId('see-more-1')
   expect(seeMoreButton).toBeInTheDocument()
  })
})


describe("Individual Student component", () => {

  // const MockIndividualStudent = () => {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //       <Route path='/01' element={<IndividualStudent />} />
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }


  it("Should display a loading message on the individual student page", async () => {
    render(<Students />, {wrapper: BrowserRouter})
    const user = userEvent.setup()
    await user.click(screen.getByText(/see more/i))
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    
  })


})




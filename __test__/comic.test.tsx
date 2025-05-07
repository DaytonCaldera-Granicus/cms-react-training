import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ComicCard from '../components/comic/comic'
import { Comic } from '@/types/Comic'
import { getFormattedDate } from '../utils/getFormattedDate'
import { getCreators } from '@/utils/getCreatorData'

const mockComic: Comic = {
    "id": 100176,
    "title": "Thor: God of Thunder - The God Butcher Infinity Comic (2022) #5",
    "issueNumber": 5,
    "publishedDate": new Date("2022-06-21T00:00:00-0400"),
    "creators": [
        {
            "name": "Jeff Youngquist",
            "role": "editor"
        }
    ],
    "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/6287bd87ecc3c.jpg"
}

describe('Comic Card', () => {
    it('renders the comic thumbnail', () => {
        render(<ComicCard comic={mockComic} />)

        const thumbnailElement = screen.getByRole('img')

        expect(thumbnailElement).toBeInTheDocument()
        expect(thumbnailElement.getAttribute('src')).toContain(encodeURIComponent(mockComic.thumbnail))
    })
    it('renders the comic title', () => {
        render(<ComicCard comic={mockComic} />)

        const titleElement = screen.getByText(mockComic.title)

        expect(titleElement).toBeInTheDocument()
    })
    it('renders the published date', () => {
        render(<ComicCard comic={mockComic} />)

        const formattedDate = getFormattedDate(mockComic.publishedDate)
        const publishedDateElement = screen.getByText(`${formattedDate}`)

        expect(publishedDateElement).toBeInTheDocument()
    })

    it('renders the issue number', () => {
        render(<ComicCard comic={mockComic} />)

        const issueNumberElement = screen.getByText(/Issue:/i).closest('p');
        expect(issueNumberElement).toBeInTheDocument()

        const strongElement = issueNumberElement?.querySelector('strong');
        expect(strongElement).toBeInTheDocument();
        expect(strongElement).toHaveTextContent('Issue:')
        expect(issueNumberElement).toHaveTextContent(`Issue: ${mockComic.issueNumber}`)

    })
    it('renders the creators', () => {
        render(<ComicCard comic={mockComic} />)

        const creatorsText = getCreators(mockComic.creators)

        const creatorsElement = screen.getByText(/Creators:/i).closest('p')

        expect(creatorsElement).toBeInTheDocument()

        const strongElement = creatorsElement?.querySelector('strong');
        expect(strongElement).toBeInTheDocument();
        expect(strongElement).toHaveTextContent('Creators:')
        expect(creatorsElement).toHaveTextContent(`Creators: ${creatorsText}`)
    })
})
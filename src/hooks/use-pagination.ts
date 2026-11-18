import { useEffect, useState } from 'react'


export default function usePagination(search?: string) {
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        setPage(1)
    }, [search])

    return { page, setPage }
}

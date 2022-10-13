import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"

export default function Error() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5 pt-5">
                <PageTitle description="Error: 404" fontSize="3rem" />
                <PageTitle description="Páge not found..." />
                <Link className="btn btn-outline-light my-3" to="/">
                    See all movies!
                </Link>
            </div>
        </>
    )
}
